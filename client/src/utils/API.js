import axios from 'axios'

const API = axios.create({
  baseURL:
    process.env.NODE_ENV == 'development'
      ? 'http://localhost:3005/api'
      : '/api',
  headers: {
    'Content-type': 'application/json',
  },
})

API.interceptors.request.use((req) => {
  req.headers.authorization = `Bearer ${
    JSON.parse(localStorage.getItem('user'))?.token
  }`

  return req
})

API.interceptors.response.use((res) => {
  return res.data
})

export default API
