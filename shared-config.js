/* eslint-env node */

// This module share informations between Babel and Webpack configurations.

const path = require('path')

const context = path.resolve(__dirname, 'src')
const localIdentName = '[path]___[name]__[local]___[hash:base64:5]'
const reactCSSModule = {
  context,
  localIdentName,
}

module.exports = {
  reactCSSModule,
}
