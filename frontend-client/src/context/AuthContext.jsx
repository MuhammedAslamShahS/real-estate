import { createContext, useEffect, useState } from "react";
import API from "../api/axios.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (data) => {
    localStorage.setItem("userToken", data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    setUser(null);
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem("userToken");

        if (!token) {
          setLoading(false);
          return;
        }

        const res = await API.get("/users/profile");
        setUser(res.data.user);
      } catch (err) {
        logout();
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};