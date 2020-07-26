import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withApollo } from "react-apollo";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  SignupStyle,
  ButtonLoader,
} from "../../common/assets/StyledComponent";
import { authAction } from "../../../store/action";
import { Label } from "../../common/Footer/StyledComponent/StyledComponent";
import Error from "../../common/Elements/Error/Error";
import AuthError from "../../common/Elements/Error/ErrorHelper";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordError: "",
      emailError: "",
    };
    this.login = this.login.bind(this);
  }
  goto = (path) => {
    this.props.history.push(path);
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  login = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    const emailAtLower = email.toLowerCase();
    if (email && password) {
      this.props.signInAction({
        email: emailAtLower,
        password,
      });
    } else {
      this.setState({
        emailError: email ? "" : "Enter an email",
        passwordError: password ? "" : "Enter a password",
      });
    }
    console.log(
      this.props.signinError &&
      this.props.signinError.replace(
        "Invalid email address format",
        "Email should be in this format abc@xyz.com"
      )
    );
  };

  closeTextModal = () => {
    this.setState({ openTextModal: false });
  };

  componentWillMount() {
    this.props.isLoggedInAction();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user) {
      if (this.props.user.type === "business") {
        this.props.history.push({
          pathname: "/mystore", loginState: true
        });
      }
      if (this.props.user.type === "consumer") {
        this.props.history.push("/");
      }
    }

    if(prevProps.signinError !== this.props.signinError && this.props.signinError  === "User is not confirmed."){
      this.props.history.push("/verification");
    } 
  }

  render() {
    const { emailError, passwordError } = this.state;
    return (
      <React.Fragment>
        <SignupStyle>
          <section className="main">
            <div className="container">
              <form action="." onSubmit={this.login} noValidate>
                <div className="ub_form">
                  <>
                    <div className="form-si-header">
                      <Link to="/">
                        <img
                          src={require("../../common/assets/images/logo1.png")}
                          alt=""
                        />
                      </Link>
                      <h3>Welcome back</h3>
                      <h5>
                        Don't miss your next opportunity. Sign in to discover
                        more.
                        </h5>
                    </div>
                    <Label>
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          onChange={this.handleInput}
                          required='required"/'
                          style={emailError ? { borderColor: "red" } : null}
                        />
                        <label htmlFor="input" className="control-label">
                          Email
                          </label>
                      </div>

                      {emailError && <Error text={emailError} />}

                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          onChange={this.handleInput}
                          required='required"/'
                          style={
                            passwordError ? { borderColor: "red" } : null
                          }
                        />
                        <label htmlFor="input" className="control-label">
                          Password
                          </label>
                      </div>
                      {passwordError && <Error text={passwordError} />}
                    </Label>
                    <React.Fragment>
                      <div className="separator" />
                      {this.props.signinError && (
                        <AuthError text={this.props.signinError} />
                      )}
                      <div className="ub_form_buttons d-flex justify-content-between pt-3">
                        <div className="ub_signin_btn">
                          <Route
                            render={({ history }) => (
                              <a
                                href
                                className="lio-btn lio-tertiary d-block w-100"
                                onClick={(_) => history.push("/forget")}
                                value="Password?"
                              >
                                Password?
                                </a>
                            )}
                          />
                        </div>
                        <div>
                          <button
                            // onClick={this.login}
                            className="lio-btn lio-primary d-block w-100"
                            style={{ float: "right" }}
                            type="submit"
                          >
                            {this.props.signinLoader ? (
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
                    </React.Fragment>
                  </>
                </div>
              </form>
            </div>
          </section>
        </SignupStyle>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    authReducer: {
      signin,
      signinLoader,
      signinError,
      isLoggedIn,
      user,
    },
  } = state;
  return {
    signin,
    signinLoader,
    signinError,
    isLoggedIn,
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInAction: (payload) => dispatch(authAction.signin(payload)),
    isLoggedInAction: (payload) => dispatch(authAction.isLoggedIn(payload)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withApollo(withRouter(SignInForm)));
