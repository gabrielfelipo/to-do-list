import { Outlet, Route, Routes } from 'react-router-dom'

import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { HomeWrapper } from '~/routes/HomeWrapper'

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route
      element={
        <HomeWrapper>
        <Outlet />
      </HomeWrapper>
      }>
       

      <Route element={<Register />} path="/register" />
      <Route element={<Login />} path="/login" />
      </Route>
    </Routes>
  )
}
