import * as actionTypes from '../constants/actionTypes';

const initialState = { products: [] };

export const handleProductList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.products };
    default:
      return state;
  }
};
