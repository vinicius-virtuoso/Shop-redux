import { productsState } from "../../../data/products";
import { SHOW_PRODUCTS } from "./actionsTypes";

const initialState = productsState;

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export default productsReducer;
