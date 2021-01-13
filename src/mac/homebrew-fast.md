---
# 这是页面的图标
icon: page
# 这是文章的标题
title: Homebrew 更换阿里云镜像加速
# 设置写作时间
time: 2021-01-13
# 一个页面只能有一个分类
category: Mac教程
# 一个页面可以有多个标签
tag:
    - Mac
---

> 本方案长期保持有效，如发现不可用，请在下面留言。

你可能有过这样糟糕的经历，当敲下 `brew install 应用名称` ，静静的等待安装结果时，Homebrew 在 Updating 的地方卡死了。

[Homebrew](https://brew.sh/) 是一款 Mac OS 平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷。

> 安装请见： [Wiki：Homebrew：Mac 下安装 Homebrew](https://learnku.com/mac/wikis/37923)

Homebrew 主要分两部分：git repo（位于 GitHub）和二进制 bottles，这两者在国内访问都不太顺畅。接下来演示如何使用阿里云来加速这两部分的下载。

## 使用 阿里云 的 Homebrew 镜像源进行加速

如果你没有更换过镜像源，执行 brew 命令安装应用的时候，跟以下 3 个仓库地址有关：

-   brew.git
-   homebrew-core.git
-   homebrew-bottles

通过以下操作将这 3 个仓库地址全部替换为阿里云提供的地址。

## 更换 brew.git

```shell
cd "$(brew --repo)"
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
```

## 更换 homebrew-core.git

```shell
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
```

执行上述命令之后，请执行更新命令：

```shell
brew update
```

此时可以执行 `brew config` 命令，查看配置信息：

```shell
HOMEBREW_VERSION: 2.2.2
ORIGIN: https://mirrors.aliyun.com/homebrew/brew.git
HEAD: 13f508d0dc8ada1726ee09a750285d7447ac3df4
Last commit: 3 weeks ago
Core tap ORIGIN: https://mirrors.aliyun.com/homebrew/homebrew-core.git
Core tap HEAD: d0cd83f4051fe5b07f519587b794eaf6f1a0dffe
Core tap last commit: 2 hours ago
HOMEBREW_PREFIX: /usr/local
CPU: dodeca-core 64-bit kabylake
Homebrew Ruby: 2.6.3 => /usr/local/Homebrew/Library/Homebrew/vendor/portable-ruby/2.6.3/bin/ruby
Clang: 10.0 build 1001
Git: 2.19.2 => /usr/local/bin/git
Curl: 7.54.0 => /usr/bin/curl
macOS: 10.14.6-x86_64
CLT: 10.3.0.0.1.1562985497
Xcode: N/A
```

## 更换 homebrew-bottles

接下来是二进制文件下载的设置。

这与你当前 macOS 系统使用的 shell 版本有关系，执行以下命令查看 Shell 版本：

```shell
$ echo $SHELL
```

> 根据版本不同，会输出 2 种结果，/bin/zsh 或 /bin/bash，根据类型进行操作即可

### /bin/zsh

```shell
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
```

### /bin/bash 结果

```shell
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile
```

到这里，更换 Homebrew 默认源的所有操作啦，尽情地去 **brew install** 吧！

## 恢复默认配置

出于某些场景, 可能需要回退到默认配置, 你可以通过下述方式回退到默认配置。
首先执行下述命令:

```shell
# 重置brew.git:
cd "$(brew --repo)"
git remote set-url origin https://github.com/Homebrew/brew.git

# 重置homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://github.com/Homebrew/homebrew-core.git
```

然后删掉 HOMEBREW_BOTTLE_DOMAIN 环境变量,将你终端文件 `~/.bash_profile` 或者 `~/.zshrc` 中

```shell
HOMEBREW_BOTTLE_DOMAIN
```

行删掉, 并执行

```shell
source ~/.bash_profile
```

或者

```shell
source ~/.zshrc
```

## 参考

-   [https://phpdever.com/2019/08/02/homebrew-r...](https://phpdever.com/2019/08/02/homebrew-replace-aliyun/)

[Homebrew：Homebrew 更换阿里云镜像加速 | Mac 用户论坛](https://learnku.com/mac/wikis/39228)
