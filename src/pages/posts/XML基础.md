---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'XML基础'
pubDate: 2022-03-29
description: 'XML基础'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
# XML

1.XML用来传输和储存数据，不像HTML一样用来显示数据

2.XML不会做任何事情，只是一个用来表示数据和结构的工具

3.XML的标签可以自己定义

4.XML可以通过使用JavaScript方便的替换网页数据

5.XML可以创造其他语言，如XHTML、WSDL、WML、RSS等

```xml
<!-- <?<xml version="1.0" encoding="UTF-8"> -->
<note>
<to>Bob</to>
<from>Alice</from>
<heading>Hello</heading>
<body>World</body>
</note>
```

6.DOM会通过解析XML语言文档，生成XML树

7.所有XML元素都必须拥有闭合标签，且XML文档必须要有一个根节点

8.属性值需要添加``""``

9.实体引用

![](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220326171231872.png)

可以使用实体引用来代替``<>&""''``等字符

![image-20220326171646153](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220326171646153.png)

10.注释和HTML一样

11.空格不会被忽略

12.XML使用``\n``来储存换行

13.XML中元素的概念

```xml
<name></name> <!--这就是一个XML元素-->

<!--------------------------------->
<name props = "value">		 <!--元素可以存在属性-->
	<gender>man</gender>     <!--元素之中可以嵌套其他元素-->
</name>
```

14.命名规则

​	1.不能数字或标点开头

​	2.不能以``xml``开始

​	3.不能有空格

​	4.推荐驼峰命名或者下划线链接

15.属性缺点

​	1.不能包含多个值

​	2.不能包含树结构

​	3.不易扩展

16.可以像CSS一样添加id

17.DTD的声明（存在一个替代，叫做``XML Schema``）

​	1.文件内声明

``<!DOCTYPE root-element [element-declarations]>``

```xml-dtd
<!--DTD文件声明-->
<?xml version="1.0"?>
<!DOCTYPE note [
<!ELEMENT note (to,from,heading,body)>
<!ELEMENT to (#PCDATA)>
<!ELEMENT from (#PCDATA)>
<!ELEMENT heading (#PCDATA)>
<!ELEMENT body (#PCDATA)>
]>
<!--XML文档-->
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend</body>
</note>
```

​	2.文件外声明

``<!DOCTYPE root-element SYSTEM "filename">``

```xml
<?xml version="1.0"?>
<!DOCTYPE note SYSTEM "note.dtd">
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```

```dtd
<!ELEMENT note (to,from,heading,body)>
<!ELEMENT to (#PCDATA)>
<!ELEMENT from (#PCDATA)>
<!ELEMENT heading (#PCDATA)>
<!ELEMENT body (#PCDATA)>
```

DTD的使用可以使得每一个XML文档都有其本身的标准，即每一个文档都携带一个有关于自身格式描述。可以使用标准的DTD来和其他人交换数据。

18.可以使用CSS美化XML文档，但是更推荐使用XSLT（eXtensible Stylesheet Language Transformations），XSLT可以将XML转换成其他格式。

```xml
<!--在文档开头添加链接即可链接至对应的CSS文档上-->
<?xml-stylesheet type="text/css" href="name.css"?>
```

**以下内容为JS和XML综合**

19.XMLHttpRequest对象

此对象用于在后台和服务器交换数据，同时不需要刷新页面

```js
//创建一个新的XMLHttpRequst对象
xmlhttp = new XMLHttpRequest();
```

XML有两种格式，分别为XML文档和XML字符串，因此解析XML也有两种方法

解析XML文档

```js
if (window.XMLHttpRequest){
    xmlhttp = new XMLHttpRequest(); 	//创建一个XMLHTTP对象
}else{
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET","Book.xml","false"); //打开XMLHTTP对象，使用GET方法，获取Book.xml文件，使用同步方式进行
xmlhttp.send();	　//发送一个XMLHTTP请求到服务器
xmlDoc = xmlhttp.responseXML;	//设置响应的XMLDOM对象
```

解析XML字符串

除IE外的浏览器使用``window.DOMParser``来解析字符串，IE使用``loadXML()``

```js
//链接字符串
txt="<bookstore><book>";
txt=txt+"<title>Everyday Italian</title>";
txt=txt+"<author>Giada De Laurentiis</author>";
txt=txt+"<year>2005</year>";
txt=txt+"</book></bookstore>";
//解析字符串
if (window.DOMParser){
	parser = new DOMParser();
	xmlDoc = parser.parseFromString(txt,"text/xml");
}else{
	xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	xmlDoc.async = false;
	xmlDoc.loadXML(txt);
}
```

```html
<!--可以将上述代码封装成函数，存储在<head>标签中-->
<script src="name.js"></script>
```

20.加载一个XML文件，先将XML文档或者XML字符串解析到XML DOM对象上，再通过JS解析获得XML中的数据

```html
<html>
<body>
<h1>W3Schools Internal Note</h1>
<div>
<b>To:</b> <span id="to"></span><br />
<b>From:</b> <span id="from"></span><br />
<b>Message:</b> <span id="message"></span>
</div>

<script>
//使用XML文档解析
	if (window.XMLHttpRequest){
        // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{
        // code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","note.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;
//使用XML字符串解析
    txt="<note>";
	txt=txt+"<to>Tove</to>";
	txt=txt+"<from>Jani</from>";
	txt=txt+"<heading>Reminder</heading>";
	txt=txt+"<body>Don't forget me this weekend!</body>";
	txt=txt+"</note>";

	if (window.DOMParser){
		parser=new DOMParser();
		xmlDoc=parser.parseFromString(txt,"text/xml");
	}else{
    	// Internet Explorer
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async=false;
		xmlDoc.loadXML(txt);
	}
    
    
	document.getElementById("to").innerHTML=
    xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
	document.getElementById("from").innerHTML=
	xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
	document.getElementById("message").innerHTML=
	xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;
</script>

</body>
</html>
```

在HTML页面上显示XML数据

```html
<!DOCTYPE html>
<html>
<body>

<script>
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","cd_catalog.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

document.write("<table border='1'>");
var x=xmlDoc.getElementsByTagName("CD");
    //x是一个数组，包含所有<CD>标签下的元素
for (i=0;i<x.length;i++)
  { 
  document.write("<tr><td>");
  document.write(x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue);
   //遍历数组x中的每一个CD标签下的内容，并且返回第一个ARTIST标签对应的第一个子节点
  document.write("</td><td>");
  document.write(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
  document.write("</td></tr>");
  }
document.write("</table>");
</script>

</body>
</html>
```

使用XML在HTML中显示数据实例

```html
<!DOCTYPE html>
<html>
<head>

<script>
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","cd_catalog.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

x=xmlDoc.getElementsByTagName("CD");
i=0;

function displayCD()
{
artist=(x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue);
title=(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
year=(x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue);
txt="Artist: " + artist + "<br>Title: " + title + "<br>Year: "+ year;
document.getElementById("showCD").innerHTML=txt;
}

function next(){
	if (i<x.length-1){
  		i++;
  		displayCD();
  	}
}

function previous(){
	if (i>0){
  		i--;
  		displayCD();
  	}
}
</script>
</head>
<body onload="displayCD()">

<div id='showCD'></div><br>
<input type="button" onclick="previous()" value="<<" />
<input type="button" onclick="next()" value=">>" />

</body>
</html>
```

21.使用前缀防止命名冲突

在根元素的开始标签中声明前缀的适用范围

```xml
<!--xmlns:XMLNameSpace-->
<!--根元素声明-->
<root xmlns:a="URL1" xmlns:b="URL2">
    <!--用此方法来防止命名冲突-->
	<a:table>
    	<name>A</name>
    </a:table>
    <b:table>
    	<name>B</name>
    </b:table>
</root>
<!--被使用元素中声明-->
<root>
	<a:table xmlns:a="URL1">
    	<name>A</name>
    </a:table>
    <b:table xmlns:b="URL2">
    	<name>B</name>
    </b:table>
</root>
```

22.因为解析器会解析XML文档内的所有文本，但是我们不需要所有文本都被解析，因此需要区分代码块，避免不需要的代码块被解析。所以引入PCDATA和CDATA

PCDATA指的是被解析的数据

CDATA指的是不应该由XML解析器解析的文本数据，我们可以将脚本代码定义为CDATA来防止XML解析器解析

```html
<script>
<!--被框起来的代码块即为CDATA部分-->
<![CDATA[
   statement
]]>
</script>
```

23.XMLDOM节点类型

![image-20220329185000910](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220329185000910.png)
