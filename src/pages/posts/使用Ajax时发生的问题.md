---
layout: ../../layouts/MarkdownPostLayout.astro
title: '使用Ajax时发生的问题'
pubDate: 2022-05-29
description: '使用Ajax时发生的问题'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
## 使用Ajax时发生的问题

1.使用Ajax给API接口发送请求的时候

浏览器报错

![image-20220529135419739](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220529135419739.png)

错误信息提示说根据CORS政策，在响应端，也就是服务器那边没有设置"Access-Control-Allow-Origin"的header。这就说明我们使用的请求地址在服务器端是不被允许请求的。

解决方法就是在服务端设置header信息,或者使用JSONP解决

```php
header("Access-Control-Allow-Origin:*")
```

```js
response.setHeader("Access-Control-Allow-Origin","*")
```


此问题只针对JS脚本，不针对HTML请求和CSS请求

