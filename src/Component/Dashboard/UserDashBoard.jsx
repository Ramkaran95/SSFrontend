


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
const libraries = ["places"]; // Required for Autocomplete


const UserDashBoard= () => {
    const location = useLocation();
 const userData=location.state?.userData;
 if (!userData) return<div><h1>UnAuthorized ACCESS ..</h1></div>
 
 
 
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
        { url: '/plumber.png', name: 'Security Guard' } ];
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


        //  ----------------
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
          const [providerResponse, setProviderResponse]=useState();
          const handleProviderSearch = async (e) => {
            e.preventDefault();
            
            const url = `http://localhost:5252/api/Features/ProviderByLocation?city=${providerFilter.city}&pinCode=${providerFilter.pincode}&district=${providerFilter.district}&profession=${providerFilter.profession || ""}`;
          
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
                  url = `http://localhost:5252/api/Features/ProviderByLocation?city=${city || ""}&pinCode=${pincode || 0}&district=${district || ""}&profession=${profession || ""}`;
              } else {
                  url = `http://localhost:5252/api/Features/ProviderByLocation?city=${providerFilter.city}&pinCode=${providerFilter.pincode}&district=${providerFilter.district || ""}&profession=${profession || ""}`;
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
     <p>{userData.firstName+ providerFilter.pincode +JSON.stringify(providerResponse, null, 2)}</p>
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
    <br></br>
      {/* Search Bar */}
       
        <div className="container ">
      <div className="container ">
      <form onSubmit={handleProviderSearch}>
      <div className="d-flex  justify-content-around align-item-center">
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
  

    <div className="container">
    <div className="containner m-3">
    <div className=" d-flex  justify-content-center align-item-center">
       
      {/* <div className="grid1">
      {photos.map((item, index) => (
        <button
          key={index}
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={handleProviderFilter}
          style={{ backgroundImage: `url(${item.url})`}}
         > <p id="p1">{item.name}{index}</p>
        </button>
        ))}
      </div> */}
      <form >
      <div className="grid1">
      <button
        
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[0 ].name)}
          
          style={{ backgroundImage: `url(${photos[0].url})`}}
         > <p id="p1">{photos[0].name} </p>
        </button>
        <button
       
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[1 ].name)}
          
          style={{ backgroundImage: `url(${photos[1].url})`}}
         > <p id="p1">{photos[1 ].name}</p>
        </button>
        <button
      
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[2].name)}
          
          style={{ backgroundImage: `url(${photos[2].url})`}}
         > <p id="p1">{photos[2 ].name}</p>
        </button>
        <button
       
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[3 ].name)}
          
          style={{ backgroundImage: `url(${photos[3].url})`}}
         > <p id="p1">{photos[3 ].name}</p>
        </button>
        <button
         
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[4 ].name)}
          
          style={{ backgroundImage: `url(${photos[4].url})`}}
         > <p id="p1">{photos[4 ].name}</p>
        </button>
        <button
        
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[5 ].name)}
          style={{ backgroundImage: `url(${photos[5].url})`}}
         > <p id="p1">{photos[5 ].name}</p>
        </button>
        <button
         
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[6 ].name)}
          
          style={{ backgroundImage: `url(${photos[6].url})`}}
         > <p id="p1">{photos[6 ].name}</p>
        </button>
        <button
         
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[7].name)}
          
          style={{ backgroundImage: `url(${photos[7].url})`}}
         > <p id="p1">{photos[7 ].name}</p>
        </button>
        <button
         
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[8 ].name)}
          
          style={{ backgroundImage: `url(${photos[8].url})`}}
         > <p id="p1">{photos[8 ].name}</p>
        </button>
        <button
         
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[9 ].name)}
          
          style={{ backgroundImage: `url(${photos[9].url})`}}
         > <p id="p1">{photos[9 ].name}</p>
        </button>
        <button
        
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[10 ].name)}
          
          style={{ backgroundImage: `url(${photos[10].url})`}}
         > <p id="p1">{photos[10 ].name}</p>
        </button>
        <button
         
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[11 ].name)}
          
          style={{ backgroundImage: `url(${photos[11].url})`}}
         > <p id="p1">{photos[11 ].name}</p>
        </button>
        <button
         
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[12 ].name)}
          
          style={{ backgroundImage: `url(${photos[12].url})`}}
         > <p id="p1">{photos[12 ].name}</p>
        </button>
        <button
         
          type="submit"
          className="box1 btn button11p"
          id="prosession2"
          name="procession2"
          value={"providerFilter.profession"}
          onClick={(e)=> handleProviderSearch1(e,userData.city,userData.pinCode,userData.district,photos[13 ].name)}
          
          style={{ backgroundImage: `url(${photos[13].url})`}}
         > <p id="p1">{photos[13 ].name}</p>
        </button>
        </div>
        </form>
      </div>
      </div>
      </div>
 </div>
 <div className="listResult">
    <SearchItem />
    <p>{providerFilter.city}</p>
    <p>{providerFilter.pincode}</p>
    <p>{providerFilter.profession}</p>
    
</div>
    </>
  );
};

export default UserDashBoard;





