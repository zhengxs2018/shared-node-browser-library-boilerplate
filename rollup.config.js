import path from 'path'

import { mergeWith, camelCase, isFunction } from 'lodash'

import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import externals from 'rollup-plugin-node-externals'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

import { parse } from '@pobedit/package-name-parser'

import pkg from './package.json'

// 库名称，用于 UMD
const libraryName = camelCase(parse(pkg.name).name)

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${new Date().getFullYear()} @${pkg.author.name}.
 */`

const baseConfig = {
  input: resolve('src/index.ts'),
  output: {
    banner,
    name: libraryName,
    exports: 'named',
  },
  plugins: [
    externals({
      deps: true, // 剔除生产依赖
    }),
    nodeResolve(),
    commonjs(),
    json(),
    replace({
      preventAssignment: true,
      __VERSION__: pkg.version,
    }),
  ],
}

export default [
  // CommonJS
  mergeConfig(baseConfig, {
    output: [
      // CommonJS
      {
        format: 'cjs',
        file: resolve(pkg.main),
        plugins: [filesize()],
      },
      // ES Module
      {
        format: 'esm',
        file: resolve(pkg.module),
        plugins: [filesize()],
      },
    ],
    plugins: [
      typescript({
        tsconfig: resolve('tsconfig.json'),
        module: 'esnext',
        importHelpers: true,
        removeComments: true,
      }),
    ],
  }),

  // UMD
  mergeConfig(baseConfig, {
    output: [
      {
        format: 'umd',
        file: resolve(pkg.browser),
      },
      {
        format: 'umd',
        sourcemap: true,
        file: resolve(rename(pkg.browser, (name, ext) => `${name}.min${ext}`)),
        plugins: [terser(), filesize()],
      },
    ],
    plugins: [
      typescript({
        tsconfig: resolve('tsconfig.json'),
        target: 'es5',
        module: 'esnext',
        removeComments: true,
      }),
    ],
  }),
]

function rename(file, newname) {
  const dirname = path.dirname(file)
  const ext = path.extname(file)
  const name = path.basename(file, ext)
  return path.join(
    dirname,
    isFunction(newname) ? newname(name, ext) : `${newname}${ext}`,
  )
}

function resolve(filename) {
  return path.join(__dirname, filename)
}

function mergeConfig(object, sources) {
  return mergeWith({ ...object }, sources, function (objValue, srcValue, key) {
    switch (key) {
      case 'output':
        if (Array.isArray(srcValue)) {
          if (Array.isArray(objValue)) return srcValue
          return srcValue.map(out => Object.assign({}, objValue, out))
        }
        return Object.assign({}, objValue, srcValue)
      case 'plugins':
        return objValue.concat(srcValue || [])
      default:
        return srcValue || objValue
    }
  })
}
