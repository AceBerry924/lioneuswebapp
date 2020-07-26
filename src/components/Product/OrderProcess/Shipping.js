import React from "react";
import ReactFlagsSelect from "react-flags-select";
import CheckoutSummery from "./common/Summery";
import { checkoutAction } from "../../../store/action";
import { connect } from "react-redux";
import Error from "../../common/Elements/Error/Error";
import Input from "../../common/Elements/Input/Input";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Label } from "../../common/Footer/StyledComponent/StyledComponent";
import "./style.css";

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fName: "",
      lName: "",
      address: "",
      country: "",
      province: "",
      postalCode: "",
      phoneNumber: "",
      value: "",
      mode: "shipping",
      fieldErrors: {},
    };
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitshipping = () => {
    let {
      email,
      fName,
      lName,
      address,
      country,
      province,
      postalCode,
      phoneNumber,
      city,
      fieldErrors,
    } = this.state;
    if (
      email &&
      fName &&
      lName &&
      address &&
      country &&
      province &&
      postalCode &&
      city
    ) {
      let payload = {
        email,
        fName,
        lName,
        address,
        country,
        province,
        postalCode,
        phoneNumber,
        city,
      };
      this.props.ShippingAction(payload);
      this.props.handleNextClick();
    } else {
      if (!email) fieldErrors["email"] = "Enter an email";
      if (!fName) fieldErrors["fName"] = "Enter your first name";
      if (!lName) fieldErrors["lName"] = "Enter your last name";
      if (!address) fieldErrors["address"] = "Select an address";
      if (!country) fieldErrors["country"] = "Select a country";
      if (!province) fieldErrors["province"] = "Select a province";
      if (!postalCode) fieldErrors["postalCode"] = "Enter an postal code";
      if (!phoneNumber) fieldErrors["phoneNumber"] = "Enter your phone number";
      if (!city) fieldErrors["city"] = "Enter your city";
    }
    this.setState({ fieldErrors });
  };
  setValue = (e) => {
    console.log(e);
  };

  componentDidMount() {
    const { handleShipping } = this.props;

    this.setState({
      email: handleShipping.email,
      fName: handleShipping.fName,
      lName: handleShipping.lName,
      address: handleShipping.address,
      country: handleShipping.country,
      province: handleShipping.province,
      postalCode: handleShipping.postalCode,
      phoneNumber: handleShipping.phoneNumber,
      city: handleShipping.city,
    });
  }

  render() {
    let {
      email,
      fName,
      lName,
      address,
      country,
      province,
      postalCode,
      phoneNumber,
      city,
      fieldErrors,
    } = this.state;
    const user = this.props;
    console.log(user);
    return (
      <React.Fragment>
        <div id="checkout-form">
          <section className="lf_main" id="shipping">
            <div className="container">
              <div className="lf_form_title">
                <h3>Shipping</h3>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="lf_form_wrapper">
                    <div className="lf_form_box">
                      <div className="lf_form_bc">
                        <h3>Contact information</h3>
                        <div className="row">
                          <div className="col-sm-8">
                            <Input
                              name="email"
                              style={
                                fieldErrors.email
                                  ? { borderColor: "red" }
                                  : null
                              }
                              value={email}
                              onChange={this.inputHandler}
                              type="text"
                              error={fieldErrors.email}
                              label="Email"
                            />
                          </div>
                        </div>
                        {fieldErrors.email && (
                          <Error text={fieldErrors.email} />
                        )}
                        <p className="mb-0">
                          We'll send order updates to this email
                        </p>
                      </div>
                    </div>{" "}
                    <div className="lf_form_box">
                      <div className="lf_form_bc">
                        <h3>Shipping address</h3>
                        <div className="row col-10px">
                          <div className="col-sm-6">
                            <Input
                              style={
                                fieldErrors.fName
                                  ? { borderColor: "red" }
                                  : null
                              }
                              value={fName}
                              name="fName"
                              onChange={this.inputHandler}
                              error={fieldErrors.fName}
                              label="First name"
                              type="text"
                            />
                            {fieldErrors.fName && (
                              <Error text={fieldErrors.fName} />
                            )}
                          </div>
                          <div className="col-sm-6">
                            <Input
                              type="text"
                              style={
                                fieldErrors.lName
                                  ? { borderColor: "red" }
                                  : null
                              }
                              value={lName}
                              name="lName"
                              onChange={this.inputHandler}
                              error={fieldErrors.lName}
                              label="Last name"
                            />
                            {fieldErrors.lName && (
                              <Error text={fieldErrors.lName} />
                            )}
                          </div>
                        </div>
                        <Input
                          type="text"
                          style={
                            fieldErrors.address ? { borderColor: "red" } : null
                          }
                          value={address}
                          name="address"
                          onChange={this.inputHandler}
                          error={fieldErrors.address}
                          label="Address"
                        />
                        {fieldErrors.address && (
                          <Error text={fieldErrors.address} />
                        )}
                        <div className="row col-10px">
                          <div className="col-md-6 col-xl-6 col-lg-8">
                            <div className="wrap_input_div">
                              <div className="wrap_input">
                                <ReactFlagsSelect
                                  id="countrySelection"
                                  value={country}
                                  name="country"
                                  onChange={this.inputHandler}
                                  countries={['AU', 'AT', 'BE', 'CA', 'DK', 'FI', 'FR', 'DE', 'HK', 'IN', 'IE', 'IT', 'JP', 'MY', 'MX', 'NL', 'NZ', 'NO', 'PT', 'SG', 'KR', 'ES', 'SE', 'CH', 'GB', "US"]}
                                  optionsSize={14}
                                  className="form-control gds-cr gds-countryflag country-select"
                                />
                              </div>
                            </div>
                            {fieldErrors.country && (
                              <Error text={fieldErrors.country} />
                            )}
                          </div>
                          <div className="col-md-3 col-sm-6 col-lg-4 col-xl-3">
                            <div className="wrap_input_div">
                              <div className="wrap_input">
                                <Input
                                  id="lf_postalcode"
                                  style={
                                    fieldErrors.province
                                      ? { borderColor: "red" }
                                      : null
                                  }
                                  value={province}
                                  name="province"
                                  placeHolder={"Region"}
                                  onChange={this.inputHandler}
                                  type="text"
                                  error={fieldErrors.province}
                                  label="Region"
                                  className="riseInput form-control shipping-val postcode"
                                />
                              </div>
                            </div>
                            {fieldErrors.province && (
                              <Error text={fieldErrors.province} />
                            )}
                          </div>
                          <div className="col-md-3 col-sm-6 col-lg-4 col-xl-3">
                            <Input
                              type="text"
                              style={
                                fieldErrors.postalCode
                                  ? { borderColor: "red" }
                                  : null
                              }
                              value={postalCode}
                              name="postalCode"
                              onChange={this.inputHandler}
                              error={fieldErrors.postalCode}
                              label="Postcode"
                            />
                            {fieldErrors.postalCode && (
                              <Error text={fieldErrors.postalCode} />
                            )}
                          </div>
                        </div>
                        <div className="row col-10px">
                          <div className="col-md-6 col-lg-4 col-xl-6">
                            <Input
                              type="text"
                              style={
                                fieldErrors.city ? { borderColor: "red" } : null
                              }
                              value={city}
                              name="city"
                              onChange={this.inputHandler}
                              error={fieldErrors.city}
                              label="City"
                            />
                            {fieldErrors.city && (
                              <Error text={fieldErrors.city} />
                            )}
                          </div>
                        </div>
                        <div className="row col-10px">
                          <div className="col-md-6 col-lg-4 col-xl-3 col-sm-6">
                            <Label>
                              <div className="form-group">
                                <PhoneInput
                                  className={"input-phone-number"}
                                  value={this.state.phoneNumber}
                                  style={
                                    fieldErrors.phoneNumber
                                      ? { borderColor: "red" }
                                      : null
                                  }
                                  onChange={this.setValue}
                                />
                                <label
                                  htmlFor="input"
                                  className="control-label"
                                >
                                  Phone Number
                                </label>
                              </div>
                            </Label>
                            {/* <Input
                              type="number"
                              style={
                                fieldErrors.phoneNumber
                                  ? { borderColor: "red" }
                                  : null
                              }
                              value={phoneNumber}
                              name="phoneNumber"
                              onChange={this.inputHandler}
                              error={fieldErrors.phoneNumber}
                              label="Phone number"
                            /> */}
                            {fieldErrors.phoneNumber && (
                              <Error text={fieldErrors.phoneNumber} />
                            )}
                          </div>
                          <div class="col-md-6 col-lg-4 col-xl-3 col-sm-6">
                            <Input type="number" label="Ext. (Optional)" />
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* lf_form_box */}
                  </div>
                </div>{" "}
                {/* col-lg-8 end */}
                <CheckoutSummery
                  handleSubmitPrev={this.props.handlePrevClick}
                  handleSubmitNext={this.submitshipping}
                  mode={this.state.mode}
                />
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
// class Example extends Component {
//   state = {
//     value: "",
//   };
//   setValue = (e) => {
//     console.log(e);
//   };
//   render() {
//     const { value } = this.state;
//     return (
//       <PhoneInput
//         placeholder="Enter phone number"
//         value={value}
//         onChange={this.setValue}
//       />
//     );
//   }
// }
const mapStateToProps = (state) => {
  const {
    checkoutReducer: {
      handleShipping,
      handleShippingLoader,
      handleShippingError,
      user,
    },
  } = state;
  return {
    handleShipping,
    handleShippingLoader,
    handleShippingError,
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ShippingAction: (payload) =>
      dispatch(checkoutAction.handleShipping(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shipping);
