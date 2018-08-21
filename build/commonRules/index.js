const resolve = require('../utils/resolve')
const vueLoaderOptions = require('./vue-loader')
const isDev = require('../utils/isDev')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const commonRulesConfig = [
  {
    test: /\.vue$/,
    use: [
      {
        loader: 'vue-loader',
        options: vueLoaderOptions
      }
    ]
  },
  {
    test: /\.jsx?$/,
    use: {
      loader: 'babel-loader'
    },
    exclude: file => (
      /node_modules/.test(file) &&
      !/\.vue\.js/.test(file)
    ),
    include: [
      resolve('src')
    ]
  },
  {
    test: /\.css$/,
    use: [
      isDev
        ? 'vue-style-loader'
        : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
      'postcss-loader'
    ]
  },
  {
    test: /\.(jpg|png|jpeg|gif|svg)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/imgs/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'static/fonts/[name].[hash:8].[ext]'
    }
  },
  {
    test: /\.(mp3|mp4)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      name:'static/media/[name].[hash:8].[ext]',
      limit:10
    }
  }
]

module.exports = commonRulesConfig

