import React from "react";
import PropTypes from "prop-types";
import { render, unmountComponentAtNode } from "react-dom";
import Circles from "./Circles";

/**
 * Material Design feature discovery prompt
 * @see [Feature discovery](https://material.io/archive/guidelines/growth-communications/feature-discovery.html)
 */
export default class FeatureDiscoveryPrompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pos: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        width: 1,
      },
    };
  }

  componentDidMount() {
    this.portal = document.createElement("div");
    document.body.appendChild(this.portal);
    this.portal.style.position = "fixed";
    this.portal.style.zIndex = 1;
    this.portal.style.top = 0;
    this.portal.style.left = 0;
    this.renderCircle();
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.portal);
    this.portal = null;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open && !this.props.open) {
      this.circles.open();
    } else if (!nextProps.open && this.props.open) {
      this.circles.close();
    }
  }

  componentDidUpdate() {
    this.renderCircle();
  }

  renderCircle() {
    if (this.circles == null) {
      const { id, backgroundColor, onClose, title } = this.props;

      render(
        <Circles
          id={id}
          backgroundColor={backgroundColor}
          element={this}
          onClose={onClose}
          ref={(ref) => {
            this.circles = ref;
          }}
          title={title}
        />,
        this.portal
      );
    }
  }

  render() {
    const child = React.Children.only(this.props.children);
    return React.cloneElement(child, {
      style: {
        ...child.props.style,
        position:
          child.props.style != null &&
          child.props.style.position != null &&
          child.props.style.position !== "static"
            ? child.props.style.position
            : "relative",
        zIndex: 2,
      },
    });
  }
}

FeatureDiscoveryPrompt.propTypes = {
  /** Defines if the prompt is visible. */
  open: PropTypes.bool.isRequired,
  /** Fired when the the prompt is visible and clicked. */
  onClose: PropTypes.func.isRequired,
  /** The node which will be featured. */
  children: PropTypes.node.isRequired,
  /** Override the inline-styles of the circles element. */
  style: PropTypes.object,
  id: PropTypes.string,
};
