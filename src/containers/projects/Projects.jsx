import React from "react";
import "./projects.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import StuddyBuddy from "../../assets/StuddyBuddyScreenshot.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <ProjectCard
          title="StuddyBuddy"
          subtitle="iOS App (Work in Progress)"
          photoURL={StuddyBuddy}
        />
        <p className="note">
          I know, not a lot of projects yet. Keyword being “yet” :P More to
          come!
        </p>
      </div>
    </div>
  );
};

export default Projects;
