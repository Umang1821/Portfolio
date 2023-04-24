import React, { useEffect, useState } from "react";
import "./Herosection.css";
import img from "../assets/bg.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [description, setDescription] = useState('');
  useEffect(() => {
    const desiredText = "Welcome to my website!"
    const timer = setInterval(() => {
      if (description !== desiredText) {
        setDescription(desiredText.slice(0, description.length + 1));
      } else {
        clearInterval(timer);
      }
    }, 200);
    
    return () => {
      clearInterval(timer);
    };
  }, [description]);
  return (
    <div className="hero">
      <div className="bgimg">
        <img className="introimg" src={img} alt="introimg"></img>
      </div>
      <div className="content">
        <h2>{description}</h2>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
