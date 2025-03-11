---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'C++学习第四章'
pubDate: 2023-04-30
description: 'C++学习第四章'
author: 'Chen'
tags: ["C++"]
category: "开发工具"
---
[TOC]



# Chapter 4

## 4.1 面向对象程序设计的基本特点

## 4.2 类和对象

## 4.3 构造函数和析构函数

### 构造函数

构造函数作用就是将对象初始化为一个特定的状态

1.  默认构造函数（无参）
2.  委托构造函数
3.  复制构造函数 使用一个已经存在的对象，去初始化一个同类的新对象

```cpp
class Clock {
private:
    int hour;
    int second;
    int minute;
public:
    // 默认构造函数
	Clock();
    // 含参构造函数
    Clock(int Hour, int Second, int Minute);
    // 委托构造函数，实现使用无参数也能构造函数
    Clock(int newH, int newM, int newS) {
        hour = newH;
        minute = newM;
        second = newS;
    }
    Clock(): Clock(0, 0, 0) {} // 无参的构造函数委托有参的构造函数进行构造
    // 复制构造函数
    Clock(Clock &c);
}
// 含参构造函数的实现
Clock::Clock(int Hour, int Second, int Minute):hour(Hour), minute(Minute), second(Second) {}
// 复制构造函数的实现 使用一个已经存在的对象c去构建新的对象
Clock::Clock(Clock &c) {
    hour = c.hour;
    minute = c.minute;
    second = c.second;
}
```

**复制构造函数的使用场景**

1.  ```cpp
    Clock c2(c1); // 使用已经存在的c1去构造新的c2对象
    Clock c3 = c1; // 使用已经存在的c1去构造新的c3对象
    ```

2.  ```cpp
    void fun(Clock c) { // 函数的形参是类的对象
        cout << c.hour << endl;
    }
    // in main
    Clock c1;
    fun(c1); // 调用函数时，复制构造函数被调用 
    ```

3.  ```cpp
    Clock fun() {
        Clock obj;
        return obj; // 函数返回值是一个对象时，调用复制构造函数
    }
    ```

### 析构函数

1.  不接受任何函数

### ！移动构造函数

左值和右值

### ！default，delete函数

## 4.4 类的组合

本质是某个类中包含另一个类的对象作为成员的情况

**构造函数与析构函数的调用顺序问题**

构造函数的调用顺序由外向内

析构函数的调用顺序由内向外

**复制构造函数的传参问题**

```cpp
// C类中包含B类的对象b
C::C(C &c1):b(c1.b) {}
```

### 向前引用声明

在定义前声明一下

## 4.5 UML图像标识

略

## 4.6 结构体和联合体

略