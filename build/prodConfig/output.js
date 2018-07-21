const resolve = require('../utils/resolve')

const outputConfig = {
  filename: '[name].[chunkhash:8].js',
  path: resolve('dist')
}

module.exports = outputConfig
