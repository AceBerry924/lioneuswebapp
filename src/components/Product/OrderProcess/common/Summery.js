import React, { Component } from "react";
import { connect } from "react-redux";
import SecurityAndPrivacyText from "./SecurityAndPrivacyText";
import { SignupStyle } from "../../../common/assets/StyledComponent";
import BillingAddress from './../Payment/BillingAddress'

class CheckoutSummery extends Component {
  render() {
    const {
      subtotal,
      discount,
      shipping,
      envHandlingFee,
      tax,
      handleSubmitPrev,
      handleSubmitNext,
      mode,
    } = this.props;
    return (
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
              </div>
              <div className="order_summary_row">
                <div className="order_summary_label os_para">
                  {/* <p>Order Discounts</p> */}
                </div>
                <div className="order_summary_price os_para text-danger">
                  {/* <p>-${discount.toFixed(2)}</p> */}
                </div>
              </div>
              <div className="order_summary_row">
                <div className="order_summary_label os_para">
                  {/* <p>Estimated Shipping</p> */}
                </div>
                <div className="order_summary_price os_para">
                  {/* <p>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</p> */}
                </div>
              </div>
              <div className="order_summary_row">
                {/* <div className="order_summary_label os_para">
                                    <p>Enviromental Handling Fees</p>
                                </div>
                                <div className="order_summary_price os_para">
                                    <p>${envHandlingFee.toFixed(2)}</p>
                                </div> */}
              </div>
              <div className="order_summary_row">
                <div className="order_summary_label os_para">
                  <p>Estimated taxes</p>
                </div>
                <div className="order_summary_price os_para">
                  <p>${tax.toFixed(2)}</p>
                </div>
              </div>
              <div className="order_summary_total">
                <div className="order_summary_label os_total">
                  <p>Order total</p>
                </div>
                <div className="order_summary_price os_total">
                  <p>
                    ${subtotal - discount + shipping + envHandlingFee + tax}
                  </p>
                </div>
              </div>
            </div>
            <SignupStyle>
              {mode === "cart" && (
                <button
                  type="submit"
                  className="lio-chekout d-block w-100"
                  onClick={handleSubmitNext}

                >
                  Check out
                </button>
              )}
              {mode === "shipping" && (
                <div className="ub_form_buttons d-flex justify-content-between pt-3">
                  <div className="ub_signin_btn">
                    <a
                      href
                      className="lio-btn lio-tertiary d-block w-100"
                      onClick={handleSubmitPrev}
                    >
                      Back
                    </a>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="lio-btn lio-primary d-block w-100"
                      onClick={handleSubmitNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </SignupStyle>
            <SecurityAndPrivacyText />
          </div>
        </div>
        {mode === "payment" && <BillingAddress />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    checkoutReducer: { subtotal, discount, shipping, envHandlingFee, tax },
  } = state;
  return {
    subtotal,
    discount,
    shipping,
    envHandlingFee,
    tax,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // handleCartSummeryAction: payload => dispatch(checkoutAction.handleCartSummery(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSummery);
