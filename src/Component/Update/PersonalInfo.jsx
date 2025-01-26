import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './PersonalInfo.css';
import {useLocation } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

function PersonalInfo() {
    const location = useLocation();
    const userData= location.state?.userData;
     const userId= userData.userId;
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

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <div className="col-md-3">
                    <div className="py-4">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <button className="btn btn-primary">Personal Info</button>
                            </li>
                            <li className="nav-item mb-2">
                                <button className="btn btn-light">Bookings</button>
                            </li>
                            <li className="nav-item mb-2">
                                <button className="btn btn-light">Change Password</button>
                            </li>
                            <li className="nav-item mb-2">
                                <button className="btn btn-light">Delete Account</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-light">Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Content Area */}
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
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;
