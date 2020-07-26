import React from "react";
import Helmet from "react-helmet";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import UpdateProduct from "./UpdateProduct";
import Navbar from "../../common/Header/Navbar";
import { Product } from "../../common/assets/StyledComponent";
import { getProduct, getUserById } from "../../../graphql/new-queries";
import ProductImage from "./ProductImage/ProductImage";
import EditButton from "../../common/Elements/Buttons/EditButton";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const defaultPic =
  "https://marketingweek.imgix.net/content/uploads/2017/09/06163244/price-tags_750.jpg?auto=compress,format&q=60&w=750&h=";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: " ",
      show: false,
      offering_type: "service",
      showModal: false,
      reRenderSliderThumbsFourcefully: true,
    };
  }
  handleClickOutside() {
    this.setState({
      listOpen: false,
    });
  }
  toggleList() {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
    }));
  }

  reRenderSlider = () => {
    this.setState({
      reRenderSliderThumbsFourcefully: false,
    });

    setTimeout(() => {
      this.setState({ reRenderSliderThumbsFourcefully: true });
    }, 3000);
  };
  onModalClick = () => {
    this.setState({
      showModal: true,
    });
  };
  handleModalClose = () => {
    this.setState({
      showModal: false,
    });
    debugger;
  };
  render() {
    const handleOnDragStart = (e) => e.preventDefault();
    const { user } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"
          />
          <link
            rel="stylesheet"
            href="../../templates/newproductandstorepage/css/owl.carousel.css"
          />
        </Helmet>
        <Navbar />{" "}
        <Query
          query={getProduct}
          variables={{ productId: this.props.match.params.id }}
          fetchPolicy="network-only"
        >
          {({ loading, data }) => {
            if (loading)
              return (
                <div
                  className="d-flex justify-content-center"
                  style={{ margin: "50px" }}
                >
                  <div className="spinner-border text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              );
            return (
              <div style={{ marginTop: "10%" }}>
                {data && data.getProduct && data.getProduct ? (
                  <Product>
                    <section className="lp_product_detail_page">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-7">
                            {user && user.userId === data.getProduct.company.userId ? (
                              <div className="profile-edit">
                                <EditButton onClick={this.onModalClick} />
                              </div>
                            ) : null}

                            <div className="slider-container">
                              {data && data.getProduct.pictures.length > 1 && (
                                <div class="carousel-wrapper">
                                  <Carousel
                                    emulateTouch={true}
                                    swipeable={true}
                                    showStatus={false}
                                    infiniteLoop
                                    useKeyboardArrows
                                    autoPlay
                                    showThumbs={
                                      this.state.reRenderSliderThumbsFourcefully
                                    }
                                    // showThumbs={true}
                                  >
                                    {data.getProduct.pictures.map((pic, i) => {
                                      return (
                                        <div className="item" key={i}>
                                          <img src={pic["image"]} alt={""} />
                                        </div>
                                      );
                                    })}
                                  </Carousel>
                                </div>
                              )}
                              {data &&
                                data.getProduct.pictures &&
                                data.getProduct.pictures.length <= 1 && (
                                  <div className="item">
                                    <div className="content slider_content_main_img">
                                      <img
                                        src={
                                          data.getProduct.pictures &&
                                          data.getProduct.pictures.length
                                            ? data.getProduct.pictures[0][
                                                "image"
                                              ]
                                            : defaultPic
                                        }
                                        alt=""
                                        onDragStart={handleOnDragStart}
                                      />
                                    </div>
                                  </div>
                                )}
                            </div>
                          </div>{" "}
                          <ProductImage
                            showModal={this.state.showModal}
                            Id={this.props.match.params.id}
                            reRenderSlider={this.reRenderSlider}
                            showModal={this.state.showModal}
                            handleModalClose={this.handleModalClose}
                            photo={
                              data &&
                              data.getProduct &&
                              data.getProduct.pictures
                            }
                            key={
                              data &&
                              data.getProduct &&
                              data.getProduct.pictures
                            }
                            handleModalClose={(_) =>
                              this.setState({ showModal: false })
                            }
                          />
                          {/* col-lg-7 */}
                          <div className="col-lg-5">
                            <div className="lp_product_main_2 d-flex flex-column justify-content-between h-100">
                              <div className="lp_product_details">
                                <UpdateProduct
                                  showModal={this.state.showModal}
                                  productId={this.props.match.params.id}
                                  handleModalClose={(_) =>
                                    this.setState({ showModal: false })
                                  }
                                  description={data.getProduct.description}
                                  amount={data.getProduct.amount}
                                  title={data.getProduct.title}
                                  creatorId={data.getProduct.company.userId}
                                />
                              </div>
                              <div className="lp_user_profile">
                                <div className="media border rounded p-3">
                                  <Query
                                    query={getUserById}
                                    variables={{ userId: user && user.userId }}
                                    fetchPolicy="network-only"
                                  >
                                    {({
                                      subcribeToMore,
                                      loading,
                                      error,
                                      data,
                                    }) => {
                                      return (
                                        <div class="cover">
                                          {data &&
                                          data.getUserById &&
                                          data.getUserById.picture ? (
                                            <img
                                              src={data.getUserById.picture}
                                              alt="John Doe"
                                              className="mr-3 rounded-circle"
                                              style={{
                                                width: "60px",
                                                height: "60px",
                                              }}
                                            />
                                          ) : (
                                            <img
                                              src={require("../../common/assets/images/images/logo1.png")}
                                              alt="John Doe"
                                              className="mr-3 rounded-circle"
                                              style={{ width: "60px" }}
                                            />
                                          )}
                                        </div>
                                      );
                                    }}
                                  </Query>

                                  <div
                                    className="media-body"
                                    style={{
                                      marginTop: "auto",
                                      marginBottom: "auto",
                                    }}
                                  >
                                    <Link to="/mystore">
                                      {" "}
                                      <h4>
                                        {data.getProduct.company.companyName}
                                      </h4>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Product>
                ) : null}
              </div>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    authReducer: { isLoggedIn, user },
  } = state;
  return {
    isLoggedIn,
    user,
  };
};
export default connect(mapStateToProps, null)(ProductDetail);
