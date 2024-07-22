import { z } from 'zod'

export const createMemberSchema = z.object({
  name: z.string().min(5, 'Name is too short'),
  email: z.string(),
  password: z.string().min(3, 'Password is too short'),
})

export type CreateMemberDto = z.infer<typeof createMemberSchema>
