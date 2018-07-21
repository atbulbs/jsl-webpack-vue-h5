const devServerConfig = {
  host: 'localhost',
  port: 8007,
  headers: {
    'Access-Control-Allow-Origins': '*'
  },
  proxy: {
    '/api': {
      target: 'http:yourIPAddress',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
  overlay: {
    errors: true
  },
  historyApiFallback: true,
  hot: true,
  open: true,
  openPage: 'base-url/home'
}

module.exports = devServerConfig
