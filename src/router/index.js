import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './router.config'
import * as navigationGuards from './navigationGuards'

Vue.use(VueRouter)

const router = new VueRouter(RouterConfig)

Object.keys(navigationGuards).forEach((key) => {
  router[key](navigationGuards[key])
})

export default router
