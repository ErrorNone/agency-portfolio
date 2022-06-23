import React, { useEffect, useState } from "react";
import "./main.scss";
import axios from "axios";
import NavMain from "./NavMain";


const Main = () => {

  const [img, setImg] = useState(null);

  async function getImg() {
    const response = await axios.get(
      "https://db-agency-portfolio.herokuapp.com/images"
    );
    setImg(response.data);
  }

  // console.log(img);
  useEffect(() => {
    getImg()
  }, []);

  
  return (
    <div className="main">
      <div className="container">
       <NavMain/>
      </div>
    </div>
  );
};

export default Main;
