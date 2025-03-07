---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'ES6新特性'
pubDate: 2023-03-07
description: 'ES6新特性'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
[TOC]



# **ES6新特性：**

## 	引入let，用于定义变量。let定义的变量作用域局限在代码块中。

```javascript
let printNumTwo;
for (let i = 0; i < 3; i++) {	//如果把let换成var，printNumTwo的输出会变为3.
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); //2
console.log(i);				//undefined


function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

// console output
Block scope i is:  block scope
Function scope i is:  function scope
```

## 	用const定义数组，但是数组可以增加项，改变值。

## 	增加```Object.freeze(obj)```方法，将对象彻底冻结，无法做出任何更改。

## 	新增匿名函数的简洁定义方法：

```javascript
const myFunc = () => {
  const myVar = "value";
  return myVar;
  return {key...};	//可以返回对象
}

const myFunc = () => "value";

const foo = (argument..) => {
    statement...
}

const bar = (argument1 = defaultValue) => {
    statement...
}
```

---

## 	新增rest参数。用于获取多余的参数。

```javascript
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

//You have passed 3 arguments.
//You have passed 4 arguments.


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; //此时...arr1所代表的则是整数组都是多余的参数
```

------

## 	结构赋值

```javascript
//ES5写法
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;


//ES6写法
const { name, age } = user;
//此时我们就可以使用name来访问'John Doe'

const {name:userName, age:userAge} = user;
//声明之后我可以使用uesrName来访问原本叫name的值

//对象嵌套的情况
const { johnDoe: { age: userAge, email: userEmail }} = user;

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);//1 2 5
```

---

## 	结构赋值和rest的组合使用

```javascript
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b,...arr] = list; // Change this line
  //不能使用const list = [..]
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
//------------------------------------------------------------------------------//
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (stats) => (stats.max + stats.min) /2.0;
const half = ({max,min}) => (max + min) / 2.0;
```

## 	新增模板文字(Template Literals) `` ${value}``

```javascript
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
```

```javascript
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i = 0;i<arr.length;i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
      //这里的模板只需要在模板两边加上`即可
  }
  
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);
//[
//	'<li class="text-warning">no-var</li>', 
//  '<li class="text-warning">var-on-top</li>',
//  '<li class="text-warning">linebreak</li>'
//]

```

## 	定义对象中的函数时，可以省略``function()``。

```javascript
//ES5
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

//ES6
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

## 	class的特性(待完善)

class类的思想来源于面对对象编程的语言，如C++/Java

>   constructor函数

构造函数用于生成对象实例	

>   super函数

子类继承父类的属性时，不能直接使用this关键字指定对应的来源

需要在子类中使用super函数获取父类中的属性，之后再使用this关键字指定特有的属性和方法

```javascript
class Vegetable {
  constructor(name){
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot' 
```

先建立一个``Thermostat``对象，根据题意可以知道其包含一个属性``.fdegree``用来存储输入的华氏度温度。

```javascript
// answer
class Thermostat {
  constructor(fdegree) {
    this.fdegree = fdegree;
  }   		
  set temperature(cdegree) {
    this.fdegree = cdegree * 9.0 / 5 + 32;
  }			
  get temperature() {
    return (5/9) * (this.fdegree - 32);
  }			
}
//说明Thermostat这个类的temperature属性有两个函数，对应为存值函数（setter）和取值函数（getter）对应的两个函数名字需要相同。
//调用存值函数：（setter）
thermos.temperature = value;
//对应的是set函数中的cdegree = value，然后将这个值转换成华氏度，存值在fdegree这个属性中。

//调用取值函数：（getter）
thermos.temperature;
//对应的是取出实例中fdegree属性的值，通过计算，返回摄氏度。

var1 = thermos.temperature;
//说明调用的getter方法，多加了一个赋值语句
//说明thermos这个实例中，只含有fdegree这个属性，和temperature这个方法。里面存储的是华氏度，输出的是摄氏度。
const thermos = new Thermostat(76); //华氏度实例化  此时thermos.fdegree = 76
let temp = thermos.temperature; // 
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

## 类的静态方法和静态属性

简而言之，静态就凸显出一个不需要实例化对象，可以直接通过类名调用

**静态方法无法被实例调用**

静态方法中若含有this，this的指向会是类本身，而不是实例

静态属性也是同理，使用``static``关键字进行定义

静态方法和静态属性的继承可以直接实现，即通过调用子类的类名直接调用

## 类的私有方法和私有属性

使用``#``修饰属性或者方法即可将属性或方法设置为私有

## new.target属性

检测函数或构造方法是否是通过new运算符被调用的

当我们想写不能被实例化，必须在继承后才能使用的类时，我们可以用 `new.target` 属性，做为限制其不能被实例化（new）的条件。

## 模块化代码块

```html
<script type="module"> </script>
```

export和import指令提供接口和调用接口

```javascript
export {fun1,fun2...};

import {fun1,fun2...} from 'filePath'

import * as objName from 'filePath'
//objName.fun1,objName.fun2....
```

export default方法定义模块的默认输出

```javascript
export default fun1;		//注意这里fun1没有花括号，因为其是唯一的默认输出
export default function fun1(){};
//本质上就是输出一个叫做default的变量或者方法，并且允许用户自己给它起名字
//default即为外部访问的接口，所以不能在其之后再定义其他变量
export default var a = 1;//错误

//默认输出的导入和导出一样，不需要加花括号。
import fun1 from 'filePath';
```

## Promise对象

```javascript
//创建Promise对象
const promise = new Promise(function(resolve,reject){
    if (/*success*/){
        resolve(value);
    }else{
        reject(error);
    }
});
//ruanyifeng
promise.then(function(value){},function(error){});
//freecodecamp
//success
promise.then(result => {
    statement;
});
//reject
promise.catch(err => {
   statement; 
});
```

## 标签模板

```js
function tag(literals, ...values) {
  console.log(literals);
  console.log(values);
  let result = ""; // result 变量用来存放重组后的数组
  // 根据 values 的数量来确定遍历的次数
  for (let i = 0; i < values.length; i++) {
    result += literals[i];
    result += values[i];
    console.log(literals[i]);
    console.log(values[i]);
    console.log(result);
  }

  // 合并最后一个 literals
  result += literals[literals.length - 1];
  return result;
}
let name = `JavaScript`;
let str = tag`Welcome to ${name} course.`;
console.log(str);
```

```js
['Welcome to ', ' course.', raw: Array(2)]
['JavaScript']
Welcome to 
JavaScript
Welcome to JavaScript
Welcome to JavaScript course.
```

## string新方法

1.  includes()
2.  startsWith()
3.  endsWith()
4.  repeat()
5.  replaceAll()

![image-20230305123724166](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230305123724166.png)

![image-20230305123743663](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230305123743663.png)

![image-20230305123804936](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230305123804936.png)

## Array新方法

1.  创建数组

    1.  Array.of()
    2.  Array.from()

    ![image-20230305125804606](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230305125804606.png)

2.  数组实例方法

    ``find()``

    ![image-20230305130635413](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230305130635413.png)

    ``findIndex()``

    ![image-20230305130654558](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230305130654558.png)

    ``fill()``

    ![image-20230305130848855](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230305130848855.png)

    ``entries()``

    ``keys()``

    ``values()``

    ![image-20230305131014597](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230305131014597.png)

3.  for of 循环

4.  扩展运算符

## Object新方法

1.  object.is() 用于判断两个值是否相等
2.  object.assign() 用于合并对象的属性，属于浅拷贝

## Set和Map

>   Set

1.  add()
2.  delete()
3.  clear()
4.  has()
5.  forEach()
6.  size()

>   WeakSet

成员只能是对象且均为弱引用

没有size()属性，不能被遍历

>   Map

1.  set(key, value)
2.  get(key)
3.  has()
4.  delete()
5.  clear()
6.  forEach()

map初始化

```js
let map =  new Map([[key1, value1], [key2, value2], [key3, value3]])
```

## 模块化

**导出**

```js
export let name = "AAa"
```

导入此模块的文件可以访问``name``变量

批量导出

```js
let name = "AAA"
let age = 18
let say = () => {
    console.log("NMSL")
}
const age = () => {
    return age
}
export {name, age, say, age as getAge}
```

**导入**

```js
import {variable0, variable1, ...} from path
```

## 代理Proxy

Proxy对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

```js
let p = new Proxy(target, handler)
```

target:要拦截的目标对象

handler:制定拦截行为的对象

```js
let target = {};
let proxy = new Proxy(target, {});
proxy.name = "AA";
console.log(proxy.name); // AA
console.log(target.name); // AA

target.name = "BB";
console.log(proxy.name); // BB
console.log(target.name); // BB
console.log(target) // {name: "BB"}
```

对proxy的操作全部都同时转发给了target对象

**常用方法(handler取值)**

-   get(target, propKey, receiver)
-   set(target, propKey, value, receiver)
-   has(target, propKey)
-   ownKeys(target)

**get**

get 方法，在访问对象之前检验一下是否存在你要访问的属性

```js
let dog = {
  name: "AA",
};
var proxy = new Proxy(dog, {
  get(target, propKey) {
    // 遍历目标对象的属性键值
    if (propKey in target) {
      return target[propKey]; // 返回相应的属性值
    } else {
      throw new ReferenceError(propKey + " 属性不存在");
    }
  },
});
console.log("访问 dog 对象中的 name 属性值为：" + proxy.name);
console.log("访问不存在的 age 属性：" + proxy.age);
```

**set**

set方法用于向对象进行属性添加时，进行属性的过滤和反馈

```js
let handler = {
    set(target, propKey, value) {
        if (propKey === "age") {
            if (!Number.isInteger(value)) {
                // handle...
                throw new TypeError("Integer ONLY");
            }
        }
        target[propKey] = value
        return true
    }
}
let dog = new Proxy({}, handler)
console.log((dog.age = "22"))
// Uncaught TypeError: Integer ONLY
//  at Object.set (<anonymous>:6:23)
//  at <anonymous>:14:22
```

**has**

has方法用于判断某个属性是否在该对象中

用于处理当属性为对象原型链上的属性时出现的异常情况

```js
obj = {
    name: 'AA'
}
"name" in obj // true
"valueOf" in obj // true
```

```js
obj = {
    name: "AA",
    age: 19,
}
let handler = {
    has(target, propKey) {
        if (propKey == 'age' ) // can add other limits
        {
            // handle...
        }
    }
}

let p = new Proxy(obj, handler)
console.log("age" in p) // true
```

**ownKeys**

ownKeys方法用于拦截对象自身属性的读取操作

-   Object.getOwnPropertyNames()
-   Object.getOwnPropertySymbols()
-   Object.keys()
-   for...in

```js
let obj = {
    name: "AAA",
    age: 18,
    gender: "male",
}

let p = new Proxy(obj, {
    ownKeys() {
        return ["name", "hobby"] // 返回name和hobby两个属性
    }
})
let res = []
for (let item in p) {
    res.push()
}
// res = ['name']
```

