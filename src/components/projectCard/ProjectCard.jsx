import React from "react";
import "./projectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="card">
      <div className="text">
        <p className="subtitle">{props.subtitle}</p>
        <p className="title">{props.title}</p>
      </div>
      <div className="photo-container">
        <img src={props.photoURL} />
      </div>
    </div>
  );
};

export default ProjectCard;
