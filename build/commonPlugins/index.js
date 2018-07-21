const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const resolve = require('../utils/resolve')
const isDev = require('../utils/isDev')

const commonPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin({
    template: resolve('build/template.html'),
    minify: {
      minifyCSS: true,
      minifyJS: true
    },
    chunksSortMode: 'none'
  })
]

module.exports = commonPlugins
