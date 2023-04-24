import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Herosection2 from "../Components/Herosection2";
import Total from "../Components/Total";
import ImageSlider from "../Components/ImageSlider";

const Experience = () => {
  const images = ['/images/1.png', '/images/2.png','/images/3.png','/images/4.png'];
  return (
    <div>
      <Navbar />
      <Herosection2 heading="My Experience" />
      <Total />
      <ImageSlider images={images} />
      <Footer />
    </div>
  );
};

export default Experience;
