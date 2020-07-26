import React from "react";
import Navbar from "../../common/Header/Navbar";
import {
  SearchPageStyle,
  AddToCartPageStyle,
  SignupStyle,
} from "../../common/assets/StyledComponent";
import styled from "styled-components";
import "./style.scss";
import { Link } from "react-router-dom";
import $ from "jquery";
import Bank from "./Bank";
const Main = styled.div`
  .has-search button {
    position: absolute;
    right: 0;
    z-index: 99;
    display: block;
    top: 0;
    height: 39.5938px;
    border-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

class Transfer extends React.Component {
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
  componentDidMount() {
    $(".riseInput").on("focusin", function () {
      $(this).parent().find("label").addClass("active_label");
    });

    $(".riseInput").on("focusout", function () {
      if (!this.value) {
        $(this).parent().find("label").removeClass("active_label");
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        <Main>
          <SearchPageStyle>
            <Navbar />
          </SearchPageStyle>
          <AddToCartPageStyle>
            <section className="checkout_steps">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12 col-sm-12">
                    <div className="checkout_steps_count">
                      <div
                        className="lc_step_count"
                        style={{ justifyContent: "center" }}
                      >
                        <div
                          id="lg_step_count_1"
                          onClick={this.swapFormActive(1)(1)}
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
                            <span>Identity</span>
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
                            <span>Bank</span>
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
                            <span>Confirm</span>
                          </div>
                        </div>{" "}
                        {/* lc_step end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </AddToCartPageStyle>
          {this.state.formActivePanel1 === 1 && (
            <Identity click={this.swapFormActive(1)(2)} />
          )}
          {this.state.formActivePanel1 === 2 && (
            <div>
              <Bank
                handleNextClick={this.handleNextPrevClick(1)(3)}
                handlePrevClick={this.handleNextPrevClick(1)(1)}
              />
            </div>
          )}
          {this.state.formActivePanel1 === 3 && (
            <Confirm
              gotoReview={this.handleNextPrevClick(1)(2)}
              handlePrevsClick={this.handleNextPrevClick(1)(2)}
            />
          )}
        </Main>
      </React.Fragment>
    );
  }
}

const Identity = (props) => {
  return (
    <React.Fragment>
      <SignupStyle>
        <section className="main">
          <div className="container">
            <div className="ub_form">
              <div className="form-si-header">
                <Link to="/">
                  <img
                    src={require("../../common/assets/images/logo1.png")}
                    alt=""
                  />
                </Link>
                <h3>Fund Transfer</h3>
              </div>
              <div className="row rt_inputs">
                <div className="col-6">
                  <div className="wrap_input_div">
                    <div className="wrap_input">
                      <label htmlFor="firstName" className>
                        First name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="riseInput form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="wrap_input_div">
                    <div className="wrap_input">
                      <label htmlFor="lastName" className>
                        Last name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="riseInput form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap_input_div">
                <div className="wrap_input">
                  <label htmlFor="Email" className>
                    Email
                  </label>
                  <input
                    id="Email"
                    type="text"
                    className="riseInput form-control"
                  />
                </div>
              </div>
              <div className="wrap_input_div">
                <div className="wrap_input">
                  <label htmlFor="Address" className>
                    Address
                  </label>
                  <input
                    id="Company"
                    type="text"
                    className="riseInput form-control"
                  />
                </div>
              </div>
              <div className="wrap_input_div">
                <div className="wrap_input">
                  <label htmlFor="Phone" className>
                    Phone number
                  </label>
                  <input
                    id="Password"
                    type="number"
                    className="riseInput form-control"
                  />
                </div>
              </div>
              <div className="ub_form_buttons d-flex justify-content-between pt-3">
                <div className="ub_signin_btn">
                  <a href className="lio-btn lio-tertiary d-block w-100">
                    Store
                  </a>
                </div>
                <div>
                  <button
                    type="submit"
                    className="lio-btn lio-primary d-block w-100"
                    onClick={props.click}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SignupStyle>
    </React.Fragment>
  );
};

const Confirm = (props) => {
  return (
    <React.Fragment>
      <SignupStyle>
        <section className="main">
          <div className="container">
            <div className="ub_form">
              <div className="form-si-header">
                <Link to="/">
                  <img
                    src={require("../../common/assets/images/logo1.png")}
                    alt=""
                  />
                </Link>
                <h3>Confirm</h3>
              </div>
              <p>Information</p>
              <div className="ub_form_buttons d-flex justify-content-between pt-3">
                <div className="ub_signin_btn">
                  <a
                    href
                    className="lio-btn lio-tertiary d-block w-100"
                    onClick={props.gotoReview}
                  >
                    Previous
                  </a>
                </div>
                <div>
                  <button
                    type="submit"
                    className="lio-btn lio-primary d-block w-100"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SignupStyle>
    </React.Fragment>
  );
};

export default Transfer;
