import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/containers/login/signin/signinPage.js";
import Register from "./components/containers/login/signup/signupPage.js";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/E-PPO/login-account" />} />
        <Route path="/E-PPO/login-account" element={<Login />} />
        <Route path="/E-PPO/register-account" element={<Register />} />
      </Routes>
    </Router>
  );
}
