import Axios from 'axios'
import { parseCookies } from 'nookies'

export function buildAxios(ctx?: any) {
  const { 'finx.token': token } = parseCookies(ctx)

  const axios = Axios.create({
    baseURL: 'https://personal-finance-api.herokuapp.com'
  })

  if (token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`
  }

  return axios
}
