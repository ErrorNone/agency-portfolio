import React from "react";
import Nav from "./NavHeader";
import "./header.scss";
import logoWebesite from "../../img/logoWebesite.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-top">
          <div className="header-brand">
            <a href="#">
              <img src={logoWebesite} alt="Logo" />
              <h1>Agency</h1>
            </a>
          </div>
          <Nav />
          <button className="header-button">Contact</button>
        </div>
        <div className="header-bottom">
          <h2>Portfolio</h2>
          <p>
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
