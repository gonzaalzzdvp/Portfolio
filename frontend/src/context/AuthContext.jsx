import { createContext, useContext, useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access")
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refresh")
  );

  const login = (access, refresh) => {
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
    setAccessToken(access);
    setRefreshToken(refresh);
  };

  const logout = async () => {
    const loadingToast = toast.loading("Loggin out");
    const refresh = localStorage.getItem("refresh");

    try {
      if (refresh) {
        await api.post("/users/logout/", { refresh });
      }

      toast.success("Sesión cerrada", { id: loadingToast });
    } catch {
      toast.error("Error al cerrar sesión", { id: loadingToast });
    } finally {
      localStorage.clear();
      setAccessToken(null);
      setRefreshToken(null);
      window.location.href = "/login";
    }
  };

  const isAuthenticated = !!accessToken;

  return (
    <AuthContext.Provider
      value={{ accessToken, refreshToken, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
