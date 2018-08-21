const List = () => import('pages/list.vue')
const Live = () => import('pages/live.vue')

export default [
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/live',
    name: 'live',
    component: Live
  },
  {
    path: '*',
    redirect: '/'
  }
]
