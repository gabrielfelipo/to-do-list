import { Outlet, Route, Routes } from 'react-router-dom'
import { AuthWrapper } from '~/routes/AuthWrapper'
import { TaskList } from './pages/ListTasks'

export const TaskRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <AuthWrapper>
            <Outlet />
          </AuthWrapper>
        }
      >
        <Route element={<TaskList />} path="/tasks" />
      </Route>
    </Routes>
  )
}
