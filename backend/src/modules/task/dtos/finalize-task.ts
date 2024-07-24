import { z } from 'zod'

export const finalizeTaskSchema = z.object({
  id: z.string(),
  finalized: z.boolean(),
})

export type FinalizeTaskDto = z.infer<typeof finalizeTaskSchema>
