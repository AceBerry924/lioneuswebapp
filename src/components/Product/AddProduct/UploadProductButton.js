import React from "react";
import Popover from "react-popover";
import { connect } from "react-redux";

class UploadProductButton extends React.Component {
  state = {
    popoverOpen: this.props.loginState ? false : true,
  };

  handleClose = () => {
    const { onNext } = this.props;
    this.setState({ popoverOpen: false });
    onNext();
  };

  render() {
    const { handleUploadFile } = this.props;
    const { popoverOpen } = this.state;
    const popoverProps = {
      isOpen: popoverOpen,
      place: "below",
      body: [
        <div class="mdc-content">
          <h3 class="mdc-title">Show more</h3>
          <div>Add as much pictures as you want!</div>
        </div>,
        <div class="mdc-button__div">
          <span class="mdc-button__label" onClick={this.handleClose}>
            Got it
          </span>
        </div>,
      ],
      style: {
        color: "white",
        marginTop: "5px",
      },
    };

    return (
      <>
        <Popover {...popoverProps}>
          <div className="green" id="upload-trigger">
            <img
              src={require("../../common/assets/images/camera.png")}
              style={{ width: "25px", margin: "auto" }}
            />
            {/* <i
              className="fa fa-upload"
              style={{ padding: "5px" }}
            /> */}
            <input
              type="file"
              className="custom-file-input"
              onChange={handleUploadFile}
              multiple
            />
          </div>
        </Popover>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    authReducer: { user },
  } = state;
  return {
    user,
  };
};

export default connect(mapStateToProps, {})(UploadProductButton);
