---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'SASS入门'
pubDate: 2022-04-02
description: 'SASS入门'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
# SASS

1.sass的变量前有美元符号``$``，sass语句写在``<style></style>``标签中。

sass的赋值符号为``:``语句后面不需要加``;``

2.重复调用可以使用``@mixin``定义函数，``@include``调用函数。

3.同JavaScript一样，sass拥有类似的语法规则。

4.可以使用``#{$name}``将对应的变量和文本结合起来，合成字符串。

5.sass的for循环:

```js
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

6.sass的each语法：

```java
@each $i in blue,black,red {
  .#{$i}-bg {background-color: $i}
}
```

```java
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
//要多定义一个变量来接受colors中的键
```

7.跨文件的调用

Sass文件（Partials）以``_``开头，后缀名为``.scss``。

```javascript
//引入一个文件名为_hello.scss
@import 'hello'
```

8.@extend的语句重用代码

```javascript
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important {
    @extend .info;
    background-color: magenta;
  }
```





