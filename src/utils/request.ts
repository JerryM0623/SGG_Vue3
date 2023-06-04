import axios from 'axios'
import { ElMessage } from 'element-plus'

const env = import.meta.env

const request = axios.create({
  baseURL:
    env.VITE_APP_BASE_URL +
    ':' +
    env.VITE_APP_BASE_PORT +
    env.VITE_APP_BASE_API,
  timeout: 5 * 1000,
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    let message = ''
    const status = error.response.status
    switch (status) {
      case 401:
        message = '登录失效，请重新登录'
        break
      case 403:
        message = '权限不足'
        break
      case 404:
        message = '地址请求失败'
        break
      case 500:
        message = '服务器开小差了！！'
        break
      default:
        message = '网络错误, 请稍后重试'
        break
    }
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)

export default request
