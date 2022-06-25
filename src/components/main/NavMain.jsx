import React from "react";
import "./navMain.scss";

const NavMain = ({filterCard}) => {
  return (
    <div className="nav-main">
      <div className="nav-main__inner">
        <ul className="nav-main__list">
          <li className="nav-main__item">
            <button onClick={() => filterCard("Show All")} className="nav-main__btn">
              <h3 className="nav-main__title">Show All</h3>
            </button>
          </li>
          <li className="nav-main__item">
            <button onClick={() => filterCard("Design")} className="nav-main__btn">
              <h3 className="nav-main__title">Design</h3>
            </button>
          </li>
          <li className="nav-main__item">
            <button onClick={() => filterCard("Branding")} className="nav-main__btn">
              <h3 className="nav-main-title">Branding</h3>
            </button>
          </li>
          <li className="nav-main__item">
            <button onClick={() => filterCard("Illustration")} className="nav-main__btn">
              <h3 className="nav-main__title">Illustration</h3>
            </button>
          </li>
          <li className="nav-main__item">
            <button onClick={() => filterCard("Motion")} className="nav-main__btn">
              <h3 className="nav-main__title">Motion</h3>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMain;
