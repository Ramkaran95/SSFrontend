import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './ProviderPersonalInfo.css';
import {Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from "../../Spinner";
import UnAuth from '../../Features/UnAuth';


function ProviderPersonalInfo() {
    const navigate= useNavigate();
    const [handleSpinnerState ,setSpinnerState] = useState(false);
    

    const location = useLocation();
    const userData= location.state?.userData;
    const userId1 = localStorage.getItem("puserId");
    if (!userId1) return <div><UnAuth/></div>
     
     const [HandleOption, setOption] = useState(1);
     
     
   
 
     
    // const [userDetails, setUserDetails] = useState({
    //   id:userId1,
    //     UserName:'',
    //     FirstName: '',
    //     LastName:  '',
    //     MiddleName: '',
    //     PhoneNumber:  '',
    //     Email: '',
    //     image:'',
    //     Area:  '',
    //     State: '',
    //     District:  '',
    //     PinCode: '',
    //     City:  ''
    //   });
    //   const [imageFile, setImageFile] = useState(null);
    //   useEffect(() => {
       
    //     axios.get(`http://localhost:5252/api/Provider/GetProvider?id=${userId1}`)
    //       .then((response) => {
    //         const userData1 = response.data; 
    //         setUserDetails({
    //           id:userId1,
    //           UserName: userData1.userName,
    //           FirstName: userData1.firstName,
    //           LastName: userData1.lastName,
    //           MiddleName: userData1.middleName,
    //           PhoneNumber: userData1.phoneNumber,
    //           Email: userData1.email,
    //           image: userData1.profilePhoto,
    //           Area: userData1.area,
    //           State: userData1.state,
    //           District: userData1.district,
    //           PinCode: userData1.pinCode,
    //           City: userData1.city
    //         });
    //         console.log("userDeatils",userDetails);
    //       })
          
    //       .catch((error) => {
           
    //         console.error('Error fetching user data:', error);
            
    //       });
    //   }, [userId1]); 
      
     
    //   const handleFileChange = (e) => {
    //     setImageFile(e.target.files[0]);
    //   };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUserDetails({ ...userDetails, [name]: value });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setSpinnerState(true);
    //     const data = new FormData();
    //     console.log("userDeatils",userDetails); 
    //     data.append('FirstName', userDetails.FirstName);
    //     data.append('MiddleName',userDetails.MiddleName);
    //     data.append('LastName', userDetails.LastName);
    //     data.append('UserName', userDetails.UserName);
    //     data.append('PhoneNumber', userDetails.PhoneNumber);
    //     data.append('id', userId1);
    //     data.append('Email', userDetails.Email);
    //     data.append('City', userDetails.City);
    //     data.append('State',userDetails.State);
    //     data.append('PinCode', userDetails.PinCode);
    //     data.append('Area', userDetails.Area);
    //     data.append('District', userDetails.District);
       
    //     if (imageFile) {
    //       console.log("Image",imageFile)
    //       data.append('image', imageFile);
    //     } else {
    //       data.append('image', userDetails.image);
    //     }
    //     console.log("Api data 0",data);
       
    //     try {
    //         console.log("ID", typeof userDetails.userId,userDetails.userId);   
    //         console.log("ID", typeof userDetails ,userDetails);   
    //         console.log("ID", typeof userId1 ,userId1);   
          
    //         const response = await axios.put("http://localhost:5252/api/Provider/UpdatePersonal", userDetails ,{
    //             headers: {
    //               Accept: '*/*',
    //             },
    //           });

    //         if (response.ok) {
    //             const data = await response.json();
              
    //         } else {
    //             toast.success(
    //                 `${response?.data.message || "Info Change Successfully..!"
    //                 }  `,
    //                 {
                      
               
    //         });
    //     }} catch (error) {
           
    //         console.error("Error: ",  JSON.stringify(error, null, 2));
    //         console.error("Error: ",  JSON.stringify(userDetails, null, 2));
    //         alert(`-${
    //     JSON.stringify(error, null, 2) || "Error"
    //   }`)
    //         toast.error(
    //             `Update Response: ${ 
    //               error.response?.data?.status || "Something went wrong!"
    //             }  -${
    //               error.response?.data.title || "User already exist with same username or email..!"
    //             } `,
    //             {
                  
    //             }
    //           );
    //     }
    //     finally{

    //         setSpinnerState(false);
      
    //       }
    // };
       
       
    const urlI="http://localhost:5252/";  

    const [userDetails, setUserDetails] = useState({
      id: userId1,
      UserName: '',
      FirstName: '',
      LastName: '',
      MiddleName: '',
      PhoneNumber: '',
      Email: '',
      image: '',
      Area: '',
      State: '',
      District: '',
      PinCode: '',
      City: '',
      //professionalDetails
      professionType: "",
      yearOfEx: 0,
      bio: "",
      languageSpoke: "",
      socialLink1: "",
      socialLink2: "",
      timeOfService: "",
      areaServe: "",
      availability: true,
      skill1: "",
      skill2: "",
      skill3: "",
      Longitude: "",
      Latitude: "",
      //service Details

      ServiceName1: '',
      image1: '',
      ServicePrice1: '',
      ServiceName2: '',
      image2: '',
      ServicePrice2: '',
      ServiceName3: '',
      image3: '',
      ServicePrice3: ''
     
      
    });
    const professionList = [
      "Electrician",
      "Plumber",
      "Carpenter",
      "Painter",
      "Welder",
      "Tile Setter",
      "Locksmith",
      "Blacksmith",
      "Driver",
    "AC Technician",
    "Roofer",
    "Handyman",
    "Plasterer",
    "Gardener",
    "Beautician",
    "Technician",
    "Construction Laborer",
    "Pest Control Technician",
    "Security Guard",
    "Maid"
      
    ];
    const [imageFile, setImageFile] = useState(null);
    const [image1File, setImage1File] = useState(null);
    const [image2File, setImage2File] = useState(null);
    const [image3File, setImage3File] = useState(null);
  
    // Fetch user details from API when userId1 changes.
    useEffect(() => {
      axios
        .get(`http://localhost:5252/api/Provider/GetProvider?id=${userId1}`)
        .then((response) => {
          const userData1 = response.data;
          setUserDetails({
            id: userId1,
            UserName: userData1.userName,
            FirstName: userData1.firstName,
            LastName: userData1.lastName,
            MiddleName: userData1.middleName,
            PhoneNumber: userData1.phoneNumber,
            Email: userData1.email,
            image: userData1.profilePhoto,
            Area: userData1.area,
            State: userData1.state,
            District: userData1.district,
            PinCode: userData1.pinCode,
            City: userData1.city,
            //professionalDetails
      professionType: userData1.professionType,
      yearOfEx: userData1.yearOfEx,
      bio: userData1.bio,
      languageSpoke: userData1.languageSpoke,
      socialLink1: userData1.socialLink1,
      socialLink2: userData1.socialLink2,
      timeOfService: userData1.timeOfService,
      areaServe: userData1.areaServe,
      availability: userData1.availability,
      skill1: userData1.skill1,
      skill2: userData1.skill2,
      skill3: userData1.skill3,
      Longitude: userData1.longitude,
      Latitude: userData1.latitude,
      //service Details

      ServiceName1: userData1.serviceName1,
      image1: userData1.serviceImage1,
      ServicePrice1: userData1.servicePrice1,
      ServiceName2: userData1.serviceName2,
      image2: userData1.serviceImage2,
      ServicePrice2: userData1.servicePrice2,
      ServiceName3: userData1.serviceName3,
      image3: userData1.serviceImage3,
      ServicePrice3:userData1.servicePrice3
     
            
          });
          console.log("Fetched user details:", userData1);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }, [userId1]);
  
    // Handle file input change.
    const handleFileChange = (e) => {
      setImageFile(e.target.files[0]);
    };
    const handleFile1Change = (e) => {
      setImage1File(e.target.files[0]);
    };const handleFile2Change = (e) => {
      setImage2File(e.target.files[0]);
    };const handleFile3Change = (e) => {
      setImage3File(e.target.files[0]);
    };
  
    // Handle text field changes.
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserDetails((prev) => ({ ...prev, [name]: value }));
    };
  
    // user info submission.
    const handleSubmit = async (e) => {
      e.preventDefault();
      setSpinnerState(true);
  
      // Create a FormData object.
      const formData = new FormData();
      formData.append('FirstName', userDetails.FirstName);
      formData.append('MiddleName', userDetails.MiddleName);
      formData.append('LastName', userDetails.LastName);
      formData.append('UserName', userDetails.UserName);
      formData.append('PhoneNumber', userDetails.PhoneNumber);
      formData.append('id', userId1);
      formData.append('Email', userDetails.Email);
      formData.append('City', userDetails.City);
      formData.append('State', userDetails.State);
      formData.append('PinCode', userDetails.PinCode);
      formData.append('Area', userDetails.Area);
      formData.append('District', userDetails.District);
      formData.append('Longitude', userDetails.Longitude);
      formData.append('Latitude', userDetails.Latitude);
  
      // Append the image file if selected; otherwise, send the existing image (URL or empty string)
      if (imageFile) {
        console.log("Selected image file:", imageFile);
        formData.append('image', imageFile);
      } else {
        formData.append('image', userDetails.image);
      }
  
      try {
        const response = await axios.put(
          "http://localhost:5252/api/Provider/UpdatePersonal",
          formData,
          {
            headers: {
              Accept: '*/*',
              // Do not manually set 'Content-Type' with FormData
            },
          }
        );
  
        // Check if the update was successful based on status code.
        if (response.status === 200) {
          toast.success(response.data.message || "Info changed successfully!");
        } else {
          toast.error("Update failed. Please try again.");
        }
      } catch (error) {
        console.error("Error updating provider details:", JSON.stringify(error, null, 2));
        alert(`Error: ${JSON.stringify(error, null, 2) || "Error"}`);
        toast.error(
          `Update Response: ${
            error.response?.data?.status || "Something went wrong!"
          } - ${
            error.response?.data.title ||
            "User already exists with the same username or email!"
          }`
        );
      } finally {
        setSpinnerState(false);
      }}
    // Professional info
    const handleProfessionalSubmit = async (e) => {
      e.preventDefault();
      setSpinnerState(true);
  
      // Create a FormData object.
      const formData = {
     "professionType":userDetails.professionType,
        "yearOfEx" :userDetails.yearOfEx,
           "bio":userDetails.bio,
           "languageSpoke":userDetails.languageSpoke,
           "socialLink1":userDetails.socialLink1,
           "socialLink2":userDetails.socialLink2,
           "timeOfService":userDetails.timeOfService,
           "areaServe":userDetails.areaServe,
           "availability":userDetails.availability,
           "skill1":userDetails.skill1,
           "skill2":userDetails.skill2,
           "skill3":userDetails.skill3,
    
           };
  
     
  
      try {
        const response = await axios.put(
          `http://localhost:5252/api/Provider/UpdateProfessional?id=${userId1}`,
          formData,
          {
            headers: {
              Accept: '*/*',
              // Do not manually set 'Content-Type' with FormData
            },
          }
        );
  
        // Check if the update was successful based on status code.
        if (response.status === 200) {
          toast.success(response.data.message || "Info changed successfully!");
        } else {
          toast.error("Update failed. Please try again.");
        }
      } catch (error) {
        console.error("Error updating provider details:", JSON.stringify(error, null, 2));
        alert(`Error: ${JSON.stringify(error, null, 2) || "Error"}`);
        toast.error(
          `Update Response: ${
            error.response?.data?.status || "Something went wrong!"
          } - ${
            error.response?.data.title ||
            "User already exists with the same username or email!"
          }`
        );
      } finally {
        setSpinnerState(false);
      }}

    // Add service method
    const handleServiceSubmit = async (e) => {
      e.preventDefault();
      setSpinnerState(true);
    
      // Create a FormData object.
      const formData1 = new FormData();
      
      // Append service names.
      formData1.append('ServiceName1', userDetails.ServiceName1);
      formData1.append('ServiceName2', userDetails.ServiceName2);
      formData1.append('ServiceName3', userDetails.ServiceName3);
      
      // Append service prices with distinct keys.
      formData1.append('ServicePrice1', userDetails.ServicePrice1);
      formData1.append('ServicePrice2', userDetails.ServicePrice2);
      formData1.append('ServicePrice3', userDetails.ServicePrice3);
      
      // Append the id.
      formData1.append('id', userId1);
    
      // Append images.
      // For image1:
      if (image1File) {
        console.log("Selected image file for image1:", image1File);
        formData1.append('image1', image1File);
      } else {
        formData1.append('image1', userDetails.image1);
      }
      
      // For image2:
      if (image2File) {
        console.log("Selected image file for image2:", image2File);
        formData1.append('image2', image2File);
      } else {
        formData1.append('image2', userDetails.image2);
      }
      console.log(formData1);
      // For image3:
      if (image3File) {
        console.log("Selected image file for image3:", image3File);
        formData1.append('image3', image3File);
      } else {
        formData1.append('image3', userDetails.image3);
      }
    
      try {
        const response = await axios.put(
          "http://localhost:5252/api/Provider/AddService",
          formData1,
          {
            headers: {
              Accept: '*/*',
              // Do not manually set 'Content-Type' when sending FormData.
            },
          }
        );
    
        if (response.status === 200) {
          toast.success(response.data.message || "Info changed successfully!");
        } else {
          toast.error("Update failed. Please try again.");
        }
      } catch (error) {
        console.error("Error updating provider details:", JSON.stringify(error, null, 2));
        alert(`Error: ${JSON.stringify(error, null, 2) || "Error"}`);
        toast.error(
          `Update Response: ${
            error.response?.data?.status || "Something went wrong!"
          } - ${
            error.response?.data.title ||
            "User already exists with the same username or email!"
          }`
        );
      } finally {
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
//change password
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

    

    const response = await axios.put("http://localhost:5252/api/Provider/ChangePassword?id="+userId1, apidata, {
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
      const url = `http://localhost:5252/api/Provider/DeleteUser?id=${userId1}`;
      const response = await axios.delete(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.removeItem("puserId");
      localStorage.removeItem("city");
      localStorage.removeItem("pincode");
       localStorage.removeItem("district");
      localStorage.removeItem("profession");
    
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
  //logout
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
   
      localStorage.removeItem("puserId");
      localStorage.removeItem("city");
      localStorage.removeItem("pincode");
       localStorage.removeItem("district");
      localStorage.removeItem("profession");
     
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
          Professional details
        </button>
      </li>
      <li className="nav-item">
        <button className="btn btn-secondary w-100 text-start py-2 rounded-pill"
        onClick={() => setOption(3)}
        >
         Service details
        </button>
      </li>
      <li className="nav-item mb-3">
        <button
          className="btn btn-secondary w-100 text-start py-2 rounded-pill"
          onClick={() => setOption(4)}
        >
          Bookings
        </button>
      </li>
      <li className="nav-item mb-3">
        <button
          className="btn btn-secondary w-100 text-start py-2 rounded-pill"
          onClick={() => setOption(5)}
        >
          Change Password
        </button>
      </li>
      <li className="nav-item mb-3">
        <button
          className="btn btn-secondary w-100 text-start py-2 rounded-pill"
          onClick={() => setOption(6)}
        >
          Delete Account
        </button>
      </li>
      <li className="nav-item">
        <button className="btn btn-secondary w-100 text-start py-2 rounded-pill"
        onClick={() => setOption(7)}
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
                                
                                
                       

                                
                           
                            </Row>
                        <Row>
                                
                                <Col>
                               
                                   
                                    <div className="conatiner  " style={{ background: 'none' }}>
  <img 
  src={urlI+userDetails.image} 
    alt="Provider" 
    className="rounded-circle  profile-img1" 
  />
</div>
                                   <div className="container"> <input style={{width:"36vh"}} className='mt-2'
                                       
                                            type="file"
                                            id="image"
                                            name="image"
                                           
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                       
                                   
                                </Col>
                               
                            </Row> 
                        <Row>
                                
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                        required
                                            type="text"
                                            id="UserName"
                                            name="UserName"
                                           value={userDetails.UserName}
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
                                            id="FirstName"
                                            name="FirstName"
                                            value={userDetails.FirstName}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span className="spann"> First Name</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                       
                                            type="text"
                                            id="MiddleName"
                                            name="MiddleName"
                                            value={userDetails.MiddleName}
                                            onChange={handleChange}
                                        />
                                        <span className="spann"> Middle Name</span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                       
                                            type="text"
                                            id="LastName"
                                            name="LastName"
                                            value={userDetails.LastName}
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
                                            id="PhoneNumber"
                                            name="PhoneNumber"
                                            
                                           value={userDetails.PhoneNumber}
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
                                            id="Email"
                                            name="Email"
                                            value={userDetails.Email}
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
                                            id="Area"
                                            name="Area"
                                           value={userDetails.Area}
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
                                            id="City"
                                            name="City"
                                           value={userDetails.City}
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
                                            id="District"
                                            name="District"
                                            value={userDetails.District}
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
                                            id="PinCode"
                                            name="PinCode"
                                           value={userDetails.PinCode}
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
                                            id="State"
                                            name="State"
                                            value={userDetails.State}
                                            onChange={handleChange}
                                            
                                        />
                                        <span className="spann"> State</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                        required
                                            type="text"
                                            id="Latitude"
                                            name="Latitude"
                                           value={userDetails.Latitude}
                                            onChange={handleChange}
                                         
                                        />
                                        <span className="spann"> Latitude </span>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="inputBox1">
                                        <input
                                        required
                                            type="text"
                                            id="Longitude"
                                            name="Longitude"
                                            value={userDetails.Longitude}
                                            onChange={handleChange}
                                            
                                        />
                                        <span className="spann"> Longitude</span>
                                    </div>
                                </Col>
                            </Row>
                          

                            <hr></hr>
                            <button type="submit" className="btn btn-success m-2">Update</button>
                        </form>
                    </div>
                </div>)}
                 {/* For Professional */}
                 {HandleOption==2 && (
                     <div className="col-md-9">
                     <div className="p-4">
                         <h3>Update Professional Details Information</h3>
 
                        
                         <form onSubmit={handleProfessionalSubmit}>
                    
                                
                         <Row>
                                 
                                 <Col>
                                 <div className="inputBox1">
                                 <select
         id="professionType"
         name="professionType"
         value={userDetails.professionType}
         onChange={handleChange}
         className="form-select"
         required
       >
         <option value="">Select Profession</option>
         {professionList.map((profession, index) => (
           <option key={index} value={profession}>
             {profession}
           </option>
         ))}
       </select>
      
       </div>
                                     
                                 </Col>
                                 <Col>
                                 <div className="col-md-6">
 <label htmlFor="availability" className="form-label">
   Availability 
 </label>
 <div className="form-check form-switch">
   <input
     type="checkbox"
     className="form-check-input"
     id="availability"
     name="availability"
     checked={userDetails.availability}
     onChange={(e) =>
       setUserDetails({
         ...userDetails,
         availability: e.target.checked,
       })
     }
     style={{
       backgroundColor: userDetails.availability ? "green" : "red",
       borderColor: userDetails.availability ? "green" : "red",
     }}
   />
   <label
     className="form-check-label"
     htmlFor="availability"
     style={{
       color: userDetails.availability ? "green" : "red",
       fontWeight: "bold",
     }}
   >
     {userDetails.availability ? "Yes" : "No"}
   </label>
 </div>
</div>
                                 </Col>
                                
                             </Row>    
                            
                         <Row>
                                 
                                 <Col>
                                     <div className="inputBox1">
                                         <textarea
                                         required
                                             type="text"
                                             id="bio"
                                             name="bio"
                                            value={userDetails.bio}
                                             onChange={handleChange}
                                         />
                                         <span className="spann"> Bio </span>
                                     </div>
                                 </Col>
                                
                             </Row>
                             
      
      
     
     
                            
      
                             <Row>
                                 <Col>
                                     <div className="inputBox1">
                                         <input
                                             type="text"
                                             id="socialLink1"
                                             name="socialLink1"
                                             value={userDetails.socialLink1}
                                             onChange={handleChange}
                                             required
                                         />
                                         <span className="spann"> Social Link1</span>
                                     </div>
                                 </Col>
                                 <Col>
                                     <div className="inputBox1">
                                         <input
                                             type="text"
                                             id="socialLink2"
                                             name="socialLink2"
                                             value={userDetails.socialLink2}
                                             onChange={handleChange}
                                             required
                                         />
                                         <span className="spann"> Social Link1</span>
                                     </div>
                                 </Col>
                                
                             </Row>
                             <Row>
                                 
                                 <Col>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="number"
                                             id="yearOfEx"
                                             name="yearOfEx"
                                             
                                            value={userDetails.yearOfEx}
                                             onChange={handleChange}
                                             min="1"
                                              max="20"
                                             onInvalid={(e) =>
                                             e.target.setCustomValidity("Experience can't be greater 15 Years.")
                                             }
                                              onInput={(e) => e.target.setCustomValidity("")}
   
                                         />
                                         <span className="spann"> Experience </span>
                                     </div>
                                 </Col>
                                 <Col>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="text"
                                             id="languageSpoke"
                                             name="languageSpoke"
                                             value={userDetails.languageSpoke}
                                             onChange={handleChange}
                                         />
                                         <span className="spann">Languages known</span>
                                     </div>
                                 </Col>
                             </Row>
                           
                             <Row>
                                 
                                 <Col>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="text"
                                             id="timeOfService"
                                             name="timeOfService"
                                            value={userDetails.timeOfService}
                                             onChange={handleChange}
                                         />
                                         <span className="spann"> Service Timing </span>
                                     </div>
                                 </Col>
                                 <Col>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="text"
                                             id="areaServe"
                                             name="areaServe"
                                             value={userDetails.areaServe}
                                             onChange={handleChange}
                                         />
                                         <span className="spann">Area Serve</span>
                                     </div>
                                 </Col>
                             </Row>
                             <Row>
                                 
                                 <Col>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="text"
                                             id="skill1"
                                             name="skill1"
                                            value={userDetails.skill1}
                                            onChange={handleChange}
                                         />
                                         <span className="spann"> Skill1</span>
                                     </div>
                                 </Col>
                                 <Col>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="text"
                                             id="skill2"
                                             name="skill2"
                                            value={userDetails.skill2}
                                             onChange={handleChange}
                                            
                                         />
                                         <span className="spann"> Skill2 </span>
                                     </div>
                                 </Col>
                                 <Col>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="text"
                                             id="skill3"
                                             name="skill3"
                                             value={userDetails.skill3}
                                             onChange={handleChange}
                                             
                                         />
                                         <span className="spann"> Skill3</span>
                                     </div>
                                 </Col>
                             </Row>
                           
 
                             <hr></hr>
                             <button type="submit" className="btn btn-success m-2">Update</button>
                         </form>
                     </div>
                 </div>
                   )}
                    {/* For servicec */}
                {HandleOption==3 && (
                    
                     <div className="col-md-9">
                     <div className="p-4">
                         <h3> Add Services </h3>
 
                        
                         <form onSubmit={handleServiceSubmit}>
                        
                        
                         
                         <Row>
                                 
                                 <Col md="4">
                               
 
                                     <div className="inputBox1 ">
                                     <div className="container" style={{ background: 'none' }}>
                                     <img 
                                    src={urlI+userDetails.image1} 
                                         alt="Provider" 
                                        className="  profile-img1" 
                                               />
                                          
                                     </div> 
                                     <div className="container mt-2"style={{ background: 'none' }}>
                                     <input style={{ width:'35vh' }}
                                        
                                             type="file"
                                             id="image"
                                             name="image"
                                            
                                             onChange={handleFile1Change}
                                         />
                                         </div>
                                      
                                     </div>
                                 </Col>
                                
                             <Col md="4">
                                 <Row>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="text"
                                             id="ServiceName1"
                                             name="ServiceName1"
                                            value={userDetails.ServiceName1}
                                             onChange={handleChange}
                                         />
                                         <span className="spann"> Name of Service </span>
                                     </div>
                                 </Row>
                                
                            
                                 <Row>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="number"
                                             id="ServicePrice1"
                                             name="ServicePrice1"
                                            value={userDetails.ServicePrice1}
                                             onChange={handleChange}
                                         />
                                         <span className="spann"> Price </span>
                                     </div>
                                 </Row>
                                 </Col>
                             </Row>
                             <hr></hr>
                             <Row>
                                 
                                 <Col md="4">
                               
 
                                     <div className="inputBox1 ">
                                     <div className="container" style={{ background: 'none' }}>
                                     <img 
                                    src={urlI+userDetails.image2} 
                                         alt="Provider" 
                                        className=" profile-img1" 
                                               />
                                          
                                     </div> 
                                     <div className="container mt-2"style={{ background: 'none' }}>
                                     <input style={{ width:'35vh' }}
                                        
                                             type="file"
                                             id="image"
                                             name="image"
                                            
                                             onChange={handleFile2Change}
                                         />
                                         </div>
                                      
                                     </div>
                                 </Col>
                                
                             <Col md="4">
                                 <Row>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="text"
                                             id="ServiceName2"
                                             name="ServiceName2"
                                            value={userDetails.ServiceName2}
                                             onChange={handleChange}
                                         />
                                         <span className="spann"> Name of Service 2</span>
                                     </div>
                                 </Row>
                                
                            
                                 <Row>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="number"
                                             id="ServicePrice2"
                                             name="ServicePrice2"
                                            value={userDetails.ServicePrice2}
                                             onChange={handleChange}
                                         />
                                         <span className="spann"> Price </span>
                                     </div>
                                 </Row>
                                 </Col>
                             </Row>
                             <hr></hr>
                             <Row>
                                 
                                 <Col md="4">
                               
 
                                     <div className="inputBox1 ">
                                     <div className="container" style={{ background: 'none' }}>
                                     <img 
                                    src={urlI+userDetails.image3} 
                                         alt="Provider" 
                                        className=" profile-img1" 
                                               />
                                          
                                     </div> 
                                     <div className="container mt-2"style={{ background: 'none' }}>
                                     <input style={{ width:'35vh' }}
                                        
                                             type="file"
                                             id="image"
                                             name="image"
                                            
                                             onChange={handleFile3Change}
                                         />
                                         </div>
                                      
                                     </div>
                                 </Col>
                                
                             <Col md="4">
                                 <Row>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="text"
                                             id="ServiceName3"
                                             name="ServiceName3"
                                            value={userDetails.ServiceName3}
                                             onChange={handleChange}
                                         />
                                         <span className="spann"> Name of Service 3</span>
                                     </div>
                                 </Row>
                                
                            
                                 <Row>
                                     <div className="inputBox1">
                                         <input
                                         required
                                             type="number"
                                             id="ServicePrice3"
                                             name="ServicePrice3"
                                            value={userDetails.ServicePrice3}
                                             onChange={handleChange}
                                         />
                                         <span className="spann"> Price </span>
                                     </div>
                                 </Row>
                                 </Col>
                             </Row>
 
                             <hr></hr>
                             <button type="submit" className="btn btn-success m-2">Update</button>
                         </form>
                     </div>
                 </div>
                   )}
                {/* For Booking */}
                {HandleOption==4 && (
                    <div className="col-md-9">
                    <div className="p-4">
                        <h3>Booking Under Construction </h3>
                        </div>
                    </div>
                   )}

                {/* For ChangePassword */}
                {HandleOption==5 && (
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
                {HandleOption==6 && (
                   <div className="col-md-9">
                   <div className="p-4">
                       <h3>Delete Account </h3>
                       <form onSubmit={handleDelete}>
                             
                         
                             
                            
                       <button type="submit" className="btn btn-danger m-2">Delete Account</button>
                       
                      </form>
                       </div>
                   </div>
                )}

                {HandleOption==7 && (
                     <div className="col-md-9">
                     <div className="p-4">
                         <h3>Logout </h3>
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

export default ProviderPersonalInfo;
