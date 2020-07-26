import React from "react";
import { Label } from "./StyledComponent/StyledComponent";
import { sendFeedback } from "../../../graphql/new-mutations";
import { NotificationManager } from "react-notifications";
import Footer from "../Footer/Footer";
import { LioneusAppClient } from "../../../config/graphql-clients";
import { SignupStyle } from "../assets/StyledComponent";
import { Link } from "react-router-dom";
import Error from "../Elements/Error/Error";
class Feedback extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      name: "",
      email: "",
      message: "",
      fieldErrors: {},
    };
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  createListing = (e) => {
    e.preventDefault();
    let { name, email, message, fieldErrors } = this.state;
    let input = {
      name,
      email,
      message,
    };
    LioneusAppClient.mutate({
      mutation: sendFeedback,
      variables: { input },
    })
      .then((data) => {
        this.setState({
          name: "",
          email: "",
          message: "",
          fieldErrors: "",
        });
        NotificationManager.success("Thanks for you feedback!");
      })
      .catch((error) => {
        NotificationManager.error(error);
        if (error.message.startsWith("Database Error: ")) {
          return new Error("Internal server error");
        }
        if (!name) fieldErrors["name"] = "Enter your name";
        if (!email) fieldErrors["email"] = "Enter your email";
        if (!message) fieldErrors["message"] = "Enter message";
        this.setState({ fieldErrors });
      });
  };

  render() {
    const { name, email, message, fieldErrors } = this.state;
    return (
      <React.Fragment>
        <SignupStyle>
          <Label>
            <section className="main">
              <div className="container">
                <div className="ub_form">
                  <form action="." onSubmit={this.createListing} noValidate>
                    <div className="form-si-header">
                      <Link to="/">
                        <img
                          src={require("../../../components/common/assets/images/logo1.png")}
                          alt=""
                        />
                      </Link>
                      <h3>Feedback</h3>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInput}
                        required='required"/'
                        style={fieldErrors.name ? { borderColor: "red" } : null}
                      />
                      <label htmlFor="input" className="control-label">
                        Full name
                      </label>
                    </div>
                    {fieldErrors.name && <Error text={fieldErrors.name} />}
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInput}
                        required="required"
                        style={
                          fieldErrors.email ? { borderColor: "red" } : null
                        }
                      />
                      <label htmlFor="input" className="control-label">
                        Email
                      </label>
                      {/* <i className="bar" /> */}
                    </div>
                    {fieldErrors.email && <Error text={fieldErrors.email} />}
                    <div className="form-group">
                      <textarea
                        required="required"
                        value={this.state.message}
                        onChange={this.handleInput}
                        name="message"
                        style={
                          fieldErrors.message ? { borderColor: "red" } : null
                        }
                      />
                      <label htmlFor="textarea" className="control-label">
                        What's on your mind?
                      </label>
                      {/* <i className="bar" /> */}
                    </div>
                    {fieldErrors.message && (
                      <Error text={fieldErrors.message} />
                    )}
                    <div className="ub_form_buttons d-flex justify-content-between pt-3">
                      <div className="ub_signin_btn">
                        <a
                          href
                          className="lio-btn lio-tertiary d-block w-100"
                          value="New"
                        >
                          New
                        </a>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="lio-btn lio-primary d-block w-100"
                          disabled={this.state.isSignupButtonDisabled}
                        >
                          {this.props.signupLoader ? (
                            <div className="d-flex justify-content-center">
                              <div
                                className="spinner-border text-warning"
                                role="status"
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            </div>
                          ) : (
                            "Send"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </Label>
        </SignupStyle>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Feedback;
