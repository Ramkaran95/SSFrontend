import React, { useState } from "react";
import axios from "axios";

import { ToastContainer ,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Spinner";
const ForgotPassword = () => {
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState("user"); // Default account type
    const [handleButtonState ,sethandleButtonState]=useState(false);
    const [handleButtonState1 ,sethandleButtonState1]=useState(false);
    const [handleSpinnerState ,setSpinnerState]=useState(false);
    

  const [step, setStep] = useState(1); // Tracks the current step
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [passwords, setPasswords] = useState({ newPassword: "", confirmPassword: "" });
  const purl="http://localhost:5252/api/Provider/GenerateOtp";
  const uurl="http://localhost:5252/api/User/GenerateOtp";
  const [url,setUrl]=useState("//localhost:5252/api/User/GenerateOtp");
  const purlR="http://localhost:5252/api/Provider/ResetPassword";
  const uurlR="http://localhost:5252/api/User/ResetPassword";
  const [urlR,setUrlR]=useState("//localhost:5252/api/User/ResetPassword");
 
  const handleAccountType = (type,url1,url2) => {
    setAccountType(type);
    setUrl(url1);
    setUrlR(url2)

  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleOtpChange = (e) => setOtp(e.target.value);
  const handlePasswordChange = (e) =>
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  
  const sendOtp = async (e) => {
    e.preventDefault();
    sethandleButtonState(true);
    setSpinnerState(true);
    try {
      const response = await axios.post(url, email, {
        headers: {
          "Content-Type": "application/json",
        },
      });
     
      //alert("Otp send to your registered gmail: "+response.data.message); 
      // Notify OTP sent
      setSpinnerState(false);
      toast.success(
        `${response?.data.message || "Otp send .!"
        }  `,
        {
          
        }
      );
      setStep(2);

      //setStep(2); // Proceed to OTP verification step
    } catch (error) {
      sethandleButtonState(false);
      setSpinnerState(false);
      toast.error(
        `${ "Verify Email, "+
          error.response?.data?.message || "Verify Email, User not found..!"
        }`,
        {
          
        }
      );
       
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
     toast.info(
       "Password not match.!",
        {
         
        }
      );
      return;
    }
   
    sethandleButtonState1(true);
    try {
      setSpinnerState(true);
      const resetDto = {
        Email: email,
        Otp: otp,
        NewPassword: passwords.newPassword,
      };

      const response = await axios.post(urlR, resetDto, {
        headers: {
          "Content-Type": "application/json",
        },
      });

     
      //alert("Otp send to your registered gmail: "+response.data.message); 
      // Notify OTP sent
      
     
      toast.success(
        `${response?.data.message || "Password Reset Successfully..!"
        }  `,
        {
          
          
        
        }
      );
      navigate("/login");
       
      // Reset to the first step
    } catch (error) {
      sethandleButtonState1(false);
      setSpinnerState(false);
      toast.error(
        `${ 
          error.response?.data?.message || "Invalid Otp..!"
        }`,
        {
         
        }
      );
     
      
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
     {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <Spinner visible={handleSpinnerState}/>
      <div className="card shadow p-4" style={{ width: "400px", borderRadius: "10px" }}>
        <h3 className="text-center mb-4">Forgot Password</h3>

        {/* Step 1: Enter Email */}
        {step === 1 && (
          <> <form onSubmit={sendOtp}>
            <div className="mb-3">
            <div className="btn-group w-100 mb-4">
             
          <button
            className={`btn ${accountType === "user" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleAccountType("user",uurl,uurlR)}
          >
            User
          </button>
          <button
            className={`btn ${accountType === "provider" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleAccountType("provider",purl,purlR)}
          >
            Provider
          </button>
        </div>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <button type="submit" disabled={handleButtonState}  className="btn btn-primary w-100" style={{ borderRadius: "10px" }}>
          {handleButtonState? "Sending..." : "Send OTP"}
          </button>
            </form>
          </>
        )}

        {/* Step 2: Verify OTP */}
        {step === 2 && (
          <><form onSubmit={resetPassword}>
            <div className="mb-3">
              <input
                type="text"
                id="otp"
                className="form-control"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
                minLength="6"
                maxLength="6"
                required
              />
            </div>
            
            <div className="mb-3">
             <input
                type="password"
                minLength="8"
                maxLength="20"
                id="newPassword"
                name="newPassword"
                className="form-control"
                placeholder="Enter new password"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                minLength="8"
                maxLength="20"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm your password"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" disabled={handleButtonState1} className="btn btn-primary w-100"  >
            {handleButtonState1? "Resetting...!" : "Reset Password"}
            </button>
            </form>
          </>
        )}

       
       
        
      </div>
    </div>
  );
};

export default ForgotPassword;
