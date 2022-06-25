import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cardsReducer, imagesReducer } from "./reducers";

const rootReducer = combineReducers({
  cards: cardsReducer,
  images: imagesReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
