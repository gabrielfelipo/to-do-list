export type Task = {
  id: string
  name: string
  description?: string
  finalized: string
  endDate?: Date
  priority: string
  member: Member
}

export type Member = {
  id: string
  email: string
  name: string
  password: string
}
