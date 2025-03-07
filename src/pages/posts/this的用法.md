---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'this的用法'
pubDate: 2023-02-05
description: 'this的用法'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
# About "this" keywords

![img](https://doc.shiyanlou.com/courses/9328/2086340/b22ee17fe82bc646faf62b838fad0983-0)

## this是什么？

this是用来简化某段代码中重复率较高的真实调用者。同时this所返回的是当前

## this所指向的真实调用者

使用call，apply等显式地更改this所指向的内容

```js
function func() {
	console.log(this.name) // Chen
}

const obj = {
	name: 'Chen',
}

func.call(obj)
// 将this所指向的window改成obj
```
apply

```js
function add(x, y, z) {
	return this.x + this.y + this.z
}

const array = {
	x: 1,
	y: 2,
	z: 3,
}

console.log(add.call(array, 1, 2, 3)) // 6
console.log(add.apply(array, [1, 2, 3])) // 6
```

bind

```js
function add(x, y, z) {
  return this.x + this.y + this.z;
}

const obj = {
  x: 1,
  y: 2,
  z: 3,
};

const add1 = add.bind(obj, 1, 2, 3); // bind 会返回一个新的函数
console.log(add1()); // 执行新的函数，输出 6
```

![image-20230205140551138](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230205140551138.png)

```js
function foo() {
  return () => {
    console.log(this.a);
  };
}

const obj1 = {
  a: 2,
};

const obj2 = {
  a: 3,
};

const bar = foo.call(obj1); // ?
bar.call(obj2); // ?
```

`foo.call(obj1)` 输出 2 是因为 `call` 显式改变 `this` 指向。

`bar.call(obj2)` 啥也不输出，因为箭头函数的绑定无法被修改。



优先级是 `new` 调用 > `call`、`apply`、`bind` 调用 > 对象上的函数调用 > 普通函数调用
