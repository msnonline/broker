import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Retrieve login state from sessionStorage on app load
    const storedLoginState = sessionStorage.getItem("isLoggedIn");
    return storedLoginState === "true"; // Convert string back to boolean
  });

  const login = () => {
    setIsLoggedIn(true);
    sessionStorage.setItem("isLoggedIn", "true"); // Persist login state
  };

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("isLoggedIn"); // Remove from storage
  };

  useEffect(() => {
    // Sync state with sessionStorage (useful if other tabs modify it)
    const handleStorageChange = () => {
      const storedLoginState = sessionStorage.getItem("isLoggedIn");
      setIsLoggedIn(storedLoginState === "true");
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
