---
layout: ../../layouts/MarkdownPostLayout.astro
title: '闭包'
pubDate: 2023-05-19
description: '闭包学习'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
# Closure

[TOC]

## Day 1

 创建一个helloworld函数，使得无论怎么调用，都返回"Hello World"

```js
const createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
}
```

