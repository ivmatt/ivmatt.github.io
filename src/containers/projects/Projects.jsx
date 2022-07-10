import React from "react";
import "./projects.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import StuddyBuddy from "../../assets/StuddyBuddyScreenshot.png";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-container">
        <ProjectCard
          title="StuddyBuddy"
          subtitle="iOS App (Work in Progress)"
          photoURL={StuddyBuddy}
        />
      </div>
      <p className="note">
        I know, not a lot of projects yet. Keyword being “yet” :P More to come!
      </p>
    </div>
  );
};

export default Projects;
