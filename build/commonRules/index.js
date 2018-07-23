const resolve = require('../utils/resolve')
const createVueLoaderOptions = require('./vue-loader')

const commonRulesConfig = [
  {
    test: /\.vue$/,
    use: [
      {
        loader: 'vue-loader',
        options: createVueLoaderOptions()
      }
    ]
  },
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    },
    include: [
      resolve('src')
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
    exclude: /node_modules/,
    options: {
      limit: 10000,
      name: 'static/fonts/[name].[hash:8].[ext]'
    }
  }
]

module.exports = commonRulesConfig

