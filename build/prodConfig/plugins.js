const webpack = require('webpack')
const commonPlugins = require('../commonPlugins')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const prodPlugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash:8].css',
    chunkFilename: '[id].css'
  }),
  new webpack.NamedChunksPlugin()
]

const pluginsConfig = [...commonPlugins, ...prodPlugins]

module.exports = pluginsConfig
