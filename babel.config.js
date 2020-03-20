'use strict'

module.exports = api => {
  const isTest = api.env('test')

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: isTest ? 'commonjs' : false
        }
      ]
    ],
    plugins: [
      [
        'transform-async-to-promises',
        {
          inlineHelpers: true
        }
      ],
      '@babel/plugin-external-helpers'
    ],
    exclude: ['node_modules']
  }
}
