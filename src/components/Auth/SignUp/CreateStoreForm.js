import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withApollo } from "react-apollo";
import { isEmpty } from "lodash";
import {
  SignupStyle,
  LadyImage,
  ButtonLoader,
} from "../../common/assets/StyledComponent";
import { connect } from "react-redux";
import { authAction } from "./../../../store/action";
import { withRouter } from "react-router-dom";
import { validate } from "../../common/Elements/helpers/PasswordCheck";
import Pricing from "../../Product/OrderProcess/Pricing";
import { Label } from "../../common/Footer/StyledComponent/StyledComponent";
import Error from "../../common/Elements/Error/Error";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";

class CreateStoreForm extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      name: "",
      email: "",
      companyName: "",
      password: "",
      type: "business",
      fieldErrors: {},
    };
  }
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      const { firstName, lastName } = this.state;
      if (firstName && lastName) {
        this.setState({
          name: `${firstName} ${lastName}`,
        });
      }
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.signup !== this.props.signup && this.props.signup) {
      const { type } = this.state;
      if (type === "business") {
        this.props.history.push("/verification");
      }
    }
  }
  componentDidMount() {
    const { fieldErrors } = this.state;
    if (!fieldErrors && this.props.signupError) {
      NotificationManager.error("Kindly fill out the form.");
    }
  }
  handleSignUp = (e) => {
    e.preventDefault();

    let {
      name,
      email,
      companyName,
      password,
      type,
      // firstName,
      // lastName,
    } = this.state;

    const isValidated = this.validateForm();

    if (isValidated) {
      let payload = { email, name, companyName, password, type };
      this.props.signupAction(payload);
    }

  };

  validateForm = () => {
    let {
      // name,
      email,
      companyName,
      password,
      // type,
      firstName,
      lastName,
    } = this.state;

    let fieldErrors = {}

    const passwordError = password ? validate(password) : password;
    const emailError = !email.includes("@") && !email.includes("com") && email ? "Please enter a valid email." : "";

    if (!email) fieldErrors["email"] = "Enter an email";
    if (email) fieldErrors["email"] = emailError;
    if (!firstName) fieldErrors["firstName"] = "Enter  first name";
    if (!lastName) fieldErrors["lastName"] = "Enter last name";
    if (!companyName) fieldErrors["companyName"] = "Enter a company name";
    if (!password) fieldErrors["password"] = "Enter a password";
    if (password) fieldErrors["password"] = passwordError;

    if (!fieldErrors['email']) delete fieldErrors['email']
    if (!fieldErrors['password']) delete fieldErrors['password']

    this.setState({ fieldErrors })
    return isEmpty(fieldErrors)
  }

  render() {
    const { fieldErrors } = this.state;
    return (
      <React.Fragment>
        <SignupStyle>
          <section className="main">
            <div className="container">
              <form action="." onSubmit={this.handleSignUp} noValidate>
                <div className="ub_form">
                  <div className="form-si-header">
                    <Link to="/">
                      <img
                        src={require("../../common/assets/images/images/logo1.png")}
                        alt=""
                      />
                    </Link>
                    <h3>Create your Lioneus store</h3>
                  </div>
                  <Label>
                    <div className="row rt_inputs">
                      <div className="col-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            onChange={this.handleInput}
                            value={this.state.firstName}
                            required='required"/'
                            style={
                              fieldErrors.firstName
                                ? { borderColor: "red" }
                                : null
                            }
                          />
                          <label htmlFor="input" className="control-label">
                            First name
                          </label>
                        </div>
                        {fieldErrors.firstName && (
                          <Error text={fieldErrors.firstName} />
                        )}
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            onChange={this.handleInput}
                            value={this.state.lastName}
                            required='required"/'
                            style={
                              fieldErrors.lastName
                                ? { borderColor: "red" }
                                : null
                            }
                          />
                          <label htmlFor="input" className="control-label">
                            Last name
                          </label>
                        </div>
                        {fieldErrors.lastName && (
                          <Error text={fieldErrors.lastName} />
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        id="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInput}
                        type="text"
                        required='required"/'
                        style={
                          fieldErrors.email ? { borderColor: "red" } : null
                        }
                      />
                      <label htmlFor="input" className="control-label">
                        Email
                      </label>
                    </div>

                    {fieldErrors.email ? (
                      <Error text={fieldErrors.email} />
                    ) : null}

                    <div className="form-group">
                      <input
                        id="Company"
                        type="text"
                        name="companyName"
                        value={this.state.companyName}
                        onChange={this.handleInput}
                        required='required"/'
                        style={
                          fieldErrors.companyName
                            ? { borderColor: "red" }
                            : null
                        }
                      />
                      <label htmlFor="input" className="control-label">
                        Company name
                      </label>
                    </div>

                    {fieldErrors.companyName && (
                      <Error text={fieldErrors.companyName} />
                    )}

                    <div className="form-group">
                      <input
                        id="Password"
                        name="password"
                        value={this.state.password}
                        type="password"
                        onChange={this.handleInput}
                        required='required"/'
                        style={
                          fieldErrors.password ? { borderColor: "red" } : null
                        }
                      />
                      <label htmlFor="input" className="control-label">
                        Password
                      </label>
                    </div>

                    {fieldErrors.password ? (
                      <Error text={fieldErrors.password} />
                    ) : null}
                  </Label>
                  {this.props.signupError ? (
                    <Error text={this.props.signupError} />
                  ) : null}

                  <div className="ub_form_buttons d-flex justify-content-between pt-3">
                    <div className="ub_signin_btn">
                      <Route
                        render={({ history }) => (
                          <a
                            href='#'
                            className="lio-btn lio-tertiary d-block w-100"
                            onClick={(_) => history.push("/signin")}
                            value="Sign In"
                          >
                            Sign in
                          </a>
                        )}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="lio-btn lio-primary d-block w-100"
                        type="submit"
                      >
                        {this.props.signupLoader ? (
                          <ButtonLoader>
                            <div className="d-flex justify-content-center">
                              <div
                                className="spinner-border text-warning"
                                role="status"
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            </div>
                          </ButtonLoader>
                        ) : (
                            "Next"
                          )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="ub_content_tab">
                <div className="container">
                  <div className="ub_content_main">
                    <h2>
                      Open with Lioneus.
                      <br /> Your next customer is right around the corner.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <LadyImage>
            <section className="ub_bg ub_bg_s2" id="lady-image">
              <div className="ub_bg_bar" />
            </section>
          </LadyImage>
          <section className="ub_section_s2">
            <div className="container">
              <div className="title">
                <h2>Bring the world to your store.</h2>
              </div>
              <div className="ub_btws_main">
                <div className="row">
                  <div className="col-md-4">
                    <div className="ub_btws_content">
                      <div className="ub_btws_content_img">
                        <img
                          src={require("../../common/assets/images/images/undraw_business_plan_5i9d.svg")}
                          alt=""
                        />
                      </div>
                      <div className="ub_btws_content_disc">
                        <h3>Achieve more</h3>
                        <p>
                          No matter what kind of business you have, Lioneus
                          makes it simple to sell. You’re in full control of
                          your store, listings, prices, advertisements and how
                          you interact with customers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="ub_btws_content">
                      <div className="ub_btws_content_img">
                        <img
                          src={require("../../common/assets/images/images/undraw_updated_rr85.svg")}
                          alt=""
                        />
                      </div>
                      <div className="ub_btws_content_disc">
                        <h3>Reach your next customers</h3>
                        <p>
                          Go straight to the digital market with your Lioneus
                          store. We attract foot traffic and your sales and
                          leads are all yours.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="ub_btws_content">
                      <div className="ub_btws_content_img">
                        <img
                          src={require("../../common/assets/images/images/undraw_preferences_uuo2.svg")}
                          alt=""
                        />
                      </div>
                      <div className="ub_btws_content_disc">
                        <h3>Setting up your store is easy</h3>
                        <p>
                          Create your store today and you’ll be on the digital
                          market in no time. Plus, signing up takes less than 2
                          minutes. Don’t wait to start meeting new local
                          customers with your store.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <Pricing />
        </SignupStyle>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  const {
    authReducer: { signup, signupLoader, signupError },
  } = state;
  return {
    signup,
    signupLoader,
    signupError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupAction: (payload) => dispatch(authAction.signup(payload)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withApollo(CreateStoreForm)));
