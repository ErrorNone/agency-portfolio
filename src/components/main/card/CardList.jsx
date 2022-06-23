import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../loader/Loader";
import CardItem from "./CardItem";
import "./card.scss";

const CardList = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

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

  console.log(cards);
  useEffect(() => {
    getImg();
  }, []);

  return (
    <div className="card">
      {loading ? (
        <Loader />
      ) : cards.length ? (
        <ul className="card--list">
            {cards.map(card => 
               <CardItem card={card}/> )}
        </ul>
      ) : (
        <div>
          <h2>You don't have cards!</h2>
        </div>
      )}
    </div>
  );
};

export default CardList;


// const CardList = () => {
//   const [cards, setCards] = useState([]);
//   async function getImg() {
//     try {
//       const response = await axios.get(
//         "https://db-agency-portfolio.herokuapp.com/images"
//       );
//       setCards(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   console.log(cards);
//   useEffect(() => {
//     getImg();

//   }, []);

//   return (
//     <div className="card">
//       {!cards.length ? <Loader /> : <div>carditem</div>}
//     </div>
//   );
// };

// export default CardList;
