---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'JSON指南'
pubDate: 2022-04-12
description: 'JSON指南'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
### JSON

JSON全程JavaScript Object Notation

JSON和XML一样用于数据交换，但是JSON比XML更小，更快，更容易解析

| XML和JSON相同之处              | XML和JSON不同之处  |
| ------------------------------ | ------------------ |
| 都为纯文本                     | 没有结束标签       |
| 都具有“自我描述性”，人类都可读 | 更短更快           |
| 都具有层级结构                 | 可以使用eval()解析 |
| 都通过JS解析                   | 使用数组           |
| 都可以使用AJAX传输             | 不使用保留字       |

JSON有两个基本符号``{}``和``[]``，大括号保存对象，中括号保存数组，数组可以包含多个对象。

书写格式为

```json
"key" : "value"
//等价于
key = "value"
```

```json
//value值可以为数字，字符串，数组，布尔值和NULL
{"age":30}
{"name":"aaa","age":18}
{"nameList":[
    {"name":"A","age":18},
    {"name":"B","age":18},
    {"name":"C","age":18}
]}
{"isA":true}
{"aa":null}
```

访问JSON中数据

```json
{"nameList":[
    {"name":"A","age":18},
    {"name":"B","age":18},
    {"name":"C","age":18}
]}
name[0].name;	 //A
name[0].name = AA;	//修改数据

myObj = { "name":"chenbj", "site":"chenbj.xyz" };
x = myObj.name;		//chenbj
x = myObj["name"];	//chenbj

//使用for-in循环来遍历所有内容
for (x in myObj){
   document.getElementById("ClassName").innerHTML += myObj[x];
}

//删除JSON对象属性
delete myObj.name
delete myObj["name"]
```

在JS中使用JSON

```js
var text = '{ "nameList" : [' +
    '{"name":"A","age":18},' +
    '{"name":"B","age":18},' +
    '{"name":"C","age":18} ]}' ;
//使用字符串拼接生成具有json格式的字符串
obj = JSON.parse(text);		//使用JSON.parse()函数解析为Js对象
document.getElementById("name").innerHTML = obj.nameList[0].name //A
```

JS和JSON互相转换

```javascript
JSON.parse(text[,reviver])	//JSON->JS
//text为文本，reviver为对对象中每个成员执行的函数，类似map
JOSN.stringify(value[,replacer[,space]])	//JS->JSON
//value为数组或为对象
```

JSON和JS的联系：
JSON的本质就是一个字符串，这个字符串可以用来表示js对象，但是这个字符串是用json格式写成的。





