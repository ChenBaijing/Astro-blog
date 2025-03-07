---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'nodejs'
pubDate: 2022-08-09
description: 'nodejs学习'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
# Node.js

[TOC]



Node.js安装

Node.js环境配置

npm的安装

```bash
npm config get prefix	 //获取npm安装位置
```



Node.js的使用

法一：

打开终端

输入node

![image-20220524174525153](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220524174525153.png)

出现``>``即成功

法二：

Win+R打开运行

运行node.exe





第一个Node.js应用

```js
let http = require('http')

http.createServer(function (request, response) {
	response.writeHead(200, {
		'Content-Type': 'text/plain',
	})

	response.end('HelloWorld\n')
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/')

```

进入node环境（REPL 交互式解释器），运行上面的代码

![image-20220524174830263](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220524174830263.png)

```bash
node server.js
```

此时打开127.0.0.1:8888会发现页面上存在``HelloWorld``

此时通过Ctrl+C退出当前终端，按两次或者按Ctrl+D退出node REPL





通过npm下载安装所需要的包

![image-20220524175224981](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220524175224981.png)

```bash
npm install express -g	//全局安装
```

查看安装信息

```bash
npm list -g //列出全局所有的已安装的包
```

卸载，更新模块

```bash
npm uninstall express
npm update express
npm search express
```

创建新模块

```bash
npm init
```

```bash
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (node_modules) demo
version: (1.0.0) 0.0.1
description: this is a demo
entry point: (index.js)
test command: make test
git repository:
keywords: demo
author: ChenBJ
license: (ISC) MIT
About to write to C:\Users\Chen\AppData\Roaming\npm\node_modules\package.json:

{
  "name": "demo",
  "version": "0.0.1",
  "description": "this is a demo",
  "main": "index.js",
  "scripts": {
    "test": "make test"
  },
  "keywords": [
    "demo"
  ],
  "author": "ChenBJ",
  "license": "MIT"
}

Is this OK? (yes) yes
```

之后会在``C:\Users\UsersName\AppData\Roaming\npm\node_modules``生成一个package.json

再之后通过``npm adduser``注册最后通过``npm publish``发布

关于npm包版本号的问题

![image-20220524225325752](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220524225325752.png)



-------------------------

Node.js的回调特性使得它可以同时处理大量并发请求，不会阻塞或者等待文件的I/O操作

**什么是回调函数？**

回调函数是在任务完成后，将结果作为参数的一种函数，这样可以减少文件流的堵塞。

#### Node.js的事件驱动模型

####

####

参考代码

```js
let events = require('events')
let eventEmitter = new events.EventEmitter()

// let connectHandler = () => {
// 	console.log('Connected successfully!')
// 	eventEmitter.emit('data_received')
// }

eventEmitter.on('connection', () => {
	console.log('Connected successfully!')
	eventEmitter.emit('data_received')
	// 监听链接事件后继续监听数据接收事件
})

eventEmitter.on('data_received', () => {
	console.log('Data received!')
})

eventEmitter.emit('connection')

console.log('Program is done!')
```

#### node是如何运作的

回调函数将错误对象作为第一个参数

如果出错则抛出错误，没有则执行接下来的代码



-----------------------

#### Node.js的EventEmitter类

这个对象建立在node的执行流程上，因为node的回调特性使得emitter的使用更加频繁

链接生成的net.Server和文件处理的fs.readStream都是events.Emitter的实例



```js
//通过require来访问模块
let events = require('events')
//创建eventEmitter对象
let eventEmitter = new events.EventEmitter()
```



```js
let event = require('events')
//这句话不加也能正常运行，估计是新特性
// const { emit } = require('process')
let emitter = new event.EventEmitter()
//.on用于注册监听器同时绑定事件 .emit用于触发事件
emitter.on('event01', (props01, props02) => {
	console.log('The event is done once', props01, props02)
})
emitter.on('event01', (props01, props02) => {
	console.log('The event is done twice', props01, props02)
})
setTimeout(() => {
	emitter.emit('event01', 114, 514)
}, 1000)
//一个事件可以绑定多个监听器，多个监听器按顺序触发
```

大多数时候并不使用EventEmitter，而是使用继承的方法继承。

.on就像是addEventListener，前面的参数是触发后面参数的事件，后面参数就像回调函数。

.emit就像按下按钮，触发上面的.on。

.emit后者可以添加参数，参数会传递到.on方法上。

--------------------------------

#### Node.js的Buffer类

Buffer用于储存将数据以二进制存储，处理二进制数据

新建Buffer对象不用``new``关键字，使用``Buffer.from()``创建buffer新对象

```js
//let buf = Buffer.from(Array|String|buffer)
let buf = Buffer.from('hello','ascii');

console.log(buf)
//<Buffer 68 65 6c 6c 6f>
console.log(buf.toString())
//hello
console.log(buf.toString('base64'))
//aGVsbG8=
console.log(buf.toString('hex|ascii|base64|utf8'))
```

Buffer的创建

```js
let buf = Buffer.alloc(size[,fill[,encoding]])
```

Buffer的写入

```js
let buf = Buffer.write(string[,offset[,length]][,encoding])
					   ^^^^^^  ^^^^^^  ^^^^^^    ^^^^^^^^
                 //写入的字符串   索引   写入的字节数  编码格式
                 //				 0   buffer.length  utf8
```

Buffer的读出

```js
let buf = Buffer.toString([encoding[,start[,end]]])
```

Buffer和JSON的转换

```js
//Buffer => JSON
let buff = buf.toJSON()
//{JSON对象}
```

缓冲区合并

```js
let buf = Buffer.concat(list)
```

缓冲区比较（按位比较）

```js
let buf = Buffer.compare
```

缓冲区复制|裁剪|长度

```js
let buf = Buffer.copy()|.slice()|.length()
```





----------------------

#### Node.js的Stream对象

Node.js中所有的Stream都是EventEmitter的实例

常见的流

| 名字            | 描述     | 例子                                 | 重要事件          | 重要功能           |
| --------------- | -------- | ------------------------------------ | ----------------- | ------------------ |
| Readable Stream | 读数据   | http requests<br />fs read streams   | data<br />fs read | pipe()<br />read() |
| Writable Stream | 写入数据 | http responses<br />fs write streams | drain<br />finish | write()<br />end() |
| Duplex Stream   | 可读写   | net web socket                       |                   |                    |
| Transform       | 传输数据 | zlib Gzip creation                   |                   |                    |

管道流|链式流

####

####





--------------------------

#### Node.js的模块系统

首先分清楚，目前常用的有两种模块，一种叫``CommonJS module system``，另外一种叫做``ES module system``。

前者是值的复制，后者是值的引用

nodejs使用前者，使用``require()``,``exports``,``module.exports``

浏览器使用后者，使用``import/export``

**模块引入**

```js
let hel = require('./hello')
```

**模块导出**

```js
//导出属性和方法
module.exports = function(){}
//导出类
exports = function(){}
```



-------------------

#### Node.js中的EventLoop

JavaScript是单线程的语言，但是我们可以通过使用eventloop来实现异步操作。

JavaScript中有调用栈``call stack``、消息队列``message queue ``、微任务队列``microtask queue``

其中的当遇到函数调用时，JavaScript会将调用的函数压入调用栈中，同时去执行对应的代码，执行完毕后将对应的函数调用弹栈。

而fetch,setTimeout中的回调函数则会进入消息队列中，消息则会在调用栈清空后被压入调用栈进行调用。

此外Promise,await,async等异步操作任务会进入微任务队列中，当调用栈清空时立即执行。同时处理期间新加入的微任务也会立即执行。微任务的优先级比消息队列中的高。
