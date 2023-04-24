import React, { useState , useEffect } from 'react';
import './ImageSlide.css'; // Import the CSS file for styling
import PropTypes from 'prop-types';

const Slider = ({ images,interval }) => {
  const [currentImage, setCurrentImage] = useState(0);


  const handlePrevious = () => {
    setCurrentImage((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const slideShowTimer = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 2000);

    return () => {
      clearTimeout(slideShowTimer);
    };
  }, [currentImage, images, interval]);

  return (
    <div className="slider-container">
      <div><h1 className='head'>Images</h1></div>
      <img  src={images[currentImage]} alt="Slider" className="slider-image" />
      <div className="slider-buttons">
        <button onClick={handlePrevious} className="slider-button">
          Previous
        </button>
        <button onClick={handleNext} className="slider-button">
          Next
        </button>
      </div>
    </div>
  );
};
Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number.isRequired,
};

export default Slider;
