import "./Herosection2.css";
import React, { Component } from "react";

class Herosection2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <h4>{this.props.text}</h4>
        </div>
      </div>
    );
  }
}

export default Herosection2;
