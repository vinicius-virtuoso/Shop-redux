import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart";

import Products from "../pages/Products";

const Rotas = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Products />} />
      <Route exact path="/cart" component={() => <Cart />} />
    </Switch>
  );
};

export default Rotas;
