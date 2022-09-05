import { ActionTypes } from "../constant/actionType";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.PRODUCTS:
      return payload;
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return payload;
    default:
      return state;
  }
};

export const AddToCartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_CART:
      return [
        ...state,
        {
          data: payload,
          no_of_product: 1
        }
      ]
    default:
      return state;
  }
};

export const wishLitsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.WISHLIST:
      return [
        ...state, payload
      ]
    default:
      return state;
  }
};