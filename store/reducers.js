import { combineReducers } from "redux";
import products from "./bakery-case";
import cart from "./cart";

export default combineReducers({
    products,
    cart
});
