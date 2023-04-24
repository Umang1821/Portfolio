import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Herosection2 from '../Components/Herosection2'
import AboutMe from '../Components/AboutMe'
import Education from '../Components/Education'
import Intern from '../Components/Intern'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Herosection2 heading="About" text="My Introduction"/>
      <Education/>
      <Intern/>
      <AboutMe />
      <Footer/>
    </div>
  )
}

export default About