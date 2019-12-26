import { combineReducers } from "redux";
import auth from "./auth";
import step from "./step";
import products from "./products";

export default combineReducers({
  auth,
  step,
  products
});
