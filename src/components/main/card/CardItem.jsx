import React from "react";
import "./card.scss";

const CardItem = ({ card }) => {
  return (
    <li className="card--item">
      <button className="card--btn-border">
        <img src={card.data.image} alt="" />
        <button className="card--btn">{card.category}</button>
        <h4 className="card--title">{card.name}</h4>
      </button>
    </li>
  );
};

export default CardItem;
