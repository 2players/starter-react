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

const PATH_ENTRY = resolve('src/index.html')
const PATH_SRC = resolve('src')
const PATH_SRC_INDEX = resolve('src/index.js')
const PATH_DIST = resolve('dist')

const commonConfig = [
  setupIO(PATH_SRC_INDEX, PATH_DIST),
  loadHTML(PATH_ENTRY),
  loadCSS(),
  loadJS({ include: [PATH_SRC] }),
  loadMedia(),
  loadEnvs(['APP_ENV']),
  forceCaseSensitivePath(),
  generateSourcemap(),
]

const developmentConfig = [...commonConfig, setupDevServer()]
const productionConfig = [...commonConfig, minify(), cleanupBuild()]

/* eslint-disable-next-line */
module.exports = function(_, { mode } = { mode: 'NO_MODE' }) {
  const config = mode === 'production' ? productionConfig : developmentConfig
  return merge(config)
}
