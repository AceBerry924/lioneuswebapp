import React from "react";
import {
  AddToCartPageStyle,
  SearchPageStyle,
} from "../../common/assets/StyledComponent";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import Shipping from "./Shipping";
import Payment from "./Payment/Payment";
import Review from "./Review";
import AddToCart from "./AddToCart";
import Navbar from "../../common/Header/Navbar";
class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }
  items = [<AddToCart />, <Shipping />, <Payment />, <Review />];
  state = {
    currentIndex: 0,
    formActivePanel1: 1,
    formActivePanel1Changed: false,
    active: false,
  };
  swapFormActive = (a) => (param) => (e) => {
    this.setState({
      ["formActivePanel" + a]: param,
      ["formActivePanel" + a + "Changed"]: true,
    });
  };

  handleNextPrevClick = (a) => (param) => (e) => {
    this.setState({
      ["formActivePanel" + a]: param,
      ["formActivePanel" + a + "Changed"]: true,
    });
  };
  handleSubmission = () => {
    alert("Form submitted!");
  };

  calculateAutofocus = (a) => {
    if (this.state["formActivePanel" + a + "Changed"]) {
      return true;
    }
  };
  render() {
    const { galleryItems, responsive, currentIndex } = this.state;
    return (
      <AddToCartPageStyle>
        <header className="header" style={{ height: "100px" }}>
          <SearchPageStyle>
            <Navbar />
          </SearchPageStyle>
        </header>
        {/* STEPPER */}

        <br />
        <section className="checkout_steps" style={{ marginTop: "1%" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 col-sm-4">
                <div className="checkout_title">
                  <h3>Checkout</h3>
                </div>
              </div>

              <div className="col-md-8 col-sm-8">
                <div className="checkout_steps_count">
                  <div className="lc_step_count">
                    <div
                      id="lg_step_count_1"
                    //   onClick={this.swapFormActive(1)(1)}
                      className={
                        this.state.formActivePanel1 === 1
                          ? " lc_step activated_step"
                          : "lc_step"
                      }
                    >
                      <div className="lc_step_number">
                        <span>1</span>
                      </div>
                      <div className="lc_step_title">
                        <span>Cart</span>
                      </div>
                    </div>{" "}
                    {/* lc_step end */}
                    <div
                      id="lg_step_count_2"
                      onClick={this.swapFormActive(1)(2)}
                      className={
                        this.state.formActivePanel1 === 2
                          ? "lc_step activated_step"
                          : "lc_step"
                      }
                    >
                      <div className="lc_step_number">
                        <span>2</span>
                      </div>
                      <div className="lc_step_title">
                        <span>Shipping</span>
                      </div>
                    </div>{" "}
                    {/* lc_step end */}
                    <div
                      id="lg_step_count_3"
                      onClick={this.swapFormActive(1)(3)}
                      className={
                        this.state.formActivePanel1 === 3
                          ? "lc_step activated_step"
                          : "lc_step"
                      }
                    >
                      <div className="lc_step_number">
                        <span>3</span>
                      </div>
                      <div className="lc_step_title">
                        <span>Payment</span>
                      </div>
                    </div>{" "}
                    {/* lc_step end */}
                    <div
                      id="lg_step_count_4"
                      onClick={this.swapFormActive(1)(4)}
                      className={
                        this.state.formActivePanel1 === 4
                          ? "lc_step activated_step"
                          : "lc_step"
                      }
                    >
                      <div className="lc_step_number">
                        <span>4</span>
                      </div>
                      <div className="lc_step_title">
                        <span>Review</span>
                      </div>
                    </div>{" "}
                    {/* lc_step end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {this.state.formActivePanel1 === 1 && (
          <AddToCart handleSubmit={this.handleNextPrevClick(1)(2)} />
        )}
        {this.state.formActivePanel1 === 2 && (
          <div>
            <Shipping
              handleNextClick={this.handleNextPrevClick(1)(3)}
              handlePrevClick={this.handleNextPrevClick(1)(1)}
            />
          </div>
        )}
        {this.state.formActivePanel1 === 3 && (
          <Payment gotoReview={this.handleNextPrevClick(1)(4)} />
        )}
        {this.state.formActivePanel1 === 4 && <Review />}
        {/* STEPPER ENDS */}

        {/* Shipping ends */}
      </AddToCartPageStyle>
    );
  }
}

export default Checkout;
