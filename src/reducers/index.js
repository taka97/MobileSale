import { combineReducers } from "redux";
import auth from "./auth";
import step from "./step";
import products from "./products";
import cart from "./cart";
import user from "./user";

export default combineReducers({
  auth,
  step,
  products,
  cart,
  user
});
