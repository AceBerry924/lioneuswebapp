import React from "react";
import { AddToCartStyle } from "../../common/assets/StyledComponent";
import { Route } from "react-router-dom";
export default function AddToCart() {
  return (
    <div>
      <a id="buy" class="btn-floating waves-effect waves-light ">
        {/* <i class="material-icons buy">add_shopping_cart</i> */}
        <img
          src={require("../../common/assets/images/add_shopping_cart-white-18dp/1x/baseline_add_shopping_cart_white_18dp.png")}
        />
      </a>
    </div>
  );
}
