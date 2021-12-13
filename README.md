<p align='center'>
    <a href='https://nefbl.github.io/pack' target='_blank'>
        <img src='./logo.png'>
    </a>
</p>

# Nefbl | 新一代前端框架（打包工具）

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=@nefbl/pack"><img src="https://img.shields.io/npm/dm/@nefbl/pack.svg" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/@nefbl/pack"><img src="https://img.shields.io/npm/v/@nefbl/pack.svg" alt="Version"></a>
  <a href="https://github.com/nefbl/pack/graphs/commit-activity" target='_blank'><img alt="GitHub repo commit" src="https://img.shields.io/github/last-commit/nefbl/pack"></a>
  <a href="https://github.com/nefbl/pack/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@nefbl/pack.svg" alt="License"></a>
  <a href="https://github.com/nefbl/pack" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/nefbl/pack?style=social"></a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/nefbl/pack/issues)！

## How to use?

如果你想快速试试，可以使用命令创建项目。

首先，你需要安装cli工具：

```
npm install -g @nefbl/cli
```

然后，找个地方（比如桌面）执行生成命令：

```
nefbl create
```

根据提示依次输入项目名称、描述、选择打包工具等即可。

<img src='./images/img1.png' />

如上截图，请在选择打包工具的时候，选择```@nefbl/pack```这一项。

最后回车，即可得到一个空的基于```@nefbl/pack```打包的项目了。

当然，如果你不想创建，也可是直接查看我们提供的[ 例子项目 example ](https://github.com/nefbl/example)哦~

具体的使用你可以[查阅文档](https://nefbl.github.io/pack)哦~

## How to debug?

命令行进入```test```文件夹，然后执行：

```
npm run debug
```

在需要调试的地方提前添加“ debugger ”语句，这和普通的web端调试一样，接着，在chrome浏览器地址栏中输入：

```
chrome://inspect/#devices
```

接着，请点击“ Open dedicated DevTools for Node ”后进入调试界面。

开源协议
---------------------------------------
[MIT](https://github.com/nefbl/pack/blob/master/LICENSE)

Copyright (c) 2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
