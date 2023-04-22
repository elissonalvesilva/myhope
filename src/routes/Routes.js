import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Login from '../pages/Login';
import Profile from "../pages/Profile";
import Quizzes from "../pages/Quizzes";
import Quiz from "../pages/Quiz";
import Ranking from "../pages/Ranking";
import Signup from "../pages/Signup";
import Wallet from "../pages/Wallet";
import FirstAccess from "../pages/FirstAccess";
import EditProfile from "../pages/EditProfile";
import { AuthenticationContext } from "../contexts/AuthenticationContext";



const PrivateRoute = ({ Component }) => {
  const [token, setToken, logado] = useContext(AuthenticationContext);

  return logado ? <Component /> : <Login />
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Signup />} path="/signup" />
      <Route element={<PrivateRoute Component={Ranking} />} path="/ranking" />
      <Route element={<PrivateRoute Component={Wallet} />} path="/wallet" />
      <Route element={<PrivateRoute Component={Quizzes} />} path="/quizzes" />
      <Route element={<PrivateRoute Component={Profile} />} path="/profile" />
      <Route element={<PrivateRoute Component={EditProfile} />} path="/profile/edit" />
      <Route element={<PrivateRoute Component={FirstAccess} />} path="/intro" />
      <Route element={<PrivateRoute Component={Quiz} />} path="/quiz/:quizId" />
    </Routes>
  )
}