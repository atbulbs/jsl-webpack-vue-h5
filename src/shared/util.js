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

export function toVw (num) {
  return ((window.Number(num).toFixed(5) / 375) * 100).toFixed(5) + 'vw'
}
