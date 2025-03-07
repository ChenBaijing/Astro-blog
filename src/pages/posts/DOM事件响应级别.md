---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'DOM事件响应级别'
pubDate: 2023-02-03
description: 'DOM事件响应级别学习'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
# DOM事件响应级别

DOM级别共四个

DOM事件级别共三个

## DOM0级处理事件

本质上就是将对应的处理函数赋值给一个事件处理属性，比如onclick，onmousedown等等

```html
<button id="btn">Click</button>
<script>
	const btn = document.getElementById('btn')
    btn.onclick = () => {
        console.log('hello')
    }
</script>
```

DOM0级事件处理程序的缺点在于一个处理程序无法同时绑定多个处理函数。

## DOM2级事件

DOM2级事件在DOM0级时间段额基础上弥补了一个处理处理程序
无法同时绑定多个处理函数的缺点。允许给一个程序添加多个处理函数。

```html
<button id="btn" type="button"></button>
<script>
var btn = document.getElementById('btn');    
    function showFn() {
        alert('Hello World');
    }    
    btn.addEventListener('click', showFn, false);
    // btn.removeEventListener('click', showFn, false); 解绑事件
</script>
```

DOM2级事件定义了``addEventListener`` 和 ``removeEventListener``两个方法，分别用来绑定和解绑事件

方法中包含三个参数，分别是``绑定的事件处理的属性名称（没有on）`` ，``处理函数``和``是否在捕获时候执行事件处理函数``

## DOM3级事件

DOM3级事件是在DOM2级事件的基础上添加很多事件类型。

1.  UI事件，当用户与页面上的元素交互时触发，如：load、scroll
2.  焦点事件，当元素获得或失去焦点时触发，如：blur、focus
3.  鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup
4.  滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel
5.  文本事件，当在文档中输入文本时触发，如：textInput
6.  键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress
7.  合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart
8.  变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified