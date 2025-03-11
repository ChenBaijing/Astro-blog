---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'C++学习第五章'
pubDate: 2023-04-29
description: 'C++学习第五章'
author: 'Chen'
tags: ["C++"]
category: "开发工具"
---
# Chapter 5 数据的保护与共享

[TOC]

## 5.1 作用域&可见性

作用域：局部，全局

可见性：可见本质上就是能不能被使用

## 5.2 对象的生存周期

### 静态生存周期

对象的生存周期和程序的运行期相同，人话就是一直存在

```cpp
static int aaa = 0;
```

### 动态生存周期

诞生于声明点，结束于块执行完毕时

## 5.3 静态成员

使用`static`修饰

属于类

有静态生存期

使用前需要初始化

通过使用`类名::变量名`使用

```cpp
int Point::x = 0;
int Point::y = 0;
```

通过使用`类名::方法名`使用

```cpp
Point::show();
```

静态成员函数可以直接访问该类的静态数据和函数成员

想访问非静态成员需要使用`对象名.变量名`

```cpp
class A {
private:
	int x;
    static int y;
public:
    static void display();
}

int A::y = 0;
void A::display() {
    cout << y << endl;
    cout << A.x << endl;
}
```



## 5.4 友元

### 友元函数

使用`friend`修饰

在类中，但是不属于类，是非成员函数

可以通过`类名.变量名`访问私有和保护成员

### 友元类

使用`friend`修饰

```cpp
class B {
    ...
    friend class A; // A是B的友元，A可以访问B的所有私有或者保护成员
}
```

X为Y的友元类，X中的所有成员函数都是Y的友元函数，X可以访问Y的所有私有和保护成员

1.  友元关系不能传递
2.  友元关系单向

## 5.5 共享数据的保护

### 常对象

```cpp
class A {
public:
    A(int X, int Y):x(X), y(Y) {}
private:
    int x, y;
}

const A a(1, 2)
```

### 常成员函数

```cpp
void display(args...) const {
    ...
}
```

常对象只能调用常成员函数

const可以区分重载函数

注意若是使用非常对象调用重载函数，则使用的是距离较近的

```cpp
void display(); // 调用此函数
void display() const;
```

### 常数据成员

```cpp
class A {
private:
    const int a;
    static const int b;
public:
    A(int A): a(A) {} 
}
// init
const int A::b = 0;
```

### 常引用

常引用的引用对象不能被更新

## 多文件结构

.h文件声明类

```cpp
// Point.h
class Point {
    ...
}
```

.cpp文件实现类

```cpp
// Point.cpp
#include "Point.h"
#include <iostream>
using namespace std;

// init static member
// realize function
```

.cpp实现主函数

```cpp
// main.cpp
#include "Point.h"
#include <iostream>
using namespace std;

int main() {
    return 0;
}
```

