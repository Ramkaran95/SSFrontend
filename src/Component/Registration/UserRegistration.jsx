import React, { useState } from "react";
import axios from "axios";

import { ToastContainer ,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function UserRegistration() {
    const navigate= useNavigate();
    const date = new Date();
   
    const [formData, setFormData] = useState({
            userId: 0,
            userName: "",
            firstName: "",
            middleName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: "",
            creatAt: date.toISOString(),
          
            state: "",
            district: "",
            pinCode: 0,
            area: "",
            city: ""
    });
    const [handleButtonState ,sethandleButtonState]=useState(false);
  
          const handleChange = (e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            });
          };
  const userApi = "http://localhost:5252/api/User/Registration";

  // Handle input changes


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("The data sending"+formData.userId+" url "+userApi);
    
    try {
      sethandleButtonState(true);
     const response = await axios.post(userApi, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
     
      //console.log("The data sending"+formData+" url "+userApi);
       toast.success(
        `Registration Response: -${
          JSON.stringify(response.data, null, 2) || "Error"
        }  `,
        {
         
        }
      );
      navigate("/login");

     

    } catch (error) {
     // alert("Registration Failed: " + (error.response?.data.message|| error.message)+error.body);
     sethandleButtonState(false);
      toast.error(
        `Registration Response: ${ 
          error.response?.data?.status || "Something went wrong!"
        }  -${
          error.response?.data.title || "User already exist with same username or email..!"
        } - ${"Check: "+
          Object.keys(error.response?.data.errors || {}).join(", ")
        } `,
        {
         
        }
      );
    }
  };

  return (
<div className="d-flex justify-content-center align-items-center vh-150" style={{paddingTop: "10px" , paddingBottom:"10px"}}>
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

  <div
    className="card shadow-lg p-5"
    style={{
      width: "100%",
      maxWidth: "600px",
      borderRadius: "15px",
      background:" #eceaeab7",
      color: "black",
    }}
  >
    <h2 className="text-center mb-4" style={{ fontFamily: "'Comic Sans MS', cursive" }}>
      User Registration
    </h2>
    <hr></hr><div className="d-flex justify-content-start"> <h4 className="text-secondary text-right">Personal Deatils</h4></div>
    <br></br>
   
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        {/* User Name */}
        <div className="col-md-6">
          <label htmlFor="userName" className="form-label">
            User Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="col-md-6">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Full Name */}
        <div className="col-md-12">
          <label className="form-label">
            Full Name <span className="text-danger">*</span>
          </label>
          <div className="row g-2">
            <div className="col-md-4">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
                placeholder="First Name"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="form-control"
                placeholder="Middle Name"
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Password */}
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">
            Password <span className="text-danger">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            minLength="8"
            maxLength="20"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Address */}
        {/* Address Details */}
        
<div className="col-md-12">
  <label htmlFor="area" className="form-label">
    Area 
  </label>
  <input
    type="text"
    id="area"
    name="area"
    value={formData.area}
    onChange={handleChange}
    className="form-control"
    
  />
</div>

<div className="col-md-6">
  <label htmlFor="city" className="form-label">
    City <span className="text-danger">*</span>
  </label>
  <input
    type="text"
    id="city"
    name="city"
    value={formData.city}
    onChange={handleChange}
    className="form-control"
    required
  />
</div>

<div className="col-md-6">
  <label htmlFor="district" className="form-label">
    District <span className="text-danger">*</span>
  </label>
  <input
    type="text"
    id="district"
    name="district"
    value={formData.district}
    onChange={handleChange}
    className="form-control"
    required
  />
</div>
<div className="col-md-6">
  <label htmlFor="pinCode" className="form-label">
    PinCode <span className="text-danger">*</span>
  </label>
  <input
    type="number"
    id="pinCode"
    name="pinCode"
    min="111111"
    max="999999"
    value={formData.pinCode}
    onChange={handleChange}
    className="form-control"
    required
  />
</div>
<div className="col-md-6">
  
  <label htmlFor="state" className="form-label">
    State <span className="text-danger">*</span>
  </label>
  <input
    type="text"
    id="state"
    name="state"
    value={formData.state}
    onChange={handleChange}
    className="form-control"
    required
  />
</div>


        
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <button type="submit" className="btn btn-primary w-100" disabled={handleButtonState} style={{ borderRadius: "10px" }}>
        {handleButtonState ? "Hang on ! We are almost there.." : "Register"}
        </button>
      </div>
    </form>
  </div>
</div>

  
  );
}

export default UserRegistration;
