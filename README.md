# @zhengxs/npm-module-boilerplate

[![lang](https://img.shields.io/badge/lang-typescript-informational)](https://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![codecov](https://codecov.io/gh/zhengxs2018/shared-node-browser-library-boilerplate/branch/main/graph/badge.svg?token=1WYDMOFYX8)](https://codecov.io/gh/zhengxs2018/shared-node-browser-library-boilerplate)
![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

Using rollup.js to build, a re-usable NPM module for run in nodejs and browser.

查看[中文文档](./README.zh-CN.md)

## 关联文章

- [开发一个适用于 nodejs 与浏览器的 npm 包 - 基于 rollupjs](https://juejin.im/post/6844903834402160647)

## 其他分支

- `branch:esm` - 最初的 rollup + babel + es6 模板

## Features

- Use next javascript development.
- Run in nodejs and browser.
- Built-in bundle analyzer report, document generation, lint, unit testing && code coverage

## Development Setup

You will need [Node.js][nodejs] version 10+.

After cloning the repo, run:

```bash
# Installation dependency
$ npm install

# build for production with minification
$ npm run build

# build for production and generate the bundle analyzer report
$ npm run analyse

# Generate document.
$ npm run ts-doc
```

There are some other scripts available in the scripts section of the package.json file.

## Version Release

```bash
# Bump package version, include linting
$ npm version <newversion|major|minor|patch>

# Publish package, include build
$ npm publish
```

See [npm](https://docs.npmjs.com/) for more help.

## ChangeLog

See [CHANGELOG.md](./CHANGELOG.md)

## Contributing

See [CONTRIBUTING.md](./.github/CONTRIBUTING.md)

[rollupjs]: https://rollupjs.org
