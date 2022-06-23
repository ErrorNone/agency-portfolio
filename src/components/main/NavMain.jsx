import React from "react";
import "./navMain.scss";

const NavMain = () => {
  return (
    <div className="nav-main">
      <div className="nav-main--inner">
        <ul className="nav-main--list">
          <li className="nav-main--item">
            <a href="#" className="nav-main--link">
              <h3 className="nav-main--title">Show All</h3>
            </a>
          </li>
          <li className="nav-main--item">
            <a href="#" className="nav-main--link">
              <h3 className="nav-main--title">Design</h3>
            </a>
          </li>
          <li className="nav-main--item">
            <a href="#" className="nav-main--link">
              <h3 className="nav-main-title">Branding</h3>
            </a>
          </li>
          <li className="nav-main--item">
            <a href="#" className="nav-main--link">
              <h3 className="nav-main--title">Illustration</h3>
            </a>
          </li>
          <li className="nav-main--item">
            <a href="#" className="nav-main--link">
              <h3 className="nav-main--title">Motion</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMain;
