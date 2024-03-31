
import React from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user.name;
  const userEmail = user.email;

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    navigate("/register");
  };

  return (
    <div>
      <h1>User Details</h1>
      <p>
        <strong>Name:</strong> {userName}
      </p>
      <p>
        <strong>Email:</strong> {userEmail}
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDetails;
