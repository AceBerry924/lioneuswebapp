import {
  HANDLE_CART_SUMMERY, HANDLE_SHIPPING
} from "../constants";

const initialState = {
  selectedProducts: [],
  subtotal: 0,
  discount: 0,
  shipping: 0,
  envHandlingFee: 0,
  tax: 0,

  handleShipping: {},
};

export default function checkoutReducer(state = initialState, action) {
  switch (action.type) {

    ////////////////////////// SIGNUP /////////////////////
    case HANDLE_CART_SUMMERY:
      return {
        ...state,
        ...action.payload
      };
      
    case HANDLE_SHIPPING:
      return {
        ...state,
         handleShipping: action.payload,
      };

    default:
      return state;
  }
}
