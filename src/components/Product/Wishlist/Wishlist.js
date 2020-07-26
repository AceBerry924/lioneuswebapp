import React from "react";
import { getUserWishList } from "../../../graphql/new-queries";
import { connect } from "react-redux";
import { AddToCartPageStyle, PageLoader } from "../../common/assets/StyledComponent";
import { withApollo, Query } from "react-apollo";
import ReadMoreReact from "read-more-react";
import DeleteWishListItem from "./DeleteWishListItem";
import Navbar from "../../common/Header/Navbar";
const defaultPic =
  "https://marketingweek.imgix.net/content/uploads/2017/09/06163244/price-tags_750.jpg?auto=compress,format&q=60&w=750&h=";

class wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
      max: 5,
      min: 0,
      selectedProducts: [],
      subtotal: 0,
      discount: 0,
      shipping: 0,
      envHandlingFee: 0,
      tax: 0,
    };
  }
  IncrementItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity < 9) {
        return {
          quantity: prevState.quantity + 1,
        };
      } else {
        return null;
      }
    });
  };
  DecreaseItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1,
        };
      } else {
        return null;
      }
    });
  };
  ToggleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleChange = (event) => {
    this.setState({ quantity: event.target.value });
  };
  selectProductToCheckout = (event, product) => {
    const { checked } = event.target;
    if (checked) {
      this.addProductToCheckout(product);
    } else {
      this.setState(
        {
          selectedProducts: this.state.selectedProducts.filter(
            (p) => p.productId !== product.productId
          ),
        },
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
    this.setState({ subtotal });
  };
  render() {
    const { user } = this.props;
    const {
      subtotal,
      discount,
      shipping,
      envHandlingFee,
      tax,
      selectedProducts,
    } = this.state;
    const timestamp = Date.now();
    return (
      <AddToCartPageStyle>
        <div className="cart-body">
          <Navbar />
          <section className="checkout_steps">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4 col-sm-4">
                  <div className="checkout_title">
                    <h3>User Wishlist</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="checkout-form">
            <section className="lf_main" id="shipping">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="lf_form_wrapper">
                      <div className="lf_form_box">
                        <div className="lf_form_bc">
                          <h3>Wishlist</h3>
                        </div>
                      </div>{" "}
                      {/* lf_form_box */}
                      {this.props.user && (
                        <Query
                          query={getUserWishList}
                          fetchPolicy="network-only"
                          variables={{ userId: this.props.user.userId }}
                        >
                          {({ subcribeToMore, loading, error, data }) => {
                            if (loading)
                              return (
                                <PageLoader>
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
                                </PageLoader>
                              );
                            if (error) return <p>error</p>;
                            return (
                              <div>
                                {data.getUserWishList &&
                                  data.getUserWishList.map((item, index) => {
                                    return (
                                      <div className="lf_form_box" key={index}>
                                        <div className="lf_form_bc">
                                          {/* <h3>Shipping Address</h3> */}
                                          <div class="form-check-inline">
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
                                          </div>
                                          <div
                                            className="card mb-3"
                                            style={{ maxWidth: "auto" }}
                                          >
                                            <div className="row no-gutters">
                                              <div className="col-md-4">
                                                <img
                                                  src={
                                                    item.product.pictures &&
                                                    item.product.pictures.length
                                                      ? item.product
                                                          .pictures[0]["image"]
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
                                                        item.product.description
                                                      }
                                                      min={80}
                                                      ideal={100}
                                                      max={100}
                                                      readMoreText={"read more"}
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
                                                  <DeleteWishListItem
                                                    productId={
                                                      item.product.productId
                                                    }
                                                    userId={
                                                      this.props.user.userId
                                                    }
                                                  />
                                                </div>
                                              </div>
                                            </div>

                                            <div className="continue_button_os">
                                              <button
                                                type="button"
                                                className="buy-button pull-right"
                                              >
                                                Check out
                                              </button>
                                            </div>
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
                  <div className="col-lg-4">
                    <div className="lf_form_box order_summary">
                      <div className="lf_form_bc">
                        <h3>Order Summary</h3>
                        <div className="order_summary_main">
                          <div className="order_summary_row">
                            <div className="order_summary_label os_para">
                              <p>Product subtotal</p>
                            </div>
                            <div className="order_summary_price os_para">
                              <p>${subtotal.toFixed(2)}</p>
                            </div>
                          </div>{" "}
                          {/* order_summary_row */}
                          <div className="order_summary_total">
                            <div className="order_summary_label os_total">
                              <p>Estimated Total</p>
                            </div>
                            <div className="order_summary_price os_total">
                              <p>
                                $
                                {subtotal -
                                  discount +
                                  shipping +
                                  envHandlingFee +
                                  tax}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="order_security">
                          <div className="os_1">
                            {/* <img src={require('../../templates/checkout/images/locked.png')} alt="" /> */}
                          </div>
                          <div className="os_2">
                            {/* <h4>Security &amp; Privacy</h4>
                                                        <p>Every transaction on Lioneus is secure and encrypted.</p> */}
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* lf_form_box */}
                  </div>{" "}
                  {/* col-lg-4 end */}
                </div>
              </div>
            </section>
          </div>
        </div>
      </AddToCartPageStyle>
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
export default connect(mapStateToProps, null)(withApollo(wishlist));
