import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useMember } from "~/hooks/useMember"

type HomeWrapperProps = {
    children: ReactNode
}

export const HomeWrapper = ({children}: HomeWrapperProps) => {
    const { data: member } = useMember()

    console.log(member)
    if (member) return <Navigate to="/tasks" />

    return children
}
