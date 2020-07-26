import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Text from "../../common/Elements/ReadMoreText";
import ImageSlider from "../ProductImage/ImageSlider";
import EditButton from "../../common/Elements/Buttons/EditButton";
import EllipsisButton from "../../common/Elements/Buttons/EllipsisButton";
import WishlistMutation from "../Wishlist/WishlistMutation";
import AddToCartWithMutation from "../Cart/AddToCartWithMutation";
import { LioneusAppClient } from "../../../config/graphql-clients";
import { showOrHideProduct } from "../../../graphql/new-mutations";
import { getProduct } from "../../../graphql/new-queries";

const Card = styled.div`
  @media screen and (max-width: 576px) {
    #store-product-buttons {
      margin: 0px -10px 0 0;
    }
    .ls_product_title {
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
      float: left;
      -webkit-flex: 0 0 55%;
      -ms-flex: 0 0 55%;
      -webkit-flex: 0 0 55%;
      -ms-flex: 0 0 55%;
      flex: 0 0 70%;
      -ms-flex: 0 0 55%;
      max-width: 70%;
      font-weight: 400 !important;
      font-size: 1.1rem !important;
    }
  }
  // .ls_product_title{
  //   width: 60%;
  // }
`;

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productIsPublish: this.props.product.isPublish
    };

    this.controlProduct = this.controlProduct.bind(this);
  }

  controlProduct() {
    const { product, userId } = this.props;

    LioneusAppClient.mutate({
      mutation: showOrHideProduct,
      variables: { productId: product.productId, userId: userId },
      refetchQueries: [
        {
          query: getProduct,
          variables: { productId: product.productId },
        },
      ],
    })
      .then((data) => {
        this.setState({ productIsPublish: !this.state.productIsPublish });
        console.log("success", this.state.productIsPublish);
        NotificationManager.success(
          this.state.productIsPublish
            ? "Product is published"
            : "Product has been hidden",
          "Success"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { product, userId, noNeedAddToCartButton } = this.props;
    const { productIsPublish } = this.state;

    return (
      <div className="col-lg-4 col-md-4 col-sm-6" key={product.productId}>
        <Card>
          <div class="product-card">
            <div class="card  z-depth-6">
              <div className="ls_product d-flex d-sm-block">
                <div
                  className="ls_product_img"
                  style={{
                    filter: productIsPublish ? "grayscale(0)" : "grayscale(1)",
                  }}
                >
                  <ImageSlider
                    product={product.pictures.map((item) => item.image)}
                  />
                </div>
                <div className="ls_product_details">
                  <span className="card-head">
                    <ul class="card-action-buttons">
                      <li>
                        {" "}
                        <WishlistMutation
                          productId={product.productId}
                          userId={userId}
                        />
                      </li>
                      <li>
                        {" "}
                        {!noNeedAddToCartButton && (
                          <div>
                            <AddToCartWithMutation
                              productId={product.productId}
                              userId={userId}
                            />
                          </div>
                        )}
                      </li>
                    </ul>

                    <ul class="card-action-buttons" id="store-product-buttons">
                      <li>
                        <Link to={"/product/" + product.productId}>
                          <EditButton />
                        </Link>
                      </li>
                      <li>
                        <EllipsisButton
                          isPublish={productIsPublish}
                          controlProduct={this.controlProduct.bind(this)}
                        />
                      </li>
                      {/* <li>
                      <div className="">
                        <div className="dropdown">
                          <a
                            type="button"
                            id="dropdownMenu2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-v" />
                          </a>
                          <div className="dropdown-menu dropdown-primary">
                            <a className="dropdown-item" href="#">
                              <i className="fab fa-apple-pay" />
                              &nbsp;&nbsp;Pay
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fas fa-bell-slash" />
                              &nbsp;&nbsp;Disable alerts
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="far fa-envelope" />
                              &nbsp;&nbsp;Check email
                            </a>
                          </div>
                        </div>
                      </div>
                    </li> */}
                    </ul>
                    <div className="ls_product_title">
                      <Link to={"/product/" + product.productId}>
                        {" "}
                        <p
                          style={{
                            color: productIsPublish ? "#4c4c4c" : "gray",
                          }}
                        >
                          {product.title}
                        </p>
                      </Link>
                    </div>
                  </span>
                  <div
                    className="ls_product_company_name"
                    style={{ color: productIsPublish ? "#4c4c4c" : "gray" }}
                  >
                    <Link to={"/store/" + product.company.userId}>
                      {product.company.companyName}
                    </Link>
                  </div>
                  <div className="ls_product_desription">
                    <p
                      style={{
                        color: productIsPublish ? "#4c4c4c" : "gray",
                        margin: "0",
                      }}
                    >
                      <Text
                        text={product.description}
                        product={product.productId}
                      />
                    </p>
                  </div>
                  <div className="ls_product_price d-flex justify-content-between align-items-center">
                    <div className="ls_price_tag">
                      <p>
                        <small>$</small>
                        <span
                          id="price_product"
                          style={{
                            color: productIsPublish ? "#c5b358" : "gray",
                            margin: "0",
                          }}
                        >
                          {product.amount}
                        </span>
                      </p>
                    </div>
                    <div
                      className="ls_buy_action"
                      style={{ filter: productIsPublish ? "grayscale(0)" : "grayscale(1)" }}
                    >
                      <a href="#" className="btn btn-outline-warning m-0">
                        Buy now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
};

export default ProductCard;