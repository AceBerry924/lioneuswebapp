import React from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import injectStyle from "./injectStyle";

export default class Circles extends React.Component {
  constructor(props) {
    super(props);
    injectStyle(`
    @keyframes innerPulse {
      0%      { transform: scale(1.0); }    
      100%    { transform: scale(1.1); }
    }`);

    injectStyle(`
    @keyframes outerPulse {
      0%      { transform: scale(1.0); opacity: 0.9 }    
      100%    { transform: scale(2.0); opacity: 0.0 }
    }`);
    this.state = {
      pos: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        width: 1,
      },
      hover: false,
    };
    this.handleResize = () => {
      this.onResize(window.innerWidth);
    };
    this.handleClick = (e) => {
      if (!this.node.contains(e.target)) {
        this.props.onClose();
      }
    };
  }

  onResize() {
    this.getComponentPosition();
    const vw = window.innerWidth * window.devicePixelRatio;
    const vh = window.innerHeight * window.devicePixelRatio;
    const drawTextAboveCenter = vh / 2 / this.state.pos.top < 1.0;
    const drawTextLeftOfCenter = vw / 2 / this.state.pos.top > 1.0;
    //Todo: check the other side
    const minimalDistanceToViewport =
      vw - (this.state.pos.left + this.state.pos.width / 2);
    this.setState({
      drawTextAboveCenter,
      drawTextLeftOfCenter,
      minimalDistanceToViewport,
    });
  }

  getStyles() {
    const { backgroundColor } = this.props;
    const {
      pos,
      open,
      drawTextAboveCenter,
    } = this.state;
    const circleSize = pos.width + 40;
    const outerCircleSize = Math.min((window.innerWidth / 3) * 2, 330);
    const textBoxHeight = window.innerWidth < 768 ? 80 : 100;
    const textBoxPaddingAtCircle = outerCircleSize * (1 / outerCircleSize) * 50;
    const textBoxPadding = 20;

    return {
      root: {
        zIndex: 1000,
      },
      circles: {
        position: "absolute",
        top: pos.top - 20,
        left: pos.left - 20,
        opacity: open ? 1 : 0,
        pointerEvents: open ? "inherit" : "none",
      },
      pulseInnerCircle: {
        position: "absolute",
        transformOrigin: "center center",
        height: `${circleSize}px`,
        width: `${circleSize}px`,
        borderRadius: "50%",
        backgroundColor: "white",
        animation: open
          ? "innerPulse 872ms 1.2s cubic-bezier(0.42, 0, 0.58, 1) alternate infinite"
          : null,
        transform: open ? "scale(1)" : "scale(0)",
        transition: "transform 225ms cubic-bezier(0.42, 0, 0.58, 1)",
      },
      pulseOuterCircle: {
        position: "absolute",
        transformOrigin: "center center",
        height: `${circleSize}px`,
        width: `${circleSize}px`,
        borderRadius: "50%",
        backgroundColor: "white",
        opacity: 0,
        animation: open
          ? "outerPulse 1744ms 1.2s cubic-bezier(0.42, 0, 0.58, 1) infinite"
          : null,
      },
      outerCircle: {
        position: "absolute",
        transformOrigin: "center center",
        transform: open ? "scale(1.0)" : "scale(0.8)",
        transition:
          "transform 225ms cubic-bezier(0.42, 0, 0.58, 1), opacity 225ms cubic-bezier(0.42, 0, 0.58, 1)",
        marginTop: `-${outerCircleSize / 2 - circleSize / 2}px`,
        marginLeft: `-${outerCircleSize / 2 - circleSize / 2}px`,
        height: `${outerCircleSize}px`,
        width: `${outerCircleSize}px`,
        borderRadius: "50%",
        backgroundColor,
        opacity: open ? 0.9 : 0,
      },
      textBox: {
        fontFamily: "Calibri",
        position: "absolute",
        bottom: 0,
        zIndex: 25000,
        paddingLeft: textBoxPadding,
        paddingRight: textBoxPaddingAtCircle,
        width: outerCircleSize,
        height: textBoxHeight,
        marginTop: drawTextAboveCenter
          ? outerCircleSize / 2 - circleSize / 2 - textBoxHeight - 20
          : outerCircleSize / 2 + circleSize / 2 + 20,
        color: "white",
        fontSize: "16pt",
        textAlign: "right",
      },
      buttonStyle: {
        color: "white",
        fontSize: "17px",
        fontWeight: "bold",
        padding: "10px 12px",
        cursor: "pointer",
      },
      hoverStyle: {
        color: "white",
        fontSize: "17px",
        fontWeight: "bold",
        padding: "10px 12px",
        borderRadius: "4px",
        background: "#A1419F",
        textDecoration: "none",
        cursor: "pointer",
      },
    };
  }

  close() {
    if (this.content != null) {
      this.setState({ pos: this.content.getBoundingClientRect(), open: false });
      this.props.onClose();
    }
  }

  open() {
    if (this.content != null) {
      this.handleResize();
      this.setState({ pos: this.content.getBoundingClientRect(), open: true });
    }
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleResize);
    window.addEventListener("mousedown", this.handleClick, false);
    this.content = findDOMNode(this.props.element);
    this.setState({ pos: this.content.getBoundingClientRect() });
    this.updateInterval = setInterval(() => {
      this.getComponentPosition();
    }, 50);
  }

  getComponentPosition() {
    if (this.state.open) {
      const pos = this.content.getBoundingClientRect();
      if (pos.top !== this.state.pos.top || pos.left !== this.state.pos.left) {
        this.setState({ pos });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleResize);
    window.removeEventListener("mousedown", this.handleClick, false);
    clearInterval(this.updateInterval);
    this.content = null;
  }

  render() {
    const styles = this.getStyles();

    var linkStyle;
    if (this.state.hover) {
      linkStyle = styles.hoverStyle;
    } else {
      linkStyle = styles.buttonStyle;
    }

    return (
      <div ref={(node) => (this.node = node)} style={styles.root} id={this.props.id}>
        <div style={styles.circles}>
          <div style={styles.outerCircle}>
            <div style={styles.textBox}>
              <a
                style={linkStyle}
                onClick={() => this.close()}
                onMouseEnter={() => this.toggleHover()}
                onMouseLeave={() => this.toggleHover()}
              >
                Got it
              </a>
            </div>
          </div>
          <div style={styles.pulseInnerCircle} />
          <div style={styles.pulseOuterCircle} />
        </div>
      </div>
    );
  }
}

Circles.propTypes = {
  /** Fired when the the prompt is visible and clicked. */
  onClose: PropTypes.func.isRequired,
  /** Override the inline-styles of the circles element. */
  style: PropTypes.object,
};
