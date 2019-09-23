## Yum Repository MySQL

```sh
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
yum -y install mysql80-community-release-el7-3.noarch.rpm
yum -y install mysql-community-server
systemctl start  mysqld.service
systemctl status mysqld.service
service mysqld restart  #重新启动Mysql
systemctl stop mysqld.service   #停止Mysql
/var/log/mysqld.log # 初始密码 gm(R*_YXH1Bw
# 修改初始密码
 ALTER USER 'root'@'localhost' IDENTIFIED BY 'Mysqlgmtest01#';
在CentOS中mysql的主要配置所在的目录：
1 /etc/my.cnf 这是mysql的主配置文件
2 /var/lib/mysql mysql数据库的数据库文件存放位置
3 /var/log mysql数据库的日志输出存放位置
```
## 允许远程登录

```sql
# 更新User表权限
update user set host = '%' where user = 'root';
flush privileges;
firewall-cmd --zone=public --add-port=3306/tcp --permanent

```

开机启动

```sh
# 可以不用第一个，有可能用到
chkconfig --add /etc/init.d/mysqld
chkconfig mysql on
```





## 关于时间问题

```sh
# 查看时间
date -R
# 同步时间
ntpdate asia.pool.ntp.org
# 选择时区 将生成的脚本替换到zoneinfo后面的位置
tzselect 
# 复制时区文件
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
vim /etc/sysconfig/clock
ZONE='Asia/Shanghai'
hwclock   #用当前系统时间更新硬件时间，更具体可以查看下面
系统时间同步到硬件时间：hwclock -w OR hwclock — systohc
硬件时间同步到系统时间：hwclock -s OR hwclock — hctosys
```

X11 Warning

```sh
yum -y install xorg-x11-xauth
```

