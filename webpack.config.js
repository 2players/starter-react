/* eslint-env node */
const path = require('path')
const merge = require('webpack-merge')
const setupIO = require('./webpack.parts/setup-io')
const setupDevServer = require('./webpack.parts/setup-dev-server')
const loadHTML = require('./webpack.parts/load-html')
const loadJS = require('./webpack.parts/load-js')
const loadCSS = require('./webpack.parts/load-css')
const loadMedia = require('./webpack.parts/load-media')
const loadEnvs = require('./webpack.parts/load-envs')
const minify = require('./webpack.parts/minify')
const forceCaseSensitivePath = require('./webpack.parts/force-case-sensitive-path')
const generateSourcemap = require('./webpack.parts/generate-sourcemap')
const cleanupBuilds = require('./webpack.parts/cleanup-builds')

function resolve(p) {
  const ROOT = path.resolve(__dirname)
  return path.resolve(ROOT, p)
}

const PATH_SRC = resolve('src')
const PATH_FT = resolve('node_modules/@2players/ft/src')

const commonConfig = merge([
  {
    resolve: { alias: { ft: PATH_FT } },
  },
  setupIO(resolve('src/index.js'), resolve('dist')),
  loadJS({ include: [PATH_SRC, PATH_FT] }),
  loadHTML(resolve('src/index.html')),
  loadMedia(),
  loadEnvs(['APP_ENV']),
  forceCaseSensitivePath(),
])

function developmentConfig() {
  return merge([
    commonConfig,
    setupDevServer(),
    loadCSS({ production: false }),
    generateSourcemap({ production: false }),
  ])
}

function productionConfig() {
  return merge([
    commonConfig,
    loadCSS({ production: false }),
    minify(),
    cleanupBuilds(),
  ])
}

/* eslint-disable-next-line */
module.exports = function(_, { mode } = { mode: 'NO_MODE' }) {
  const config =
    mode === 'production' ? productionConfig() : developmentConfig()

  return config
}
