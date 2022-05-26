import React, { useState } from "react";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
    <p>
      <a href="#resume">Resume</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-left">
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
        </div>
        <div className="navbar-links-center">
          <p>
            <a href="#landing">I.T</a>
          </p>
        </div>
        <div className="navbar-links-right">
          <p>
            <a href="#resume">Resume</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
      </div>
      <div className="navbar-mobile-menu">
        {menuToggle ? (
          <p onClick={() => setMenuToggle(false)}>
            <a href="# menu">Less</a>
          </p>
        ) : (
          <p onClick={() => setMenuToggle(true)}>
            <a href="#menu">More</a>
          </p>
        )}
        {menuToggle && (
          <div className="navbar-menu-container scale-in-tr">
            <div className="navbar-menu-container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
