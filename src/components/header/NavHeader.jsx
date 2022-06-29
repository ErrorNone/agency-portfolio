import React from "react";
import { NavLink } from "react-router-dom";
import "./navHeader.scss";

const NavHeader = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink href="#" className="nav__link" to="/notReady">
            <h3 className="nav__title">About</h3>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink href="#" className="nav__link" to="/notReady">
            <h3 className="nav__title">Services</h3>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink href="#" className="nav__link" to="/notReady">
            <h3 className="nav-title">Pricing</h3>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink href="#" className="nav__link" to="/notReady">
            <h3 className="nav__title">Blog</h3>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}; 

export default NavHeader;
