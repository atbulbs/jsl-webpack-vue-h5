import axios from 'axios'

axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

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
    const statusCode = err.response.status
    const statusCodeMap = {
      301: '永久重定向',
      400: '请求语法错误',
      401: '未授权',
      403: '禁止访问',
      404: '没有资源',
      500: '服务器错误',
      503: '服务器错误'
    }
    console.log(statusCodeMap[statusCode] || '未知网络请求错误')
    return Promise.reject(err)
  }
)

const get = async (url, params) => {
  let res = null
  if (params) {
    res = await axios.get(url, {params})
  } else {
    res = await axios(url)
  }
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
