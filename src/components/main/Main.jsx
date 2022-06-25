import React, { useEffect, useState } from "react";
import "./main.scss";
import axios from "axios";
import NavMain from "./NavMain";
import CardList from "./card/CardList";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { cardAction } from "../../store/actions/cardAction";
import { imagesAction } from "../../store/actions/imagesAction";
import card1 from "../../img/card1.svg"
import card2 from "../../img/card2.svg"
import card3 from "../../img/card3.svg"
import card4 from "../../img/card4.svg"
import card5 from "../../img/card5.svg"
import card6 from "../../img/card6.svg"
import card7 from "../../img/card7.svg"
import card8 from "../../img/card8.svg"
import card9 from "../../img/card9.svg"


const Main = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);

  const [loading, setLoading] = useState(true);


  async function getImg() {
    try {
      const response = await axios.get(
        "https://db-agency-portfolio.herokuapp.com/images"
      );
      dispatch(cardAction(response.data));
      dispatch(imagesAction([card1, card2, card3,card4, card5, card6, card7, card8, card9]));
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    getImg();
  }, []);

  const filterCard = (method) => {
    cards.filter((card) =>
      method === "Show All" ? card.id > 0 : method === card.category
    );
  };

  return (
    <div className="main">
      <div className="main__container">
        {loading ? (
          <Loader />
        ) : cards.length ? (
          <div>
            <NavMain filterCard={filterCard} />
            <CardList cards={cards} />
            <button 
            // onClick={() => addCards()} 
            className="main__btn">
              Load More
            </button>
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
