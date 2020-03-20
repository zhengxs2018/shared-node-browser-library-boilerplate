# shared-node-browser-library-boilerplate

[![JavaScript Style Guide][badge:standardjs]][standardjs]

使用 rollup.js 构建一个在 nodejs 和浏览器中运行，可重用的 NPM 模块.

## 功能介绍

- 使用最新 JavaScript 语法开发.
- 可以同时运行在浏览器和 nodejs 中.
- 内置 bundle 分析报告、文档自动生成、代码检查、单元测试和代码覆盖的功能

## 目录结构

```text
Project/
├── README.md
├── package.json
├── rollup.config.js
├── babel.config.js
├── bundle-analyzer-report.html        构建分析报告
├── jsdoc.json                         自动生成 api 文档
├── .gitignore
├── .eslintrc.js                        代码检查
├── .eslintignore
├── .editorconfig                       统一编辑器风格用的配置文件
├── coverage/                           测试覆盖率
├── dist/                               输出目录
├── dist-docs/                          文档输出目录
├── .vscode/                            vscode 编辑器配置目录
├── src/
|   ├── index.esm.js                    esm 输出用
|   └── index.js                        cjs 和 umd 输出用
└── test/
    ├── fixtures/
    ├── unit/
    └── .eslintrc.js
```

## 开发步骤

你需要安装 Node.js 的版本为 6+.

克隆此仓库后运行:

```bash
# 安装依赖
$ npm install

# 构建用于生产用的压缩代码
$ npm run build

# 构建用于生产的代码并生成包分析报告
$ npm run build --analyse

# 生成 API 文档.
$ npm run build:docs
```

在 package.json 文件的 scripts 部分还有一些其他脚本可用.

## 运行单元测试

```bash
# 运行单元测试，已内置代码覆盖率的功能
$ npm test

# 生成测试覆盖率报告
$ npm run report
```

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
[standardjs]: https://standardjs.com
[badge:standardjs]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
