import React, { useEffect, useMemo, useState } from "react";
import "./main.scss";
import axios from "axios";
import NavMain from "./NavMain";
import CardList from "./card/CardList";
import Loader from "../loader/Loader";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [copyCards, setCopyCards] = useState([]);
  const [countClick, setCountClick] = useState(1);

  async function getImg() {
    try {
      const response = await axios.get(
        "https://db-agency-portfolio.herokuapp.com/images"
      );
      setCards(response.data);

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  // console.log(copyCards);

  useEffect(() => {
    getImg();
  }, []);


  useEffect(() =>{ setCopyCards(cards)}, [cards]);

  const filterCard = (method) => {
    setCopyCards(
      cards.filter((card) =>
        method === "Show All" ? card.id > 0 : method === card.category
      )
    );
  };

  const addCards = () => {
    const newCards =  cards.map(card => {
      card.id += Date.now()
      card.name = [card.name, countClick].join("")
      return card
    })
    setCopyCards([...copyCards, ...newCards])
    setCountClick(countClick + 1)
  }

  return (
    <div className="main">
      <div className="main__container">
        {loading ? (
          <Loader />
        ) : cards.length ? (
          <div>
            <NavMain filterCard={filterCard} />
            <CardList cards={copyCards} />
            <button onClick={() => addCards()} className="main__btn">Load More</button>
          </div>
        ) : (
          <div>
            <h6 className="main__error">
              Unfortunately we were unable to get the data try refreshing the
              page!
            </h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
