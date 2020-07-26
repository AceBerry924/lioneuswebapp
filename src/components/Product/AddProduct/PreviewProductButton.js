import React from "react";
import Popover from "react-popover";
import { connect } from "react-redux";

class PreviewProductButton extends React.Component {
  state = {
    popoverOpen: false,
  };

  handleClose = () => {
    this.setState({ popoverOpen: false });
  };

  componentDidUpdate(nextProps) {
    const { showPopover } = this.props;
    if (nextProps.showPopover !== showPopover) {
      this.setState({ popoverOpen: showPopover });      
    }
  }

  render() {
    const { popoverOpen } = this.state;

    const popoverProps = {
      isOpen: popoverOpen,
      place: "below",
      body: [
        <div class="mdc-content">
          <h3 class="mdc-title">See before listing</h3>
          <div>You can preview your listing before publishing!</div>
        </div>,
        <div class="mdc-button__div">
          <span class="mdc-button__label" onClick={this.handleClose}>
            Got it
          </span>
        </div>,
      ],
      onOuterAction: () => this.handleClose(),
      style: {
        color: "white",
        marginTop: "5px",
      },
    };

    return (
      <Popover {...popoverProps}>
        <div
          href
          className="lio-btn d-block position-absolute preview-btn"
          id="preview"
        >
          Preview
        </div>
      </Popover>
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

export default connect(mapStateToProps, {})(PreviewProductButton);