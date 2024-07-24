export type Task = {
  id: string
  name: string
  description: string
  finalized: boolean
  endDate?: Date
  priority: Priority
  memberId: string
}

export type Member = {
  id: string
  email: string
  name: string
  password: string
}

export type MemberKind = {
  kind: 'Member'
} & Member

export enum Priority {
  Baixa = 'Baixa',
  Media = 'Media',
  Alta = 'Alta',
}

export type TableTaskProps = {
  tasks: Task[]
}
