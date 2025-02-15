


import React, { useEffect ,useState } from "react";
import "./SearchItem/HomeUI.css";
import { Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import './ListPage.css'
import { toast } from "react-toastify";
import { useLocation } from 'react-router-dom'; 
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import SearchItem from './SearchItem/SearchItem';
import UnAuth from "../../Features/UnAuth";
import FooterSection from "../HomePage/FooterSection";
import NavBar from "../HomePage/NavBar";
const libraries = ["places"]; // Required for Autocomplete


const UserDashBoard= () => {
    
 const serverUrl = import.meta.env.VITE_SERVER_URL;
 const Gkey= import.meta.env.VITE_GOOGLE_KEY;
 const userId = localStorage.getItem("userId");

 console.log("Server URL:", serverUrl,userId);
 if (!userId) return<div><UnAuth/></div>
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
       
  axios.get(`http://localhost:5252/api/User/GetUser?id=${userId}`)
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
      // setState(false);
      console.error('Error fetching user data:', error);
      
    });
}, [userId]); 

 
 
    // const photos = [
    //     { url: '/Provider/makeup-artist.png', name: 'Beautician' },
    //     { url: '/Provider/plumber.png', name: 'Plumber' },
    //     { url: '/Provider/electrician.png', name: 'Electrician' },
    //     { url: '/Provider/carpenter.png', name: 'Carpenter' },
    //     { url: '/Provider/maid.png', name: 'Maid' },
    //     { url: '/Provider/painter.png', name: 'Painter' },
    //     { url: '/Provider/mechanic.png', name: 'Mechanic' },
    //     { url: '/Provider/technician.png', name: 'technician' },
    //     { url: '/Provider/welder.png', name: 'Welder' },
    //     { url: '/beautrician.png', name: 'Beautician' },
    //     { url: '/plumber.png', name: 'Plumber' },
    //     { url: '/electrician.png', name: 'Electrician' },
    //     { url: '/beautrician.png', name: 'Beautician' }  ,
    //     { url: '/plumber.png', name: 'Security Guard' } ];
        const photos = [
          { url: '/Provider/makeup-artist.png', name: 'Beautrician' },
          { url: '/Provider/plumber.png', name: 'Plumber' },
          { url: '/Provider/electrician.png', name: 'Electrician' },
          { url: '/Provider/carpenter.png', name: 'Carpenter' },
          { url: '/Provider/maid.png', name: 'Maid' },
          { url: '/Provider/painter.png', name: 'Painter' },
          { url: '/Provider/mechanic.png', name: 'Mechanic' },
          { url: '/Provider/technician.png', name: 'Technician' }, // Fixed capitalization
          { url: '/Provider/welder.png', name: 'Welder' },
          { url: '/Provider/customs-agent.png', name: 'Security Guard' }, 
          {url: '/Provider/service.png', name: 'AC Technician' },
          { url: '/Provider/taxi-driver.png', name: 'Driver' },
         // Corrected image for Security Guard
      ];
      


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
          "Beautrician",
          "Technician",
          "Construction Laborer",
          "Pest Control Technician",
          "Security Guard",
            
          ];
          const navigate = useNavigate()
          function nav (){
            console.log("userData",{userDetails});
            navigate("/userDashboard/personalInfo");


          }


        //  ----------------
          // autocomplete 
          const { isLoaded, loadError } = useLoadScript({
            googleMapsApiKey: Gkey, // Replace with your API Key
            libraries,
          });
          const handlePlaceChanged = (autocomplete) => {
            if (!autocomplete) return;
            const input = document.getElementById("area").value;
           
            const place = autocomplete.getPlace();
            if (!place || !place.address_components) {
              console.error("No address components found for the selected place.");
              return;
            }
            const addressComponents = {};
            place.address_components.forEach((component) => {
              const types = component.types;
              if (types.includes("locality")) {
                addressComponents.city = component.long_name;
                setProviderFilter((prevState) => ({ ...prevState, city: component.long_name }));
              } else if (types.includes("administrative_area_level_1")) {
                addressComponents.state = component.long_name;
               
              } else if (types.includes("administrative_area_level_3")) {
                addressComponents.district = component.long_name;
                setProviderFilter((prevState) => ({ ...prevState, district: component.long_name }));
       
              } else if (types.includes("postal_code")) {
                addressComponents.postalCode = component.long_name;
                setProviderFilter((prevState) => ({ ...prevState, pincode: parseInt(component.long_name) }));
              }
            });  
            // Set area based on the input value
               console.log("Place details:", place);
               
               console.log("Place details:", place);
               console.log("Extracted address:", addressComponents);
           
          };    
    
          //----------provider fetching 
          const [providerFilter, setProviderFilter]=useState(
            {
              pincode:0,
              city: "",
              district:"",
              profession:"",
              

            }


          );
          const handleProviderFilter = (e) => {
            setProviderFilter({
              ...providerFilter,
              [e.target.name]: e.target.value,
            });
          };
          const [providerResponse, setProviderResponse]=useState([]);
          const handleProviderSearch = async (e) => {
            e.preventDefault();
            
            const url = `${serverUrl}Features/ProviderByLocation?city=${providerFilter.city}&pinCode=${providerFilter.pincode}&district=${providerFilter.district}&profession=${providerFilter.profession || ""}`;
          
            try {
              const response = await axios.get(url, {
                headers: {
                  "Content-Type": "application/json",
                },
              });
          
              console.log("The data being sent:", JSON.stringify(providerFilter, null, 2));
              console.log("Request URL:", url);
              console.log("The data being sent:", JSON.stringify(response.data, null, 2), null, 2);
              setProviderResponse(response.data);
              if (response.data.length===0){
                toast.success(
                  `${providerFilter.profession} not found in this area..!`,
                  
                );
  
              }
              else{
                toast.success(
                  `${providerFilter.profession} fetched successfully..!`,
                  
                );
  
  
              }
          
            } catch (error) {
              console.error("Error occurred:", error);
              const errorMessage = error.response?.data?.title || "Something went wrong!";
              const errorDetails = Object.keys(error.response?.data?.errors || {}).join(", ");
          
              toast.error(
                `${errorDetails}\n ${errorMessage} 
              
                `
              );
            }
          };
          
          const handleProviderSearch1 = async (e,city,pincode,district,profession) => {
            e.preventDefault();
            console.log(providerFilter.pincode,city,pincode)
          
            try {
              let url;
              
              if (!providerFilter.city) {  // Check if city is empty
                  url = `${serverUrl}Features/ProviderByLocation?city=${city || ""}&pinCode=${pincode || 0}&district=${district || ""}&profession=${profession || ""}`;
              } else {
                  url = `${serverUrl}Features/ProviderByLocation?city=${providerFilter.city}&pinCode=${providerFilter.pincode}&district=${providerFilter.district || ""}&profession=${profession || ""}`;
              }
          
              const response = await axios.get(url, {
                  headers: {
                      "Content-Type": "application/json",
                  },
              });
              
             setProviderResponse(response.data);
              console.log("The data being sent:", JSON.stringify(providerFilter, null, 2));
              console.log("Request URL:", url);
              console.log("The data being sent:", JSON.stringify(response.data, null, 2), null, 2);
            
              if (response.data.length===0){
                toast.success(
                  `${profession} not found in this area..!`,
                  
                );
  
              }
              else{
                toast.success(
                  `${profession} fetched successfully..!`,
                  
                );
  
  
              }
          
            } catch (error) {
              console.error("Error occurred:", error,city,pincode,district,profession);
              console.log("The error:", JSON.stringify(error.response?.data, null, 2));
            
              // Check if response exists before accessing its properties
              const errorMessage = error.response?.data?.title || "Something went wrong!";
              const errorDetails = Object.keys(error.response?.data?.errors || {}).join(", ");
          
              // alert(`Error: ${errorMessage} ${errorDetails ? " - Issues: " + errorDetails : ""}`);
              
              toast.error(
                `Error: ${errorMessage} \n Details: ${errorDetails || "Check your input or try again later."}`
              ); toast.error(
                `${profession} not found in this area..!`
              );
            }
          };
          
         
          console.log("provider data: "+providerFilter.city);
                //autocomplete
                if (loadError) return <div>Error loading Google Maps</div>;
                if (!isLoaded) return <div>Loading...</div>;
      
               
  return (
    <> 
   
    <div className="container-fluid" >
      {/* Header */}
     {/* <p>{userData.firstName+ providerFilter.pincode +JSON.stringify(providerResponse, null, 2)}</p> */}
      <div className="header1" >  
         <div>
      <h1 className="title1">ServiceSeeker</h1>
      <p className="subtitle1">Hello, {userDetails.firstName} { userDetails.lastName}</p>
      <p className="location1"> <i className="bi bi-geo-alt-fill me-1"></i>{userDetails.city}, {userDetails.pinCode}</p>
    </div>
    <div className="profile-icon1">
  <div
    onClick={nav}
    style={{
      backgroundImage: `url("/Common/profile-user.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "60px", // Set the desired width
      height: "60px", // Set the desired height
      cursor: "pointer", // Makes it visually clickable
    }}
  ></div>
    </div>
    





    </div>
    <br></br>
      {/* Search Bar */}
       
        <div className="container w-100">
      <div className="container  ">
      <form onSubmit={handleProviderSearch}>
      <div className="d-flex  justify-content-between align-item-center">
     {/* <input
          type="text"
          className="form-control "
          placeholder="Search for a place..."
          id ="area"
            /> */}
           
        <Autocomplete
        onLoad={(autocomplete) => (window.autocomplete = autocomplete)} // Keep reference
        onPlaceChanged={() => handlePlaceChanged(window.autocomplete)}
      >
        <input
          type="text"
          className="form-control "
          placeholder="Search for a place..."
          id ="area"
            />
      </Autocomplete> 
      
        <select
         id="profession"
         name="profession"
        value={providerFilter.profession}
        onChange={handleProviderFilter}
      className="form-select h-100 w-25"
         required
       >
        
      
         <option value="">Select Profession</option>
         {professionList.map((profession, index) => (
           <option key={index} value={profession}>
             {profession}
           </option>
         ))}
       </select> 
        <button type="submit"   className="btn btn-primary  h-100" >&nbsp;&nbsp;Search&nbsp;&nbsp;</button>
         
    
     
    </div>
    </form> 
    </div>
    </div>
  
   {/* Providers image serach section */}
    <div className="container">
    <div className="containner m-3">
    <div className=" d-flex  justify-content-center align-item-center">
    
      <form>
  <div className="grid1">
    {photos.map((photo, index) => (
      <button
        key={index}
        type="submit"
        className="box1 btn button11p"
        id={`prosession${index}`} 
        name="procession"
        value={photo.name}
        onClick={(e) => handleProviderSearch1(e, userDetails.city, userDetails.pinCode, userDetails.district, photo.name)}
        style={{ backgroundImage: `url(${photo.url})` }}
      >
        <p id="p1">{photo.name}</p>
      </button>
    ))}
  </div>
</form>

      </div>
      </div>
      </div>
 </div>
 <div className="listResult">
 {providerResponse.map((presponse, index) => (
     
    <SearchItem key={index} ProviderData={presponse} />

 ))}
    <p>{providerFilter.city}</p>
    <p>{providerFilter.pincode}</p>
    <p>{providerFilter.profession}</p>
    
</div>

    </>
  );
};

export default UserDashBoard;





