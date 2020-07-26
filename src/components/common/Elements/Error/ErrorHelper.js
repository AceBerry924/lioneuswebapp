import { ErrorsSection } from "../../assets/StyledComponent";
import React from "react";
class ErrorHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authErrors: "",
    };
  }
  // Error: Your card was declined. Your request was in test mode, but used a non test (live) card. For a list of valid test cards, visit: https://stripe.com/docs/testing.
  componentDidMount() {
    if (this.props.text === "Incorrect username or password.") {
      this.setState({
        authErrors: "Please enter a valid username and/or password",
      });
    }
    if (
      this.props.text ===
      "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6"
    ) {
      this.setState({
        authErrors: "Use 8 characters or more for your password.",
      });
    }
    if (this.props.text === "Only radix 2, 4, 8, 16, 32 are supported") {
      this.setState({
        authErrors: "Email should be in this format abc@xyz.com",
      });
    }
    if (
      this.props.text ===
      'PreSignUp failed with error "Company with Panacloud name is already in use. Please choose another one.".'
    ) {
      this.setState({
        authErrors: "Company with this name already in use, Try another one!",
      });
    }
    if (this.props.text === "Invalid email address format") {
      this.setState({
        authErrors: "Email should be in this format abc@xyz.com",
      });
    }
    if (this.props.text === "Your card was declined. Your request was in test mode, but used a non test (live) card. For a list of valid test cards, visit: https://stripe.com/docs/testing.") {
      this.setState({
        authErrors: "Email should be in this format abc@xyz.com",
      });
    }
  }
  render() {
    return (
      <ErrorsSection>
        <div style={{ display: "flex" }}>
          <ul className="custom-ul">
            <li>{this.state.authErrors} </li>
          </ul>
        </div>
      </ErrorsSection>
    );
  }
}

export default ErrorHelper;
