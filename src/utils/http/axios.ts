import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
const baseURL = import.meta.env.VITE_APP_BASE_API
import { useUserStore } from '@/store/modules/user'

// Create a custom Axios instance
const request: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
})

// Add request interceptor
request.interceptors.request.use((config) => {
  // Modify the request if needed
  const token = useUserStore().token
  if (token) {
    config.headers.token = useUserStore().token
  }

  // For example add headers or request data
  return config
})

// Add response interceptor
request.interceptors.response.use(
  (response: AxiosResponse) => {
    // Modify the response if needed
    // For example, extract data or handle errors
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  (error) => {
    // Handle response error
    let message = ''
    const status = error.response?.status
    switch (status) {
      case 401:
        message = '未授权，请重新登录'
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = `请求地址出错`
        break
      case 500:
        message = '服务器内部错误'
        break
    }
    ElMessage.error(message)
    return Promise.reject(error)
  },
)
export default request
