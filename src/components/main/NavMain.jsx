import React from "react";
import "./navMain.scss";

const NavMain = ({filterCards}) => {
  return (
    <div className="nav-main">
      <div className="nav-main__inner">
        <ul className="nav-main__list">
          <li className="nav-main__item">
            <button onClick={() => filterCards("Show All")} className="nav-main__btn">
              <h3 className="nav-main__title">Show All</h3>
            </button>
          </li>
          <li className="nav-main__item">
            <button onClick={() => filterCards("Design")} className="nav-main__btn">
              <h3 className="nav-main__title">Design</h3>
            </button>
          </li>
          <li className="nav-main__item">
            <button onClick={() => filterCards("Branding")} className="nav-main__btn">
              <h3 className="nav-main-title">Branding</h3>
            </button>
          </li>
          <li className="nav-main__item">
            <button onClick={() => filterCards("Illustration")} className="nav-main__btn">
              <h3 className="nav-main__title">Illustration</h3>
            </button>
          </li>
          <li className="nav-main__item">
            <button onClick={() => filterCards("Motion")} className="nav-main__btn">
              <h3 className="nav-main__title">Motion</h3>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMain;
