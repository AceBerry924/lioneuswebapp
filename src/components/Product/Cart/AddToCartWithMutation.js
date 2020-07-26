import React from "react";
import {
  AddToCartStyle,
  IconLoader,
} from "../../common/assets/StyledComponent";
import { Mutation } from "react-apollo";
import { addItemCart } from "../../../graphql/new-mutations";
import { NotificationManager } from "react-notifications";
import { withRouter } from "react-router-dom";

const AddToCartWithMutation = ({ productId, userId, history }) => {
  return (
    <AddToCartStyle>
      <Mutation
        mutation={addItemCart}
        onCompleted={() => {
          NotificationManager.success("Successfully added product your in  cart");
        }}
      >
        {(addItemCart, { loading, error }) => {
          if (error) {
            if (
              error.message === "GraphQL error: The conditional request failed"
            ) {
              NotificationManager.error(
                "You already added this product in your cart."
              );
            } else {
              // NotificationManager.error(
              //   error.message.replace("GraphQL error: ", "")
              // );
            }

            return <span></span>;
          }
          return (
            // () => {history.push("/signup"); return NotificationManager.warning("You need to signup first");}
            <div className="pnl-tocart">
              <div
                className="pnl-ic-wrapper"
                onClick={() => {
                  addItemCart({ variables: { input: { productId, userId } } });
                }}
              >
                <span className="pnl-ic">
                  <a
                    id="buy"
                    className="btn-floating waves-effect waves-light blue"
                    onClick={
                      userId
                        ? () => {
                            addItemCart({
                              variables: { input: { productId, userId } },
                            });
                          }
                        : () => {
                            history.push("/signup");
                            return NotificationManager.warning(
                              " Please create an account first"
                            );
                          }
                    }
                  >
                    <div className="buy">
                      {loading ? (
                        <IconLoader>
                          <div className="d-flex justify-content-center">
                            <div
                              className="spinner-border text-warning"
                              role="status"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                        </IconLoader>
                      ) : (
                        <img
                          src={require("../../common/assets/images/add_shopping_cart-white-18dp/2x/baseline_add_shopping_cart_white_18dp.png")}
                          alt="heart"
                          style={{width : '25px', height : '25px'}}
                        />

                        // <i className="material-icons">add_shopping_cart</i>
                      )}
                    </div>
                  </a>
                </span>
              </div>
            </div>
            // <button onClick={() => {
            //     addItemCart({ variables: { input: { productId, userId } } })
            // }}>
            //     {loading ? '...' : <img src="https://www.materialui.co/materialIcons/action/add_shopping_cart_white_192x192.png" height="35" />}
            // </button>
          );
        }}

        {/* <a id="buy" className="btn-floating waves-effect waves-light blue"><i className="material-icons buy">add_shopping_cart</i></a> */}
      </Mutation>
    </AddToCartStyle>
  );
};

export default withRouter(AddToCartWithMutation);
