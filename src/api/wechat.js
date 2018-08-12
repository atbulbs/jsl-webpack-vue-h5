import $ from 'api/axios.config'
import { appId, url } from 'js/constants-define'

export function getConfigInfo () {
  return $.get('/tkmap/wechat/getAppInfo.do', { appId }, { withCredentials: true })
}

export function getSignature () {
  return $.get('/tkmap/wechat/jsapi/getSignature.do?appId=' + appId + '&url=' + url)
}
