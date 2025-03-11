---
layout: ../../layouts/MarkdownPostLayout.astro
title: '计算机教育中缺失的一课'
pubDate: 2025-02-26
description: '计算机教育中缺失的一课'
author: 'Chen'
tags: ["tools"]
category: "其他"
---
# Missing class semester of CS education

## shell

```bash
gedit .bashrc
```

修改环境变量PATH



```bash
chmod +x hello
./hello
./hello > log.txt

cat log.txt
```

```b
foo=bar
echo "$foo"
echo '$foo'
ubuntu@ubuntu:~/Desktop$ chmod +x hello
ubuntu@ubuntu:~/Desktop$ ./hello
bar
$foo
```

- `$0` - 脚本名
- `$1` 到 `$9` - 脚本的参数。 `$1` 是第一个参数，依此类推。
- `$@` - 所有参数
- `$#` - 参数个数
- `$?` - 前一个命令的返回值
- `$$` - 当前脚本的进程识别码
- `!!` - 完整的上一条命令，包括参数。常见应用：当你因为权限不足执行命令失败时，可以使用 `sudo !!` 再尝试一次。
- `$_` - 上一条命令的最后一个参数。如果你正在使用的是交互式 shell，你可以通过按下 `Esc` 之后键入 . 来获取这个值。



```bash
#! /usr/bin/env [bash|python|node]
```

可以在 **shebang** 行中使用 `#!/usr/bin/env xxx` 来选择你想要使用的解释器。这里的 `xxx` 可以是任何你想要使用的解释器，比如 `python`、`bash`、`node` 等

使用 `env` 可以让系统自动查找解释器的位置，而不是依赖某个固定的路径，会根据当前用户的 `PATH` 环境变量来查找解释器，确保脚本在不同环境中运行时都能找到正确的解释器



查找文件的三种工具

1. find
2. fd
3. locate

查找代码的工具

1. grep



**Test 1**

编写两个 bash 函数 `marco` 和 `polo` 执行下面的操作。 每当你执行 `marco` 时，当前的工作目录应当以某种形式保存，当执行 `polo` 时，无论现在处在什么目录下，都应当 `cd` 回到当时执行 `marco` 的目录。 为了方便 debug，你可以把代码写在单独的文件 `marco.sh` 中，并通过 `source marco.sh` 命令，（重新）加载函数。

```bash
#!/bin/bash

# 定义一个变量来保存目录
MARCO_DIR=""

# marco 函数：保存当前工作目录
marco() {
  # 获取当前工作目录并保存
  MARCO_DIR=$(pwd)
  echo "Saved current directory: $MARCO_DIR"
}

# polo 函数：返回到上次保存的目录
polo() {
  if [ -z "$MARCO_DIR" ]; then
    echo "You need to run 'marco' first to save a directory."
    return 1
  fi
  # 切换到保存的目录
  cd "$MARCO_DIR" || return 1
  echo "Returned to directory: $MARRO_DIR"
}

```

**Test 2**

编写一个命令，它可以递归地查找文件夹中所有的 HTML 文件，并将它们压缩成 zip 文件

```bash
find /path/to/directory -type f -name "*.html" -print | zip html_files.zip -@

```

## Vim

Vim 最重要的设计思想是 Vim 的界面本身是一个程序语言

- 基本移动: `hjkl` （左， 下， 上， 右）
- 词： `w` （下一个词）， `b` （词初）， `e` （词尾）
- 行： `0` （行初）， `^` （第一个非空格字符）， `$` （行尾）
- 屏幕： `H` （屏幕首行）， `M` （屏幕中间）， `L` （屏幕底部）
- 翻页： `Ctrl-u` （上翻）， `Ctrl-d` （下翻）
- 文件： `gg` （文件头）， `G` （文件尾）
- 行数： `:{行数}<CR>` 或者 `{行数}G` ({行数}为行数)
- 杂项： `%` （找到配对，比如括号或者 /* */ 之类的注释对）
- 查找：`f{字符}`， `t{字符}`， `F{字符}`， `T{字符}`
  - 查找/到 向前/向后 在本行的{字符}
  - `,` / `;` 用于导航匹配
- 搜索: `/{正则表达式}`, `n` / `N` 用于导航匹配

## Sed | Awk

## [Regex](https://regexone.com/)

## 任务控制

`SIGINT` `SIGQUIT` `SIGTERM` `SIGTSTP`

### [tmux](https://hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/)

- `<C-b> c` 创建一个新的窗口，使用 `<C-d>` 关闭
- `<C-b> N` 跳转到第 *N* 个窗口
- `<C-b> z` 全屏化当前的pane
- `<C-b> &|"` 删除|创建一个pane
- `tmux ls`
- 

## alias

```bash
alias alias_name="command_to_alias arg1 arg2"
```

## 配置文件（Dotfiles）

- `bash` - `~/.bashrc`, `~/.bash_profile`
- `git` - `~/.gitconfig`
- `vim` - `~/.vimrc` 和 `~/.vim` 目录
- `ssh` - `~/.ssh/config`
- `tmux` - `~/.tmux.conf`

## 远端设备（SSH）

```bash
ssh foo@bar.mit.edu
```

尝试以用户名 `foo` 登录服务器 `bar.mit.edu`

可以直接远程执行命令

`ssh foobar@server ls` 可以直接在用 foobar 的命令下执行 `ls` 命令

**通过 SSH 复制文件**

- `ssh+tee`, 最简单的方法是执行 `ssh` 命令，然后通过这样的方法利用标准输入实现 `cat localfile | ssh remote_server tee serverfile`。回忆一下，[`tee`](https://www.man7.org/linux/man-pages/man1/tee.1.html) 命令会将标准输出写入到一个文件；
- [`scp`](https://www.man7.org/linux/man-pages/man1/scp.1.html) ：当需要拷贝大量的文件或目录时，使用 `scp` 命令则更加方便，因为它可以方便的遍历相关路径。语法如下：`scp path/to/local_file remote_host:path/to/remote_file`；
- [`rsync`](https://www.man7.org/linux/man-pages/man1/rsync.1.html) 对 `scp` 进行了改进，它可以检测本地和远端的文件以防止重复拷贝。它还可以提供一些诸如符号连接、权限管理等精心打磨的功能。甚至还可以基于 `--partial` 标记实现断点续传。`rsync` 的语法和 `scp` 类似；

**端口转发**

建立从本地端口 `9999` 的转发，使用 `ssh -L 9999:localhost:8888 foobar@remote_server` 。这样只需要访问本地的 `localhost:9999` 即可访问远程的`8888`端口

## 其他的Shell

`zsh` shell 是 `bash` 的超集并提供了一些方便的功能：

- 智能替换, `**`
- 行内替换/通配符扩展
- 拼写纠错
- 更好的 tab 补全和选择
- 路径展开 (`cd /u/lo/b` 会被展开为 `/usr/local/bin`)

