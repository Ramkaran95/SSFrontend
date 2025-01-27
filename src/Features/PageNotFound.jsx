import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/"); // Change "/" to the desired route, e.g., "/home"
  };

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
      <div className="alert alert-warning w-75 p-5">
        <h1 className="display-4">404 - Page Not Found</h1>
        <p className="lead">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <button className="btn btn-primary mt-3" onClick={handleRedirect}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
