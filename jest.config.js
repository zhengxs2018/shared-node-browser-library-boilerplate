// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const pkg = require('./package.json')

/**
 * @type {import('@jest/types/build/Config').ProjectConfig}
 */
module.exports = {
  name: pkg.name,
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules', 'cypress'],
}
