// src/pages/LandingPage.jsx

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";


const LandingPage = () => {
    const navigate = useNavigate();
     const { login } = UseAuth();
  const handleLoginSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse;
    console.log("Token received from Google:", credential); // Log the token for debugging
    const response = await fetch("http://localhost:8080/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: credential }),
    });

    const data = await response.json();
   
    if (data.token) {
      //localStorage.setItem("jwt", data.token);
      //localStorage.setItem("user", JSON.stringify(data.user));
      login(data.user, data.token);
      alert("Login was successful!");
      navigate("/dashboard");
    } else {
        console.error("Login failed:", data);
    alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">🍱 Welcome to Dabba Service</h1>
      <p className="text-lg mb-6 text-gray-700">
        Affordable, healthy, and tasty meals for university students.
      </p>

      <div className="mb-6">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log("Login Failed")}
        />
      </div>

      <p className="text-sm text-gray-500">
        By signing in, you agree to our Terms and Privacy Policy.
      </p>
    </div>
  );
};

export default LandingPage;
