import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="project-card">
      <img src={props.img} alt="project" />
      <h2 className="project-title">{props.title}</h2>
      <div className="details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
