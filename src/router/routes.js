const List = () => import('pages/list')
const Live = () => import('pages/live')
const Welcome = () => import('pages/welcome')

export default [
  {
    path: '/',
    redirect: '/welcome'
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
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '*',
    redirect: '/'
  }
]
