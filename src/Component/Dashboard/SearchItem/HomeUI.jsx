import React from "react";
import "./HomeUI.css";
import { Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";


const HomeUI = ({userData}) => {
    const photos = [
        { url: '/beautrician.png', name: 'Beautician' },
        { url: '/plumber.png', name: 'Plumber' },
        { url: '/electrician.png', name: 'Electrician' },
        { url: '/carpenter.png', name: 'Carpenter' },
        { url: '/plumber.png', name: 'Plumber' },
        { url: '/electrician.png', name: 'Electrician' },
        { url: '/beautrician.png', name: 'Beautician' },
        { url: '/plumber.png', name: 'Plumber' },
        { url: '/electrician.png', name: 'Electrician' },
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

  return (
    <> 
 
    <div className="container">
      {/* Header */}
     <p>{userData.firstName}</p>
      <div className="header1">
    <div>
      <h1 className="title1">ServiceSeeker</h1>
      <p className="subtitle1">Hello, {userData.firstName} { userData.lastName}</p>
      <p className="location1"> <i className="bi bi-geo-alt-fill me-1"></i>{userData.city}, {userData.pinCode}</p>
    </div>
    <div className="profile-icon1"><button onClick={nav}> 👤</button></div>

 </div>
      {/* Search Bar */}
      <div className="container  m-3 ">
      <Row className="justify-content-md-center" >
        <Col    md={4}>
        <input type="text" className="form-control " placeholder="Enter Place"/>
        </Col>
        <Col  xs={3}> 
        <select
         id="professionType"
         name="professionType"
        //  value={}
        //  onChange={handleProfessionChange}
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
       </Col>
       <Col md={1} >
        <button className="btn btn-primary">Search</button>
       </Col>
       </Row>
      </div>
      
     
      {/* Grid of Boxes */}
      <div className="grid1">
      {photos.map((item, index) => (
        <div
          key={index}
          className="box1 btn button11p"
          style={{ backgroundImage: `url(${item.url})`}}
         > <li>{item.name}</li>
        </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default HomeUI;
