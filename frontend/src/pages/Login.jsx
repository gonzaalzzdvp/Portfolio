import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Loggin in...");

    try {
      const res = await api.post("/users/login/", {
        email,
        password,
      });

      login(res.data.access, res.data.refresh);

      toast.success("Sesión iniciada correctamente", {
        id: loadingToast,
      });

      navigate("/profile");
    } catch (err) {
      toast.error("Credenciales inválidas", {
        id: loadingToast,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
