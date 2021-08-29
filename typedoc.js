module.exports = {
  readme: 'none',
  entryPoints: ['src/index.ts'],
  out: 'dist-tsdoc',
  excludePrivate: true,
  excludeExternals: true,
  exclude: ['src/index.ts', '**/*.spec.ts', '**/*.test.ts'],
}
