import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '~/lib/axios'
import { Task } from '~/types'

type ListTaskResponse = {
  value: {
    message: string
    response: {
      tasks: Task[]
    }
  }
}

const listTasks = async (): Promise<Task[]> => {
  const { data } = await axiosInstance.get<ListTaskResponse>('/tasks/all')
  return data.value.response.tasks
}

export const useListTasks = () => {
  return useQuery({
    queryKey: ['tasks-list'],
    queryFn: listTasks,
    select: data => data,
  })
}
