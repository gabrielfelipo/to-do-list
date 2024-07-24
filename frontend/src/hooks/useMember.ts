import { axiosInstance, IApiResponse } from '~/lib/axios'
import { useQuery } from '@tanstack/react-query'

type IMember = {
  id: string
  name: string
}

type MemberResponse = IApiResponse<{
  member: IMember
}>

const member = async () => {
  try {
    const {
      data: {
        value: {
          response: { member },
        },
      },
    } = await axiosInstance.get<MemberResponse>('/members/user')
    return member
  } catch {
    return null as unknown as IMember
  }
}

export const useMember = () => {
  return useQuery({
    queryKey: ['get-member'],
    retry: 1,
    queryFn: member,
    initialData: null as unknown as IMember,
  })
}
