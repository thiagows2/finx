import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: any) {
  const { 'finx.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'https://personal-finance-api.herokuapp.com'
  })

  api.interceptors.request.use((config) => {
    console.log(config)

    return config
  })

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  return api
}
