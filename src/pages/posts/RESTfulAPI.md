---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'RESTfulAPI'
pubDate: 2023-05-19
description: 'RESTfulAPI'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
# RESTful API

[TOC]

## 什么是RESTful API

全称为 **RE**presentation **S**tate **T**ransfer

### 两个核心

-   资源表示性质的接口

-   状态需要客户端自己保存

REST为一种架构风格，而不是什么语言

## RESTful API的六个约束

### 统一接口

使用固定格式的URI对API进行定位说明

同时需要指明方法，如POST、GET、PUT等

### 无状态

客户端保存状态，服务器不保存状态

### 缓存

GET默认进行缓存

POST默认不进行缓存

### 分层系统

### 按需代码

不需要全部发送，选择需要的部分进行发送即可

## 缺点

需要借助API文档