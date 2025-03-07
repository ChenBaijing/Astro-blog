---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'git使用指南'
pubDate: 2023-04-07
description: 'git使用指南'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
# 如何使用git将自己的代码上传到GitHub中

[TOC]

### 1.确保自己的电脑上已经下载并安装了git。

检查方式：win+R输入cmd，打开命令行工具。

```bash
git --version	//检查git版本
```

### 2.配置本地git使用者的配置文件。

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

检查方式：

```bash
git config --list
```

### 3.在Github.com上创建一个新的仓库(repository)，同时在本地电脑上创建新的工作文件夹。

使用``cd [filename/index]``将操作对象更改为新的文件夹。

### 4.初始化Git仓库。

```bash
>> git init
<< Initialized empty Git repository in C:/Hello/.git/
```

此时可以检查Git仓库

```bash
git status
```

但是因为尚未添加文件，所以返回值为：

```bash
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

### 5.添加文件

```bash
git add filename	//仅追踪filename
git add .	//所有文件
```

往仓库里添加文件需要先创建文件，再使用``git add`` 追踪创建的文件，最后提交文件。

### 6.提交文件

```bash
git commit -m "statement"
```

使用``git commit``提交文件，`-m`后添加commit说明

### 7.将本地仓库链接到GitHub

```bash
git remote add [origin/other name] [url]
```

创建一个新的连接，指向上文中建立的仓库。

### 8.将本地文件上传到GitHub

```bash
git push -u [origin/otherlink] [branch name]
```

提交文件到某个指定的branch

### 9.新建分支

```bash
git branch [branch-name]
```

可以使用``git checkout [branch-name]``来切换分支

### 10.清除分支

```bash
git branch -d [branch-name]
```

### 11.创建一个PR(Pull Request)

```bash
git push --set-upstream arigin [branch-name]
```



GitHub中仓库和branch的区别：

```bash
repository001
	main(default)
		file001
		file002
		file003
	other branch
		other file
other repository
```



如何在GitHub上成为一个项目的贡献者

1.Fork一个你希望贡献的项目

2.Clone到本地机器上

3.创建新的分支

4.进行修改

5.将做好的工作合并入mian分支

6.上传至GitHub

7.开启PR(Pull Request)

8.清理本地文件



git commit 将本地代码上传到本地仓库

git push 将本地仓库中的代码上传到远程仓库，也就是像GitHub，gitee这样的代码托管网站

![image-20230407201337280](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230407201337280.png)



![image-20230407202105170](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230407202105170.png)

lab.github.com

1.Introduction to Github

​	1.assign

​	2.turn on github pages

​	3.close the issue

​	4.create a branch

​	5.commit a file

​		code->choose a branch->create a new file

![image-20220312170026351](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220312170026351.png)

​	6.open a pull request

​		![image-20220312170122650](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220312170122650.png)

​	7.respond to a review





![image-20220312170855663](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20220312170855663.png)
