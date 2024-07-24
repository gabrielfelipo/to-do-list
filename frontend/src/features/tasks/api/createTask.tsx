import { useMutation } from '@tanstack/react-query'
import { axiosInstance } from '~/lib/axios'
import { Task } from '~/types'

type CreateTaskDto = {
  name: string
  description?: string
  priority: string
}

type CreateTaskResponse = {
  message: string
  response: Task
}

const createTask = async (payload: CreateTaskDto) => {
  const { data } = await axiosInstance.post<CreateTaskResponse>(
    '/tasks',
    payload
  )

  return data.response
}

export const useCreateTask = () => {
  return useMutation({
    mutationKey: ['create-task'],
    mutationFn: async (payload: CreateTaskDto) => {
      return await createTask(payload)
    },
  })
}
