import React from "react";
import "./about.css";
import DraggablePhoto from "../../components/draggablePhoto/DraggablePhoto";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <DraggablePhoto />
        <div className="about-description">
          <h1>
            I’m a senior studying computer science at{" "}
            <span class="boston-university">Boston University</span>.
          </h1>
          <p>
            My journey in software development began in my sophomore year of
            college when I had the sudden desire to make cool shit like apps or
            games.
            <br />
            <br />
            Nowadays, I work on projects and am looking for internships to learn
            and gain experience. I’m also exploring UI/UX design.
            <br />
            <br />
            When I’m not learning or working on my projects, I’m usually hitting
            the gym or window-shopping aesthetic furniture on the internet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
