import { ErrorsSection } from "../../assets/StyledComponent";
import React from "react";
class Error extends React.Component {
  render(props) {
    return (
      <ErrorsSection>
        <div style={{ display: "flex" }}>
          <ul className="custom-ul">
            <li>
              {" "}
              {this.props.text}
              {/* {this.props.text.replace(
                "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6",
                "Use 8 characters or more for your password."
              ) &&
                this.props.text.replace(
                  "Invalid email address format",
                  "Email should be in this format abc@xyz.com"
                ) &&
                this.props.text.replace(
                  'PreSignUp failed with error "Company with Panacloud name is already in use. Please choose another one.".',
                  "Company with this name already in use, Try another one!"
                ) &&
                this.props.text.replace(
                  "Only radix 2, 4, 8, 16, 32 are supported",
                  "Email should be in this format abc@xyz.com"
                ) &&
                this.props.text.replace(
                  "Only radix 2, 4, 8, 16, 32 are supported",
                  "Email should be in this format abc@xyz.com"
                )}{" "} */}
            </li>
          </ul>
        </div>
      </ErrorsSection>
    );
  }
}

export default Error;
