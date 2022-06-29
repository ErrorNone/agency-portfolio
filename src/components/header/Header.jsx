import React from "react";
import NavHeader from "./NavHeader";
import "./header.scss";
import logoWebesite from "../../img/logoWebesite.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__top">
          <div className="header__brand">
            <NavLink to="/">
              <img src={logoWebesite} alt="Logo" />
              <h1>Agency</h1>
            </NavLink>
          </div>
          <NavHeader />
          <NavLink className="header__button"  to="/contacts">Contact</NavLink>
        </div>
        <div className="header__bottom">
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
