---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Electron进程通信'
pubDate: 2023-04-30
description: 'Electron进程通信'
author: 'Chen'
tags: ["frontend", "electron"]
category: "前端开发"
---
# Electron流程管理

[TOC]

## 为什么存在多进程

浏览器存在多进程为了实现不同类型的功能

加载网页内容，加载第三方扩展，管理页面等等，多功能所对应的就是多进程

## 多进程模型

![Chrome的多进程架构](https://www.electronjs.org/zh/assets/images/chrome-processes-0506d3984ec81aa39985a95e7a29fbb8.png)

## Electron进程管理

### 主进程

#### 窗口管理

主进程使用`BrowserWindow`模块用于创建模块以及管理

每个`BrowserWindow`类的实例创建一个窗口，加载一个网页

使用`window`对象的`webContent`进行交互

```js
const { BrowserWindow } = require('electron') // import module

const window = new BrowserWindow({
    // config here...
})

window.loadURL('URL')

const contents = window.webContents
```

当一个 `BrowserWindow` 实例被销毁时，与其相应的渲染器进程也会被终止。

#### 应用程序生命周期

通过 [`app`](https://www.electronjs.org/zh/docs/latest/api/app) 模块来控制您应用程序的生命周期

#### 原生API

不仅仅限于对网页内容的封装，主进程也添加了自定义的 API 来与操作系统进行交互

### 渲染器进程

每个 Electron 应用都会为每个打开的 `BrowserWindow`生成一个单独的渲染器进程

渲染器负责渲染网页内容

渲染器进程无权直接访问 `require`（commonjs模块） 或其他 Node.js API

但是主进程有权限访问渲染器进程无法访问的API和模块

### Preload脚本

用于加载先于网页内容开始加载的代码

此处的脚本虽然运行在渲染器进程中，却可以访问Node.js的API

```js
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({
  	webPreferences: {
    	preload: 'path/to/preload.js',
  	},
    
})
```

preload脚本和浏览器共享同一个全局 [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) 接口，并且可以访问 Node.js API，所以它通过在全局 `window` 中暴露任意 API 来方便经常操作

但是在preload中定义的任何API，渲染器进程无法直接访问，也就是说preload.js中所写的接口，在renderer.js中无法访问

解决问题这个通过使用 [`contextBridge`](https://www.electronjs.org/zh/docs/latest/api/context-bridge) 模块来解决

```js
// preload.js
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('myAPI', {
  desktop: true,
}) // 暴露api给renderer进程使用
```

**用途：**

-   将IPC模块暴露，用于进程间通信，可以通过渲染器进程触发主进程任务

### 效率进程

每个Electron应用程序都可以使用主进程生成多个子进程[UtilityProcess](https://www.electronjs.org/zh/docs/latest/api/utility-process) API

<hr>

# 上下文隔离

## 什么是上下文隔离

上下文隔离将`preload`脚本和`Electron`内部逻辑和加载的交互性网页隔离开

有利于网站访问Electron的内部组件和其他高等级权限的API

说明使用BrowserWindow实例化的对象不能被网站所访问到

## 使用contextBridge模块进行API访问

前提是开启`contextIsolation`

在`preload.js`中使用`exposeInMainWorld`方法将自定义接口暴露出去

 更多关于[contextBridge](https://www.electronjs.org/zh/docs/latest/api/context-bridge) 

```js
// preload.js
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('API', {
    greeting: () => {
        console.log('hello')
    }
    // code here...
})
```

```js
// renderer.js
window.API.greeting()
```

进程之间的通信将每一种通信消息都提供一种实现方法

```js
// preload.js
contextBridge.exposeInMainWorld('API', {
    loadPreferences: () => { /* ... */ },
    initPreferences: () => { /* ... */ }
})
```

# 进程间通信

IPC是执行许多常见任务的唯一方法，例如从 UI 调用原生 API 或从原生菜单触发 Web 内容的更改

使用`ipcMain`和`ipcRenderer`模块进行通信

## 模式1：渲染器进程到主进程（单向）

要将单向 IPC 消息从渲染器进程发送到主进程，可以使用 [`ipcRenderer.send`](https://www.electronjs.org/zh/docs/latest/api/ipc-renderer) API 发送消息，然后使用 [`ipcMain.on`](https://www.electronjs.org/zh/docs/latest/api/ipc-main) API 接收。

通常使用此模式从 Web 内容调用主进程 API


![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d99de85a2d0a40c1b0185391ab4e12bd~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)