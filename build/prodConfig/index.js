const entry = require('./entry')
const output = require('./output')
const rules = require('./rules')
const plugins = require('./plugins')
const optimization = require('./optimization')

const prodConfig = {
  entry,
  output,
  module: {
    rules
  },
  plugins,
  optimization
}

module.exports = prodConfig
