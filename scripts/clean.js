#!/usr/bin/env node
const path = require('path')
const del = require('del')

del.sync([resolve('dist'), resolve('dist-tsdoc'), resolve('types')])

function resolve(filename) {
  return path.join(__dirname, '..', filename)
}
