import React from "react";
import "./navHeader.scss";

const NavHeader = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            <h3 className="nav__title">About</h3>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <h3 className="nav__title">Services</h3>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <h3 className="nav-title">Pricing</h3>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <h3 className="nav__title">Blog</h3>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavHeader;
