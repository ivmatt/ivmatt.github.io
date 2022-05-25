import React from "react";

import { About, Contact, Footer, Landing, Projects } from "./containers";
import { Navbar } from "./components";
import "./App.css";
import ProjectCard from "./components/projectCard/ProjectCard";
import screenshot from "./assets/StuddyBuddyScreenshot.png";

const App = () => {
  return (
    <div className="App">
      <div className="solid_bg">
        <Navbar />
      </div>
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
