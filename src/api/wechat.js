import $ from 'api/axios.config'
import { appId, url } from 'shared/constants-define'

export function getConfigInfo () {
  return $.get('/', { appId }, { withCredentials: true })
}

export function getSignature () {
  return $.get('/?appId=' + appId + '&url=' + url)
}
