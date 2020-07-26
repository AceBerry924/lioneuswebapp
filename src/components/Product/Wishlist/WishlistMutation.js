import React from "react";
import {
  AddToCartStyle,
  ButtonLoader,
  IconLoader,
} from "../../common/assets/StyledComponent";
import { Mutation } from "react-apollo";
import { addItemInWishList } from "../../../graphql/new-mutations";
import { NotificationManager } from "react-notifications";
import { authReducer } from "../../../store/reducers/authReducer";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
const WishlistMutation = ({ productId, userId, history }) => {
  return (
    <AddToCartStyle>
      <Mutation
        mutation={addItemInWishList}
        onCompleted={() => {
          NotificationManager.success(
            "Successfully added product your in wishlist"
          );
        }}
      >
        {(addItemInWishList, { loading, error }) => {
          if (userId && error) {
            if (
              error.message === "GraphQL error: The conditional request failed"
            ) {
              NotificationManager.error(
                "You already added this product in your wishlist."
              );
            } else {
              NotificationManager.error(
                error.message.replace("GraphQL error: ", "")
              );
            }

            return <span></span>;
          } else if (!userId) {
          }
          return (
            <div className="pnl-favorites">
              <div className="pnl-ic-wrapper">
                <span className="pnl-ic">
                  <a
                    id="wishlist"
                    class="btn-floating waves-effect waves-light accent-2"
                    onClick={
                      userId
                        ? () => {
                            addItemInWishList({
                              variables: { input: { productId, userId } },
                            });
                          }
                        : () => {
                            history.push("/signup");
                            return NotificationManager.warning(
                              "Please create an account first"
                            );
                          }
                    }
                  >
                    <div className="like">
                      {loading ? (
                        <IconLoader>
                          <div className="d-flex justify-content-center">
                            <div
                              className="spinner-border text-warning"
                              role="status"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>{" "}
                        </IconLoader>
                      ) : (
                        <img
                          src={require("../../common/assets/images/favorite_border-white-18dp/2x/baseline_favorite_border_white_18dp.png")}
                          alt="heart"
                          style={{ width: "25px", height: "25px" }}
                        />
                        // <i className="material-icons">favorite_border</i>
                      )}
                    </div>
                  </a>
                </span>
                {/* history.push('/signup') */}
              </div>
            </div>
          );
        }}
        {/* <a className="btn-floating waves-effect waves-light red accent-2"><i className="material-icons like">favorite_border</i></a> */}
      </Mutation>
    </AddToCartStyle>
  );
};

const mapStateToProps = (state) => {
  const {
    authReducer: { user },
  } = state;
  return {
    user: user,
  };
};

export default connect(mapStateToProps, null)(withRouter(WishlistMutation));
