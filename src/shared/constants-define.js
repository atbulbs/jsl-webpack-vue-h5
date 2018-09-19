export const defaultTimeout = 10000

export const defaultContentType = 'application/x-www-form-urlencoded;charset=UTF-8'

export const statusCodeMap = {
  301: '永久重定向',
  400: '请求语法错误',
  401: '未授权',
  403: '禁止访问',
  404: '没有资源',
  500: '服务器错误',
  503: '服务器错误'
}

export const STATUS_OK = 0

export const appId = 'wx2f763d09aa9ca523'

export const url = window.encodeURIComponent(window.location.href.split('#')[0])

export const jsApiList = ['onMenuShareAppMessage', 'onMenuShareTimeline']

export const wxShareInfo = {
  title: '微信分享标题',
  desc: '微信分享描述',
  type: '',
  dataUrl: '',
  imgUrl: '',
  link: ''
}
