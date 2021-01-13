---
# 这是页面的图标
icon: page
# 这是文章的标题
title: Mac下使用Nginx做反向代理
# 设置写作时间
time: 2021-01-13
# 一个页面只能有一个分类
category: Mac教程
# 一个页面可以有多个标签
tag:
- Mac
---

#技巧/Mac

## 安装Nginx
```bash
brew install nginx
```

## 启动Nginx
```bash
brew services start nginx
```

nginx的配置文件路径为`/usr/local/etc/nginx/`

## 增加类似的配置如下：
```nginx
server {
   listen       80;//将原来的8080改成80端口，这样就能隐藏请求中的端口号了
   server_name  www.minispider.com;//这里改成你想要的测试域名
   server_name_in_redirect off;
   proxy_set_header Host $host:$server_port;
   proxy_set_header X-Real-IP $remote_addr;
   proxy_set_header REMOTE-HOST $remote_addr;
   proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
   location / {
        proxy_pass http://127.0.0.1:20000/;//需要代理的地址，这里是我们json-server的默认地址
    }
}
```

## 重启Nginx
```bash
sudo nginx -s reload
```
