# @zhengxs/npm-module-boilerplate

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

使用 rollup.js 构建一个在 nodejs 和浏览器中运行，可重用的 NPM 模块.

## 功能介绍

- 使用最新 JavaScript 语法开发.
- 可以同时运行在浏览器和 nodejs 中.
- 内置 bundle 分析报告、文档自动生成、代码检查、单元测试和代码覆盖的功能

## 开发步骤

你需要安装 [Node.js][nodejs] 的版本为 10+.

克隆此仓库后运行:

```bash
# 安装依赖
$ npm install

# 构建用于生产用的压缩代码
$ npm run build

# 构建用于生产的代码并生成包分析报告
$ npm run build --analyze

# 生成文档
$ npm run doc
```

在 package.json 文件的 scripts 部分还有一些其他脚本可用.

## 版本发布

```bash
# 更新版本，内置代码检查
$ npm version <newversion|major|minor|patch>

# 发布包，内置代码构建
$ npm publish
```

See [npm](https://docs.npmjs.com/) for more help.

## 更新日志

See [CHANGELOG.md](./CHANGELOG.md)

## 贡献

See [CONTRIBUTING.md](./.github/CONTRIBUTING.md)

[nodejs]: https://nodejs.org
[rollupjs]: https://rollupjs.org
