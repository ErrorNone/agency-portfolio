import React from "react";
import CardItem from "./CardItem";
import "./card.scss";
import {  useSelector } from "react-redux";


const CardList = ({ cards }) => {
  const images = useSelector((state) => state.images.images);
  return (
    <div className="card">
      <ul className="card__list">
        {images.map((image) => {
           cards.map((card) => {
         return <CardItem key={card.id} card={card} image={image}/>
        })
        })
       }
      </ul>
    </div>
  );
};

export default CardList;
