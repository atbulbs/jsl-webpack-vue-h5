const resolve = require('../utils/resolve')

const resolveConfig = {
  extensions: ['.js', '.vue', '.json', '.jsx'],
  alias: {
    '@': resolve('src'),
    'pages': resolve('src/pages'),
    'js': resolve('src/assets/js'),
    'styles': resolve('src/assets/styles'),
    'images': resolve('src/assets/images')
  }
}

module.exports = resolveConfig
