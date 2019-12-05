import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from "../store";

import HomePage from "./HomePage";
import CartPage from "./CartPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import PaymentPage from "./PaymentPage";

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Root;
