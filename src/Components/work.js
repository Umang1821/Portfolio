import React from "react";
import "./Card.css";
import Card from "../Components/Card";
import workData from "../Components/workData";


const work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {workData.map((val,ind) => {
            return(
                <Card key={ind}
                img={val.img}
                title={val.title}
                // text={val.text}
                view={val.view}/>
            )
        }
        )}
      
      </div>
    </div>
  );
};

export default work;
