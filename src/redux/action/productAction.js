import { ActionTypes } from "../constant/actionType";

export const Products = (products) => {
  return {
    type: ActionTypes.PRODUCTS,
    payload: products,
  };
};

export const SelectedProduct = (Selected_product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: Selected_product,
  };
};

export const Cart = (Add_Cart) => {
  return {
    type: ActionTypes.ADD_CART,
    payload: Add_Cart,
  };
};
export const WishList = (wishlist) => {
  return {
    type: ActionTypes.WISHLIST,
    payload: wishlist,
  };
};


