import React from 'react'
import NavBar from './Component/HomePage/NavBar'
import Hero from './Component/HomePage/Hero'
import FeatureSection from './Component/HomePage/FeatureSection'
import FooterSection from './Component/HomePage/FooterSection'


function Layout() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <FeatureSection/>
        <FooterSection/>
    </div>
  )
}


export default Layout