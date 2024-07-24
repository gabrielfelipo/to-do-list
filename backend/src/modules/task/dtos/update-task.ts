import { Priority } from 'src/common/constants'
import { z } from 'zod'

export const updateTaskSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(5, 'Name is too short').optional(),
  description: z.string().optional(),
  priority: z.nativeEnum(Priority).optional(),
})

export type UpdateTaskDto = z.infer<typeof updateTaskSchema>
