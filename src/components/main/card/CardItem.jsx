import React, { useState } from "react";
import "./card.scss";
import ImagesItem from "./images/ImagesItem";

const CardItem = ({ card, image }) => {
  const [border, setBorder] = useState(false);
  console.log(image);
  return (
    <li className="card__item">
      <button
        onClick={() =>  border === true ? setBorder(false) : setBorder(true)}
        className={
          border === false ? "card__btn-border" : "card__btn-border card__btn-border--active"
        }
      >
        <img src={image} alt="" />
        
         {/* <ImagesItem/> */}
        <button className="card__btn">{card.category}</button>
        <h4 className="card__title">{card.name}</h4>
      </button>
    </li>
  );
};

export default CardItem;
