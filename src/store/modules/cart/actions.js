import { ADD_IN_CART, REMOVE_A_PRODUCT } from "./actionsTypes";

export const add_a_product = (payload) => ({
  type: ADD_IN_CART,
  payload,
});
export const remove_a_product = (payload) => ({
  type: REMOVE_A_PRODUCT,
  payload,
});
