# Contributing Guide

We'd love for you to contribute and to make this project even better than it is today! If this interests you, please make sure to take a moment and read through the following guidelines

## Issue Reporting Guidelines

- Always use [bug_report](./ISSUE_TEMPLATE/bug_report.md) or [feature_request](./ISSUE_TEMPLATE/feature_request.md) to create new issues.

## Development Setup

You will need [Node.js](http://nodejs.org) **version 6+**.

After cloning the repo, run:

```bash
# or yarn or cnpm
$ npm install
```

### Committing Changes

Commit messages should follow the [Angular's commit convention][Angular's commit convention] so that changelogs can be automatically generated. Commit messages will be automatically validated upon commit. If you are not familiar with the commit message convention, you can use `npm run commit` instead of `git commit`, which provides an interactive CLI for generating proper commit messages.

### Commonly used NPM scripts

``` bash
# build all dist files
$ npm run build

# run test suite
$ npm test

# run linting
$ npm run lint
```

There are some other scripts available in the `scripts` section of the `package.json` file.

[Angular's commit convention]:https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular
