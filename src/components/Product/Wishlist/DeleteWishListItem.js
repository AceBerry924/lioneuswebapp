import React from "react";
import {
  AddToCartStyle,
  ButtonLoader,
} from "../../common/assets/StyledComponent";
import { Mutation } from "react-apollo";
import { removeItemFromWishlist } from "../../../graphql/new-mutations";
import { NotificationManager } from "react-notifications";
import { getUserWishList } from "../../../graphql/new-queries";

const DeleteWishListItem = ({ productId, userId }) => {
  console.log("product" + productId, "user" + userId);
  return (
    <div>
      <Mutation
        mutation={removeItemFromWishlist}
        onCompleted={() => {
          NotificationManager.success(
            "Successfully deleted a product from your wishlist"
          );
        }}
        refetchQueries={[
          {
            query: getUserWishList,
            variables: { userId },
          },
        ]}
      >
        {(removeItemFromWishlist, { loading, error }) => {
          return (
            <button
              type="button"
              className="next-btn next-large next-btn-normal next-btn-text opt-btn null"
              role="button"
              onClick={() => {
                removeItemFromWishlist({ variables: { productId, userId } });
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

export default DeleteWishListItem;
