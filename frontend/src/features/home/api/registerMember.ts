import { useMutation } from '@tanstack/react-query'
import { axiosInstance } from '~/lib/axios'
import { Member } from '~/types'

type RegisterMemberDto = {
  name: string
  email: string
  password: string
}

type RegisterMemberResponse = {
  message: string
  response: Member
}

const registerMember = async (payload: RegisterMemberDto) => {
  const { data } = await axiosInstance.post<RegisterMemberResponse>(
    '/members',
    payload
  )

  return data.response
}

export const useRegisterMember = () => {
  return useMutation({
    mutationKey: ['member-register'],
    mutationFn: async (payload: RegisterMemberDto) => {
      return await registerMember(payload)
    },
  })
}
