import React from "react";
import Helmet from "react-helmet";
import { Query } from "react-apollo";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { Product } from "../../../common/assets/StyledComponent";
import Navbar from "../../../common/Header/Navbar";
import UpdateProduct from "../UpdateProduct";
import ProductImage from "../ProductImage/ProductImage";
import { getUserById } from "../../../../graphql/new-queries";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const defaultPic =
  "https://marketingweek.imgix.net/content/uploads/2017/09/06163244/price-tags_750.jpg?auto=compress,format&q=60&w=750&h=";

class ProductPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      reRenderSliderThumbsFourcefully: true,
      product: null
    };
  }

  componentDidMount() {
    if (this.props.location.props == undefined) return;

    this.setState({ product: this.props.location.props.product });
  }
  
  render() {
    const handleOnDragStart = (e) => e.preventDefault();
    const handleGoBack = (e) => {
      e.preventDefault();
      this.props.history.goBack();
    };

    const { user } = this.props;
    const { showModal, reRenderSliderThumbsFourcefully, product } = this.state;

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
        <div style={{ marginTop: "10%" }}>
          {product ? (
            <Product>
              <section className="lp_product_detail_page">
                <div className="container">
                  <a
                    className="icon-left lio-btn lio-tertiary"
                    onClick={handleGoBack}
                  >
                    Back
                  </a>

                  <div className="row">
                    <div className="col-lg-7">
                      <div className="slider-container">
                        {product && product.pictures.length > 1 && (
                          <div class="carousel-wrapper">
                            <Carousel
                              emulateTouch={true}
                              swipeable={true}
                              showStatus={false}
                              infiniteLoop
                              useKeyboardArrows
                              autoPlay
                              showThumbs={reRenderSliderThumbsFourcefully}
                              // showThumbs={true}
                            >
                              {product.pictures.map((pic, i) => {
                                return (
                                  <div className="item" key={i}>
                                    <img src={pic} alt={""} />
                                  </div>
                                );
                              })}
                            </Carousel>
                          </div>
                        )}
                        {product.pictures && product.pictures.length <= 1 && (
                          <div className="item">
                            <div className="content slider_content_main_img">
                              <img
                                src={
                                  product.pictures && product.pictures.length
                                    ? product.pictures[0]
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
                      showModal={showModal}
                      Id={this.props.match.params.id}
                      reRenderSlider={this.reRenderSlider}
                      showModal={showModal}
                      handleModalClose={this.handleModalClose}
                      photo={product && product.pictures}
                      key={product && product.pictures}
                      handleModalClose={(_) =>
                        this.setState({ showModal: false })
                      }
                    />
                    {/* col-lg-7 */}
                    <div className="col-lg-5">
                      <div className="lp_product_main_2 d-flex flex-column justify-content-between h-100">
                        <div className="lp_product_details">
                          <UpdateProduct
                            showModal={showModal}
                            productId={this.props.match.params.id}
                            handleModalClose={(_) =>
                              this.setState({ showModal: false })
                            }
                            description={product.description}
                            amount={product.amount}
                            title={product.title}
                            creatorId={product.companyId}
                          />
                        </div>
                        <div className="lp_user_profile">
                          <div className="media border rounded p-3">
                            <Query
                              query={getUserById}
                              variables={{ userId: user && user.userId }}
                              fetchPolicy="network-only"
                            >
                              {({ subcribeToMore, loading, error, data }) => {
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
                                        src={require("../../../common/assets/images/images/logo1.png")}
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
                                <h4>{user.companyName}</h4>
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
export default connect(mapStateToProps, null)(withRouter(ProductPreview));
