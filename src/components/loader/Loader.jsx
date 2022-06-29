import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="lds-grid__container">
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h6>Please stock up on coffee and cookies, the download may take a little longer than usual...</h6>
    </div>
  );
};

export default Loader;
