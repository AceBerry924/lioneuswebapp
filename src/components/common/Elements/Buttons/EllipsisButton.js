import React from "react";
import { Dropdown } from "react-bootstrap";
import { EllipsisButtonStyle } from "../../assets/StyledComponent";

class EllipsisButton extends React.Component {
  
  render() {
    const { isPublish, controlProduct } = this.props;
    return (
      <EllipsisButtonStyle>
        <Dropdown>
          <Dropdown.Toggle variant="outline-light">
            <i
              class="fa fa-ellipsis-v"
              aria-hidden="true"
              style={{
                color: isPublish ? "#aaa" : "#972C95",
              }}
            ></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {isPublish ? (
              <Dropdown.Item onClick={controlProduct}>
                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                Hide
              </Dropdown.Item>
            ) : (
              <Dropdown.Item onClick={controlProduct}>
                <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
                Publish
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </EllipsisButtonStyle>
    );
  }
};

export default EllipsisButton;
