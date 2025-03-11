---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'C++学习第九章'
pubDate: 2023-06-27
description: 'C++学习第九章'
author: 'Chen'
tags: ["C++"]
category: "开发工具"
---
# 模板与群体数据

[TOC]

## 9.1 函数模板与类模板

### 函数模板

```cpp
template <templateArgs>
typeName funcName(args) {
    // ...
}
```

**templateArgs**:

1.  class | typename 标识符
2.  类型说明符
3.  template <> class 标识符，嵌套

```cpp
#include <iostream>
using namespace std;
// 1
template <typename T>

T abs(T x) {
    // ...
}

// 调用的数据类型不同，T会进行改变    
```

函数模板和函数的区别

1.  模板编译时不生成任何目标代码
2.  模板应该放在头文件中，包括声明和实现
3.  函数的指针只能指向模板实例化对象上，不能指向模板

### 类模板

使得类中的部分数据成员，成员函数根据变量能取不同的值

```cpp
template <args>
class Name {
    // ...
}

// 类外实现成员函数
template <args>
typeName className<templateArgsList>::funName()
```



## 9.2 线性群体

顺序访问的线性群体，只能按元素的排列顺序从头开始依次访问各个元素

## 9.3 群体数据的组织

### 1.插入排序

### 2.选择排序

### 3.交换查找

### 4.顺序查找

### 5.对分查找