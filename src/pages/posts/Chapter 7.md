---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'C++学习第七章'
pubDate: 2023-04-30
description: 'C++学习第七章'
author: 'Chen'
tags: ["C++"]
category: "开发工具"
---
[TOC]

# Chapter 7

## 7.1 基类和派生类

基类 | 父类：原有的类

派生类 | 子类：产生的新类

单继承

多继承

继承方式：public，protected，private

派生类成员：新增的数据和函数成员

## 7.2 访问控制

| 派生类中  | public    | private | protected |
| --------- | --------- | ------- | --------- |
| public    | public    | private | protected |
| private   | ×         | ×       | ×         |
| protected | protected | private | protected |

× 表示不可直接访问

## 7.3 类型兼容规则

需要基类的任何地方，都可以使用公有派生类的对象进行替代

-   派生类的对象可以隐含转换成基类对象
-   派生类的对象可以初始化基类的引用
-   派生类的指针可以隐含转换成基类指针

**注意**：替代后的派生类对象只能使用基类的成员，无法使用派生后新增的成员

```cpp
class Base {...}
class Derived: public Base {...}

Base b1, *pb1;
Derived d1;

// 派生类的对象可以隐含转换成基类对象
b1 = d1; // 将d1中 基类所存在的成员 一个个赋值给b1，在这里d1充当Base基类的实例化对象

// 派生类的对象可以初始化基类的引用
B &b2 = d1; // 派生类的对象(d1) 可以初始化 基类的引用(&b2)

// 派生类的指针可以隐含转换成基类指针
pb1 = &d1 // 指向基类的指针也能指向派生类，通过使用派生类来达成基类的效果
		  // 此处通过将 派生类的地址(&d1) 赋给 指向基类的指针(pb1) 来达成效果
```



## 7.4 派生类的构造和析构函数

如果基类初始化时需要带参，那么派生类就需要构造函数

派生类的构造函数顺序

1.  基类的构造函数，按继承顺序从左到右来生成
2.  派生类新增的成员初始化，按声明顺序
3.  执行派生类构造函数中的内容

**注意**：派生类的构造函数初始化列表中顺序无关紧要

```cpp
// P267
class A {}
class B {}
class C {}
class D:public B, public A, public C {
public:
    D(int a, int b, int c, int d): A(a), m2(d), m1(c), B(b) {
        cout << "Con. d" << endl;
    }
private:
    A m1;
    B m2;
    C m3;
}

int main() {
    D obj(1, 2, 3, 4);
    return 0;
}
```

### 复制构造函数

```cpp
class B {}
class D: public B {}

D::D(const D &v): B(v) {}
```

### 析构函数

顺序和构造函数相反

## 7.5 派生类成员的表示和访问

成员分类

1.  不可访问成员
2.  私有成员
3.  保护成员
4.  公有成员

### 菱形继承

使用**虚基类**

在菱形继承的中间层使用virtual关键字声明，同时上层的基类被称为虚基类

```cpp
class Derived: virtual public Base {}
```

此时从不同路径继承过来的同名数据成员在内存中只有一个

### 构造类的顺序

1.  若有直接或者间接的虚基类，执行虚基类的构造函数
2.  若有其他类，按继承声明顺序进行调用构造函数
3.  按照类定义中的顺序，进行新增成员的初始化
4.  执行构造函数的函数体
