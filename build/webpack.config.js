const merge = require('webpack-merge')
const commonConfig = require('./commonConfig')
const devConfig = require('./devConfig')
const prodConfig = require('./prodConfig')
const isDev = require('./utils/isDev')

let config

if (isDev) {
  config = merge(commonConfig, devConfig)
} else {
  config = merge(commonConfig, prodConfig)
}

module.exports = config
