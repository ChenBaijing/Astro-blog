---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'XSS网络攻击'
pubDate: 2022-11-19
description: 'XSS网络攻击'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
# XSS网络攻击

### XSS攻击类型

#### 反射型

主动攻击型

1. 恶意URL
2. 用户检索信息
3. 服务器无过虑，不保存对应的请求
4. 反射信息
5. 执行脚本

#### 储存型

广而告之型

1. 恶意URL
2. 服务器无过虑同时保存恶意URL
3. 用户正常访问
4. 返回对应恶意的URL
5. 执行脚本

#### DOM型

修改网页结构