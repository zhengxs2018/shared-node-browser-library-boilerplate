'use strict'

module.exports = {
  root: true,
  env: {
    'shared-node-browser': true,
    es6: true
  },
  globals: {
    __VERSION__: false
  },
  extends: [
    'standard'
  ],
  plugins: [
    'markdown'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  }
}
