---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Electron开发流程'
pubDate: 2023-04-30
description: 'Electron开发流程'
author: 'Chen'
tags: ["frontend", "electron"]
category: "前端开发"
---
# 使用Electron开发

[TOC]

使用electron，借助node和chromium完成应用开发

>   前置要求

1.  node
2.  npm或者cnpm
3.  js基本语法

## electron进程

主进程

渲染进程（复数个）

## electron的安装

```bash
mkdir electron-quick-start && cd /electron-quick-start
```

新建文件夹并进入文件夹后，使用``npm init``初始化项目

设置对应的entry为``main.js``

```json
{
    "name": "electron-quick-start",
    "version": "1.0.0",
    "description": "electron-quick-start",
    "main": "main.js",
    "author": "Your name",
    "lincense": "MIT"
}
```

安装electron

```bash
npm i --save-dev electron
cnpm i --save-dev electron
```

安装完成后,在package.json中添加

```json
{
  "scripts": {
    "start": "electron ."
  }
}
```

## 启动应用

```bash
npm start 
```

之后应用就会正常启动

添加监听

```json
// package.json

{
    "script": {
        "start": "nodemon --exec main.js"
    }
}
```



## 添加应用页面

main.js作为应用的入口,承担着大部分的任务

所以首先我们要创建一个窗口,然后再窗口中再放入我们所写好的html页面

```js
// main.js
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600
    })
    
    window.loadFile('index.html')
}
```

然后当app准备好了之后就将创建好的window载入到app中

```js
app.whenReady().then(()=>{
    createWindow()
})
```

## 处理应用关闭

```js
// main.js
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		// 处理MacOS的情况
		app.quit()
	}
})
```

## 处理预加载数据（已过时）

>   **(已过时)**

若要动态的修改页面上的数据,我们就需要在页面加载之前进行数据的获取和处理,因此新建一个preload.js文件

```js
// preload.js
window.addEventListener('DOMContentLoaded', () => {
	const replaceText = (selector, text) => {
		const element = document.getElementById(selector)
		if (element) {
			element.innerHTML = text
		}
	}

	for (let item of ['chrome', 'node', 'electron']) {
		replaceText(`${item}-version`, process.versions[item])
	}
})

```

**新版**：该脚本通过 `versions` 这一全局变量，将 Electron 的 `process.versions` 对象暴露给渲染器

preload.js通过使用contextBridge来实现将process可访问的API暴露在全局变量下

```js
// preload.js
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('versions', {
	node: () => process.versions.node,
	chrome: () => process.versions.chrome,
	electron: () => process.versions.electron,
})
```

新增`renderer.js`文件，通过renderer.js修改页面。process的API通过proload暴露后，可以使用`versions.chrome`或者`window.chrome`来访问API获取到的数据

```js
// renderer.js
const info = document.getElementById('info')
info.innerHTML = `We are using the Chrome (v${versions.chrome()})`
```



数据的载入,添加path包,同时在之前创建的window中新增一个属性``webPreference``

```js
// main.js
const win = new BrowserWindow({
		width: 800,
		height: 600,
		// import preload.js
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'), // 将处理数据用文件引入path
		},
	})
```

## 进程通信（IPC）

为了从网页向主进程发送消息，可以使用 `ipcMain.handle` 设置一个主进程处理程序`handler`，然后在`preload.js`中暴露一个被称为 `ipcRenderer.invoke` 的函数来触发该处理程序`handler`

```js
// preload.js

const { contextBridge, ipcMain, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
	node: () => process.versions.node,
	chrome: () => process.versions.chrome,
	electron: () => process.versions.electron,
    // add an exposed method named ping
	ping: () => ipcRenderer.invoke('ping'),
})
```

```js
// main.js
const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		// import preload.js
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	})
	// before the HTML loaded
    // add a new methods to call the exposed function
	ipcMain.handle('A ping function', () => 'result from the render process')
	win.loadFile('index.html')
}
```



## 引入Vue/React等框架

在同一文件夹下创建renderer.js文件

在index.html中，在body元素的末尾添加script标签，进行框架的引入

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <title>你好!</title>
  </head>
  <body>
    <h1>你好!</h1>
    我们正在使用 Node.js <span id="node-version"></span>,
    Chromium <span id="chrome-version"></span>,
    和 Electron <span id="electron-version"></span>.

    <！-- 在此进程中运行其他文件 -->
    <script src="./renderer.js"></script>
  </body>
</html>
```

## 处理打包分发

使用**Electron Forge**进行应用打包，分发

使用npm安装**electronForge**

```bash
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

创建可分发版本

```bash
npm run make
```

最后在当前文件夹下创建一个out文件夹。



**已过时**

按照官方文档所写的步骤

```bash
npm i --save-dev @electron-forge/cli
cnpm i --save-dev @electron-forge/cli
```

完成后继续下一步

```bash
npx electron-forge import
```

此时绝对会出问题

尝试过清理缓存,发现没有用

```bash
npm cache verify
```

发现卡在``Installing dependencies``,之后发现是由于某个包的下载失败所导致的

之后就单独使用npm下载特定的包

```bash
cnpm i electron-squirrel-startup --save-dev
cnpm i electron-compile
```

此时发现运行npx依旧失败

之后怀疑是npx的问题,之后就修改了npm的镜像

```bash
npm config set ELECTRON_MIRROR http://npmmirror.com/mirrors/electron/
```

修改完了之后发现又存在另外一个包安装失败的情况

包名:electron-prebulit-compile

依旧使用cnpm进行安装结果发现包不存在

但是此时使用npx时成功了,怀疑就是网络问题和之前两个包的安装问题,和最后一个包的安装失败没有直接联系

安装成功后的最后一步

```bash
npm run make
```

最后在根目录的out文件夹中,可以找到对应的exe文件



## 代码签名

代码签名是一种可用于证明桌面应用程序是由已知来源创建的安全技术。

## electron + Vue

使用脚手架，比如vite启动一个vue项目，然后会得到一个本地的URL地址，vue工程打包`vue run build`后会生成html文件，最后使用loadFile即可

```js
const { BrowserWindow, app } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
    })
    
    win.load("http://localhost:port")
    win.loadFile("PATH")
}

app.whenReady().then(()=>{
    createWindow()
}) 
```

