/* eslint-env node */
const { getHash, isFileFlatEnabled } = require('./helper')

const prefix = isFileFlatEnabled() ? '' : 'medias/'
const use = {
  loader: 'file-loader',
  options: {
    name: `${prefix}[name]${getHash()}.[ext]`,
  },
}

const loadMedia = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|mp4|ts|m4a|mp3|ogg|atlas|txt|cfg|woff|woff2|eot|ttf|otf)$/,
        include,
        exclude,
        use,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        // fix error when loading JSON files in webpack 4
        // https://github.com/webpack-contrib/file-loader/issues/264
        test: /\.json$/,
        type: 'javascript/auto',
        use,
      },
    ],
  },
})

module.exports = loadMedia
