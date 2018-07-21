const devServer = require('./devServer')
const entry = require('./entry')
const output = require('./output')
const rules = require('./rules')
const plugins = require('./plugins')
const devtool = require('./devtool')

const devConfig = {
  entry,
  output,
  module: {
    rules
  },
  plugins,
  devServer,
  devtool
}

module.exports = devConfig
