const resolve = require('../utils/resolve')
const commonRules = require('../commonRules')

const devRules = [
  {
    enforce: 'pre',
    test: /.(jsx?|vue)$/,
    loader: 'eslint-loader',
    include: resolve('src'),
    exclude: /node_modules/
  },
  {
    test: /\.styl(us)?$/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  },
  {
    test: /\.less$/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'less-loader'
    ]
  }
]

rulesConfig = [...commonRules, ...devRules]

module.exports = rulesConfig
