const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const rulesConfig = [
  {
    test: /\.styl$/,
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
  },
  {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }
    ]
  }
]

module.exports = rulesConfig
