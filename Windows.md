```powershell
# PID
netstat -aon|findstr "8080"
# 查看应用
tasklist|findstr "PID"
#关闭进程
taskkill /PID PID /
```

