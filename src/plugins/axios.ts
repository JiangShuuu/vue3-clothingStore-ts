import axios, { AxiosRequestConfig } from 'axios'
// axios
const baseURL = import.meta.env.VITE_APIURL

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

axiosInstance.interceptors.request.use(
  (config:AxiosRequestConfig) => {
    const token = localStorage.getItem('token')

    config.headers = config.headers ?? {}

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (err) => Promise.reject(err)
)

export const apiHelper = axiosInstance
