import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const UnAuth = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login"); 
  };

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
      <div className="alert alert-warning w-75 p-5">
        <h1 className="display-4">401 - Unauthorized</h1>
        <p className="lead">
          The page you are looking for might need authentication.
        </p>
        <button className="btn btn-primary mt-3" onClick={handleRedirect}>
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default UnAuth;
