const merge = require('webpack-merge')
const commonConfig = require('./commonConfig')
const devConfig = require('./devConfig')
const prodConfig = require('./prodConfig')
const isDev = require('./utils/isDev')

let webpackConfig = null

if (isDev) {
  webpackConfig = merge(commonConfig, devConfig)
} else {
  webpackConfig = merge(commonConfig, prodConfig)
}

module.exports = webpackConfig
