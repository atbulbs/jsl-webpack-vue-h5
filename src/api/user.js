import $ from 'api/axios.config'

export function loginRefresh () {
  return $.get('/login/refresh')
}
