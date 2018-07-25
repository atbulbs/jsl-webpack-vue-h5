const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const resolve = require('../utils/resolve')

const commonPlugins = [
  new VueLoaderPlugin(),
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
