import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../HomePage/NavBar";
import FooterSection from "../HomePage/FooterSection";

function Register() {
  const navigate = useNavigate(); // Hook for navigation
  const [accountType, setAccountType] = useState("user"); // Default account type

  // Handle account type change
  const handleAccountType = (type) => {
    setAccountType(type);
  };

  // Handle form submission
  const onRegister = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Navigate to the appropriate registration page
    const path =
      accountType === "user"
        ? "/register/userRegistration"
        : "/register/providerRegistration";
    navigate(path);
  };

  return (
    <>
    <div><NavBar /></div>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "350px", borderRadius: "20px" }}>
        {/* Header */}
        <h2 className="text-center mb-4" style={{ fontFamily: "'Comic Sans MS', cursive" }}>
          Registration
        </h2>

        {/* Account Type Toggle */}
        <div className="btn-group w-100 mb-4">
          <button
            className={`btn ${accountType === "user" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleAccountType("user")}
          >
            User
          </button>
          <button
            className={`btn ${accountType === "provider" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleAccountType("provider")}
          >
            Provider
          </button>
        </div>

        {/* Registration Form */}
        <form onSubmit={onRegister}>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ borderRadius: "10px" }}
          >
            Create
          </button>
        </form>
      </div>
    </div>
    <div><FooterSection /></div>
    </>
  );
}

export default Register;
