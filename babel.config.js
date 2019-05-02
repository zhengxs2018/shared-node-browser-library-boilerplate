'use strict'

const pkg = require('./package.json')

module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false
    }]
  ],
  plugins: [
    'transform-async-to-promises'
  ],
  env: {
    test: {
      plugins: [
        'istanbul',
        'inline-json-import',
        ['module-resolver', {
          root: ['./src/'],
          alias: {
            [pkg.name]: './src/index.esm.js'
          }
        }]
      ]
    }
  }
}
