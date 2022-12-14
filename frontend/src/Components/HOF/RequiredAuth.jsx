import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ReportContext } from "../Context/ReportContext";

export const RequiredAuth = ({ children }) => {
  console.log(children.type.name, "context");
  const { adminAuth, userAuth } = useContext(ReportContext);
  if (children.type.name === "Admin") {
    if (!adminAuth) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  } else if((children.type.name === "User")) {
    if (!userAuth) {
      return <Navigate to="/userlogin" />;
    } else {
      return children;
    }
  }
};
