import { z } from 'zod'

export const finalizeTaskSchema = z.object({
  id: z.string(),
})

export type FinalizeTaskDto = z.infer<typeof finalizeTaskSchema>
