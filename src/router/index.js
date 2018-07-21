import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './router.config'

Vue.use(VueRouter)

const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to) => {
  window.scrollTo(0, 0)
})

export default router
