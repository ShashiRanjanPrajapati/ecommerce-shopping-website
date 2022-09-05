import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer , AddToCartReducer , wishLitsReducer } from "./productReducer";
import changeTheNumber from "./QuantityIncre&Decre";
const reducers = combineReducers({
  changeTheNumber,
  allProducts: productsReducer,
  selectProduct: selectedProductsReducer,
  Cart : AddToCartReducer,
  wishlist : wishLitsReducer,
});
export default reducers;
