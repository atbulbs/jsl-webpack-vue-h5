import axios from 'axios'
import {
  defaultTimeout,
  defaultContentType,
  statusCodeMap
} from 'shared/constants-define'

axios.defaults.timeout = defaultTimeout
axios.defaults.headers.post['Content-Type'] = defaultContentType

axios.interceptors.request.use(
  config => {
    if (!window.navigator.onLine) {
      console.log('网络请求失败，请检查您的网络设置')
      return Promise.resolve({ msg: '网络请求失败，请检查您的网络设置' })
    }
    return config
  },
  err => {
    console.log('req_err: ', err)
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  res => {
    return res
  },
  err => {
    console.log('res_err: ', err)
    if (err.code === 'ECONNABORTED') {
      console.dir(err)
      console.log('请求超时')
      return Promise.reject(err)
    }
    if (!err) {
      return
    }
    const statusCode = err.response.status
    console.log(statusCodeMap[statusCode] || '未知网络请求错误')
    return Promise.reject(err)
  }
)

const get = async (url, params = {}, headers = {}) => {
  const res = await axios.get(url, { params, headers })
  return Promise.resolve(res)
}

const post = async (url, data) => {
  const res = await axios({
    method: 'post',
    url,
    data
  })
  return Promise.resolve(res)
}

export default { get, post }
