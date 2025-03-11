---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Linux命令'
pubDate: 2025-02-26
description: 'Linux命令'
author: 'Chen'
tags: ["tools"]
category: "开发工具"
---
[TOC]



## 显示当前用户名

```shell
whoami
```
## 查看command的使用教程

```shell
man <command>
```
## 清屏

```shell
clear
# or use CTRL+L
```
## 显示当前目录的绝对位置，完整路径

```shell
pwd
# or
echo ~
```
## 移动到指定文件夹

```shell
cd
```
## 列出当前文件夹（指定文件夹）下的所有内容

```shell
ls
```
```shell
ls /bin
```
```shell
ls -l
ls -a
```
## 创建新文件夹

```shell
mkdir file
```
## 删除文件夹

```shell
rmdir file
```
## 创建新文件

```shell
touch file
```
## 删除文件

```shell
rm file
```
## 打开文件

```shell
open name
# only available in MacOS
xdg-open name
# Linux available
```
## 移动文件（用于重命名）

```shell
mv pear new_pear
# move file
mv pear dir/
```
## 复制文件

```shell
cp file newFile
# 递归复制
cp -r file newFile
```
## 查看文件的头部部分内容

```shell
head file
# 查看前number行文件
head file -n <number>
```
## 查看文件的尾部部分内容

```shell
tail file
# 查看前number行文件
tail file -n <number>
# 改为实时更新文件模式
tail file -f
```
## 查看当前时间

```shell
date
# 写入当前时间到指定文件
touch now.txt
date > now.txt
```
## 标准输出流

```shell
>
# A得出的结果直接输入给B
A > B
# 追加写入
A >> B
```
## 查看整个文件

```shell
cat file
# 查看时添加行号
cat -n file
```
## 逐页查看整个文件

```shell
less file
```
## 输出

```shell
echo
```
## 统计输入输出信息（word count）

```shell
wc file
# output
1757 15767 87022 fileName
# 行数 字数 字节数 文件名
```
## 管道输入输出流

可以简单理解为叠加运算

```shell
|
# 通常和wc指令配合使用
ls -al | wc
# 统计当前目录下文件个数信息
```
## 排序文件

```shell
# 排序按照ascii字符顺序，不改变文件，仅改变输出样式
sort file
# 使用修饰更改排序规则
# 按数字排序|按数字倒序排序|多个相同取一个
sort -n file
sort -nr file
sort -nu file
```
## 去重（仅对相邻重复的行进行去重）

```shell
uniq 
# 和sort一起使用
sort file | uniq
```

## 扩展操作符

-   echo：显示一行文本。
-   *匹配所有文件
-   ~快速回到当前用户的根目录
-   $ 
-   ""
-   ''

## 比较文件

```shell
diff
# 其返回值为num1[a|d|c]num2
# "24a25" 中的 "24" 表示第一个文件中的行号。
# "a" 表示添加（新增）操作。
# "25" 表示第二个文件中对应新增行的行号。
```

## 查找文件

```shell
find [path] [expression]
# e.g
find . -name '*.js'
find . -type [expression] [d|f] [-or|-not] [-size] [fileSize] 
find . -type f -exec [expression] \ #对寻找的每一个结果执行后面的语句
```

## 根据文件内容查找

```shel
grep [-n] <content> <file>
```

## 计算文件夹大小

```shell
du [-m|-h] [dirPath]
```

## 查看磁盘使用情况

```shell
df
```

## 查看指令使用历史记录

```shell
history
```

## 查看进程情况

```shell
ps axww
```

-   "p" 表示列出指定进程号的进程信息，如果不指定则列出所有进程的信息。
-   "s" 表示列出指定进程状态的进程信息，这里未指定，表示列出所有状态的进程信息。
-   "a" 表示列出除控制终端之外的所有进程。
-   "x" 表示列出没有控制终端的进程。
-   "w" 表示使用宽输出格式，以便在一行中显示完整的命令行。

## 查看最值资源消耗进程

```shell
top [-o] [expression]
```

## 结束进程

```shell
kill <PID>
#
killall [-9] [Pname]
```

## 显示当前活动的作业信息

```shell
jobs
```

## 切换作业

```shell
<command> & # 使作业后台运行
```

```shell
fg # back -> front
bg # front -> back
```

## 压缩文件

```shell
gzip filename
#
gzip -c filename > filename.gz
#
gzip -k filename
```

## 解压文件

```shell
gunzip <filename>
gzip -d <filename>
```

## 创建管理压缩文件

```shell
tar -cf [-czf] archive.tar file1 file2 directory
# 创建一个名为 "archive.tar" 的归档文件，并将文件 "file1"、"file2" 和目录 "directory" 添加到归档中
tar -xf archive.tar
# 解压并还原名为 "archive.tar" 的归档文件中的内容
```

## nano编辑器

```shell
nano
```

## 自定义指令别名

```shell
alias commandName='<command>'
# 查看别名
alias
# '' & ""
# ""中可以使用$var使用变量
alias lsthis="ls $PWD"
alias lsthat='ls $PWD'
```

## 分段传递参数

```shell
xargs
# e.g 将|前的结果作为参数传递给后面的rm
cat demo.txt | xargs rm
```

## 创建链接

类似Windows的快捷方式

soft link & hard link

``` shell
ln <original> <link>
```

## 查看历史用户记录

```shell
who
```

## 进入管理员模式

```shell
su <username>
# logout
logout
```

## 以管理员模式运行

```shell
sudo <command>
```

## 修改密码

```shell
passwd
```

## 修改文件权限

```shell
chown <owner> <file>
```

## 文件权限

![image-20230922174909534](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230922174909534.png)

![image-20230922174932823](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230922174932823.png)

![image-20230922175249297](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230922175249297.png)

## 改变文件权限

![image-20230922175314770](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230922175314770.png)

![image-20230922175432987](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230922175432987.png)

![image-20230922175448628](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230922175448628.png)

![image-20230922175508909](C:\Users\Chen\AppData\Roaming\Typora\typora-user-images\image-20230922175508909.png)
