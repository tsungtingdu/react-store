import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from "pages/App";
import Cart from "pages/Cart";
import Login from "pages/Login";
import NotFound from "pages/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/cart" exact component={Cart}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
