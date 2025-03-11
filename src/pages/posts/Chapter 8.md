---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'C++学习第八章'
pubDate: 2023-06-27
description: 'C++学习第八章'
author: 'Chen'
tags: ["C++"]
category: "开发工具"
---
# Chapter 8

[TOC]



## 8.1 多态性概述

1.  编译时的多态 绑定工作在编译连接阶段完成
2.  运行时的多态 绑定工作在程序运行阶段完成

## 8.2 运算符重载

对已有的运算符赋予多重含义，使得同一个运算符作用于不同类型的数据时产生不同的行为

不能重载的运算符

1.  `.`
2.  `*`
3.  `::`
4.  `?:`

重载的类型

1.  重载成 类的非静态 成员函数

    此处的形参表只需要列出一个即可，谁触发的默认就会被当成第一个操作数

    操作数通过this指针指出

 ```cpp
 int A::operator + (int a) {
 	// ...     
 }
 ```

2.  重载成 非 成员函数

    若是需要，则可以设置其为友元函数，以方便访问类的私有成员

```cpp
void operator + (int a, int b) {
    // ...
}
```

e.g.重载为**成员函数**

1.  oprd1 B oprd2

    对于**双目运算符**，此时需要将B重载为oprd1的成员函数，上式即为oprd1.operator B(oprd2)

    ```cpp
    Complex Complex::operator + (const Complex &c2) const {
        return Complex(real + c2.real, imag + c2.imag);
    }
    ```

    

2.  U oprd

    对于**前置单目运算符**，直接重载成非成员函数，上式即为operator U(oprd)

    ```cpp
    Clock & Clock::operator ++ () {
        // ...
    }
    ```

    

3.  oprd++ / oprd--

    对于**后置运算符**，需要重载成oprd的成员函数，同时需要携带一个参数用于指定步长，上式即为oprd.operator++(0)

    ```cpp
    Clock Clock::operator ++ (int) { // int只取区别作用
        // ...
    }
    ```



e.g.重载为**非成员函数**

1.  oprd1 B oprd2

    对于**双目运算符**，此时需要将B重载为非成员函数，上式即为operator B(oprd1, oprd2)

    ```cpp
    Complex Complex::operator + (const Complex &c2, const Complex &c2) const {
        return Complex(c1.real + c2.real, c1.imag + c2.imag);
    }
    ```

    

2.  U oprd

    对于**前置单目运算符**，直接重载成oprd的成员函数，上式即为operator U(oprd)

    ```cpp
    Clock & Clock::operator ++ () {
        // ...
    }
    ```

    

3.  oprd++ / oprd--

    对于**后置运算符**，需要重载成oprd的成员函数，同时需要携带一个参数用于指定步长，上式即为operator++(oprd, 0)

    

## 8.3 虚函数

虚函数是动态绑定的基础

虚函数必须是非静态的成员函数

虚函数的声明只能在出现在函数的原型声明中，不能出现在成员函数实现的时候

如果 在派生类 中需要重写和 基类同名的函数 ，则需要在基类中将要重写的函数声明为虚函数

**override**：

用于标明某个函数是否需要将虚函数覆盖，若没覆盖则报错

**final**：

用于标明某个函数不能被覆盖，若发生覆盖则报错

### 虚析构函数

不允许声明虚构造函数，只允许声明虚析构函数

```cpp
virtual ~Base()
```

若基类的析构函数为虚函数，则基类所派生的所有子类的析构函数均为析构函数

方便基类类型的指针能够调用适当的析构函数针对不同的对象进行清理工作

## 8.4 纯虚函数和抽象类

### 纯虚函数

纯虚函数在基类没有具体定义的操作内容，要求在各派生类根据实际需要进行版本定义

```cpp
virtual void funName() = 0;
```

声明为纯虚函数后，不需要进行实现

### 抽象类

带有纯虚函数的类就是抽象类，供基类使用，且不能被实例化

通过抽象类建立公共的接口，就像干细胞
