import React, { Component } from "react";
import ReadMore from "./ReadMore";

export default class ProductReadMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }
  componentDidMount() {
    console.log(
      "mounted width - ",
      window.getComputedStyle(this.wrapper).getPropertyValue("width")
    );
  }

  getWrapperWidth() {
    if (this.wrapper) {
      console.log(
        "get wrapper width",
        window.getComputedStyle(this.wrapper).getPropertyValue("width")
      );
    } else {
      console.log("get wrapper - no wrapper");
    }
  }
  render() {
    return (
      <React.Fragment>
        <div style={{width: ''}} ref={node => this.wrapper = node}>
        <ReadMore 
          text={this.props.description}
          numberOfLines={2}
          lineHeight={1.4}
          productId={this.props.product}
          showLessButton={true}
          onContentChange={this.getWrapperWidth}
        />
      </div>
      </React.Fragment>
    );
  }
}
