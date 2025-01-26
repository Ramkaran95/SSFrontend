import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer ,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../HomePage/NavBar";
import Spinner from '../../Spinner';
function ProviderRegistration() {
  const [value,setValue]=useState('')
  const options = [
      {label:"Delhi",value:1},
      {label:"Mumbai",value:2},
      {label:"Bengaluru",value:3},
      {label:"Chennai",value:4},
      {label:"Kolkata",value:5},
      {label:"Hyderabad",value:6},
      {label:"Pune",value:7},
      {label:"Ahmedabad",value:8},
      {label:"Chandigarh",value:9},
      {label:"Jaipur",value:10},
      {label:"Kochi",value:11},
      {label:"Lucknow",value:12},
      {label:"Surat",value:13},
      {label:"Indore",value:14},
      {label:"Ghaziabad",value:15},
      {label:"Noida",value:16},
      {label:"Nagpur",value:17},
      {label:"Bhopal",value:18},
      {label:"Vishakapatnam",value:19},
      {label:"Vadodara",value:20},
      {label:"Mysore",value:21},
      {label:"Patna",value:22},
      {label:"Coimbatore",value:23},
      {label:"Rajkot",value:24},
      {label:"Kanpur",value:25}
  ]
  function handleSelect(event){
      setValue(event.target.value)
  }

    const navigate= useNavigate();
   
     const handleNextStep = (e) => {
      e.preventDefault();  // Prevent the form submission
      setStep(prevStep => prevStep + 1);
      console.log("step log is : " + step + 1);  // Debugging
    };
    
    const handlePreviousStep=(e)=>{
      e.preventDefault(); 
      setStep(prevStep=>prevStep-1);
      console.log("step log is : "+step-1);

    };
    const [step,setStep]=useState(1);
    const date = new Date();
    const [formData, setformData] = useState({
      providerId: 0,
      userName: "",
      password: "",
      firstName: "",
      middleName: "",
      lastName: "",
      profilePhoto: "profile.jpg",
      phoneNumber: "",
      email: "",
      createAt: date.toISOString(),
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
      serviceName1: "",
      servicePrice1: 0,
      serviceImage1: "service.jpg",
      serviceName2: "",
      servicePrice2: 0,
      serviceImage2: "service.jpg",
      serviceName3: "",
      servicePrice3: 0,
      serviceImage3: "service.jpg",
      area: "",
      state: "",
      district: "",
      pinCode: 0,
      city: "",
      longitude: "19.7222723",
      latitude: "60.9460277"
    });
  
  

          const handleChange = (e) => {
            setformData({
              ...formData,
              [e.target.name]: e.target.value,
            });
          };
  const userApi = "http://localhost:5252/api/Provider/Registation";

  // Handle location coordinates
  const fetchCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setformData({
            ...formData,
            latitude: ""+position.coords.latitude,
            longitude: ""+position.coords.longitude,
          });
          console.log(
            `Location fetched: ${position.coords.latitude}, ${position.coords.longitude}`
          );
        },
        (error) => {
          console.error("Error fetching location: ", error);
          alert("Unable to fetch location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  
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
    
  ];
  
  const handleChange1 = (e) => {
    const value = e.target.value;
    const [lat, lng] = value.split(",").map((coord) => coord.trim());

    setformData({
      ...formData,
      latitude: ""+lat || "",  // if lat is empty, set it to an empty string
      longitude: ""+lng|| "", // if lng is empty, set it to an empty string
    });
  };
    
  const [handleButtonState ,sethandleButtonState]=useState(false);
  const handleProfessionChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      professionType: e.target.value,
    }));
  };
  

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
   /* console.log("Provider ID:", formData.providerId);
    console.log("User Name:", formData.userName);
    console.log("Password:", formData.password);
    console.log("First Name:", formData.firstName);
    console.log("Middle Name:", formData.middleName);
    console.log("Last Name:", formData.lastName);
    console.log("Profile Photo:", formData.profilePhoto);
    console.log("Phone Number:", formData.phoneNumber);
    console.log("Email:", formData.email);
    console.log("Created At:", formData.createAt);
    console.log("Profession Type:", formData.professionType);
    console.log("Years of Experience:", formData.yearOfEx);
    console.log("Bio:", formData.bio);
    console.log("Language Spoken:", formData.languageSpoke);
    console.log("Social Link 1:", formData.socialLink1);
    console.log("Social Link 2:", formData.socialLink2);
    console.log("Time of Service:", formData.timeOfService);
    console.log("Area Serve:", formData.areaServe);
    console.log("Availability:", typeof formData.availability);
    console.log("Skill 1:", formData.skill1);
    console.log("Skill 2:", formData.skill2);
    console.log("Skill 3:", formData.skill3);
    console.log("Service Name 1:", formData.serviceName1);
    console.log("Service Price 1:", formData.servicePrice1);
    console.log("Service Image 1:", formData.serviceImage1);
    console.log("Service Name 2:", formData.serviceName2);
    console.log("Service Price 2:", formData.servicePrice2);
    console.log("Service Image 2:", formData.serviceImage2);
    console.log("Service Name 3:", formData.serviceName3);
    console.log("Service Price 3:", formData.servicePrice3);
    console.log("Service Image 3:", formData.serviceImage3);
    console.log("Area:", formData.area);
    console.log("State:", formData.state);
    console.log("District:", formData.district);
    console.log("Pin Code:", formData.pinCode);
    console.log("City:", formData.city);
    console.log("Longitude:", typeof formData.longitude,formData.longitude);
    console.log("Latitude:", typeof formData.latitude,formData.latitude);    */
    sethandleButtonState(true);
    try {
     const response = await axios.post(userApi, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      console.log("The data sending"+formData+" url "+userApi);
     
      toast.success(
        `Registration Response: -${
          JSON.stringify(response.data, null, 2) || "Error"
        }  `,
        {
       
        }
      );
      navigate("/login");
     
     
   
     

    } catch (error) {
      //console.log("The data sending"+formData+" url "+userApi);
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
<>
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
       <Spinner visible={handleButtonState}/>
{step==1 && (
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
     Provider Registration
   </h2>
   <hr></hr><div className="d-flex justify-content-start"> <h4 className="text-secondary text-right">Personal Details</h4></div>
   <br></br>
     <form onSubmit={handleNextStep}>
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
           type="number"
           id="phoneNumber"
           name="phoneNumber"
         
           value={""+formData.phoneNumber}
           onChange={handleChange}
           className="form-control"
           required
           min="1111111111"
  max="9999999999"
   onInvalid={(e) =>
    e.target.setCustomValidity("Phone number must of 10 Digit.")
  }
  onInput={(e) => e.target.setCustomValidity("")}
  
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
                maxLength="22"
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
                maxLength="22"
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
                maxLength="22"
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
    maxLength="20"
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
    maxLength="20"
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
   
   onInvalid={(e) =>
     e.target.setCustomValidity("Pincode must of 6 Digit.")
   }
   onInput={(e) => e.target.setCustomValidity("")}
   
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
    maxLength="20"
   value={formData.state}
   onChange={handleChange}
   className="form-control"
   required
 />
</div>


       
     </div>

     {/* Submit Button */}
     <div className="mt-4">
       <button type="submit"  className="btn btn-primary w-100" style={{ borderRadius: "10px" }}>
         Next 
       </button>
      
     </div>
     </form>
 </div>
)}
{step==2 && (
 
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
  <form  onSubmit={handleSubmit}>
   <h2 className="text-center mb-4" style={{ fontFamily: "'Comic Sans MS', cursive" }}>
     Provider Registration
   </h2>
   <hr></hr><div className="d-flex justify-content-start"> <h4 className="text-secondary text-right">Professional Deatils</h4></div>
   <br></br>
   
     <div className="row g-3">
     
     <div className="container">
    
     <div className="col-md-12">
       <label htmlFor="professionType" className="form-label">
         Profession Type<span className="text-danger"> *</span>
       </label>
       
       <select
         id="professionType"
         name="professionType"
         value={formData.professionType}
         onChange={handleProfessionChange}
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
   </div>
<div className="col-md-6">
 <label htmlFor="yearOfEx" className="form-label">
   Years of Experience 
 </label>
 <input
   type="number"
   id="yearOfEx"
   name="yearOfEx"
   min="0"
   max="30"
   value={formData.yearOfEx}
   onChange={handleChange}
   className="form-control"
   required
 />
</div>
       

       {/* Phone Number */}
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
     checked={formData.availability}
     onChange={(e) =>
       setformData({
         ...formData,
         availability: e.target.checked,
       })
     }
     style={{
       backgroundColor: formData.availability ? "green" : "red",
       borderColor: formData.availability ? "green" : "red",
     }}
   />
   <label
     className="form-check-label"
     htmlFor="availability"
     style={{
       color: formData.availability ? "green" : "red",
       fontWeight: "bold",
     }}
   >
     {formData.availability ? "Yes" : "No"}
   </label>
 </div>
</div>


       {/* skill */}
       <div className="col-md-12">
         <label className="form-label">
           Skills <span className="text-danger">*</span>
         </label>
         <div className="row g-2">
           <div className="col-md-4">
             <input
               type="text"
               id="skill1"
               name="skill1"
               value={formData.skill1}
               onChange={handleChange}
               className="form-control"
               placeholder="skill1"
               required
             />
           </div>
           <div className="col-md-4">
             <input
               type="text"
               id="skill2"
               name="skill2"
               value={formData.skill2}
               onChange={handleChange}
               className="form-control"
               placeholder="skill2"
               required
             />
           </div>
           <div className="col-md-4">
             <input
               type="text"
               id="skill3"
               name="skill3"
               value={formData.skill3}
               onChange={handleChange}
               className="form-control"
               placeholder="skill3"
               required
             />
           </div>
         </div>
       </div>
       {/*Bio*/}
       <div className="col-md-12">
 <label htmlFor="bio" className="form-label">
   Bio<span className="text-danger">*</span>
 </label>
 <textarea
   id="bio"
   name="bio"
   value={formData.bio}
   onChange={handleChange}
   className="form-control"
   rows="2" 
   minLength={30}
   maxLength={100}
   required
    onInvalid={(e) =>
     e.target.setCustomValidity("Input bio of minimum 30 characters")
   }
   onInput={(e) => e.target.setCustomValidity("")}
   
   
   placeholder="Write something about yourself..."
 ></textarea>
</div>

       {/* Email */}
       <div className="col-md-6">
         <label htmlFor="languageSpoke" className="form-label">
         Language Known <span className="text-danger">*</span>
         </label>
         <input
           type="text"
           id="languageSpoke"
           name="languageSpoke"
            maxLength="40"
           value={formData.languageSpoke}
           onChange={handleChange}
           placeholder="enter languages ',' seperated"
           className="form-control"
           required
         />
       </div>

      
       <div className="col-md-6">
         <label htmlFor="timeOfService" className="form-label">
           Timing of Service 
         </label>
         <input
           type="text"
           id="timeOfService"
           name="timeOfService"
           placeholder="e.g., 9am-7pm"
            maxLength="15"
           value={formData.timeOfService}
           onChange={handleChange}
           className="form-control"
           
         />
       </div>

    


<div className="col-md-6">
 <label htmlFor="socialLink1" className="form-label">
 Social Link 1 
 </label>
 <input
   type="text"
   id="socialLink1"
   name="socialLink1"
    maxLength="30"
   value={formData.socialLink1}
   onChange={handleChange}
   className="form-control"
   placeholder="e.g., http://www.social.com"
   
 />
</div>

<div className="col-md-6">
 <label htmlFor="socialLink2" className="form-label">
 Social Link 2
 </label>
 <input
   type="text"
   id="socialLink2"
   name="socialLink2"
   maxLength="30"
   value={formData.socialLink2}
   onChange={handleChange}
   className="form-control"
    placeholder="e.g., http://www.social.com"

  
 />
</div>
{/* User Name */}
<div className="col-md-6">
         <label htmlFor="areaServe" className="form-label">
         Area Serve's 
         </label>
         <input
           type="text"
           id="areaServe"
           maxLength="40"
           name="areaServe"
           value={formData.areaServe}
           onChange={handleChange}
           className="form-control"
          
         />
       </div>
       <div className="col-md-6">
     <label htmlFor="latitudeLongitude" className="form-label">
       Location Coordinates <span className="text-danger">*</span>
     </label>
     <div className="input-group">
       <input
         type="text"
         id="latitudeLongitude"
         name="latitudeLongitude"
         value={`${formData.latitude} , ${formData.longitude}`}
         onChange={handleChange1}
         className="form-control"
         required
       />
       <button
         type="button"
         className="btn btn-primary"
         onClick={fetchCurrentLocation}
       >
         <i className="bi bi-geo-alt-fill me-1"></i>Get
       </button>
     </div>
   </div>



  {/* Submit Button */}
  <div className="col-md-6">
     <button type="submit" onClick={handlePreviousStep} className="btn btn-primary w-100" style={{ borderRadius: "10px" }}>
         Previous 
       </button>
       </div>
       <div className="col-md-6">
       <button type="submit" className="btn btn-primary w-100 " disabled={handleButtonState} style={{ borderRadius: "10px" }}>
       {handleButtonState ? "Hang on ! We are almost there.." : "Register"}
       </button>
     
     </div>
       
     </div>

     
     </form>
 </div>
)}
  
 </div>
 </>

  

  
  );
}

export default ProviderRegistration;

