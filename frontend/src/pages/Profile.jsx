import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Profile() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged Out");
  };

  return (
    <>
      <h1>Hello {user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
