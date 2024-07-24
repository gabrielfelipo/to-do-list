import { axiosInstance, IApiResponse, setAuthorizationToken } from '~/lib/axios'
import { useMutation } from '@tanstack/react-query'

type LoginDto = {
  email: string
  password: string
}

type LoginResponse = IApiResponse<{
  access_token: string
}>

export const loginFn = async (payload: LoginDto) => {
  const { data } = await axiosInstance.post<LoginResponse>(
    '/auth/login',
    payload
  )

  setAuthorizationToken(data.value.response.access_token)

  return data.value.response
}

export const useLogin = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (payload: LoginDto) => {
      const result = await loginFn(payload)

      return result
    },
  })
}
