import { Routes, Route } from "react-router-dom";

import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
    </Routes>
  )
}