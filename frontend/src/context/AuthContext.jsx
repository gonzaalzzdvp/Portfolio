import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔍 Verificar sesión al cargar la app
  const checkAuth = async () => {
    try {
      // 1️⃣ Intento normal
      const res = await api.get("/users/profile/", {
        skipAuthRefresh: true,
      });
      setUser(res.data);
    } catch {
      try {
        // 2️⃣ Intentar refresh MANUAL
        await api.post("/users/refresh/", {
          skipAuthRefresh: true,
        });

        // 3️⃣ Reintentar profile
        const res = await api.get("/users/profile/", {
          skipAuthRefresh: true,
        });
        setUser(res.data);
      } catch {
        // 4️⃣ No hay sesión recuperable
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    api.get("/users/csrf/");
    checkAuth();
  }, []);

  const login = async (email, password) => {
    await api.post("/users/login/", { email, password });
    await checkAuth();
  };

  const register = async (data) => {
    await api.post("/users/register/", data);
    await login(data.email, data.password);
  };

  const logout = async () => {
    await api.post("/users/logout/");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
