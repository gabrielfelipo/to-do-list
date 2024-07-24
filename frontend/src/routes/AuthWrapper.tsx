import { useMember } from '~/hooks/useMember'
import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'

type AuthWrapperProps = {
  children: ReactNode
}

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const { data: member, isFetched } = useMember()

  if (!member && isFetched) return <Navigate to="/login" />

  if (!member) return null

  return children
}
