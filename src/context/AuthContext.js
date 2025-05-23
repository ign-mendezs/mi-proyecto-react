// src/context/AuthContext.js
import { createContext, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";

console.log("jwt-decode importado:", jwt_decode);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Inicializamos el token en null
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // Sólo en el cliente, una vez montado, leemos el token de localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
        try {
          const decodedUser = jwt_decode(storedToken);
          setUser(decodedUser);
        } catch (error) {
          console.error("Error decodificando el token:", error);
        }
      }
    }
  }, []);

  const login = (newToken) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', newToken);
    }
    setToken(newToken);
    try {
      const decodedUser = jwt_decode(newToken);
      setUser(decodedUser);
    } catch (error) {
      console.error("Error decodificando el token:", error);
    }
  };  

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    setToken(null);
  };

  const isAuthenticated = Boolean(token);

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
