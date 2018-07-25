const commonRules = require('../commonRules')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const prodRules = [
  {
    test: /\.styl(us)?$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      },
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
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      },
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

const rulesConfig = [...commonRules, ...prodRules]

module.exports = rulesConfig
