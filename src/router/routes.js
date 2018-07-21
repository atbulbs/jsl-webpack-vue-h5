import Home from 'pages/home.vue'
import List from 'pages/list.vue'

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/list/:id',
    name: 'list',
    component: List,
    meta: {
      metaData: 'it is a metaData'
    }
  }
]
