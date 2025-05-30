import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Card } from "react-bootstrap";
import './PersonalInfo.css';
import {Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from "../../Spinner";
import UnAuth from '../../Features/UnAuth';


function PersonalInfo() {
    const navigate= useNavigate();
    const [handleSpinnerState ,setSpinnerState] = useState(false);
    

    const location = useLocation();
    const userData= location.state?.userData;
    const userId1 = localStorage.getItem("userId");
    if (!userId1) return <div><UnAuth/></div>
     
     const [HandleOption, setOption] = useState(1);
     
     
   
 
   
    const [userDetails, setUserDetails] = useState({
        userName:'',
        firstName: '',
        lastName:  '',
        middleName: '',
        phoneNumber:  '',
        email: '',
        area:  '',
        state: '',
        district:  '',
        pinCode: '',
        city:  ''
      });
   
      useEffect(() => {
        
        axios.get(`http://localhost:5252/api/User/GetUser?id=${userId1}`)
          .then((response) => {
            const userData1 = response.data; 
            setUserDetails({
              userName: userData1.userName,
              firstName: userData1.firstName,
              lastName: userData1.lastName,
              middleName: userData1.middleName,
              phoneNumber: userData1.phoneNumber,
              email: userData1.email,
              area: userData1.area,
              state: userData1.state,
              district: userData1.district,
              pinCode: userData1.pinCode,
              city: userData1.city
            });
          })
          
          .catch((error) => {
           
            console.error('Error fetching user data:', error);
            
          });
      }, [userId1]); 
      useEffect(() => {
        handleBookings();
      }, []);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSpinnerState(true);
        try {
            console.log("ID", typeof userDetails.userId,userDetails.userId);   
            console.log("ID", typeof userDetails ,userDetails);   
            console.log("ID", typeof userId1 ,userId1);   
   
           
            const response = await axios.put("http://localhost:5252/api/User/Update?id="+userId1, userDetails ,{
                headers: {
                  "Content-Type": "application/json",
                },
              });

            if (response.ok) {
                const data = await response.json();
              
            } else {
                toast.success(
                    `${response?.data.message || "Password Change Successfully..!"
                    }  `,
                    {
                      
               
            });
        }} catch (error) {
           
            console.error("Error: ",  JSON.stringify(error, null, 2));
            console.error("Error: ",  JSON.stringify(userDetails, null, 2));
    //         alert(`-${
    //     JSON.stringify(error, null, 2) || "Error"
    //   }`)
            toast.error(
                `Update Response: ${ 
                  error.response?.data?.status || "Something went wrong!"
                }  -${
                  error.response?.data.title || "User already exist with same username or email..!"
                } `,
                {
                  
                }
              );
        }
        finally{

            setSpinnerState(false);
      
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
    setSpinnerState(true);
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
    
    };  console.log(apidata,userId1);

    

    const response = await axios.put("http://localhost:5252/api/User/changePassword?id="+userId1, apidata, {
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
      setPassword({
        existingPassword : "",
     newPassword :"",
     confirmPassword : ""


      });
      


     }
   
    catch(error){
        // alert(`-${
        //     JSON.stringify(error, null, 2) || "Error"
        //   }`)
        toast.error(
            `${ 
              error?.message || "Failed..!"
             
            }`,
            {
             
            }
          );
    }
    finally{

        setSpinnerState(false);
  
      }


}

//    delete 
const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:5252/api/User/DeleteUser?id=${userId1}`;
      const response = await axios.delete(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.removeItem("userId");
      localStorage.removeItem("ucity");
      localStorage.removeItem("upincode");
       localStorage.removeItem("udistrict");
      localStorage.removeItem("uprofession");
     
      console.log("Response:", response?.data);
  
      toast.success(
        `${response?.data?.message || "User deleted successfully!"}`
      );
      
      
  
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message || "Unknown error");
  
      toast.error(
        error.response?.data?.message || "Failed to delete user!"
      );
    }
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
   
      localStorage.removeItem("userId");
      localStorage.removeItem("ucity");
      localStorage.removeItem("upincode");
       localStorage.removeItem("udistrict");
      localStorage.removeItem("uprofession");
     
      toast.success(
        `${ "User logout successfully!"}`
      );
      
      
  
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message || "Unknown error");
  
      toast.error(
        error.response?.data?.message || "Failed to delete user!"
      );
    }
  };
  //booking 
  const [expanded, setExpanded] = useState({});

  // Toggle function for individual bookings
  const toggleText = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const maxChars = 20; 
  const [bookings, setBookings] = useState([]); // Store fetched bookings
   // Fetch user ID from localStorage

  const handleBookings = async () => {
    if (!userId1) {
      console.error("Error: userId1 is undefined or null");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5252/api/Booking/GetUserBookings/${userId1}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setBookings(response.data);
      console.log(response.data) ;// Store data in state
    } catch (error) {
      console.error("Error fetching bookings:", error.response?.data || error.message);
    }
  };
  

    return (
        <div className="container-fluid1">
           {/* {state===false&& (  <UnAuth/>)} */}
          
             <Spinner visible={handleSpinnerState}/>
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
        <button className="btn btn-secondary w-100 text-start py-2 rounded-pill"
        onClick={() => setOption(5)}
        >
          Logout
        </button>
      </li>
    </ul>
    
                
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
                                            type="number"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            
                                           value={userDetails.phoneNumber}
                                            onChange={handleChange}
                                            min="1111111111"
                                             max="9999999999"
                                            onInvalid={(e) =>
                                            e.target.setCustomValidity("Phone number must of 10 Digit.")
                                            }
                                             onInput={(e) => e.target.setCustomValidity("")}
  
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
                                            min="111111"
                                            max="999999"
                                           onInvalid={(e) =>
                                           e.target.setCustomValidity("Pincode must of 6 Digit.")
                                           }
                                            onInput={(e) => e.target.setCustomValidity("")}
 
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
                    <div className="col-md-9">
                 
                        {bookings.length === 0 ? (
        <p className="text-center text-muted">No bookings found.</p>
      ) : (
        // <div className="row">
        //   {bookings.map((booking, index) => (
        //     <div key={index} className=" mb-2">
        //       <div className="card shadow-sm p-3">
        //         {/* <img src={"http://localhost:5252/"+booking.service_Image} alt="Service" className="card-img-top" style={{  objectFit: "cover" }} /> */}
        //         <div className="card-body">
        //           <Row>  <h5 className="card-title text-start">{booking.service_Name}</h5></Row>
                
        //           <p className="card-text">
        //             <strong>Price:</strong> ₹{booking.service_Price} <br />
        //             <strong>Provider:</strong> {booking.firstName} <br />
        //             <strong>Status:</strong> {booking.booking_Status} <br />
        //             <strong>Payment Mode:</strong> {booking.mode_Of_Payment} <br />
        //             <strong>Booking Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}<br/>
        //             <strong>Address of service:</strong> {booking.address},{booking.city},{booking.pin} <br />
        //             <strong>Provider note:</strong> {booking.providerNote} <br />
        //             <strong>Expected Completion date:</strong> {booking.completionDate} <br />
                   
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //   ))}
        // </div>
        <Container className="mt-4">
        <h2 className="text-center mb-4">Booking Summary</h2>
  
        {bookings.length === 0 ? (
          <p className="text-center text-muted">No bookings found.</p>
        ) : (
          <Row className="justify-content-center">
            {bookings.map((booking, index) => (
              <Col key={index} md={6} lg={5} className="mb-4">
                <Card className="shadow p-3 rounded border border-secondary">
                  <Card.Body>
                    <h5 className="text-center mb-3 text-primary fw-bold">Booking Receipt</h5>
                    
                    {/* Service & Provider Info */}
                    <div className="border-bottom pb-2 mb-3">
                    {expanded[index] ? (
            <span> {booking.service_Name} </span>
          ) : (
            <span>
              {booking.service_Name.length > maxChars
                ? booking.service_Name.substring(0, maxChars) + "..."
                : booking.service_Name}
            </span>
          )}
          {booking.service_Name.length > maxChars && (
           <button
           className="btn btn-link p-0"
           onClick={() => toggleText(index)}
         >
           {expanded[index] ? " Show Less" : " Read More"}
         </button>
          )}
                     
                      <p className="mb-1"><strong>Provider:</strong> {booking.firstName}</p>
                      <p className="mb-1"><strong>Provider no.:</strong> {booking.providerNum}</p>
                   
                    </div>
  
                    {/* Booking Details */}
                    <div className="border-bottom pb-2 mb-3">
                    <p className="mb-1"><strong>Booking Id:</strong> <span >{booking.bookId}</span></p>
                   
                      <p className="mb-1"><strong>Booking Status:</strong> <span className="text-success">{booking.booking_Status}</span></p>
                      <p className="mb-1"><strong>Payment Mode:</strong> {booking.mode_Of_Payment}</p>
                      <p className="mb-1"><strong>Payment ID:</strong> {booking.paymentId || "N/A"}</p>
                    </div>
  
                    {/* Price & Address */}
                    <div className="border-bottom pb-2 mb-3">
                      <p className="mb-1"><strong>Price:</strong> ₹{booking.service_Price}</p>
                      <p className="mb-1"><strong>Booking Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()} {new Date(booking.bookingDate).toLocaleTimeString()}</p>
                    </div>
  
                    {/* Address Details */}
                    <div className="border-bottom pb-2 mb-3">
                      <h6 className="fw-bold">Service Address:</h6>
                      <p className="mb-1">{booking.address}, {booking.city}, {booking.pin}</p>
                    </div>
  
                    {/* Additional Provider Info */}
                    <div className="border-bottom pb-2 mb-3">
                      <p className="mb-1"><strong>Provider Note:</strong> {booking.providerNote || "No additional notes"}</p>
                      <p className="mb-1"><strong>Expected Completion Date:</strong> {booking.completionDate || "Not provided"}</p>
                    </div>
  
                    {/* Thank You Note */}
                    <p className="text-center text-muted small">Thank you for choosing our service!</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
      )}
    </div>
  

                   
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
                                             type="password"
                                             id="existingPassword"
                                             name="existingPassword"
                                             required
                                             value={handlePassword.existingPassword}
                                             onChange={handlePasswordChange}
                                             minLength="8"
                                             maxLength="20"
                                          
                                             
                                         />
                                         <span className="spann"> Existing Password</span>
                                     </div>
                                 </Row>
                                 <Row>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="password"
                                             id="newPassword"
                                             name="newPassword"
                                               minLength="8"
                                             maxLength="20"
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
                                             type="password"
                                             id="confirmPassword"
                                             name="confirmPassword"
                                              minLength="8"
                                             maxLength="20"
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
                   <div className="col-md-9">
                   <div className="p-4">
                       <h3>Delete Underconstruction </h3>
                       <form onSubmit={handleDelete}>
                             
                         
                             
                            
                       <button type="submit" className="btn btn-danger m-2">Delete Account</button>
                       
                      </form>
                       </div>
                   </div>
                )}

                {HandleOption==5 && (
                     <div className="col-md-9">
                     <div className="p-4">
                         <h3>Logout Underconstruction </h3>
                         <form onSubmit={handleLogout}>
                             
                         
                             
                            
                       <button type="submit" className="btn btn-danger m-2">Logout</button>
                       
                      </form>
                         </div>
                     </div>
                )}
               

            </Row>
        </div>
    );
}

export default PersonalInfo;
