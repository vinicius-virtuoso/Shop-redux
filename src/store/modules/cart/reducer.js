import { ADD_IN_CART, REMOVE_A_PRODUCT } from "./actionsTypes";

const initialState =
  JSON.parse(window.localStorage.getItem("@ShopRedux/cart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IN_CART:
      return action.payload;
    case REMOVE_A_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default cartReducer;
