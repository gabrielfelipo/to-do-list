import { useMember } from '~/hooks/useMember'
import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'

type HomeWrapperProps = {
  children: ReactNode
}

export const HomeWrapper = ({ children }: HomeWrapperProps) => {
  const { data: member } = useMember()

  console.log(member)
  if (member) return <Navigate to="/tasks" />

  return children
}
