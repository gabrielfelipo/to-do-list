import { Outlet, Route, Routes } from 'react-router-dom'
import { TaskList } from './pages/ListTasks'
import { AuthWrapper } from '~/routes/AuthWrapper'

export const TaskRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthWrapper><Outlet /></AuthWrapper>}>
      <Route element={<TaskList />} path="/tasks" />
      </Route>
    </Routes>
  )
}
