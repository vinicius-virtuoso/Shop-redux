import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
