import { uaKeyWordsMap } from 'js/constants-define'

export function getLocal (str) {
  return JSON.parse(window.localStorage.getItem(str))
}

export function setLocal (str, data) {
  window.localStorage.setItem(str, JSON.stringify(data))
}

export function formatQuery (obj) {
  let result = '?'
  Object.keys(obj).forEach((key) => {
    result += key + '=' + obj[key]
  })
  return result
}

export function isInWechat () {
  const ua = window.navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') > -1) {
    return true
  } else {
    return false
  }
}

export function getH5Runtime () {
  let result = ''
  const ua = window.navigator.userAgent.toLowerCase()
  Object.keys(uaKeyWordsMap).forEach((runtime) => {
    const uaKeyWord = uaKeyWordsMap[runtime].toLowerCase()
    if (ua.indexOf(uaKeyWord) > -1) {
      result = runtime
    }
  })
  return result
}

export function toVw (num) {
  return ((window.Number(num).toFixed(5) / 375) * 100).toFixed(5) + 'vw'
}
