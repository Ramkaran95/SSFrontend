import React from "react";
import "./HomeUI.css";
import { Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";


import { useLoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"]; // Required for Autocomplete

const HomeUI = ({userData}) => {
  
 
    const photos = [
        { url: '/Provider/makeup-artist.png', name: 'Beautician' },
        { url: '/Provider/plumber.png', name: 'Plumber' },
        { url: '/Provider/electrician.png', name: 'Electrician' },
        { url: '/Provider/carpenter.png', name: 'Carpenter' },
        { url: '/Provider/maid.png', name: 'Maid' },
        { url: '/Provider/painter.png', name: 'Painter' },
        { url: '/Provider/mechanic.png', name: 'Mechanic' },
        { url: '/Provider/technician.png', name: 'technician' },
        { url: '/Provider/welder.png', name: 'Welder' },
        { url: '/beautrician.png', name: 'Beautician' },
        { url: '/plumber.png', name: 'Plumber' },
        { url: '/electrician.png', name: 'Electrician' },
        { url: '/beautrician.png', name: 'Beautician' }  ,
        { url: '/plumber.png', name: 'Plumber' } ];
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
          const navigate = useNavigate()
          function nav (){
            console.log(userData,{userData});
            navigate("/personalInfo",{state:{userData}});


          }


         
          // autocomplete 
          const { isLoaded, loadError } = useLoadScript({
            googleMapsApiKey: "AIzaSyA_0Rh_KRb3f3rJksjzoAvAt6_Sd0fufOk", // Replace with your API Key
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
              } else if (types.includes("administrative_area_level_1")) {
                addressComponents.state = component.long_name;
              } else if (types.includes("administrative_area_level_3")) {
                addressComponents.district = component.long_name;
              } else if (types.includes("postal_code")) {
                addressComponents.postalCode = component.long_name;
              }
            });  
            // Set area based on the input value
               console.log("Place details:", place);
               
               console.log("Place details:", place);
               console.log("Extracted address:", addressComponents);
           
          };
          
          if (loadError) return <div>Error loading Google Maps</div>;
          
          if (!isLoaded) return <div>Loading...</div>;
        
        
       
  return (
    <> 
 
    <div className="container">
      {/* Header */}
     {/* <p>{userData.firstName}</p> */}
      <div className="header1">
    <div>
      <h1 className="title1">ServiceSeeker</h1>
      <p className="subtitle1">Hello, {userData.firstName} { userData.lastName}</p>
      <p className="location1"> <i className="bi bi-geo-alt-fill me-1"></i>{userData.city}, {userData.pinCode}</p>
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
      {/* Search Bar */}
      <div className="conatiner m-3">
      <div className="d-flex  justify-content-around align-item-center">
        <fieldset></fieldset>
     <hr></hr><hr></hr>
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
         id="professionType"
         name="professionType"
        //  value={}
        //  onChange={handleProfessionChange}
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
      
      
        <button className="btn btn-primary  h-100" >&nbsp;&nbsp;Search&nbsp;&nbsp;</button>
        <hr></hr><hr></hr>
        
      </div>
      
     
      {/* Grid of Boxes */}
      <div className="grid1">
      {photos.map((item, index) => (
        <div
          key={index}
          className="box1 btn button11p"
          style={{ backgroundImage: `url(${item.url})`}}
         > <p id="p1">{item.name}</p>
        </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default HomeUI;
