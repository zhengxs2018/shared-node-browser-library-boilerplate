# shared-node-browser-library-boilerplate

[![JavaScript Style Guide][badge:standardjs]][standardjs]

Using rollup.js to build, a re-usable NPM module for run in nodejs and browser.

查看[中文文档](./README.zh-CN.md)

## 关联文章

* [开发一个适用于 nodejs 与浏览器的 npm 包 - 基于 rollupjs](https://juejin.im/post/6844903834402160647)

## 其他分支

- `branch:typescript` - ts 开发模板

## Features

- Use next javascript development.
- Run in nodejs and browser.
- Built-in bundle analyzer report, document generation, lint, unit testing && code coverage

## Structure

```text
Project/
├── README.md
├── package.json
├── rollup.config.js
├── babel.config.js
├── bundle-analyzer-report.html
├── jsdoc.json
├── .gitignore
├── .eslintrc.js
├── .eslintignore
├── .editorconfig
├── coverage/
├── dist/
├── dist-docs/
├── .vscode/
├── src/
|   ├── index.esm.js
|   └── index.js
└── test/
    ├── fixtures/
    ├── unit/
    └── .eslintrc.js
```

## Development Setup

You will need Node.js version 6+.

After cloning the repo, run:

```bash
# Installation dependency
$ npm install

# build for production with minification
$ npm run build

# build for production and generate the bundle analyzer report
$ npm run build --analyse

# Generate API document.
$ npm run build:docs
```

There are some other scripts available in the scripts section of the package.json file.

## Running The Tests

```bash
# run all test suite, include coverage
$ npm test

# Generate test coverage report
$ npm run report
```

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
[standardjs]: https://standardjs.com
[badge:standardjs]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
