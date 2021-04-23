# @zhengxs/npm-module-boilerplate

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


Using rollup.js to build, a re-usable NPM module for run in nodejs and browser.

查看[中文文档](./README.zh-CN.md)

## 关联文章

* [开发一个适用于 nodejs 与浏览器的 npm 包 - 基于 rollupjs](https://juejin.im/post/6844903834402160647)

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
$ npm run build --analyze

# Generate document.
$ npm run doc
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
