import { Routes, Route } from "react-router-dom";

import Login from '../pages/Login';
import Profile from "../pages/Profile";
import Quiz from "../pages/Quiz";
import Ranking from "../pages/Ranking";
import Signup from "../pages/Signup";
import Wallet from "../pages/Wallet";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Signup />} path="/signup" />
      <Route element={<Ranking />} path="/ranking" />
      <Route element={<Wallet />} path="/wallet" />
      <Route element={<Quiz />} path="/quiz" />
      <Route element={<Profile />} path="/profile" />
    </Routes>
  )
}