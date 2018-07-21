const webpack = require('webpack')
const commonPlugins = require('../commonPlugins')
const  HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin()

const pluginsConfig = commonPlugins.concat(HotModuleReplacementPlugin)

module.exports = pluginsConfig
