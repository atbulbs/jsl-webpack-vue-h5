const webpack = require('webpack')
const commonPlugins = require('../commonPlugins')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const pluginsConfig = commonPlugins.concat([
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash:8].css',
    chunkFilename: '[id].css'
  }),
  new webpack.NamedChunksPlugin()
])

module.exports = pluginsConfig
