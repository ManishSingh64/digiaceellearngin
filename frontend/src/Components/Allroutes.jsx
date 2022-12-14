import React from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "./Admin";
import { RequiredAuth } from "./HOF/RequiredAuth";
import Home from "./Home";
import Login from "./Login";
import { Quizes } from "./Quizes";
import { Report } from "./Report";
import { Signup } from "./Signup";
import { User } from "./User";
import { UserLogin } from "./UserLogin";
import { UserSignup } from "./UserSignup";

export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route
          path="/admin"
          element={
            // <RequiredAuth>
              <Admin />
            // </RequiredAuth>
          }
        />
        <Route
          path="/user"
          element={
            // <RequiredAuth>
              <User />
            // </RequiredAuth>
          }
        />
        <Route path="/quiz" element={<Quizes/>}/>
        <Route path="/reports" element={<Report />} />
      </Routes>
    </div>
  );
};
