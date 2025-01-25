import React from 'react'
import './Contact.css'
import NavBar from '../HomePage/NavBar';
import FooterSection from '../HomePage/FooterSection';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

 const Contact = () => {
  return (
    <>
    <NavBar />
    <section className='contact'>
        <div class="contentt">
            <h2>Contact Us</h2>
            <p>Whether you have a query, suggestion or need support feel
                free to contact us.<br/>We're just a message away!
            </p>
        </div>
        <div className='containerr'>
            {/*Left Siide*/}
            <div className='contactInfo'>
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
                    <form>
                        <h2>Send Message</h2>
                        <div className='inputBox'>
                            <input type='text' name='' required />
                            <span className='spann'>Full Name</span>
                        </div>
                        <div className='inputBox'>
                        
                            <input type='email' name='' required  />
                            
                            <span className='spann'>Email</span>
                        </div>
                        <div className='inputBox'>
                            <textarea required  />
                            <span className='spann'>Type your message...</span>
                        </div>
                        <div className='inputBox'>
                            <button type='submit' className='button'>Send</button>
                        </div>

                    </form>
                </div>

            
            </div>
    </section>
    <FooterSection/>
    </>
  );
}
export default Contact;
