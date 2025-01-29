import React from 'react'
import './Contact.css'
import NavBar from '../HomePage/NavBar';
import FooterSection from '../HomePage/FooterSection';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import PlaceApi from '../../placeApi';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';


import Spinner from "../../Spinner";


 const Contact = () => {
  const [handleSpinnerState ,setSpinnerState]=useState(false);
    

const [contactData,setContactData]=useState({
    email:"",
   
    fullname:"", msg:""

});
const handleContactData = (e) =>
    setContactData({ ...contactData, [e.target.name]: e.target.value });

    
  const sendOtp = async (e) => {
    e.preventDefault();
    console.log(contactData)
    setSpinnerState(true);
    const url="http://localhost:5252/api/Features/Contact"
    try {
      const response = await axios.post(url, contactData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
     
      //alert("Otp send to your registered gmail: "+response.data.message); 
      // Notify OTP sent
      toast.success(
        `${response?.data.message || "Message send!"
        }  `,
        {
          
        }
      );
      //setStep(2); // Proceed to OTP verification step
    } catch (error) {
      // alert(`-${
      //   JSON.stringify(error, null, 2) || "Error"
      // }`)
      toast.error(
        `-${ "Verify Email, User is not registered..!" +
          error?.message || "Verify Email, User not found..!"
        } `,
        {    
        }
      ); 
    }
    finally{

      setSpinnerState(false);

    }
    
  };

  return (
    <> <Spinner visible={handleSpinnerState}/>
    <NavBar />
    <section className='contact'>
        <div className="contentt">
            <h2>Contact Us</h2>
            <p>Whether you have a query, suggestion or need support feel
                free to contact us.<br/>We're just a message away!
            </p>
        </div>
        <div className='containerr1'>
            {/*Left Siide*/}
            <div className=' containner1 '>
                    <div className='box'>
                    <FaLocationDot className='iconn'/>
                        <div className='textt'>
                            <h3 >Address</h3>
                            <p>Maharashtra,India</p>
                        </div>
                        </div>
                    <div className='box'>
                    <FaPhoneAlt className='iconn'/>
                        <div className='textt'>
                            <h3>Phone</h3>
                            <p>+91 9956783376</p>
                        </div>
                    </div>
                    
                    <div className='box'>
                    <MdEmail className='iconn' />

                        <div className='textt'>
                            <h3>Email</h3>
                            <p> serviceseeker@gmail.com</p>
                        </div>
                    </div>
                </div>
                {/*Right Side*/}
                <div className='contactForm'>
                    <form onSubmit={sendOtp}>
                        <h1>Send Message</h1>
                        <div className='inputBox'>
                            <input 
                            type='text' name='fullname' 
                            required
                            value={contactData.fullname}
                            onChange={handleContactData }
                            
                            />

                            <span className='spann'>Full Name</span>
                        </div>
                        <div className='inputBox'>
                        
                            <input 
                            type='email' 
                            name='email' 
                            required 
                            
                            value={contactData.email}
                            onChange={handleContactData }
                          
                            />
                            
                            <span className='spann' >Email</span>
                        </div>
                        <div className='inputBox'>
                            <textarea
                             required 
                             name="msg"
                             value={contactData.msg}
                             onChange={handleContactData }
                             
                             />
                            <span className='spann'>Type your message...</span>
                        </div>
                        <div className='inputBox'>
                            <button type='submit' className='button'>Send</button>
                        </div>

                    </form>
                </div>

            
            </div>
    </section>
    {/* <PlaceApi/> */}
   
    <FooterSection/>
    </>
  );
}
export default Contact;
