import axios, { AxiosError } from 'axios'
import { config } from '~/config'

export const axiosInstance = axios.create({
  baseURL: config.apiUrl,
})

const getAuthHeader = () => {
  const token = localStorage.getItem('token')
  if (token) {
    return `Bearer ${token}`
  }
}

axiosInstance.interceptors.request.use(
  config => {
    config.headers.Authorization = getAuthHeader()
    return config
  },
  error => Promise.reject(error)
)

export function setAuthorizationToken(token: string) {
  localStorage.setItem('token', token)
}

export type IApiResponse<T> = {
  value: {
    message: string
    response: T
  }
}

export type RawApiError = AxiosError<{
  code: number
  message: string
  response: Record<string, unknown>
}>

export class ApiError extends Error {
  httpStatus?: number
  code: number
  errorType: string
  response: {
    [key: string]: unknown
  }

  constructor(error: RawApiError) {
    super()
    this.name = 'ApiError'
    this.httpStatus = error.response?.status
    this.code = error.response?.data?.code!
    this.errorType = error.response?.data?.message!
    this.response = error.response?.data?.response!
  }
}
