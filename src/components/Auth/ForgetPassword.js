import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { authAction } from "../../store/action/authAction";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Main,
  ErrorsSection,
  SignupStyle,
  ButtonLoader,
} from "../common/assets/StyledComponent";
import { Label } from "../common/Footer/StyledComponent/StyledComponent";
import Error from "../common/Elements/Error/Error";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      confirmationCode: "",
      userId: "",
      type: "",
      error: {
        email: null,
        password: null,
        confirmPassword: null,
      },
      fieldErrors: {},
      isSignupButtonDisabled: true,
      isHideMessage: true,
    };
  }

  goto = (path) => {
    this.props.history.push(path);
  };

  handleInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  componentWillMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.email !== this.state.email ||
      prevState.confirmationCode !== this.state.confirmationCode ||
      prevState.password !== this.state.password
    ) {
      this.validateSignupForm();
    }
    if (this.props.confirmNewPassword !== prevProps.confirmNewPassword) {
      this.goto("/signin");
    }
    if (
      this.props.forgotPasswordError !== prevProps.forgotPasswordError ||
      this.props.confirmNewPasswordError !== prevProps.confirmNewPasswordError
    ) {
      this.setState({
        isHideMessage: false,
      });
    }
  }
  validateSignupForm = () => {
    let { email, error, password, confirmationCode } = this.state;

    if (email) {
      this.setState({ isSignupButtonDisabled: false, error, confirmationCode });
      if (
        password &&
        password.length >= 8 &&
        confirmationCode &&
        confirmationCode.length === 6
      ) {
        error = {
          password: null,
          confirmationCode: null,
        };
        this.setState({ isSignupButtonDisabled: false, error });
      } else if (password !== confirmationCode) {
        this.setState((prevState) => ({
          isSignupButtonDisabled: true,
          error: {
            ...prevState.error,
            // confirmPassword: "Confirm Password do not match"
          },
        }));
      } else if (password && password.length < 8) {
        this.setState((prevState) => ({
          isSignupButtonDisabled: true,
          error: {
            ...prevState.error,
            password: "password does not meet the requirements",
          },
        }));
      } else if (confirmationCode && confirmationCode.length !== 6) {
        this.setState((prevState) => ({
          isSignupButtonDisabled: true,
          error: {
            ...prevState.error,
            confirmationCode:
              "Let's try that again. Please provide correct confirmation code",
          },
        }));
      }
    } else {
      this.setState((prevState) => ({
        isSignupButtonDisabled: true,
        error: {
          ...prevState.error,
          email: "Please provide correct email address",
        },
      }));
    }
  };

  handleConfirmNewPass = (e) => {
    e.preventDefault();
    let { password, confirmationCode, email } = this.state;
    let fieldErrors = {};
    if (email && password && confirmationCode) {
      this.props.confirmNewPasswordAction({
        email,
        code: confirmationCode,
        password,
      });
    } else {
      if (!confirmationCode)
        fieldErrors["confirmationCode"] = "Code is Required";
      if (!password) fieldErrors["password"] = "Password is Required";
    }

    this.setState({ fieldErrors });
  };

  handleForgotPassword = (e) => {
    e.preventDefault();
    let { email } = this.state;
    let fieldErrors = {};
    if (email) {
      this.props.forgotPasswordAction(email);
    } else {
      if (!email) fieldErrors["email"] = "Enter an email";
    }

    this.setState({ fieldErrors });
  };

  componentDidMount() {
    this.props.isLoggedInAction();
    if (this.props.isLoggedIn) {
      this.goto("/store");
    }
  }

  errorMessage = (message) => {
    let { classes } = this.props;

    setTimeout(() => {
      this.setState({
        isHideMessage: true,
      });
    }, 5000);

    return <div></div>;
  };

  render() {
    let {
      classes,
      forgotPassword,
      forgotPasswordError,
      confirmNewPasswordLoader,
      confirmNewPasswordError,
    } = this.props;
    let {
      email,
      password,
      confirmPassword,
      confirmationCode,
      error,
      isSignupButtonDisabled,
      isHideMessage,
      fieldErrors,
    } = this.state;

    return (
      <Main>
        <section className="form-container-signin">
          <div className="container d-sm-flex d-block h-100 align-items-center">
            <div className="form-wrapper-signin">
              <div className="form-si-header">
                <Link to="/">
                  <img
                    src={require("../common/assets/images/logo1.png")}
                    alt=""
                  />
                </Link>
                <h3> Password recovery</h3>
                {!forgotPassword && !confirmNewPasswordLoader ? (
                  <p style={{ textAlign: "center" }}>
                    Enter the email associated with your Lioneus account, and
                    we'll email you a link to reset your password
                  </p>
                ) : (
                  <p style={{ textAlign: "center" }}>
                    Enter your code and enter your new password
                  </p>
                )}
              </div>
              {/* <form> */}
              <Label>
                <SignupStyle>
                  {!forgotPassword && !confirmNewPasswordLoader ? (
                    <form action="." noValidate>
                      <div>
                        <div className="form-group">
                          <input
                            value={email ? email : ""}
                            onChange={this.handleInput}
                            id={"email"}
                            required='required"/'
                            type="text"
                            style={
                              fieldErrors.email ? { borderColor: "red" } : null
                            }
                          />
                          <label htmlFor="input" className="control-label">
                            Email
                          </label>
                        </div>
                        {fieldErrors.email && (
                          <Error text={fieldErrors.email} />
                        )}
                        {this.props.forgotPasswordError ? (
                          <ErrorsSection>
                            {this.props.forgotPasswordError}
                          </ErrorsSection>
                        ) : null}
                        <div className="ub_form_buttons d-flex justify-content-between pt-3">
                          <div className="ub_signin_btn">
                            <Route
                              render={({ history }) => (
                                <a
                                  href
                                  className="lio-btn lio-tertiary d-block w-100"
                                  onClick={() => this.goto("/signin")}
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
                              onClick={this.handleForgotPassword}
                            >
                              {this.props.signupLoader ? (
                                <ButtonLoader>
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
                                </ButtonLoader>
                              ) : (
                                "Next"
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <form action="." noValidate>
                      <div>
                        <div className="signin-form-feilds">
                          <div className="form-group">
                            <input
                              onChange={this.handleInput}
                              value={confirmationCode ? confirmationCode : ""}
                              error={error.confirmationCode}
                              helperText={error.confirmationCode}
                              type="number"
                              style={
                                fieldErrors.confirmationCode
                                  ? { borderColor: "red" }
                                  : null
                              }
                              name="confirmationCode"
                              id="confirmationCode"
                              required
                            />
                            <label htmlFor="input" className="control-label">
                              Enter the code
                            </label>
                          </div>
                          {fieldErrors.confirmationCode && (
                            <Error text={fieldErrors.confirmationCode} />
                          )}
                        </div>
                        <div className="signin-form-feilds">
                          <div className="form-group">
                            <input
                              onChange={this.handleInput}
                              name="password"
                              value={password ? password : ""}
                              id={"password"}
                              type="password"
                              style={
                                fieldErrors.password
                                  ? { borderColor: "red" }
                                  : null
                              }
                              required='required"/'
                            />
                            <label htmlFor="input" className="control-label">
                              Enter your new password
                            </label>
                          </div>
                          {fieldErrors.password && (
                            <Error text={fieldErrors.password} />
                          )}
                        </div>
                        {this.props.confirmNewPasswordError ? (
                          <ErrorsSection>
                            {this.props.confirmNewPasswordError}
                          </ErrorsSection>
                        ) : null}
                        <div className="ub_form_buttons d-flex justify-content-between pt-3">
                          <div className="ub_signin_btn">
                            <Route
                              render={({ history }) => (
                                <a
                                  href
                                  className="lio-btn lio-tertiary d-block w-100"
                                  onClick={() => this.goto("/signin")}
                                  value="Sign In"
                                >
                                  Resend{" "}
                                </a>
                              )}
                            />
                          </div>
                          <div>
                            <button
                              type="submit"
                              className="lio-btn lio-primary d-block w-100"
                              onClick={this.handleConfirmNewPass}
                            >
                              {this.props.confirmNewPasswordLoader ? (
                                <div className="d-flex justify-content-center">
                                  <div
                                    className="spinner-border text-warning"
                                    role="status"
                                  >
                                    <span className="sr-only">Loading...</span>
                                  </div>
                                </div>
                              ) : (
                                "Verify"
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="separator" />
                      </div>
                    </form>
                  )}
                </SignupStyle>
              </Label>
            </div>
          </div>
        </section>
      </Main>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    authReducer: {
      forgotPassword,
      forgotPasswordError,
      signupLoader,
      signupError,
      confirmationCode,
      isLoggedIn,
      confirmNewPassword,
      confirmNewPasswordError,
      confirmNewPasswordLoader,
    },
  } = state;
  return {
    forgotPassword,
    forgotPasswordError,
    confirmNewPassword,
    confirmNewPasswordError,
    confirmationCode,
    signupLoader,
    signupError,
    isLoggedIn,
    confirmNewPasswordLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    forgotPasswordAction: (payload) =>
      dispatch(authAction.forgotPassword(payload)),
    confirmNewPasswordAction: (payload) =>
      dispatch(authAction.confirmNewPassword(payload)),
    confirmSignUpAction: (payload) =>
      dispatch(authAction.confirmationCode(payload)),
    isLoggedInAction: (payload) => dispatch(authAction.isLoggedIn(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ForgotPassword));
