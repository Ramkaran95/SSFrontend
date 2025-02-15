// import React from 'react';
// import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
// import { FaEnvelope, FaFacebook, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
// import { SiLinkedin } from 'react-icons/si';
// import { useLocation } from 'react-router-dom';
// import './ProviderPage.css'
// import NavBar from '../HomePage/NavBar';
// import FooterSection from "../HomePage/FooterSection"

// function ProviderPage() {
//     const location = useLocation();
//     const user = location?.state?.UserId;
//     const providerdetails = location?.state?.ProviderDetails;
//     const urlI="http://localhost:5252/";

//     return (
//         <>
       
//         {/*Body Main Background.*/}
//         <div className='mains'>

//         <span className='main_bg'>
//             </span>
        
//         <div className="contaiiner">


// {/*-- ===== ===== User Main-Profile ===== ===== --*/}
// <section class="userProfile card">
//     <div class="profile">
//        <img src={urlI+providerdetails.profilePhoto} alt="profile" className='siImg'/>
//     </div>
// </section>


// {/*-- ===== ===== Work & Skills Section ===== ===== --*/}
// <section class="work_skills card">

//     {/*<!-- ===== ===== Work Contaienr ===== ===== -->*/}
//     <div class="work">
//         <h1 className='heading'>Bio</h1>
//        <textarea id="txtt" rows={5} cols={20} readOnly>{providerdetails?.bio}</textarea>
//     </div>

//     {/*-- ===== ===== Skills Contaienr ===== ===== -->*/}
    // <div class="skills">
    //     <h1 class="heading">Skills</h1>
    //     <ul>
    //         <li >{providerdetails?.skill1}</li>
    //         <li >{providerdetails?.skill2}</li>
    //         <li >{providerdetails?.skill3}</li>
            
    //     </ul>
    // </div>
// </section>


// {/*<!-- ===== ===== User Details Sections ===== ===== -->*/}
// <section class="userDetails card">
//     <div class="userName">
//         <h1 class="name">{providerdetails?.firstName}<br/>{providerdetails?.lastName}</h1>
//         <div class="map">
    
//         </div>
//         <p>{providerdetails?.professionType}</p>
//     </div>

//     <div class="rank">
//         <h1 class="heading">{providerdetails?.state},IN</h1>
      
//         <div class="rating">
//             <i class="ri-star-fill rate"></i>
//             <i class="ri-star-fill rate"></i>
//             <i class="ri-star-fill rate"></i>
//             <i class="ri-star-fill rate"></i>
//             <i class="ri-star-fill rate underrate"></i>
//         </div>
//     </div>

   
// </section>


// {/*<!-- ===== ===== Timeline & About Sections ===== ===== -->*/}
{/* <section class="timeline_about card">
    <div class="tabs">
        <ul><li class="about active">
                <i class="ri-user-3-fill ri"></i>
                <span>About</span>
            </li>

            <li class="about active">
                <i class="ri-user-3-fill ri"></i>
                <span>About</span>
            </li>
            <li class="about active">
                <i class="ri-user-3-fill ri"></i>
                <span>About</span>
            </li>
            <li class="about active">
                <i class="ri-user-3-fill ri"></i>
                <span>About</span>
            </li>

        </ul>
    </div>

    <div class="contact_Info">
        <h1 class="heading">Contact Information</h1>
        <ul>
            <li class="phone">
                <h1 class="label">Phone:</h1>
                <span class="info">{providerdetails?.phoneNumber}</span>
            </li>

            <li class="address">
                <h1 class="label">Address:</h1>
                <span class="info">{providerdetails?.district},{providerdetails?.city}<br />
                {providerdetails?.state},{providerdetails?.pinCode}</span>
            </li>

            <li class="email">
                <h1 class="label">E-mail:</h1>
                <span class="info">{providerdetails?.email}</span>
            </li>
        </ul>
    </div> */}

//     <div class="basic_info">
//         <h1 class="heading">Basic Information</h1>
//         <ul>
//             <li class="birthday">
//                 <h1 class="label">Experience(in years):</h1>
//                 <span class="info">{providerdetails?.yearOfEx}</span>
//             </li>

//             <li class="sex">
//                 <h1 class="label">Languages known:</h1>
//                 <span class="info">{providerdetails?.languageSpoke}</span>
//             </li>
//         </ul>
//     </div>
// </section>


// </div>
// </div>



            

        
       
            
            
//           { /* <h2>Provider P</h2>
//             <p>User ID: {user}</p>
//             <p>Provider Name: {providerdetails?.userName}</p>
//             <p>Profession: {providerdetails?.professionType}</p>
//             <p>Phone: {providerdetails?.phoneNumber}</p>
//             <p>City: {providerdetails?.city}</p>

//             {/* Debugging: Show full object */}
//            {/*} <pre>{JSON.stringify(providerdetails, null, 2)}</pre>
//             */}
           
            
//             </>
            
         
        
//     );
// }

// export default ProviderPage;


import React, { useState, useEffect, useRef } from 'react';
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Nav from 'react-bootstrap/Nav';

import { FaMapMarkerAlt} from 'react-icons/fa';
import { FaEnvelope, FaFacebook, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { SiLinkedin } from 'react-icons/si';
import { FcAlarmClock, FcApproval,FcLink,FcGlobe,FcPositiveDynamic,FcOnlineSupport } from "react-icons/fc";
import { useLocation } from 'react-router-dom';
import './ProviderPage.css';
import MapComponent from './MapComponent';


const ProviderPage = () => {
 
   
    const location = useLocation();
        const userId =   localStorage.getItem("userId");

        const providerdetails = location?.state?.ProviderDetails;
        const [HandleOption, setHandleOption]= useState("1");
        console.log(providerdetails);
        const mapRef = useRef(null); // Create a ref for the iframe

    //     useEffect(() => {
    //       if (providerdetails?.latitude && providerdetails?.longitude && mapRef.current) {
    //         console.log("Latitude:", providerdetails.latitude);
    // console.log("Longitude:", providerdetails.longitude);
    //         mapRef.current.src = `https://www.google.com/maps?q=19.1004672,72.8858624&hl=es;&output=embed`;
    //       }
    //     }, [providerdetails]);
      
        
      
        const urlI="http://localhost:5252/";
        const handleSelect = (eventKey) =>{ 
          setHandleOption(eventKey);
         
            

        };
       
    
  return (
    <div className="container-fluid mt-2">
      <Card style={{ width: '100%', borderRadius: '15px' }}>
        <div className="d-flex justify-content-center">
           <img src={urlI + providerdetails.profilePhoto} alt="Provider" className="img-fluid rounded" />
        </div>

        <div><h4 className="mt-2">{providerdetails.firstName} {providerdetails.middleName} {providerdetails.lastName}</h4>
          <p className="text-muted"><strong>{providerdetails.professionType}</strong></p>
        </div>
          <p className="text-start ">Bio</p>
          <Form.Control as="textarea" disabled value={providerdetails.bio} placeholder="Bio of provider" />
       
        <Row className="mb-3">
          <Col>
            <Button variant="outline-dark" className="w-100">
             <span><img style={{ height: "35px" }} src="/Common/contact.gif" alt="Provider" className="img-fluid rounded" />
              </span>{providerdetails.phoneNumber}
            </Button>
          </Col>
          <Col>
            <Button variant="outline-dark" className="w-100">
            <span><img style={{ height: "35px" }} src="/Common/email.gif" alt="Provider" className="img-fluid rounded" />
            {providerdetails.email}</span>
            </Button>
          </Col>
        </Row>
        <Card>
        <Card.Header>
        <Nav justify variant="tabs"  onSelect={handleSelect}> 
      <Nav.Item>
        <Nav.Link  eventKey="1" >About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2">Skills & Services</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3">Location</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4">Review & Rating</Nav.Link>
      </Nav.Item>
     
    </Nav>
    </Card.Header>
    <Card.Body>
    {HandleOption=="1" && (<div>
      <Row>
        <Col>
       
          
          <Card.Title className='text-start'><FcApproval /> Availability :  {`${providerdetails.availability? 'Yes' : 'No'}`}</Card.Title>
          <Card.Title className='text-start'><FcAlarmClock /> Timing :  {providerdetails.timeOfService} </Card.Title>
          <Card.Title className='text-start'><Nav.Link className="text-primary" href={`${providerdetails.socialLink1}`}><FcLink /> Social link 1</Nav.Link></Card.Title>
          <Card.Title className='text-start'><FcGlobe /> Join at :  {providerdetails.createAt} </Card.Title>
        
        
        </Col>
        <Col>
          
           <Card.Title className='text-start'><FcPositiveDynamic /> Experience :  {providerdetails.yearOfEx} Year</Card.Title>
           <Card.Title className='text-start'><FcOnlineSupport /> Language Spoke :  {providerdetails.languageSpoke.toUpperCase().split(",").map((lang, index) => (
                              <span> {lang},</span>
                            ))}</Card.Title>
            <Card.Title className='text-start'> <Nav.Link className="text-primary" href={`${providerdetails.socialLink2}`}><FcLink /> Social link 2</Nav.Link></Card.Title>
           
        </Col>
       
        </Row>
 
    
    </div>)}  
    

    {HandleOption=="2" && (<div><h1>2</h1></div>)}
    {HandleOption=="3"&& (<div><h1>3LOCATION</h1> 
      {/* {providerdetails?.latitude && providerdetails?.longitude ? (
      <iframe 
        ref={mapRef} 
        height="250px" 
        width="80%" 
        title="Map"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy">
      </iframe>
    ) : (
      <p>Loading map...</p>
    )} */}
    <MapComponent long={72.859648} lati={19.1266816}/>

</div>)}
    {HandleOption=="4"&& (<div><h1>4</h1>
    
      </div>)}
   
      </Card.Body>
      </Card>
      
    </Card>
    </div>
  );
};


export default ProviderPage;