import "./aboutMe.css"
import React from 'react'
import { Link }from "react-router-dom"
import image from "../assets/webdeveloper.jpg"

const AboutMe = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>About Me</h1>
            {/* <p>lorem ipsumhbvbv</p> */}
            <Link to="/contact">
                <button className="btn">Contact me</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
            <img src={image}className="img" alt="im"/>
            </div>

        </div>
    </div>
  )
}

export default AboutMe;