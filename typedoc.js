const pkg = require('./package.json')

module.exports = {
  name: pkg.name,
  readme: './README.md',
  gitRevision: 'master',
  out: 'docs',
  excludePrivate: true,
  excludeExternals: true,
  exclude: ['src/index.ts', '**/*.spec.ts', '**/*.test.ts']
}
