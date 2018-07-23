const resolve = require('../utils/resolve')

const resolveConfig = {
  extensions: ['.js', '.vue', '.json', '.jsx'],
  alias: {
    '@': resolve('src'),
    'pages': resolve('src/pages'),
    'components': resolve('src/components'),
    'base-components': resolve('src/base-components'),
    'js': resolve('src/assets/js'),
    'styles': resolve('src/assets/styles'),
    'images': resolve('src/assets/images'),
    'libs': resolve('src/libs')
  }
}

module.exports = resolveConfig
