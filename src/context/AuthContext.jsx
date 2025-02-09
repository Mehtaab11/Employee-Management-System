import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // localStorage.clear();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage(); // This function is defined in the LocalStorage.jsx file
    const { employee } = getLocalStorage(); // This function is defined in the LocalStorage.jsx file
    setUserData( employee );
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>{children}</AuthContext.Provider>
  );
};
