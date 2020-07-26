import React from "react";
import {
  AddToCartStyle,
  ButtonLoader,
} from "../../common/assets/StyledComponent";
import { Mutation } from "react-apollo";
import { removeItemFromCart } from "../../../graphql/new-mutations";
import { NotificationManager } from "react-notifications";
import { getUserCart } from "../../../graphql/new-queries";

const DeleteButtonMutation = ({ productId, userId }) => {
  console.log("product" + productId, "user" + userId);
  return (
    <div>
      <Mutation
        mutation={removeItemFromCart}
        onCompleted={() => {
          NotificationManager.success(
            "Successfully deleted a product from your cart"
          );
        }}
        refetchQueries={[
          {
            query: getUserCart,
            variables: { userId },
          },
        ]}
      >
        {(removeItemFromCart, { loading, error }) => {
          if (error) {
            NotificationManager.error(
              error.message.replace("GraphQL error: ", "")
            );

            return <span></span>;
          }
          return (
            <button
              type="button"
              className="next-btn next-large next-btn-normal next-btn-text opt-btn null"
              role="button"
              onClick={() => {
                removeItemFromCart({ variables: { productId, userId } });
              }}
            >
              {loading ? (
                <ButtonLoader>
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border text-warning" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </ButtonLoader>
              ) : (
                <i
                  style={{ fontSize: "20px", marginTop: "2px" }}
                  class="far fa-trash-alt"
                ></i>
              )}
            </button>
          );
        }}
      </Mutation>
    </div>
  );
};

export default DeleteButtonMutation;
