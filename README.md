# CompileOnline

## 服务介绍

- 在线 C++ 编译器，支持 C++11 标准，接受标准输入流

## 服务环境

- node 11.2.0
  - express 4.16.0
  - pug 2.0.0-beta11
- npm 6.4.1
- ubuntu server 16.04 LST

## 文件架构

```shell
- myapp
  - bin
    - www // 服务入口
  - controller
    - compile.js // 编译
    - run.js // 运行
    - SaveToFile.js // 保存文件
  - node_modules
   - ...
  - public
    - code // 保存的文件
    - input // 标准输入流保存的文件
    - shell // 编译生成的文件
    - javascript // js
    - images // images
    - stylesheets // css
  - routes
    - index.js // 路由
  - views // 模板
    - error.pug
    - index.pug
    - layout.pug
  - app.js // express 框架入口
  - package.json // 配置
  - package-lock.json

```

## 服务原理

- 利用 express 框架，使用 http 协议
- 客户端发送 http 请求，服务端开放接口接受请求并调用相应函数来实现，实现 RPC

## 优点

- MVC 设计模式，代码分离，维护以及可读性强
- 使用了 Javascript ECMAScript 6 新标准，代码美观；Promise 克服了 Javascript 语言的异步地狱问题

## 不足

- 未考虑安全性问题，在 C++ 代码中调用系统函数存在 GetShell 的问题