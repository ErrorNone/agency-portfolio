import React from "react";
import { NavLink } from "react-router-dom";
import "./navMain.scss";

const NavMain = ({ filterCards }) => {
  return (
    <div className="nav-main">
      <div className="nav-main__inner">
        <ul className="nav-main__list">
          <li className="nav-main__item">
            <NavLink to="/" className="nav-main__link">
              <h3 className="nav-main__title">Show All</h3>
            </NavLink>
          </li>
          <li className="nav-main__item">
            <NavLink to="/design" className="nav-main__link">
              <h3 className="nav-main__title">Design</h3>
            </NavLink>
          </li>
          <li className="nav-main__item">
            <NavLink to="/branding" className="nav-main__link">
              <h3 className="nav-main-title">Branding</h3>
            </NavLink>
          </li>
          <li className="nav-main__item">
            <NavLink to="/illustration" className="nav-main__link">
              <h3 className="nav-main__title">Illustration</h3>
            </NavLink>
          </li>
          <li className="nav-main__item">
            <NavLink to="/motion" className="nav-main__link">
              <h3 className="nav-main__title">Motion</h3>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMain;
