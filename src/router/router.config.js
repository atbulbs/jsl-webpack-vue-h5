import routes from './routes'
import scrollBehavior from './scrollBehavior'

const RouterConfig = {
  mode: 'history',
  base: '/base-url/',
  routes,
  scrollBehavior
}

export default RouterConfig
