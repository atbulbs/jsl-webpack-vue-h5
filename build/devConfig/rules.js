const commonRules = require('../commonRules')

const devRules = [
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
  }
]

rulesConfig = [...commonRules, ...devRules]

module.exports = rulesConfig
