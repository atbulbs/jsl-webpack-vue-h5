const Koa = require('koa')
const path = require('path')
const Static = require('koa-static')
const proxy = require('http-proxy-middleware')
const send = require('koa-send')
const history = require('koa-connect-history-api-fallback')

const app = new Koa()

app.use(history({
  verbose: true,
  disableDotRule: true,
  rewrites: [
    {
      from: /(js|css)$/,
      to (ctx) {
        const path = ctx.parsedUrl.pathname
        const staticIndex = path.indexOf('/static')
        if (staticIndex > -1) {
          return path.slice(staticIndex)
        } else {
          const index = path.lastIndexOf('/')
          return path.slice(index)
        }
      }
    }
  ]
}))

const Public = Static(path.join(__dirname, '../dist'))
app.use(Public)

const favicon = async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, '/favicon.ico', {
      root: path.join(__dirname, '../')
    })
  } else {
    await next()
  }
}
app.use(favicon)

const proxyOptions = {
  target: 'yourServerUrl',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/'
  }
}
const proxyMiddleware = async (ctx, next) => {
  if (ctx.url.startsWith('/api')) {
    ctx.respond = false
    return proxy(proxyOptions)(ctx.req, ctx.res, next)
  }
  return next()
}
app.use(proxyMiddleware)

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 8001

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
