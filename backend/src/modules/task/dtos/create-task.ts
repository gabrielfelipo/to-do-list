import { Priority } from 'src/common/constants'
import { z } from 'zod'

export const createTaskSchema = z.object({
  name: z.string().min(5, 'Name is too short'),
  description: z.string(),
  priority: z.nativeEnum(Priority)
})

export type CreateTaskDto = z.infer<typeof createTaskSchema>