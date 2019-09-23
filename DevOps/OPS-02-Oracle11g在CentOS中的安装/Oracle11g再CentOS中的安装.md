切换阿里云的Yum
```sh
cd /etc
mv yum.repos.d yum.repos.d.bak
mkdir yum.repos.d
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
yum clean all
yum makecache
```
```sh
yum -y install binutils \
compat-libstdc++-33 \
elfutils-libelf \
elfutils-libelf-devel \
expat \
gcc \
gcc-c++ \
glibc \
glibc-common \
glibc-devel \
glibc-headers \
libaio \
libaio-devel \
libgcc \
libstdc++ \
libstdc++-devel \
make \
pdksh \
sysstat \
unixODBC \
unixODBC-devel
```

检查安装完整性

```sh
rpm -q \
binutils \
compat-libstdc++-33 \
elfutils-libelf \
elfutils-libelf-devel \
expat \
gcc \
gcc-c++ \
glibc \
glibc-common \
glibc-devel \
glibc-headers \
libaio \
libaio-devel \
libgcc \
libstdc++ \
libstdc++-devel \
make \
pdksh \
sysstat \
unixODBC \
unixODBC-devel | grep "not installed"

```

安装缺少

```sh
wget -O /tmp/pdksh-5.2.14-37.el5_8.1.x86_64.rpm http://vault.centos.org/5.11/os/x86_64/CentOS/pdksh-5.2.14-37.el5_8.1.x86_64.rpm
rpm -ivh pdksh-5.2.14-37.el5_8.1.x86_64.rpm
```

设置用户

```sh
groupadd oinstall
groupadd dba
groupadd asmadmin
groupadd asmdba
useradd -g oinstall -G dba,asmdba oracle -d /home/oracle
# 查看用户
id oracle
# 设置密码 yang123654
passwd oracle
```

配置Hostname

```sh
vim /etc/hosts
192.168.1.151 centos-oracle
ping -c 3 centos-oracle
```

优化内核参数

```sh
vim /etc/sysctl.conf

fs.aio-max-nr=1048576
fs.file-max=6815744
kernel.shmall=2097152
kernel.shmmni=4096
kernel.shmmax = 1073741824
kernel.sem=250 32000 100 128
net.ipv4.ip_local_port_range=9000 65500
net.core.rmem_default=262144
net.core.rmem_max=4194304
net.core.wmem_default=262144
net.core.wmem_max=1048586
# 参数生效
sysctl -p
```

限制oracle用户的shell权限

```sh
vim /etc/security/limits.conf
oracle              soft    nproc   2047
oracle              hard    nproc   16384
oracle              soft    nofile  1024
oracle              hard    nofile  65536
vim /etc/pam.d/login
session  required   /lib64/security/pam_limits.so
session  required   pam_limits.so
vim /etc/profile
if [ $USER = "oracle" ]; then
if [ $SHELL = "/bin/ksh" ]; then
ulimit -p 16384
ulimit -n 65536
else
ulimit -u 16384 -n 65536
fi
fi
```

创建Oracle安装目录

```sh
mkdir -p /db/app/oracle/product/11.2.0
mkdir /db/app/oracle/oradata
mkdir /db/app/oracle/inventory
mkdir /db/app/oracle/fast_recovery_area
chown -R oracle:oinstall /db/app/oracle
chmod -R 775 /db/app/oracle
```

配置Oracle用户环境变量

```sh
su oracle
-- 对所用用户生效
vim /etc/pro_file
vim .bash_profile
umask 022
export ORACLE_HOSTNAME=centos-orcl
export ORACLE_BASE=/db/app/oracle
export ORACLE_HOME=$ORACLE_BASE/product/11.2.0/
export ORACLE_SID=ORCL
export PATH=.:$ORACLE_HOME/bin:$ORACLE_HOME/OPatch:$ORACLE_HOME/jdk/bin:$PATH
export LC_ALL="en_US"
export LANG="en_US"
export NLS_LANG="AMERICAN_AMERICA.ZHS16GBK"
export NLS_DATE_FORMAT='YYYY-MON-DD HH24:MI:SS'

#最后修改的是.bashrc
#重启 
reboot
```

解压

```sh
yum install zip unzipunzi
cd /db/
unzip linux.x64_11gR2_database_1of2.zip -d /db
unzip linux.x64_11gR2_database_2of2.zip -d /db
```

解压完成后

```sh
mkdir /db/etc/
cp /db/database/response/* /db/etc/
vim /db/etc/db_install.rsp
```

编辑安装脚本

```sh
#oracle.install.option=INSTALL_DB_SWONLY
#DECLINE_SECURITY_UPDATES=true
#UNIX_GROUP_NAME=oinstall
#INVENTORY_LOCATION=/u01/app/oracle/inventory
#SELECTED_LANGUAGES=en,zh_CN
#ORACLE_HOSTNAME=centos-oracle
#ORACLE_HOME=/db/app/oracle/product/11.2.0
#ORACLE_BASE=/db/app/oracle
#oracle.install.db.InstallEdition=EE
#oracle.install.db.isCustomInstall=true
#oracle.install.db.DBA_GROUP=dba
#oracle.install.db.OPER_GROUP=dba
```

开始安装

```sh
su - oracle
./runInstaller -silent -ignorePrereq -responseFile /db/etc/db_install.rsp
#查看日志
tail -f  /u01/app/oracle/inventory/logs/installActc'dions2019-06-28_03-53-13AM.log

```

后续操作

```sh
su root

sh /u01/app/oracle/inventory/orainstRoot.sh
sh /db/app/oracle/product/11.2.0/root.sh
# 找不到命令就去bin目录下去执行
netca /silent /responsefile /db/etc/netca.rsp
netstat -tnulp | grep 1521
```

静默创建数据库

```sh
GDBNAME = "orcl"
SID = "orcl"
SYSPASSWORD = "oracleAc3*1"
SYSTEMPASSWORD = "oracleAc3*1"
SYSMANPASSWORD = "oracleAc3*1"
DBSNMPPASSWORD = "oracleAc3*1"
DATAFILEDESTINATION =/db/app/oracle/oradata
RECOVERYAREADESTINATION=/db/app/oracle/fast_recovery_area
CHARACTERSET = "AL32UTF8"
TOTALMEMORY = "1638"
./dbca -silent -responseFile /db/etc/dbca.rsp
```

其他操作

```sh
#查看Oracle 实例进程
ps -ef | grep ora_ | grep -v grep
#查看监听状态
lsnrctl status
lsnrctl start
#登录sqlplus，查看实例状态
export NLS_DATE_FORMAT='YYYY-MON-DD HH24:MI:SS'
sqlplus / as sysdba
connect sysdba / as sysdba
oracleAc3*1
startup
select status from v$instance
#查看数据库编码
select userenv('language') from dual;
#查看数据库版本信息
select * from v$version;
#激活scott用户
alter user scott account unlock;
alter user scott identified by tiger;
select username,account_status from all_users;
#Navicat远程连接Oracle
#开放1521端口
firewall-cmd --zone=public --add-port=1521/tcp --permanent
firewall-cmd --reload
```

开机启动

```sh
vi /db/app/oracle/product/11.2.0/bin/dbstart
ORACLE_HOME_LISTNER=$ORACLE_HOME
vi /db/app/oracle/product/11.2.0/bin/dbshut
ORACLE_HOME_LISTNER=$ORACLE_HOME
vi /etc/oratab
orcl:/db/app/oracle/product/11.2.0:Y

```

或者

```sh
vim /etc/rc.d/rc.local
su - oracle -lc /db/app/oracle/product/11.2.0/bin/dbstart"$ORACLE_HOME"
# 一种
dbstart $ORACLE_HOME
dbshut $ORACLE_HOME
NLS_DATE_FORMAT='YYYY-MON-DD HH24:MI:SS'
vi /etc/rc.d/init.d/oracle
```

自启动，自关闭

```sh
#!/bin/sh
# chkconfig: 35 80 10
# description: Oracle auto start-stop script.

#
# Set ORA_HOME to be equivalent to the $ORACLE_HOME
# from which you wish to execute dbstart and dbshut;
#
# Set ORA_OWNER to the user id of the owner of the
# Oracle database in ORA_HOME.
ORA_HOME=/db/app/oracle/product/11.2.0/
ORA_OWNER=oracle
if [ ! -f $ORA_HOME/bin/dbstart ]
then
    echo "Oracle startup: cannot start"
    exit
fi
case "$1" in
'start')
# Start the Oracle databases:
echo "Starting Oracle Databases ... "
echo "-------------------------------------------------" >> /var/log/oracle
date +" %T %a %D : Starting Oracle Databases as part of system up." >> /var/log/oracle
echo "-------------------------------------------------" >> /var/log/oracle
su - $ORA_OWNER -c "$ORA_HOME/bin/dbstart" >>/var/log/oracle
echo "Done"

# Start the Listener:
echo "Starting Oracle Listeners ... "
echo "-------------------------------------------------" >> /var/log/oracle
date +" %T %a %D : Starting Oracle Listeners as part of system up." >> /var/log/oracle
echo "-------------------------------------------------" >> /var/log/oracle
su - $ORA_OWNER -c "$ORA_HOME/bin/lsnrctl start" >>/var/log/oracle
echo "Done."
echo "-------------------------------------------------" >> /var/log/oracle
date +" %T %a %D : Finished." >> /var/log/oracle
echo "-------------------------------------------------" >> /var/log/oracle
touch /var/lock/subsys/oracle
;;

'stop')
# Stop the Oracle Listener:
echo "Stoping Oracle Listeners ... "
echo "-------------------------------------------------" >> /var/log/oracle
date +" %T %a %D : Stoping Oracle Listener as part of system down." >> /var/log/oracle
echo "-------------------------------------------------" >> /var/log/oracle
su - $ORA_OWNER -c "$ORA_HOME/bin/lsnrctl stop" >>/var/log/oracle
echo "Done."
rm -f /var/lock/subsys/oracle

# Stop the Oracle Database:
echo "Stoping Oracle Databases ... "
echo "-------------------------------------------------" >> /var/log/oracle
date +" %T %a %D : Stoping Oracle Databases as part of system down." >> /var/log/oracle
echo "-------------------------------------------------" >> /var/log/oracle
su - $ORA_OWNER -c "$ORA_HOME/bin/dbshut" >>/var/log/oracle
echo "Done."
echo ""
echo "-------------------------------------------------" >> /var/log/oracle
date +" %T %a %D : Finished." >> /var/log/oracle
echo "-------------------------------------------------" >> /var/log/oracle
;;

'restart')
$0 stop
$0 start
;;
esac
```

```sh
chmod 755 /etc/init.d/oracle
chkconfig --level 35 oracle on
ln -s /etc/init.d/oracle /etc/rc0.d/K01oracle
ln -s /etc/init.d/oracle /etc/rc6.d/K01oracle   //重启 

service oracle start        //启动oracle
service oracle stop        //关闭oracle
service oracle restart     //重启oracle

logout
## 这里要注意.bash_profile 的环境变量配置
```

