import React from "react";
import Popover from "react-popover";
import "./style.css";
import {
  ProductCardStyle,
  SearchPageStyle,
  StoreListButton
} from "../../common/assets/StyledComponent";
import StoreProducts from "./StoreProducts/StoreProducts";
import styled from "styled-components";
import Navbar from "../../common/Header/Navbar";
import { connect } from "react-redux";
import AddNewListModal from "../../Product/AddProduct/AddNewListModal";
import ImageUpload from "./ProfilePicture";
import Banner from "./Banner";
import StoreDetail from "./StoreDetails";
import { Link } from "react-router-dom";

class BusinessStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offering_type: "service",
      showModal: false,
      popoverOpen:
        this.props.location.loginState ||
        this.props.location.loginState == undefined
          ? false
          : true,
      nextShow: false,
      // file: "",
      // mode: "upload",
      // loading: false
    };
  }

  handlePopoverClose = () => {
    this.setState({
      popoverOpen: false,
      nextShow: true,
    });
  };

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

  render() {
    const { user, list } = this.props; 
    
    const { listOpen, popoverOpen, nextShow } = this.state;
    const popoverProps = {
      isOpen: popoverOpen,
      place: "below",
      body: [
        <div class="mdc-content" key="add-product1">
          <h3 class="mdc-title">List for free</h3>
          <div>You can add product for free!</div>
        </div>,
        <div class="mdc-button__div" key="add-product2">
          <span class="mdc-button__label" onClick={this.handlePopoverClose}>
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
      <React.Fragment>
        <Business>
          <MainHeader>
            <Navbar />
          </MainHeader>
          <MainArea>
            <Cover>
              <Banner />
            </Cover>
            <section className="section_lprofile">
              <ImageUpload
                handleUploadFile={this.handleUploadFile}
                uploadProfile={this.uploadProfile}
                loading={this.state.loading}
                file={this.state.file}
                Delete={this.delete}
              />
            </section>
            <section className="products">
              <div className="container">
                <div className="products_search">
                  <div className="input-group">
                    {/* <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    /> */}
                    <div className="input-group-append">
                      {/* <button
                        className="btn btn-warning bg-white text-primary border-left-0 "
                        type="button"
                      >
                        <i className="fa fa-search" />
                      </button> */}
                    </div>
                  </div>
                </div>
                {user && (
                  <div className="text-center">
                    <div className="d-inline-block">
                      <Popover {...popoverProps}>
                        <StoreListButton>
                          <Link
                            to={{ pathname: "/list", loginState: this.props.location.loginState}}
                            style={{ textDecoration: "none" }}
                          >
                            <button>
                              <span>Add Product</span>
                            </button>
                          </Link>
                        </StoreListButton>
                      </Popover>
                    </div>
                  </div>
                )}
                <AddNewListModal
                  showModal={this.state.showModal}
                  handleModalClose={(_) => this.setState({ showModal: false })}
                />
                <SearchPageStyle>
                  <ProductCardStyle>
                    <StoreProducts
                      offering_type={this.state.offering_type}
                      toggleList={() => this.toggleList()}
                    />
                    {listOpen && (
                      <ul>
                        <li></li>
                        <li></li>
                      </ul>
                    )}
                  </ProductCardStyle>
                </SearchPageStyle>
                <div className="lp_pagination">
                  <div className="lp_pagination_group d-flex align-items-center justify-content-md-center justify-content-between">
                    <div className="lp_pagination_btn">
                      {/* <button type="button">
                        <i className="fas fa-arrow-left" />
                      </button>
                    </div>
                    <div className="lp_pagination_disc">
                      <p>1 of 1</p>
                    </div>
                    <div className="lp_pagination_btn">
                      <button type="button">
                        <i className="fas fa-arrow-right" />
                      </button> */}
                    </div>
                  </div>
                </div>
                {/* STORE DETAIL PAGE START */}
                <StoreDetail showPopover={nextShow} />
                {/* STORE DETAIL PAGE END */}
              </div>
            </section>
          </MainArea>
        </Business>
      </React.Fragment>
    );
  }
}

const Business = styled.div``;
const MainHeader = styled.div`
  padding: 0;
  .navbar {
    padding: 0px 10px;
  }
  .navbar-brand img {
    max-width: 60px;
  }
`;
const MainArea = styled.div`
  padding-top: 5%;
  #store-product-buttons {
    // margin: 10px 0px;
    display: block;
  }
`;
const Cover = styled.div`
  .main {
    display: block;
    position: relative;
    width: 100%;
    margin: 0 auto;
  }
  .cover {
    display: block;
    position: relative;
    // height:450px;
    overflow: hidden;
    z-index: 1;
    width: 100%;
    // height: 500px;
    // height: -webkit-fill-available;
    // height: 400px;
  }
  .cover img {
    height: 500px;
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    .cover img {
      height: 300px;
    }
  }
  .cover img {
    max-width: 100%;
    z-index: 1;
    // height: -webkit-fill-available
  }
  .profile {
    display: block;
    position: relative;
    // border:#d0efff solid 3px;
    border-radius: 5px;
    width: 200px;
    // height:200px;
    margin: -20px 0 10px 20px;
    z-index: 999;
  }
  .profile img {
    max-width: 100%;
    z-index: 999;
  }
`;

const mapStateToProps = state => {
  const {
    authReducer: { isLoggedIn, user }
  } = state;
  return {
    isLoggedIn,
    user
  };
};

export default connect(mapStateToProps, null)(BusinessStore);
