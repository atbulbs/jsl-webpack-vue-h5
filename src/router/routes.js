const Home = () => import('pages/home.vue')
const List = () => import('pages/list.vue')
const Item = () => import('pages/item.vue')

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/list/:id',
    name: 'list',
    component: List,
    meta: {
      metaData: 'it is metaData from list route',
      scrollToBottom: true
    },
    children: [
      {
        path: '',
        component: Item
      },
      {
        path: 'item',
        component: Item
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
