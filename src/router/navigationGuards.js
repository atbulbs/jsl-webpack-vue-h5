const beforeEach = (to, from, next) => {
  // console.log('beforeEach to', to)
  // console.log('beforeEach from', from)
  next()
}

const beforeResolve = (to, from, next) => {
  // console.log('beforeResolve to', to)
  // console.log('beforeResolve from', from)
  next()
}

const afterEach = (to, from) => {
  // console.log('afterEach to', to)
  // console.log('afterEach from', from)
  window.scrollTo(0, 0)
}

export { beforeEach, afterEach, beforeResolve }
