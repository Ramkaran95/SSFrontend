import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './PersonalInfo.css';
import {useLocation } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

function PersonalInfo() {
    const location = useLocation();
    const userData= location.state?.userData;
     const userId= userData.userId;
     const [HandleOption, setOption] = useState(1);

    const [userDetails, setUserDetails] = useState({
       
        userName: userData.userName,

        firstName: userData.firstName,
        lastName: userData.lastName,
        middleName: userData.middleName,
        phoneNumber: userData.phoneNumber,
        email: userData.email,
        area: userData.area,
        state: userData.state,
        district: userData.district,
        pinCode: userData.pinCode,
        city: userData.city
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("ID", typeof userDetails.userId,userDetails.userId);   
            console.log("ID", typeof userDetails ,userDetails);   
            console.log("ID", typeof userId ,userId);   
   
           
            const response = await axios.put("http://localhost:5252/api/User/Update?id="+userId, userDetails ,{
                headers: {
                  "Content-Type": "application/json",
                },
              });

            if (response.ok) {
                const data = await response.json();
                alert(data.Message);
            } else {
                alert("Error updating user details.");
            }
        } catch (error) {
            alert(error.Message);
            console.error("Error: ",  JSON.stringify(error.data, null, 2));
            console.error("Error: ",  JSON.stringify(userDetails, null, 2));
            
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

    // Change password 
const [handlePassword ,setPassword]= useState({
     existingPassword : "",
     newPassword :"",
     confirmPassword : ""

});

   
const handlePasswordChange = (e) =>
    setPassword({ ...handlePassword, [e.target.name]: e.target.value });

const changePassword = async (e) => {
    e.preventDefault();
    if (handlePassword.newPassword !== handlePassword.confirmPassword) {
     toast.info(
       "Password not match.!",
        {
         
        }
      );
      return;
    }
    try {
        
        const apidata= {
        existingPassword : handlePassword.existingPassword,
         newPassword : handlePassword.newPassword
    
    };  console.log(apidata,userId);

    

    const response = await axios.put("http://localhost:5252/api/User/changePassword?id="+userId, apidata, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.Message);
    } 
      toast.success(
        `${response?.data.message || "Password Change Successfully..!"
        }  `,
        {
          
          
        
        }
      );


     }
   
    catch(error){
        
        toast.error(
            `${ 
              error.response?.data?.message || "Failed..!"
            }`,
            {
             
            }
          );
    }


}


    return (
        <div className="container-fluid">
            <Row>
            
                {/* Sidebar */}
                <div className="col-md-3 h-100 d-flex flex-column">
  <div className="py-4 flex-grow-1 d-flex flex-column">
    <ul className="nav flex-column bg-light p-3 rounded shadow-sm h-100">
      <li className="nav-item mb-3">
        <button
          className="btn btn-secondary w-100 text-start py-2 rounded-pill"
          onClick={() => setOption(1)}
        >
          Personal Info
        </button>
      </li>
      <li className="nav-item mb-3">
        <button
          className="btn btn-secondary w-100 text-start py-2 rounded-pill"
          onClick={() => setOption(2)}
        >
          Bookings
        </button>
      </li>
      <li className="nav-item mb-3">
        <button
          className="btn btn-secondary w-100 text-start py-2 rounded-pill"
          onClick={() => setOption(3)}
        >
          Change Password
        </button>
      </li>
      <li className="nav-item mb-3">
        <button
          className="btn btn-secondary w-100 text-start py-2 rounded-pill"
          onClick={() => setOption(4)}
        >
          Delete Account
        </button>
      </li>
      <li className="nav-item">
        <button className="btn btn-secondary w-100 text-start py-2 rounded-pill">
          Logout
        </button>
      </li>
    </ul>
    <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br><br></br>
                <br></br>
                <br></br>
                
               
                
  </div>
</div>
                {/* Content Area */}
                {HandleOption==1 && (
                <div className="col-md-9">
                    <div className="p-4">
                        <h3>Update Personal Information</h3>
                        <form onSubmit={handleSubmit}>
                            
                        <Row>
                                
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                        required
                                            type="text"
                                            id="userName"
                                            name="userName"
                                           value={userDetails.userName}
                                            onChange={handleChange}
                                        />
                                        <span className="spann"> userName </span>
                                    </div>
                                </Col>
                               
                            </Row>
                            
                            <Row>
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={userDetails.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span className="spann"> First Name</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                        required
                                            type="text"
                                            id="middleName"
                                            name="middleName"
                                            value={userDetails.middleName}
                                            onChange={handleChange}
                                        />
                                        <span className="spann"> Middle Name</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                        required
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={userDetails.lastName}
                                            onChange={handleChange}
                                        />
                                        <span className="spann"> Last Name</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                        required
                                            type="text"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                           value={userDetails.phoneNumber}
                                            onChange={handleChange}
                                        />
                                        <span className="spann"> Number </span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                        required
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={userDetails.email}
                                            onChange={handleChange}
                                        />
                                        <span className="spann"> Email</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                        required
                                            type="text"
                                            id="area"
                                            name="area"
                                           value={userDetails.area}
                                            onChange={handleChange}
                                        />
                                        <span className="spann"> Area </span>
                                    </div>
                                </Col>
                               
                            </Row>
                            <Row>
                                
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                        required
                                            type="text"
                                            id="city"
                                            name="city"
                                           value={userDetails.city}
                                            onChange={handleChange}
                                        />
                                        <span className="spann"> City </span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                        required
                                            type="text"
                                            id="district"
                                            name="district"
                                            value={userDetails.district}
                                            onChange={handleChange}
                                        />
                                        <span className="spann"> District</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                        required
                                            type="number"
                                            id="pinCode"
                                            name="pinCode"
                                           value={userDetails.pinCode}
                                            onChange={handleChange}
                                        />
                                        <span className="spann"> Pincode </span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                        required
                                            type="text"
                                            id="state"
                                            name="state"
                                            value={userDetails.state}
                                            onChange={handleChange}
                                            
                                        />
                                        <span className="spann"> State</span>
                                    </div>
                                </Col>
                            </Row>
                          

                            <hr></hr>
                            <button type="submit" className="btn btn-success m-2">Update</button>
                        </form>
                    </div>
                </div>)}

                {/* For Booking */}
                {HandleOption==2 && (
                    <div className="containner">Account</div>
                   )}
                {/* For ChangePassword */}
                {HandleOption==3 && (
                     <div className="col-md-9">
                     <div className="p-4">
                         <h3>Change Password</h3>
                         <form onSubmit={changePassword}>
                             
                         
                             
                            
                                 <Row>

                                     <div className="inputBox1">
                                         <input
                                             type="text"
                                             id="existingPassword"
                                             name="existingPassword"
                                             value={handlePassword.existingPassword}
                                             onChange={handlePasswordChange}
                                             required
                                         />
                                         <span className="spann"> Existing Password</span>
                                     </div>
                                 </Row>
                                 <Row>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="text"
                                             id="newPassword"
                                             name="newPassword"
                                             value={handlePassword.newPassword}
                                             onChange={handlePasswordChange}
                                         />
                                         <span className="spann"> New Password</span>
                                     </div>
                                 </Row>
                                 <Row>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="text"
                                             id="confirmPassword"
                                             name="confirmPassword"
                                             value={handlePassword.confirmPassword}
                                             onChange={handlePasswordChange}
                                         />
                                         <span className="spann"> Confirm Password</span>
                                     </div>
                                 </Row>
                             
                            
                           
 
                             <hr></hr>
                             <button type="submit" className="btn btn-success m-2">Change</button>
                         </form>
                     </div>
                 </div>)}
                {/* For Delete Account */}
                {HandleOption==4 && (
                    <div className="containner">Account</div>
                )}
               

            </Row>
        </div>
    );
}

export default PersonalInfo;
