import React from "react";
import "./projectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="card">
      <div className="text-and-button">
        <div className="text">
          <p className="title">{props.title}</p>
          <p className="subtitle">{props.subtitle}</p>
        </div>
        <a href="https://github.com/ivmatt/StuddyBuddy">
          <button>Learn more</button>
        </a>
      </div>
      <div className="photo-container">
        <img src={props.photoURL} />
        <img src={props.photoURL} />
        <img src={props.photoURL} />
      </div>
    </div>
  );
};

export default ProjectCard;
