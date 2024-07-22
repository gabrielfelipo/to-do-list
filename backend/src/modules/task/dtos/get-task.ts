import { z } from 'zod'

export const getTaskSchema = z.object({
  id: z.string(),
})

export type GetTaskDto = z.infer<typeof getTaskSchema>
