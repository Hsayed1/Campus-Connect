import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      // TO DO

      const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
        withCredentials: true,
      });

      setCurrentUser(res.data);


    } catch (error) {
      // Handle the error here
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } catch (error) {
      // Handle the error here
      console.error("Error saving user to localStorage:", error);
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
