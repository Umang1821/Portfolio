import React from "react";
import "./Educations.css";

const Education = () => {
  return (
    <div className="parent">
      <div>
        <h1 className="edu">Education</h1>
      </div>
      <div className="ed">
        <div className="box">
          <h4 className="edu2">RLB Memorial School</h4>
          <p className="p">Highschool with 10CGPA</p>
        </div>
        <div className="box">
          <h4 className="edu2">RLB Memorial School</h4>
          <p className="p">Intermediate with 72.3%</p>
        </div>
        <div className="box">
          <h4 className="edu2">GLA University</h4>
          <p className="p">Btech CSE with 7.8 CPI</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
