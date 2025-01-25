import React from 'react'
import NavBar from './Component/HomePage/NavBar'
import Hero from './Component/HomePage/Hero'
import FeatureSection from './Component/HomePage/FeatureSection'
import FooterSection from './Component/HomePage/FooterSection'
import Login from './Component/LoginPage/Login'
import UserRegistration from './Component/Registration/UserRegistration'
import Value from './Component/HomePage/Value/Value'


function Layout() {
  return (
    <div>
        <NavBar/>
        <Hero/>
      <Value />
        <FeatureSection/>
        <FooterSection/>
    </div>
  )
}


export default Layout