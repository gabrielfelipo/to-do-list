import { useMutation } from '@tanstack/react-query'
import { axiosInstance } from '~/lib/axios'
import { Task } from '~/types'

type FinalizeTaskDto = {
  id: string
  finalized: boolean
}

type FinalizeTaskResponse = {
  message: string
  response: Task
}

const finalizeTask = async (payload: FinalizeTaskDto) => {
  console.log(payload)
  const { data } = await axiosInstance.patch<FinalizeTaskResponse>(
    '/tasks/finalize',
    payload
  )

  return data.response
}

export const useFinalizeTask = () => {
  return useMutation({
    mutationKey: ['finalize-task'],
    mutationFn: async (payload: FinalizeTaskDto) => {
      return await finalizeTask(payload)
    },
  })
}
