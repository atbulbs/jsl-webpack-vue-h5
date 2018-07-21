const path = require('path')

const resolve =  function (dir) {
  let route = '../..'
  const reg = /build$/
  if (reg.test(__dirname)) {
    route = '..'
  }
  return path.join(__dirname, route, dir)
}

module.exports = resolve
