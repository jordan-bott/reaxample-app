import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  TaskResetPassword,
  UserButton,
} from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ResetPassword from "./ResetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
