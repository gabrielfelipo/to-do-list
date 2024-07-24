import { z } from 'zod'

export const deleteTaskSchema = z.object({
  id: z.string(),
})

export type DeleteTaskDto = z.infer<typeof deleteTaskSchema>
