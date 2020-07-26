import React from "react";
import { getUserCart } from "../../../graphql/new-queries";
import { checkoutAction } from "../../../store/action";
import { connect } from "react-redux";
import { AddToCartPageStyle, PageLoader } from "../../common/assets/StyledComponent";
import { withApollo, Query } from "react-apollo";
import ReadMoreReact from "read-more-react";
import DeleteButtonMutation from "../Cart/DeleteButtonMutation";
import CheckoutSummery from "./common/Summery";
import { NotificationManager } from "react-notifications";
const defaultPic =
  "https://marketingweek.imgix.net/content/uploads/2017/09/06163244/price-tags_750.jpg?auto=compress,format&q=60&w=750&h=";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      subtotal: 0,
      discount: 0,
      shipping: 0,
      envHandlingFee: 0,
      tax: 0,
      mode: "cart",
    };
  }
Next = () => {
  const { subtotal } = this.state
  if(subtotal !== 0){
    this.props.handleSubmit();
    return NotificationManager.success("Successfully selected a product. ");
  } else {
    return NotificationManager.warning("You need to select at least one product to checkout.");
  }
}
  selectProductToCheckout = (event, product) => {
    const { checked } = event.target;
    if (checked) {
      console.log(product)
      this.addProductToCheckout(product);
    } else {
      this.setState(
        {
          selectedProducts: this.state.selectedProducts.filter(
            (p) => p.productId !== product.productId
          ),
        },
        console.log(this.state.selectedProducts),
        this.calculateSubTotal
      );
    }
  };

  addProductToCheckout = (product) => {
    const { selectedProducts } = this.state;
    this.setState(
      { selectedProducts: [...selectedProducts, product] },
      this.calculateSubTotal
    );
  };

  removeProductToCheckout = (product) => {
    let { selectedProducts } = this.state;
    let flag = false;

    selectedProducts = selectedProducts
      .map((p) => {
        if (p.productId === product.productId && !flag) {
          flag = true;
          return;
        }
        return p;
      })
      .filter((item) => item);
    this.setState({ selectedProducts }, this.calculateSubTotal);
  };
  calculateSubTotal = () => {
    let { selectedProducts, subtotal } = this.state;
    subtotal = 0;
    selectedProducts.map((p) => {
      subtotal += parseFloat(p.amount);
    });
    this.setState({ subtotal }, () =>
      this.props.handleCartSummeryAction({ ...this.state })
    );
  };

  // componentDidUpdate(prevProps, prevState) {
  //     if (prevState.selectedProducts.length !== this.state.selectedProducts.length) {
  //         this.props.handleCartSummeryAction({ ...this.state })
  //     }
  // }
  render() {
    const { user, handleSubmit } = this.props;
    const {
      subtotal,
      discount,
      shipping,
      envHandlingFee,
      tax,
      selectedProducts,
    } = this.state;

    return (
      <React.Fragment>
        <AddToCartPageStyle>
          <div className="cart-body">
            <div id="checkout-form">
              <section className="lf_main" id="shipping">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="lf_form_wrapper">
                        <div className="lf_form_box">
                          <div className="lf_form_bc">
                            <h3>
                              Shopping Cart{" "}
                              {this.props.user && (
                                <Query
                                  query={getUserCart}
                                  fetchPolicy="network-only"
                                  variables={{ userId: this.props.user.userId }}
                                >
                                  {({
                                    subcribeToMore,
                                    loading,
                                    error,
                                    data,
                                  }) => {
                                    if (loading) return null;
                                    if (error) return <p>error</p>;
                                    console.log();
                                    return (
                                      <span> ({data.getUserCart.length})</span>
                                    );
                                  }}
                                </Query>
                              )}
                            </h3>
                          </div>
                        </div>{" "}
                        {/* lf_form_box */}
                        {this.props.user && (
                          <Query
                            query={getUserCart}
                            fetchPolicy="network-only"
                            variables={{ userId: this.props.user.userId }}
                          >
                            {({ subcribeToMore, loading, error, data }) => {
                              if (loading) return <PageLoader style={{top: '60%'}}>
                              <div className="d-flex justify-content-center">
                                <div
                                  className="spinner-border text-warning"
                                  role="status"
                                >
                                  <span className="sr-only">
                                    Loading...
                                  </span>
                                </div>
                              </div>
                            </PageLoader>;
                              if (error) return <p>error</p>;
                              console.log(data.getUserCart.length);
                              return (
                                <div>
                                  {data.getUserCart &&
                                    data.getUserCart.map((item, index) => {
                                      return (
                                        <div
                                          className="lf_form_box"
                                          key={index}
                                        >
                                          <div className="lf_form_bc">
                                            {/* <h3>Shipping Address</h3> */}

                                            {/* <div className="row col-10px"> */}
                                            <div
                                              className="card mb-3"
                                              style={{ maxWidth: "auto" }}
                                            >
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  onChange={(e) =>
                                                    this.selectProductToCheckout(
                                                      e,
                                                      item.product
                                                    )
                                                  }
                                                  checked={
                                                    selectedProducts.filter(
                                                      (p) =>
                                                        p.productId ===
                                                        item.product.productId
                                                    ).length
                                                  }
                                                />
                                                {/* <span>Yellow</span> */}
                                              </label>

                                              <div className="row no-gutters">
                                                <div className="col-md-4">
                                                  <img
                                                    src={
                                                      item.product.pictures &&
                                                      item.product.pictures
                                                        .length
                                                        ? item.product
                                                            .pictures[0].image
                                                        : defaultPic
                                                    }
                                                    className="card-img"
                                                    alt="..."
                                                  />
                                                </div>
                                                <div className="col-md-6">
                                                  <div className="card-body">
                                                    <h5 className="card-title">
                                                      {item.product.title}
                                                    </h5>
                                                    <p className="card-text">
                                                      <ReadMoreReact
                                                        text={
                                                          item.product
                                                            .description
                                                        }
                                                        min={80}
                                                        ideal={100}
                                                        max={100}
                                                        readMoreText={
                                                          "read more"
                                                        }
                                                      />
                                                    </p>
                                                    {/* <p className="card-text">
                                                      <small className="text-muted">
                                                        Last updated{" "}
                                                        {new Intl.DateTimeFormat(
                                                          "en-US",
                                                          {
                                                            year: "numeric",
                                                            month: "2-digit",
                                                            day: "2-digit",
                                                            hour: "2-digit",
                                                            minute: "2-digit",
                                                            second: "2-digit",
                                                          }
                                                        ).format(
                                                          item.product
                                                            .createdTimestamp
                                                        )}
                                                      </small>
                                                    </p> */}
                                                  </div>
                                                </div>
                                                <div className="col-md-2">
                                                  <div className="opt-group">
                                                    <DeleteButtonMutation
                                                      productId={
                                                        item.product.productId
                                                      }
                                                      userId={
                                                        this.props.user.userId
                                                      }
                                                    />
                                                  </div>
                                                  <div>
                                                    <div className="quantity">
                                                      <span className="input-group-btn">
                                                        <button
                                                          type="button"
                                                          className="btn btn-default btn-number "
                                                          onClick={(_) =>
                                                            this.addProductToCheckout(
                                                              item.product
                                                            )
                                                          }
                                                        >
                                                          +
                                                        </button>
                                                      </span>
                                                      <input
                                                        value={
                                                          selectedProducts.filter(
                                                            (p) =>
                                                              p.productId ===
                                                              item.product
                                                                .productId
                                                          ).length
                                                        }
                                                        disabled
                                                        className="inputne"
                                                      />
                                                      <span className="input-group-btn">
                                                        <button
                                                          type="button"
                                                          className="btn btn-default btn-number"
                                                          onClick={(_) =>
                                                            this.removeProductToCheckout(
                                                              item.product
                                                            )
                                                          }
                                                        >
                                                          -
                                                        </button>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              {/* <div className="continue_button_os">
                                                <button
                                                  type="button"
                                                  className="buy-button pull-right"
                                                >
                                                  Buy
                                                </button>
                                              </div> */}
                                            </div>

                                            {/* </div> */}
                                          </div>
                                        </div>
                                      );
                                    })}
                                </div>
                              );
                            }}
                          </Query>
                        )}
                      </div>
                    </div>{" "}
                    {/* col-lg-8 end */}
                    <CheckoutSummery handleSubmitNext={this.Next} mode={this.state.mode}/>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </AddToCartPageStyle>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    authReducer: { user },
  } = state;
  return {
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCartSummeryAction: (payload) =>
      dispatch(checkoutAction.handleCartSummery(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withApollo(AddToCart));
