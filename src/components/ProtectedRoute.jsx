import React from "react";
import { useAuth } from "./AuthContext"; // Path to your AuthContext
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
