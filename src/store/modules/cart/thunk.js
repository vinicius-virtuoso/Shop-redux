import { toast } from "react-toastify";
import { add_a_product, remove_a_product } from "./actions";

export const add_a_product_thunk = (payload) => (dispatch, getState) => {
  const { cart, products } = getState();
  let isValid = cart.map((item) => item.id).includes(payload);
  if (!isValid) {
    let product_id = products.find((product) => product.id === payload);
    const updateCart = [...cart, product_id];
    window.localStorage.setItem("@ShopRedux/cart", JSON.stringify(updateCart));
    dispatch(add_a_product(updateCart));
    toast.success("Produto adicionado ao carrinho.");
  } else {
    toast.error("Este produto ja foi adicionado ao carrinho.");
  }
};

export const remove_a_product_thunk = (payload) => (dispatch, getState) => {
  const { cart } = getState();
  let product_id = cart.filter((product) => product.id !== payload);
  const updateCart = [...product_id];
  window.localStorage.setItem("@ShopRedux/cart", JSON.stringify(updateCart));
  dispatch(remove_a_product(updateCart));
  toast.warning("Produto removido.");
};
