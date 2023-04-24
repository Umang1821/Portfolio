import React from "react";
import "./Total.css";
import { CircularProgress } from "@mui/material";
const Total = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1 className="s">Skills</h1>
      </div>
      <div className="Parent">
        <div>
          <h1 className="s1">Java</h1>
          <CircularProgress size={90} variant="determinate" value={60} />
        </div>
        <div>
          <h1 className="s1">C</h1>
          <CircularProgress size={90} variant="determinate" value={80} />
        </div>
        <div>
          <h1 className="s1">HTML</h1>
          <CircularProgress size={90} variant="determinate" value={90} />
        </div>
        <div>
          <h1 className="s1">CSS</h1>
          <CircularProgress size={90} variant="determinate" value={80} />
        </div>
        <div>
          <h1 className="s1">Bootstrap</h1>
          <CircularProgress size={90} variant="determinate" value={75} />
        </div>
        <div>
          <h1 className="s1">Javascript</h1>
          <CircularProgress size={90} variant="determinate" value={60} />
        </div>
        <div>
          <h1 className="s1">React Js</h1>
          <CircularProgress size={90} variant="determinate" value={60} />
        </div>
        <div>
          <h1 className="s1">Next Js</h1>
          <CircularProgress size={90} variant="determinate" value={80} />
        </div>
      </div>
    </div>
  );
};

export default Total;
