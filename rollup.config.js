import clear from 'rollup-plugin-clear'
import progress from 'rollup-plugin-progress'
import { eslint } from 'rollup-plugin-eslint'

import externals from 'rollup-plugin-node-externals'
import replace from 'rollup-plugin-replace'

import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

import filesize from 'rollup-plugin-filesize'
import visualizer from 'rollup-plugin-visualizer'

import pkg from './package.json'

const isProd = process.env.NODE_ENV === 'production'

// 为了解决使用 lodash/forEach 的方式引入的模块无法排除的问题
const depends = Object.keys(Object.assign({},
  pkg.peerDependencies,
  pkg.optionalDependencies
))

const banner =
  `/**
 * ${pkg.name} v${pkg.version}
 *
 * (c) ${new Date().getFullYear()} ${pkg.author.name}
 *
 * @author ${pkg.author.name}
 * @license ${pkg.license}
 */`

const baseConfig = {
  output: {
    banner,
    name: pkg.name,
    sourcemap: isProd
  },
  external (moduleId) {
    return depends.some(name => moduleId.startsWith(name))
  },
  plugins: [
    clear({
      targets: [
        'dist',
        'bundle-analyzer-report.html'
      ]
    }),
    progress({
      clearLine: false
    }),
    eslint(),
    replace({
      __VERSION__: `"${pkg.version}"`,
      NODE_ENV: `"${process.env.NODE_ENV}"`
    }),
    externals(),
    resolve(),
    commonjs(),
    json(),
    babel({
      exclude: 'node_modules/**'
    }),
    isProd && filesize()
  ],
  watch: {
    include: 'src/**'
  }
}

export default mergeConfig(baseConfig, [
  {
    input: 'src/index.esm.js',
    output: {
      banner,
      file: 'dist/lib.esm.js',
      format: 'es'
    }
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/lib.commonjs.js',
      format: 'cjs'
    }
  },
  {
    input: './src/index.js',
    output: {
      file: `./dist/lib${isProd ? '.min' : ''}.js`,
      format: 'umd'
    },
    plugins: [
      isProd && terser(),
      process.env.npm_config_report && visualizer({
        title: `${pkg.name} - ${pkg.author.name}`,
        filename: 'bundle-analyzer-report.html'
      })
    ]
  }
])

function mergeConfig (baseConfig, configs) {
  const merge = function (config) {
    config.output = Object.assign({}, baseConfig.output, config.output)
    config.external = baseConfig.external
    config.plugins = baseConfig.plugins.concat(config.plugins || [])
    return config
  }

  return Array.isArray(configs) ? configs.map(merge) : merge(configs)
}
