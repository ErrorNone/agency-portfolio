import React, { useEffect, useState } from "react";
import "./main.scss";
import axios from "axios";
import NavMain from "./NavMain";
import CardList from "./card/CardList";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { cardAction } from "../../store/actions/cardAction";

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
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    getImg();
  }, []);

  const filterCards = (method) => {
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
            <NavMain filterCards={filterCards} />
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
