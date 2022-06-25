import React from "react";
import CardItem from "./CardItem";
import "./card.scss";

const CardList = ({ cards }) => {
  return (
    <div className="card">
      <ul className="card__list">
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
