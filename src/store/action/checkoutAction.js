import {
  HANDLE_CART_SUMMERY,
  HANDLE_SHIPPING,
} from "../constants";

export class checkoutAction {

  ////////////////////////  HANDLE_CART_SUMMERY  ////////////////////
  static handleCartSummery(payload) {
    return {
      type: HANDLE_CART_SUMMERY,
      payload
    };
  }


  static handleShipping(payload) {
    return {
      type: HANDLE_SHIPPING,
      payload
    };
  }
}
