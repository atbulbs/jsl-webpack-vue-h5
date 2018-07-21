export function getLocal (str) {
  return JSON.parse(window.localStorage.getItem(str))
}

export function setLocal (str, data) {
  window.localStorage.setItem(str, JSON.stringify(data))
}

export function playCountFmt (num) {
  if (num > 10000) {
    return (num / 10000).toFixed(1) + '万'
  } else {
    return num + ''
  }
}
