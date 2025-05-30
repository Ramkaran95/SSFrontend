import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Component/AboutPage/About.jsx'
import Login from './Component/LoginPage/Login.jsx'

import ForgetPassword from './Component/ForgetPage/ForgetPassword.jsx'
import Register from './Component/Register/Register.jsx'
import UserRegistration from './Component/Registration/UserRegistration.jsx'
import ProviderRegistration from './Component/Registration/ProviderRegistration.jsx'
import Contact from './Component/ContactPage/Contact.jsx';
import UserDashBoard from './Component/Dashboard/UserDashBoard.jsx';
import PersonalInfo from './Component/Update/PersonalInfo.jsx';
import PageNotFound from './Features/PageNotFound.jsx';
import ProviderPage from './Component/Dashboard/ProviderPage.jsx';
import ProviderDashBoard from './Component/Dashboard/ProviderDashBoard.jsx';
import ProviderPersonalInfo from './Component/Update/ProviderPersonalInfo.jsx';
import BookService from './Payment/BookService.jsx';
import Service from './Component/Service/Service.jsx';





const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/userDashboard" element={<UserDashBoard/>}/>
   <Route path="/providerDashboard" element={<ProviderDashBoard/>}/>
   <Route path="/login/forgetpassword" element={<ForgetPassword/>}/>
   <Route path="/service" element={<Service/>}/>
  
    <Route path="/register" element={<Register/>}/>
    <Route path="/register/userRegistration" element={<UserRegistration/>}/>
    <Route path="/register/providerRegistration" element={<ProviderRegistration/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/userDashboard/personalInfo" element={<PersonalInfo/>}/>
    <Route path="/providerDashboard/personalInfo" element={<ProviderPersonalInfo/>}/>
    <Route path="/providerPage" element={<ProviderPage/>}/>
    <Route path="/services" element={<UserDashBoard/>}/>
    <Route path="/providerPage/BookingService" element={<BookService/>}/>
   <Route path="*" element={<PageNotFound/>}/>
    
   



    
    
    
    
    </>


  )


);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
theme='dark'
pauseOnFocusLoss
draggable
pauseOnHover
/>

    <RouterProvider router={router}/>
    </>
  </StrictMode>
);
