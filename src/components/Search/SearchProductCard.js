import React from "react";
import { Query } from "react-apollo";
import { searchProducts } from "../../graphql/new-queries";
import { connect } from "react-redux";
import { orderBy } from "lodash";
import AddToCart from "../Product/Cart/AddToCart";
import {
  SearchPageStyle,
  ProductCardStyle,
  PageLoader,
} from "../common/assets/StyledComponent";
import AddToCartWithMutation from "../Product/Cart/AddToCartWithMutation";
import WishlistMutation from "../Product/Wishlist/WishlistMutation";
import { Link } from "react-router-dom";
import Text from "../common/Elements/ReadMoreText";

class SearchProductCard extends React.Component {
  render() {
    const { handleSearch, match, products, offering, user, activeFilter } = this.props;
    const date = new Date();
    console.log(date);
    console.log(offering);
    const loadings = (
      <div>
        {" "}
        {offering.map((index) => {
          return <div key={index}>div</div>;
        })}
      </div>
    );
    return (
      <div>
        <SearchPageStyle>
          <ProductCardStyle>
            <div className="container">
              <Query
                query={searchProducts}
                fetchPolicy="network-only"
                variables={{
                  text:
                    match.params && match.params.query
                      ? match.params.query
                      : handleSearch.text,
                }}
              >
                {({ loading, error, data }) => {
                  if (loading)
                    return (
                      <PageLoader>
                        <div className="d-flex justify-content-center">
                          <div
                            className="spinner-border text-warning"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                      </PageLoader>
                    );
                  if (error) return <p></p>;

                  let filteredList = (data.searchProducts && data.searchProducts.length) ? [...data.searchProducts] : [];

                  if (activeFilter) {
                    if (activeFilter === 'high-to-low') {
                      filteredList = orderBy(filteredList, product => product['amount']).reverse()
                    }
                    else if (activeFilter === 'low-to-high') {
                      filteredList = orderBy(filteredList, product => product['amount'])
                    }
                    else if (activeFilter === 'popular') {

                    }
                    else if (activeFilter === 'newest') {
                      filteredList = orderBy(filteredList, product => product['createdTimestamp']).reverse()
                    }
                  }

                  return (
                    <div className="row" style={{ marginTop: "10px" }}>
                      {filteredList.map((item, index) => {
                        return (
                          <div
                            className="col-lg-4 col-md-4 col-sm-6"
                            key={index}
                          >
                            <div class="product-card">
                              <div class="card  z-depth-6">
                                <div className="ls_product d-flex d-sm-block">
                                  <div className="ls_product_img">
                                    <img
                                      id="product-illustration"
                                      alt="Product/Service"
                                      src={
                                        (item.pictures &&
                                          item.pictures.length &&
                                          item.pictures[0]["image"]) ||
                                        defaultPic
                                      }
                                    />
                                  </div>
                                  <div className="ls_product_details">
                                    <span className="card-head">
                                      <ul class="card-action-buttons">
                                        <li>
                                          {" "}
                                          <WishlistMutation
                                            productId={item.productId}
                                            userId={user && user.userId}
                                          />
                                        </li>
                                        <li>
                                          {" "}
                                          <div>
                                            <AddToCartWithMutation
                                              productId={item.productId}
                                              userId={user && user.userId}
                                            />
                                          </div>
                                        </li>
                                        {/* <li>
                                            <a
                                              id="wishlist"
                                              class="btn-floating waves-effect waves-light accent-2"
                                            >
                                              <i class="material-icons like">
                                                favorite_border
                                              </i>
                                            </a>
                                          </li>
                                          <li>
                                            <AddToCart />
                                          </li> */}
                                      </ul>
                                      <div className="ls_product_title">
                                        <Link to={"/product/" + item.productId}>
                                          <p>{item.title}</p>
                                        </Link>
                                      </div>
                                    </span>
                                    <div className="ls_product_company_name">
                                      <Link to={"/store/" + item.company.userId}>
                                        {item.company.companyName}
                                      </Link>
                                    </div>
                                    <div className="ls_product_desription">
                                      <p>
                                        <Text
                                          text={item.description}
                                          product={item.productId}
                                        />
                                      </p>
                                    </div>
                                    <div className="ls_product_price d-flex justify-content-between align-items-center">
                                      <div className="ls_price_tag">
                                        <p>
                                          <small>$</small>
                                          <span id="price_product">
                                            {item.amount}
                                          </span>
                                        </p>
                                      </div>
                                      <div className="ls_buy_action">
                                        <a
                                          href="#"
                                          className="btn btn-outline-warning m-0"
                                        >
                                          Buy now
                                          </a>
                                      </div>
                                    </div>
                                  </div>{" "}
                                  {/* ls_product_details */}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                }}
              </Query>
            </div>
          </ProductCardStyle>
        </SearchPageStyle>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const {
    searchReducer: { handleSearch },
    authReducer: { user }
  } = state;
  return {
    handleSearch,
    user: user
  };
};
export default connect(mapStateToProps, null)(SearchProductCard);

const ipsum =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
const defaultPic =
  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp15touch-space-select-201807?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1529520056969";
