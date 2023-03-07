import { Routes, Route } from "react-router-dom";

import Login from '../pages/Login';
import Signup from "../pages/Signup";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Signup />} path="/signup" />
    </Routes>
  )
}