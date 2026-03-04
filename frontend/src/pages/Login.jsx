import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import "../styles/login.css";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Welcome 👋");
    } catch {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-(--colorBlue)">
      <form
        onSubmit={handleSubmit}
        className="h-[80%] w-[90%] bg-(--colorYellow) flex justify-center items-center rounded-2xl"
      >
        <div className="bgLoginImg h-full w-full rounded-l-2xl"></div>
        <div className="h-full w-100 flex flex-col justify-center items-center gap-4">
          <Link to={"/register"} className="w-80">
            Inicia sesion abajo o{" "}
            <b className="font-medium hover:text-(--colorBlue) cursor-pointer">
              registrate
            </b>{" "}
            para obtener una cuenta
          </Link>
          <div className="w-80 flex justify-center items-center gap-0.5">
            <button className="h-10 w-40 p-2 bg-(--colorWhite) hover:bg-gray-200 flex justify-between items-center rounded-l-md cursor-pointer">
              <span>Google</span>{" "}
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-(--colorBlack)"
              />
            </button>
            <button className="h-10 w-40 p-2 bg-(--colorWhite) hover:bg-gray-200 flex justify-between items-center rounded-r-md cursor-pointer">
              <span>Facebook</span>
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="hrHeight">
              <hr />
            </div>
            <p>or</p>
            <div className="hrHeight">
              <hr />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-0.5">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="h-10 w-80 p-2 bg-(--colorWhite) rounded-t-md"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="h-10 w-80 p-2 bg-(--colorWhite) rounded-b-md"
            />
          </div>
          <button className="h-10 w-80 p-2 bg-(--colorBlack) text-white rounded-md cursor-pointer hover:bg-(--colorWhite) hover:text-(--colorBlack)">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
