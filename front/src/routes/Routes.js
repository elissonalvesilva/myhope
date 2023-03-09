import { Routes, Route } from "react-router-dom";

import Login from '../pages/Login';
import Profile from "../pages/Profile";
import Quizzes from "../pages/Quizzes";
import Quiz from "../pages/Quiz";
import Ranking from "../pages/Ranking";
import Signup from "../pages/Signup";
import Wallet from "../pages/Wallet";
import Photo from "../pages/Photo";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Signup />} path="/signup" />
      <Route element={<Ranking />} path="/ranking" />
      <Route element={<Wallet />} path="/wallet" />
      <Route element={<Quizzes />} path="/quizzes" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<Photo />} path="/profile/photo" />
      <Route element={<Quiz />} path="/quiz/:quizId" />
    </Routes>
  )
}