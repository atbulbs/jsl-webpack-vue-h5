const resolve = require('../utils/resolve')

const outputConfig = {
  filename: 'bundle.[hash:8].js',
  path: resolve('dist'),
  publicPath: '/'
}

module.exports = outputConfig
