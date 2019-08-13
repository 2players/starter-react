/* eslint-env node */
const path = require('path')
const {
  merge,
  setupIO,
  setupDevServer,
  loadHTML,
  loadJS,
  loadCSS,
  loadMedia,
  loadEnvs,
  minify,
  forceCaseSensitivePath,
  generateSourcemap,
  cleanupBuild,
} = require('webpack-config-parts')

function resolve(p) {
  const ROOT = path.resolve(__dirname)
  return path.resolve(ROOT, p)
}

const PATH_SRC = resolve('src')

const commonConfig = merge([
  setupIO(resolve('src/index.js'), resolve('dist')),
  loadJS({ include: [PATH_SRC] }),
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
    cleanupBuild(),
  ])
}

/* eslint-disable-next-line */
module.exports = function(_, { mode } = { mode: 'NO_MODE' }) {
  const config =
    mode === 'production' ? productionConfig() : developmentConfig()

  return config
}
