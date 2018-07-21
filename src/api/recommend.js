import $ from 'api/axios.config'

export function getBanner () {
  return $.get('/banner')
}
