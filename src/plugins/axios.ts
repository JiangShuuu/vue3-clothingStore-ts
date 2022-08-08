import axios from 'axios'
// axios
const baseURL = import.meta.env.VITE_APIURL

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(
  (config:any) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (err) => Promise.reject(err)
)

export const apiHelper = axiosInstance
