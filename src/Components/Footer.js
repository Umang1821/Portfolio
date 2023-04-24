import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/umang.mishra.7923', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://www.twitter.com/UmangMi40002250', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/umang-mishra-603796213/', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/umang_mishra_21?igshid=YmMyMTA2M2Y=', '_blank');
  };
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <h4>Lucknow,Uttar Pradesh</h4>
              <h4>India</h4>
            </div>
          </div>
          <div className="Phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              6386463427
            </h4>
          </div>
          <div className="Gmail">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              umangmishra171@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <h4>I am Umang Mishra,a web developer </h4>
          <div className="social">
            <FaFacebook
              size={30}
              onClick={handleFacebookClick}
              style={{ color: "#fff", marginRight: "1rem", cursor:"pointer" }}
            />
            <FaTwitter
              size={30}
              onClick={handleTwitterClick}
              style={{ color: "#fff", marginRight: "1rem", cursor:"pointer"  }}
            />
            <FaInstagram
              size={30}
              onClick={handleInstagramClick}
              style={{ color: "#fff", marginRight: "1rem" , cursor:"pointer" }}
            />
            <FaLinkedin
              size={30}
              onClick={handleLinkedinClick}
              style={{ color: "#fff", marginRight: "1rem", cursor:"pointer"  }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
