const LoginPage = () => import('pages/login')
const HomePage = () => import('pages/home')

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '*',
    redirect: '/'
  }
]
