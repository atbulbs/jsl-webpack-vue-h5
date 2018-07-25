const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    if (to.matched.some(m => m.meta.scrollToBottom)) {
      const body = window.document.getElementsByTagName('body')[0]
      const height = body.getBoundingClientRect().height
      position.x = 0
      position.y = height
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(position)
      }, 500)
    })
  }
}

export default scrollBehavior
