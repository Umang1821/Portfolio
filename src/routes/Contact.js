import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Herosection2 from '../Components/Herosection2'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Herosection2 heading="Contact me" text="Let's connect"/>
      <Footer/>
    </div>
  )
}

export default Contact