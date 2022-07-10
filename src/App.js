import React from "react";

import { About, Contact, Footer, Landing, Projects } from "./containers";
import { Navbar } from "./components";
import "./App.css";
import screenshot from "./assets/StuddyBuddyScreenshot.png";

const App = () => {
  return (
    <div className="App">
      <div className="solid_bg">
        <Navbar />
      </div>
      <section>
        <Landing />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default App;
