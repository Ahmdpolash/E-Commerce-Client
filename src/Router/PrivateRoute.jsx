import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = authContext();
  const location = useLocation();

  if (loading) {
    <p className="h-[60vh] flex justify-center items-center">Loading...</p>;
  } else if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
