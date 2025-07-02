// src/pages/Dashboard.jsx

import React from "react";
import { UseAuth } from "../context/AuthContext";

const Dashboard = () => {
  //const user = JSON.parse(localStorage.getItem("user"));
  const { user, logout } = UseAuth();

  /*const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    window.location.href = "/";
  };*/

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}!</h1>
      <p className="mb-2">Email: {user?.email}</p>
      <p className="mb-4">Mobile: {user?.phone || "N/A"}</p>
      <button
        onClick={logout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
