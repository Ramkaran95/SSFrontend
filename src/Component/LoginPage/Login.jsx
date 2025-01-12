import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { ToastContainer ,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
//import ToastComponent from '../ToastComponent';
function Login() {
    const navigate = useNavigate(); // Hook for navigation
    //const [toastMessage, setToastMessage] = useState(null);
  //  const [toastType, setToastType] = useState("success");

  const [accountType, setAccountType] = useState("user"); // Default account type
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const purl="http://localhost:5252/api/Provider/Login";
  const uurl="http://localhost:5252/api/User/Login";
  const [url,setUrl]=useState("//localhost:5252/api/User/Login");
 
  // Handle account type change
  const handleAccountType = (type,url1) => {
    setAccountType(type);
    setUrl(url1);

  };

  // Handle input changes
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle user login
  const userLogin = async (loginData,url) => {
    try {
      const response = await axios.post(url, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Login Successful:", response.data);
     // setToastMessage("Login Successful!\n"+"Welcome " + response.data.firstName );
     // setToastType("success");
      sethandleButtonState(true);
      const path=accountType=== "user"? "/userDashboard":"/providerDashboard";
      toast.success(
        `Login Response: ${"Welcome "+
         response.data.firstName
        }  `,
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          onClose:()=>navigate(path)
              }
      );
      
   
      // Handle successful login (e.g., save user details to state or redirect)
      return response.data;
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    //  setToastMessage("Login Failed: " + (error.response?.data || error.message));
     // setToastType("danger");
      toast.error(
        `Login Response: ${
          error.response?.data || "Invalid Credential..!"
        }`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

    }
  };
const [handleButtonState ,sethandleButtonState]=useState(false);
 
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      alert("Both fields are required!");
      return;
    }
    await userLogin(loginData,url); // Call the Axios function to post data
  };

  return (
    
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

         <div className="card shadow-lg p-4" style={{ width: "350px", borderRadius: "20px" }}>
        {/* Header */}
        <h2 className="text-center mb-4" style={{ fontFamily: "'Comic Sans MS', cursive" }}>
          ServiceSeeker
        </h2>

        {/* Account Type Toggle */}
        <div className="btn-group w-100 mb-4">
          <button
            className={`btn ${accountType === "user" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleAccountType("user",uurl)}
          >
            User
          </button>
          <button
            className={`btn ${accountType === "provider" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleAccountType("provider",purl)}
          >
            Provider
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              style={{ borderRadius: "10px" }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              minLength="8"
              maxLength="20"
              className="form-control"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              style={{ borderRadius: "10px" }}
              required
            />
          </div>

          <button type="submit" disabled={handleButtonState}  className="btn btn-primary w-100" style={{ borderRadius: "10px" }}>
          {handleButtonState? "Processing..." : "Login"}
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-3">
        <NavLink to="/login/forgetpassword" 
  className={({ isActive }) =>  isActive ? "text-decoration-none text-danger glow-effect d-block" 
      : "text-decoration-none text-danger d-block "}>
        Forgot Password?
        </NavLink>

          <NavLink to="/register" className="text-decoration-none text-primary">
            Don’t have an account? <strong>Sign Up</strong>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;