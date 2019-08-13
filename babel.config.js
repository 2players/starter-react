/* eslint-env node */

const sharedConfig = require('./shared-config')

const babelPluginReactCSSModules = () => {
  const { context, localIdentName } = sharedConfig.reactCSSModule
  return [
    'babel-plugin-react-css-modules',
    { context, generateScopedName: localIdentName },
  ]
}

module.exports = function generateConfig(api) {
  api.cache(true)

  const presets = [
    ['@babel/preset-env', { useBuiltIns: 'entry', corejs: 3, modules: false }],
    '@babel/preset-react',
  ]

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    babelPluginReactCSSModules(),
  ]

  return {
    presets,
    plugins,
  }
}
