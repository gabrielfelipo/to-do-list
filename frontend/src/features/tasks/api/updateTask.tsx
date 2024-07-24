import { useMutation } from '@tanstack/react-query'
import { axiosInstance } from '~/lib/axios'
import { Task } from '~/types'

type UpdateTaskDto = {
  id: string
  name?: string
  description?: string
  priority?: string
  finalized?: boolean
}

type UpdateTaskResponse = {
  message: string
  response: Task
}

const updateTask = async (payload: UpdateTaskDto) => {
  console.log(payload)
  const { data } = await axiosInstance.patch<UpdateTaskResponse>(
    '/tasks',
    payload
  )

  return data.response
}

export const useUpdateTask = () => {
  return useMutation({
    mutationKey: ['update-task'],
    mutationFn: async (payload: UpdateTaskDto) => {
      return await updateTask(payload)
    },
  })
}
