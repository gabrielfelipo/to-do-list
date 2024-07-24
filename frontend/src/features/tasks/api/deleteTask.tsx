import { useMutation } from '@tanstack/react-query'
import { axiosInstance } from '~/lib/axios'

type DeleteTaskDto = {
  id: string
}

type DeleteTaskResponse = {
  value: {
    message: string
    response: {}
  }
}

const deleteTasks = async (payload: DeleteTaskDto): Promise<string> => {
  const { data } = await axiosInstance.delete<DeleteTaskResponse>('/tasks', {
    data: payload,
  })
  return data.value.message
}

export const useDeleteTasks = () => {
  return useMutation({
    mutationKey: ['task-delete'],
    mutationFn: async (payload: DeleteTaskDto) => {
      const result = await deleteTasks(payload)
      return result
    },
  })
}
