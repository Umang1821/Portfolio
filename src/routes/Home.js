import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'
import Work from "../Components/work"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Work/>
      <Footer />
    </div>
  )
}

export default Home