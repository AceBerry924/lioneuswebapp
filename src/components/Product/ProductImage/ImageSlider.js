import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const defaultPic =
  "https://marketingweek.imgix.net/content/uploads/2017/09/06163244/price-tags_750.jpg?auto=compress,format&q=60&w=750&h=";
class ImageSlider extends React.Component {
  render() {
    const handleOnDragStart = e => e.preventDefault();
    return (
      <div>
        <AliceCarousel
          mouseTrackingEnabled
          buttonsDisabled={true}
          dotsDisabled={true}
          mouseDragEnabled={true}
          swipeDisabled={false}
        >
          {this.props.product &&
            this.props.product.length > 1 &&
            this.props.product.map(url => {
              return (
                <img
                  onDragStart={handleOnDragStart}
                  style={{ position: "unset", width: "100%" }}
                  id="product-illustration"
                  alt="Product/Service"
                  src={url}
                />
              );
            })}
        </AliceCarousel>
        {this.props.product && this.props.product.length === 1 && (
          <img
            style={{ position: "unset", width: "100%" }}
            id="product-illustration"
            alt="Product/Service"
            src={this.props.product[0]}
          />
        )}
        {this.props.product && !this.props.product.length && (
          <img
            style={{ position: "unset", width: "100%" }}
            id="product-illustration"
            alt="Product/Service"
            src={defaultPic}
          />
        )}
      </div>
    );
  }
}

export default ImageSlider;
