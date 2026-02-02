import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Creating account...");

    try {
      await api.post("/users/register/", {
        username,
        email,
        password,
      });

      navigate("/login");

      toast.success("Cuenta creada correctamente", {
        id: loadingToast,
      });
    } catch (err) {
      toast.error("Error al registrar usuario", {
        id: loadingToast,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

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

      <button type="submit">Crear cuenta</button>
    </form>
  );
};

export default Register;
