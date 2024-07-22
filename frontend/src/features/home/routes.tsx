import { Route, Routes } from 'react-router-dom'

import { Register } from './pages/Register'

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route element={<Register/>} path="/register" />
      {/* <Route element={<ListSchedules />} path="/schedules/" /> */}
    </Routes>
  )
}
