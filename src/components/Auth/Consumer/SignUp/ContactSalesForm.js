import React from "react";
import {
  ConsumerContactForm,
  ErrorsSection,
  SignupStyle,
  ButtonLoader,
} from "../../../common/assets/StyledComponent";
import { authAction } from "../../../../store/action";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Helmet from "react-helmet";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";
import Error from "../../../common/Elements/Error/Error";
import Input from "../../../common/Elements/Input/Input";
import { Label } from "../../../common/Footer/StyledComponent/StyledComponent";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.genderSelection = this.genderSelection.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      name: "",
      email: "",
      password: "",
      type: "consumer",
      gender: "",
      female: "female",
      male: "male",
      birthdate: new Date(),
      fieldErrors: {},
    };
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChange = (birthdate) => {
    this.setState({
      birthdate,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.signup !== this.props.signup && this.props.signup) {
      const { signup } = this.props;
      const { type } = this.state;
      if (type === "consumer") {
        // route to my store
        this.props.history.push("/verification");
      }
    }
  }
  genderSelection = (e) => {
    if (e.target.defaultValue === "female") {
      this.setState({
        gender: this.state.female,
      });
    }
    if (e.target.defaultValue === "male") {
      this.setState({
        gender: this.state.male,
      });
    } else {
      return null;
    }
  };
  handleSignUp = (e) => {
    let {
      firstName,
      lastName,
      email,
      password,
      type,
      birthdate,
      gender,
      fieldErrors,
    } = this.state;
    if (
      email &&
      firstName &&
      lastName &&
      password &&
      type 
      // gender &&
      // birthdate
    ) {
      let payload = {
        email,
        name: `${firstName} ${lastName}`,
        firstName,
        lastName,
        password,
        type,
        // gender,
        // birthdate: this.formateDate(birthdate),
      };
      this.props.signupAction(payload);
    } else {
      if (!email) fieldErrors["email"] = "Enter an email";
      if (!firstName) fieldErrors["firstName"] = "Enter a first name";
      if (!lastName) fieldErrors["lastName"] = "Enter a last name";
      if (!password) fieldErrors["password"] = "Enter a password";
      if (!gender) fieldErrors["gender"] = "Select a gender";
      if (!birthdate) fieldErrors["birthdate"] = "Enter your birth date";
    }

    this.setState({ fieldErrors });
  };

  componentDidMount(prevProps) {
    if (
      this.props.signupError &&
      !this.props.signupLoader &&
      prevProps.signupLoader
    ) {
      this.setState({ signupError: this.props.signupError });
      const { signupError } = this.state;
      console.log(signupError);
    }
  }

  formateDate = (d) => {
    let m = new Date(d).getMonth() + 1;
    let day = new Date(d).getDate();
    let y = new Date(d).getFullYear();
    return `${m < 10 ? "0" + m : m}-${day < 10 ? "0" + day : day}-${y}`;
  };

  render() {
    const {
      name,
      email,
      password,
      gender,
      birthdate,
      fieldErrors,
      firstName,
      lastName,
    } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <script type="text/javascript" src="js/rise-input.js"></script>
        </Helmet>
        <SignupStyle>
          <ConsumerContactForm>
            <section className="main">
              <div className="container">
                <div className="ub_form">
                  <form action=".">
                    <div className="form-si-header">
                      <Link to="/">
                      <img
                        src={require("../../../common/assets/images/logo1.png")}
                        alt="logo"
                      />
                      </Link>
                      <h3>Create customer account</h3>
                    </div>
                    <Label>
                      <div className="row">
                        <div className="col-sm-6">
                          <Input
                            name="firstName"
                            type="text"
                            value={firstName}
                            onChange={this.handleInput}
                            label="First name"
                            error={fieldErrors.firstName}
                          />
                          {fieldErrors.firstName && (
                            <Error text={fieldErrors.firstName} />
                          )}
                        </div>
                        <div className="col-sm-6">
                          <Input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleInput}
                            label="Last name"
                            error={fieldErrors.lastName}
                          />
                          {fieldErrors.lastName && (
                            <Error text={fieldErrors.lastName} />
                          )}
                        </div>
                      </div>
                      <Input
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleInput}
                        label="Email"
                        error={fieldErrors.email}
                      />
                      {fieldErrors.email && <Error text={fieldErrors.email} />}
                      <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleInput}
                        label="Password"
                        error={fieldErrors.password}
                      />
                      {fieldErrors.password && (
                        <Error text={fieldErrors.password} />
                      )}
                    </Label>
                    <div className="row">
                      <div className="col-lg-7">
                        {/* <h4>Date of birth</h4>
                        <div className="input-group">
                          <DatePicker
                            onChange={this.onChange}
                            value={this.state.birthdate}
                            dateFormat="MM-dd-yyyy"
                          />
                        </div>
                      </div>
                      {fieldErrors.birthdate && (
                        <Error text={fieldErrors.birthdate} />
                      )}
                      <div className="col-lg-5">
                        <h4>Gender</h4>
                        <div className="input-group">
                          <input
                            type="radio"
                            defaultValue={this.state.male}
                            id="gender-male"
                            name="female"
                            onClick={this.genderSelection}
                          />
                          <label htmlFor="gender-male">Male</label>
                          <input
                            type="radio"
                            name="male"
                            defaultValue={this.state.female}
                            id="gender-female"
                            onClick={this.genderSelection}
                          />
                          <label htmlFor="gender-female">Female</label>
                          <a href />
                        </div>
                        {fieldErrors.gender && (
                          <Error text={fieldErrors.gender} />
                        )} */}
                      </div>
                      <div className="row">
                        <div
                          style={{ lineHeight: 2, marginLeft: "1em" }}
                          className="input-group"
                        >
                          <label htmlFor="terms">
                            By creating an account, you agree to Lioneus's
                            <a
                              href="https://www.lioneus.com/terms"
                              style={{ fontSize: "15px" }}
                            >
                              {" "}
                              Privacy &amp; Terms.
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="ub_form_buttons d-flex justify-content-between pt-3">
                    <div className="ub_signin_btn">
                      <Route
                        render={({ history }) => (
                          <a
                            href
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
                        onClick={this.handleSignUp}
                        // disabled={this.state.isSignupButtonDisabled}
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
                  <ErrorsSection>{this.props.signupError}</ErrorsSection>
                </div>
              </div>
            </section>
          </ConsumerContactForm>
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
