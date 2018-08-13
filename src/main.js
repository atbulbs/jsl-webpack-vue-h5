import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'styles/index.styl'

import store from './store'
import axios from 'axios'

import { wechatConfig } from 'js/wechat-config'

if (process.env.NODE_ENV !== 'production') {
  axios.defaults.baseURL = '/api/'
} else {
  axios.defaults.baseURL = '/'
}

wechatConfig()

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('images/default.jpg')
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
