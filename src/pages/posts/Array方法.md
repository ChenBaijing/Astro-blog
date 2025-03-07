---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Array方法'
pubDate: 2023-04-01
description: 'Array'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
[TOC]

### Array方法

##### 1.``concat()``

``concat()``方法用于组合数组，但是本函数**不会**改变原数组，而是返回连接后数组的副本.

```javascript
var foo = ["aa","bbb"];
var bar = ["ccc","ddd"];
var res = foo.concat(bar);
console.log(res);
//['aa', 'bbb', 'ccc', 'ddd']
console.log(foo);
//['aa', 'bbb']
```

##### 2.``every()``

``every()``方法用于判断数组内部的每一个元素是否都满足一定条件，若均满足则返回``true``,若不满足(即出现``false``)则此函数会立即返回``false``,并且不继续检查剩下的元素.本函数**不会**改变原数组.

**注意**:此函数和``some()``有相似之处，详见``some()``.

```javascript
const ages = [32,22,45,16];
ages.every(foo => foo>=18);
//false
const ages = [32,22,45,18];
ages.every(foo => foo>=18);
//true
```

##### 3.``filter()``

``filter()``函数用于筛选数组中符合条件的元素,并把元素填充进新数组中.本函数**不会**改变原数组.

```javascript
var ages = [32,23,16,44];
ages.filter(foo => foo>=18);
//[32, 23, 44]
```

##### 4.``forEach()``

``forEach()``函数用于对数组的每个元素执行一次给定的函数.

```javascript
var num = [1,2,4,5];
num.forEach(foo => console.log(foo+1));
//2
//3
//5
//6
var num = [1,2,4,5];
num.forEach((foo,bar) => console.log(foo,bar));
//1 0
//2 1
//4 2
//5 3
```

##### 5.``includes()``

``include()``函数用于判断给定的元素是否在原始数组中,包含返回``true``,否则返回``false``.

```javascript
const array1 = [1, 2, 3];

console.log(array1.includes(2));
//true

console.log(array1.includes(4));
//false
```

##### 6.``indexOf()``

``indexOf()``用于查找目标元素在**数组**内的下标,若元素不存在则返回``-1``.

```javascript
var num = [1,2,3,4,6];
console.log(num.indexOf(3));
//2
```

若``indexOf()``中包含2和参数,则后一个参数代表从此下标开始查找.

```javascript
var num = [1,3,4,1,6,7];
console.log(num.indexOf(1,2));
//3
```

同时,``indexOf()``也适用于查找在**字符串**中查找目标字符串第一次出现的位置,不存在则返回``-1``.

```javascript
var str="Hello world, welcome to the universe.";
var n=str.indexOf("welcome");
//13
```

##### 7.``join()``

``join()``函数用于将数组中的元素按顺序连接起来成为字符串.

```javascript
var num = [1,1,4,5,1,4];
let res = num.join('-');
//1-1-4-5-1-4
```

##### 8.``map()``

``map()``函数用于对数组内所有的元素都进行操作,即调用给与的函数进行操作,并把操作结果填充进新数组中.本函数**不会**改变原数组.

```javascript
var nums = [4,9,16,25];
nums.map(Math.sqrt);
//[2,3,4,5]
```

##### 9.``pop()``

``pop()``函数用于弹出数组内的元素,弹出位于数列**最后一个位置**的元素.本函数**会**改变原数组.

```javascript
var foo = ['apple','banana','orange'];
let res = foo.pop();
foo.pop();
//res = 'orange'
//foo = ['apple', 'banana']
```

##### 10.``push()``

``push()``函数用于把数据压入数组的最后一位.本函数**会**改变原数组.

```javascript
var foo = ['apple','banana','orange'];
foo.push('peach');
//['apple','banana','orange','peach']
```

##### 11.``reduce()``

``reduce()``函数用于将前者结果作为参数传入后者的计算中.常用于迭代和求和.本函数**不会**改变原数组.

```javascript
var foo = [1,2,4,5];
foo.reduce((a,b)=>a + b)
// 12
```

##### 12.``shift()``

``shift()``函数用于把数据从数组的第一位移出数组.本函数**会**改变原数组.

```javascript
var foo = ['apple','banana','orange'];
let res = foo.shift();
foo.shift();
//res = 'apple'
//foo = ['banana', 'orange']
```

##### 13.``slice()``

``slice()``方法用于分割数组或者是字符串.本函数**不会**改变原数组.

```javascript
var foo = ['apple','banana','orange'];
let res = foo.slice(1,3);
foo.slice(1,3);
//res = ['banana', 'orange']
//foo = ['apple','banana','orange']
```

```javascript
var foo = 'APPLE';
let res = foo.slice(1,3);
foo.slice(1,3);
//res = 'PP'
//foo = 'APPLE'
```

##### 14.``splice()``

``splice()``此方法用于原地修改数组元素.本函数**会**改变原数组.

返回值:如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

```javascript
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
```

##### 15.``some()``

此函数用于检查数组中元素是否满足对应条件。若有满足条件的元素，则返回``true``并且之后的元素不在检测，若没有满足条件的元素，则返回``false``.本函数**不会**改变原数组.

```javascript
var ages = [3,18,20,4];
let res =  ages.some(x => x>18);
//res = true
```

##### 16.``sort()``

``sort()``方法用于给元素按指定顺序排序.本函数**会**改变原数组.

```javascript
var arr = [1,3,2,4]
arr.sort()
// [1,2,3,4]
```

##### 17.``toString()``

此函数用于将数组中的元素转换成字符串,并返回结果.本函数**不会**改变原数组.

```JavaScript
var foo = ["aa","bb","ohhhh"];
let res = foo.toString();
//res =  aa,bb,ohhhh
```

##### 18.``unshift()``

此函数和``push()``作用类似,可以将指定元素插入数组的最前端.本函数**会**改变原数组.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
//['Lemon', 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango']
```

##### 19.``copyWithin()``

此函数用于复制数组内的元素,并粘贴到指定位置.本函数**会**改变原数组.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
fruits.copyWithin(3, 0, 2);	//复制位置从第三个(Apple)开始，复制的内容是从下标0开始到下标1.
//["Banana", "Orange", "Apple", "Banana", "Orange", "Papaya"]
fruits.copyWithin(3, 1, 2);
//["Banana", "Orange", "Apple", "Orange", "Kiwi", "Papaya"]
```

##### 20.``entries()``(?)

此函数用于返回键值对

##### 21.``findIndex()``

此函数用于查找数组中符合条件的第一个元素的下标,找到第一个后不再继续，仅返回第一个符合条件的。没有满足条件的则返回``-1``.

```javascript
var ages = [3, 10, 18, 20];
let res = ages.findIndex(x => x>18);
//res = 2
```

##### 22.``from()``

此函数用于将给定的参数生成数组,但是注意参数需要拥有``length``属性,或者对象可以迭代.

```javascript
var myArr = Array.from("HELLO");
console.log(myArr);
//['H', 'E', 'L', 'L', 'O']
```

##### 23.``isArray()``

此函数用于判断对象是否为数组.

```javascript
var foo = [1,2];
console.log(Array.isArray(foo));
//true
```

##### 24.``keys()``

此函数用于返回一个可迭代**数组**,若传入的是数组则返回索引,若传入的是对象,则返回的是对象的属性名.

```JavaScript
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr));
//['0','1','2']

var obj = { a: 'alive', b: 'bike', c: 'color' };
console.log(Object.keys(obj));
//['a', 'b', 'c']
```

##### 25.``lastIndexOf()``

此函数和``indexOf()``类似,其所查找的是给定元素在数组中最后一次出现的索引,即从最后一个数组元素开始查找,未找到返回``-1``.

```javascript
var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2);
// index is 3
index = array.lastIndexOf(7);
// index is -1
index = array.lastIndexOf(2, 3);
// index is 3
index = array.lastIndexOf(2, 2);
// index is 0
index = array.lastIndexOf(2, -2);//当第二个参数为负数时,代表从后往前数即从9开始往前查找最后一个2的位置
// index is 0
index = array.lastIndexOf(2, -1);
// index is 3
```

##### 26.``reduceRight()``

详见``reduce()``

##### 27.``reverse()``

此函数用于颠倒组中元素.本函数**会**改变原数组.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var rea = fruits.reverse();
//['Mango', 'Apple', 'Orange', 'Banana']
```

##### 28.``valueOf()``

此函数用于返回自身.本函数**不会**改变原数组.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var res = fruits.valueOf();
//["Banana", "Orange", "Apple", "Mango"]
```

##### 29.``fill()``

``fill()``函数用于把给定值替换数组的元素.本函数**会**改变原数组.

```javascript
var foo = ['Banana','Apple','Peach'];
foo.fill('CBJ');
//foo = ['CBJ', 'CBJ', 'CBJ']
```

```javascript
var foo = ["Banana", "Orange", "Apple", "Mango"];
foo.fill("CBJ", 2, 4);
//foo = ['Banana','Orange','Runoob','Runoob']
```

##### 30.``find()``

``find()``函数用于查找数组中是否含有通过给定测试的元素.本函数**不会**改变原数组.

**注意：**``find()`` 方法仅会输出第一个符合条件的元素,之后的元素通过也不会输出.没有符合条件的元素则返回``undefined``.

```javascript
var ages = [2,34,5,23];
let res = ages.find(age => age>=18);
console.log(res);
//34
console.log(ages);
//[2,34,5,23]
```

