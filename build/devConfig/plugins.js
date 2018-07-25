const webpack = require('webpack')
const commonPlugins = require('../commonPlugins')

const devPlugins = [
  new webpack.HotModuleReplacementPlugin()
]

const pluginsConfig = [...commonPlugins, ...devPlugins]

module.exports = pluginsConfig
