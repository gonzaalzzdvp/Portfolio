import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { accessToken, logout } = useAuth();

  useEffect(() => {
    api
      .get("/users/profile/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch(() => logout());
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>User: {user.username}</p>
      <p>Email: {user.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
