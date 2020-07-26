import React, { Component } from "react";
import {
  CardElement,
  injectStripe,
  StripeProvider,
  Elements,
} from "react-stripe-elements";
import "./index.css";
import BillingAddress from "./BillingAddress";
import PrimaryButton from "../../../common/Elements/Buttons/PrimaryButton";
import NotificationManager from "react-notifications/lib/NotificationManager";

// You can customize your Elements to give it the look and feel of your site.
const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: "16px",
        color: "#00000",
        fontFamily: "Calibri ,Open Sans, sans-serif",
        letterSpacing: "0.025em",
        "::placeholder": {
          color: "#aab7c4",
        },
        minWidth: "445px",
      },
      invalid: {
        color: "#ff2400",
      },
    },
  };
};

class _CardForm extends Component {
  state = {
    errorMessage: "",
  };

  handleChange = ({ error }) => {
    if (error) {
      NotificationManager.warning("Your card number is incomplete or incorrect.");
      this.setState({ errorMessage: error.message });
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.startLoader();
    if (this.props.stripe) {
      this.props.stripe.createToken().then(this.props.handleResult);
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    const { placeOrderLoader } = this.props;
    return (
      <div className="lf_form_collapse_opt">
        <form>
          <div className="lf_form_box lf_form_box_payment">
            <p
              className="toggle_gift_card"
              id="credit_card_collapse"
              type="text"
            >
              <i className="far fa-credit-card" />
              <span> Enter your debit or credit card</span>
            </p>
          </div>
          <div
            className="lf_form_box lf_form_box_payment border-top-0"
            id="credit_card_collapse_open"
          >
            <div className="lf_form_bc lf_form_payment">
              <h3>Card information</h3>
              <div className="lg_card_information na step_001 active_ok">
                <div>
                  <h5
                    className="active_p"
                    style={{ fontSize: 16, fontWeight: 500 }}
                  >
                    Lioneus Pay
                  </h5>
                  {/* <p>We accept the following cards:</p> */}
                </div>
                <div className="row">
                  <div className="col-lg-12 col-xl-8 ">
                    <label>Card information</label>
                    <CardElement
                      onChange={this.handleChange}
                      {...createOptions()}
                    />
                    <div className="error" role="alert">
                      {this.state.errorMessage}
                    </div>
                  </div>
                </div>
              </div>
              {/* <BillingAddress /> */}
            </div>
          </div>

          <div
            className="lf_form_box lf_form_box_payment border-top-0"
            id="paypal_collapsed_fm"
            style={{ display: "" }}
          >
            {/* <div className="lf_form_bc lf_form_payment" id="purchase-button"> */}
            {/* <PrimaryButton
                onClick={this.handleSubmit}
                value="Purchase"
                loading={this.state.errorMessage ? "" : placeOrderLoader}
              /> */}
            <div className="col-md-4" style={{margin : 'auto'}}>
              <div className="lf_step_review_Content_2">
                <a
                  href="/feedback"
                  id="purchase-button"
                  className="btn btn-primary pt-3 pb-3"
                  onClick={this.handleSubmit}
                  value="Purchase"
                  loading={this.state.errorMessage ? "" : placeOrderLoader}
                >
                  Purchase
                </a>
              </div>
            </div>
            {/* <button onClick={this.handleSubmit} className="btn btn-warning btn-block w-100 d-flex align-items-center justify-content-center pt-3 pb-3" style={{ fontWeight: 500 }}>{placeOrderLoader ? '...Loading' : 'Purchase'}</button> */}
            {/* </div> */}
          </div>
        </form>
      </div>
    );
  }
}

const CardForm = injectStripe(_CardForm);

export class StripeCard extends Component {
  render() {
    const { placeOrderLoader, handleResult, startLoader } = this.props;
    return (
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
        <Elements>
          <CardForm
            handleResult={handleResult}
            placeOrderLoader={placeOrderLoader}
            startLoader={startLoader}
          />
        </Elements>
      </StripeProvider>
    );
  }
}
