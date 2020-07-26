import React from "react";
import { connect } from "react-redux";
import { authAction } from "../../store/action";
import {
  Main,
  ErrorsSection,
  SignupStyle,
  ButtonLoader,
} from "../common/assets/StyledComponent";
import { Link } from "react-router-dom";
import { withRouter, Route } from "react-router-dom";
import { Label } from "../common/Footer/StyledComponent/StyledComponent";
import { NotificationManager } from "react-notifications";

class Verification extends React.Component {
  constructor(props) {
    super(props);
    this.confirmCodeHandler = this.confirmCodeHandler.bind(this);
    this.state = {
      confirmationCode: "",
      userId: "",
      type: "",
    };
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  confirmCodeHandler = (e) => {
    e.preventDefault();
    this.setState({
      confirmationCode: this.props.confirmationCode,
    });
    let { confirmationCode } = this.state;
    let payload = { confirmationCode };
    this.props.confirmSignUpAction(payload);
  };

  componentDidMount() {
    let { signup, signinError } = this.props;
    if (!signup && signinError !== "User is not confirmed.") {
      this.props.history.push("/sell");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user) {
      if (this.props.user.type === "business") {
        this.props.history.push({ pathname: "/mystore", loginState: false });
        return NotificationManager.success("Welcome back to Lioneus!");
      }
      if (this.props.user.type === "consumer") {
        this.props.history.push("/");
      }
    }
  }
  render() {
    let { confirmationCodeLoader, signinLoader } = this.props;
    return (
      <Main>
        <section className="form-container-signin">
          <div className="container d-sm-flex d-block h-100 align-items-center">
            <div className="form-wrapper-signin">
              <div className="form-si-header">
                <Link to="/">
                  <img
                    src={require("./../common/assets/images/logo1.png")}
                    alt=""
                  />
                </Link>
                <h3>Verify your email</h3>
              </div>
              {/* <form> */}
              <form action="." noValidate>
                <Label>
                  <div className="form-group">
                    <input
                      type="number"
                      onChange={this.handleInput}
                      value={this.state.confirmationCode}
                      required='required"/'
                      name="confirmationCode"
                    />
                    <label htmlFor="input" className="control-label">
                      Enter code
                    </label>
                  </div>
                  {this.props.confirmationCodeError ? (
                    <ErrorsSection>
                      {this.props.confirmationCodeError}
                    </ErrorsSection>
                  ) : null}
                </Label>
                <SignupStyle>
                  <div className="ub_form_buttons d-flex justify-content-between pt-3">
                    <div className="ub_signin_btn">
                      <Route
                        render={({ history }) => (
                          <a
                            href
                            className="lio-btn lio-tertiary d-block w-100"
                            value="Sign In"
                          >
                            Resend
                          </a>
                        )}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="lio-btn lio-primary d-block w-100"
                        onClick={this.confirmCodeHandler}
                      >
                        {confirmationCodeLoader || signinLoader ? (
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
                          "Verify"
                        )}
                      </button>
                    </div>
                  </div>
                </SignupStyle>
                <div className="separator" />
              </form>
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
      signup,
      confirmationCode,
      confirmationCodeLoader,
      confirmationCodeError,
      signinLoader,
      user,
      signinError,
    },
  } = state;
  return {
    signup,
    confirmationCode,
    confirmationCodeLoader,
    confirmationCodeError,
    signinLoader,
    user,
    signinError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    confirmSignUpAction: (payload) =>
      dispatch(authAction.confirmationCode(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Verification));
