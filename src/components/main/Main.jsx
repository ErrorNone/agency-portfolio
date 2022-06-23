import React, { useEffect, useState } from "react";
import "./main.scss";
import axios from "axios";
import NavMain from "./NavMain";
import CardList from "./card/CardList";


const Main = () => {



  
  return (
    <div className="main">
      <div className="container">
       <NavMain/>
       <CardList/>
      </div>
    </div>
  );
};

export default Main;
