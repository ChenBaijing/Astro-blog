---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'jQuery指南'
pubDate: 2023-03-03
description: 'jQuery指南'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
[TOC]



# jQuery

## jQ的基本思路就是选取HTML元素，并对其进行操作

```javascript
$(selector).action()
```



## 在网页中引入jQ

通过script标签引入

```html
<script src="path"></script>
```



```html
<script>
    $(document).ready(function(){
        
    });
</script>

<script>
	$(function(){
       //jq 
    });
</script>
```

jQ的入口函数和Js的入口函数的区别：
jQ的入口函数会在HTML加载完所有的DOM之后开始执行

JavaScript的入口函数则会等待所有内容均加载完成后再执行

![image-20220416190138745](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220416190138745.png)

引入document ready function函数，使得代码在网页加载完成后加载。避免代码在HTML页面呈现之前运行。

## 使用jQuery选择器选择元素

``` javascript
$("selector").function()
//selector
//"button"	选取所有名称为button的元素
//".name" 选取class为name的元素
//"#name" 选取id为name的元素
//"a,b" 选取a,b两个元素
//".name:nth-child(n)" 选取class为name的元素中的第n个元素，class为name的元素应该有复数个，选取的是同级对象
//".name:odd/even" 选取class为name的元素中的奇数/偶数个元素
// 后代选择器 "M N"
// 兄弟选择器 "M ~ N" 选择所有和M同级的N元素
// 相邻选择器 "M+N" 选择跟在M后面的N元素
// 子代选择器 "M > N" 选择距离M最近的同级子代N元素
------------------------------------------------
//function()
//.addClass() 此函数用于给选定的元素添加类
//.removeClass() 此函数用于移除类
//.remove() 用于移除HTML元素
//.css() 直接添加部分css
//注意css()中添加css使用引号和逗号，而不是像css里使用冒号
//.prop() 用于调整标签的属性
//.html() 用于添加HTML标签
//.text() 用于直接修改现有文本，而不添加新的HTML标签
//.appendTo() 用于选取特定标签并将其添加到另外一个标签中
//.clone() 克隆标签
//.parent() 选择父级元素
//.children() 选择子元素
```

**属性选择器**

![image-20230228151351199](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230228151351199.png)

**伪类选择器**

![image-20230228151515409](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230228151515409.png)

![image-20230228151646488](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230228151646488.png)

![image-20230228152132719](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230228152132719.png)

例：

![image-20230228151611403](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230228151611403.png)

![image-20230228152155417](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230228152155417.png)

![image-20230228152952469](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230228152952469.png)

**伪类表单元素**

前面可不加对应的标签本体，默认选中form中的对应type

![image-20230228153337099](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230228153337099.png)

![image-20230228153137985](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230228153137985.png)

![image-20230228155212255](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230228155212255.png)

![image-20220416190659951](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220416190659951.png)

```js	
$("button").addClass("animated bounce");
$(".well").addClass("animated shake");
$("#target3").addClass("animated fadeOut");
```

## 页面事件

```js
JQueryObject.event(handleFunction)

$(document).ready(()=>{})
// simplify
$(function(){})
$(()=>{})
```

常见DOM事件

![image-20220416190851411](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220416190851411.png)

**鼠标事件**

![image-20230228161408742](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230228161408742.png)

左键&中键

1.  onmousedown
2.  onmouseup
3.  onclick

右键

1.  onmousedown
2.  onmouseup
3.  oncontextmenu

**键盘事件**

注意有些事件的回调函数不支持箭头函数，需要注意使用function关键字

![image-20230228165112302](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230228165112302.png)

**表单事件**

![image-20230228165127830](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230228165127830.png)

**滚动事件**

```js
jQueryObject.scroll(handlerFunction)
```

**绑定事件**

```js 
jQueryObject.on(event, handlerFunction)
jQueryObject.bind(event, handlerFunction)
```

**合成事件**

```js
jQueryObject.hover(function(){}, function(){})
```

**自定义事件**

```js
// define
jQueryObject.on(eventType, handlerFunction)
// call
jQueryObject.trigger(eventType)
```

## 事件对象

所有的事件发生时，关于事件的所有信息都保存在某个对象中

通过使用event来获取事件信息

![image-20230301104743826](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301104743826.png)

## jQuery DOM操作

**创建元素**

```js
$('.createElement').on('click',()=>{
                let btn = $('<button class="NMSL">NMSL</button>')
                $('body').append(btn)
            })
```

**元素的插入**

![image-20230301153247601](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301153247601.png)

![image-20230301153711056](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301153711056.png)

![image-20230301153721829](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301153721829.png)

![image-20230301153902499](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301153902499.png)

![image-20230301153913031](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301153913031.png)

![image-20230301153929141](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301153929141.png)

![image-20230301153946716](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301153946716.png)

![image-20230301154019943](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301154019943.png)

元素遍历所遍历的是同级元素，不是子级元素

```js
$().each(function(idx, ele){})
```

**属性的获取与修改**

![image-20230301161229913](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301161229913.png)

![image-20230301161248249](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301161248249.png)

**样式操作**

1.  ``.css``
2.  ``.addClass``
3.  ``.removeClass``
4.  ``.toggleClass``

**内容操作**

获取元素

1.  ``.html()``
2.  ``.text``
3.  ``.val``

-   text()-设置/返回所选元素的文本内容
-   html()-设置/返回所选元素的内容
-   val()-设置/返回所选表单字段的值
-   attr()-返回所选元素的对应属性值




所有上面的函数括号中都可以是单个值或是回调函数

attr()可以设置多个属性值，此时是可以设置attr()里的参数为对象

```js
$("button").click(function(){
    $("#btn").attr({
        "href" : "http://www.baidu.com/",
        "title" : "Baidu"
    });
});
```



```js
$("button").click(function(){
  $("#btn").attr("href", function(i,origValue){
    return origValue + "/jquery"; 
  });
});
```



<ul>
    <li>append()-结尾插入</li>
    <li>prepend()-开头插入</li>
    <li>after()-之后插入</li>
    <li>before()-之前插入</li>
</ul>

append()/prepend() && after()/before()

前者在选择的元素内部添加，后者在元素外添加



``.remove()/.empty()``用于删除元素

``.remove()``用于移除所选元素，可以在括号内筛选元素

```js
$("div").remove(".btn")	//移除类名为btn的div元素
```



``.empty()``用于移除所选元素的所有子元素

![image-20230301161704286](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301161704286.png)

## jQuery动画

**内置动画**

```js
// hide & show
$().hide(speed, easing, callback)
$().show(speed, easing, callback)
// fade
$().fadeIn(speed, easing, callback)
$().fadeOut(speed, easing, callback)
```

![image-20230301193531404](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301193531404.png)

**自定义动画**

构建动画前需要将html元素的position设置为除static外的值

```js
$().animate({ style }, speed, callback)
```

![image-20230301193200842](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301193200842.png)

**停止动画**

```js
$().stop(stopAll, goToEnd)
```

![image-20230301194338558](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301194338558.png)

![image-20230301194434307](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230301194434307.png)

**延迟动画**

```js
$().delay(speed)
// speed: number
```

### jQuery的遍历

**遍历祖先元素**

1.  parent() 查找对应的父级元素
2.  parents() 查找对应元素的所有祖先元素
3.  `parent` 方法仅仅是对指定元素的父元素进行操作，而 `parents` 方法是对所有的父元素进行操作。

**遍历兄弟元素**

1.  向前兄弟元素查找
    1.  prev()
    2.  prevAll()
2.  向后兄弟元素查找
    1.  next()
    2.  nextAll()
3.  所有兄弟元素查找(除了被指定的元素本身)
    1.  siblings()

**遍历后代元素**

1.  children()
2.  find()
3.   children 只能获取元素的儿子节点，而 find 方法可以获取元素的所有符合条件的后代节点

children()括号内不添加任何限定时，选择所有元素

**过滤元素**

-   类名过滤 hasClass()
-   下标过滤 eq(n)，n为数字用于选择元素
-   判断过滤 is()，可以判断一个元素当前是否处于某个状态
-   反向过滤 not()，它的参数有两种，当为选择器时，我们会通过选择器来过滤不符合条件的元素；当为函数时，我们会通过函数来过滤不符合条件的元素。

## AJAX

**load方法**

![image-20230303210206472](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230303210206472.png)

**get方法**

![image-20230303210345375](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230303210345375.png)

```js
$.get(url, data, callback(data, status, xhr), dataType)
```

**post方法**

![image-20230303210749051](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230303210749051.png)

```js
$.post(url, data, callback(data, status, xhr), dataType)
```

**ajax方法**

``` 
$.ajax({ setting })
```

| 参数        | 类型             | 描述                                                         |
| ----------- | ---------------- | ------------------------------------------------------------ |
| url         | String           | 发送请求地址，默认为当前页面地址。                           |
| type        | String           | 请求数据的方式（POST 或 GET），默认为 GET。                  |
| timeout     | Number           | 设置请求超时的时间，其单位为毫秒。                           |
| data        | Object 或 String | 发送到服务器的数据。                                         |
| dataType    | String           | 服务器返回的数据类型。                                       |
| beforeSend  | Function         | 发送请求前可以修改的 XMLHttpRequest 对象的函数。             |
| complete    | Function         | 请求完成后的回调函数，这里的回调函数无论请求成功或者失败都会被调用。 |
| success     | Function         | 请求成功后的回调函数。                                       |
| error       | Function         | 请求失败后被调用的函数。                                     |
| contentType | String           | 发送信息至服务器时内容的编码形式。                           |
| async       | Boolean          | 设置请求方式，当值为 true 时，所有请求为异步请求；当值为 false 时，所有请求为同步请求，默认值为 true。 |
| cache       | Boolean          | 设置浏览器是否缓存当前页面，当值为 true 时浏览器会缓存该页面，反之不会，默认值为 false。 |

e.g.

```js
$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (users) {
        $.each(users, function (i, order) {
            $("#results").append("<li>" + order.name + "</li>");
        });
    },
	error: function () {
		alert("数据请求失败");
	},
});
```

```js
$.ajax({
    type: "GET",
    dataType: "json",
    url: url,
    data: data,
    success: function() {}
})
```

**getJSON**

```js
$.getJSON(url[,data][,success(data, status, xhr)])
```

![image-20230303211828141](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230303211828141.png)

**getScript**

```js
$.getScript( url [, success(script, textStatus, xhr) ] )
```

