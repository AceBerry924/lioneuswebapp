import React from "react";
import { orderBy } from "lodash";
import Navbar from "../../common/Header/Navbar";
import {
  SearchPageStyle,
  ProductCardStyle,
  PageLoader
} from "../../common/assets/StyledComponent";
import Footer from "../../common/Footer/Footer";
import { Query } from "react-apollo";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import ProductFilter from "./../../common/ProductFilter";
import { getProductList } from "../../../graphql/new-queries";

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBox = this.toggleBox.bind(this);
    this.state = {
      opened: false,
      activeFilter: null
    };
  }
  handleFilter = (filter) => {
    this.setState({ activeFilter: filter })
  }
  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened
    });
  }
  render() {
    const { user } = this.props;
    const { opened, activeFilter } = this.state;
    return (
      <div>
        <SearchPageStyle>
          <Navbar />
        </SearchPageStyle>
        <SearchPageStyle>
          <ProductFilter
            toggleBox={this.toggleBox}
            handleFilter={this.handleFilter}
            activeFilter={activeFilter}
            opened={opened}
            clearFilter={() => this.setState({ activeFilter: null })}
          />
          <ProductCardStyle>
            <section className="container" id="discovery" style={{ paddingTop: '2%' }}>
              <Query query={getProductList}>
                {({ subcribeToMore, loading, error, data }) => {
                  if (loading)
                    return (
                      <PageLoader>
                        <div className="d-flex justify-content-center">
                          <div
                            className="spinner-border text-warning"
                            role="status"
                          >
                            <span className="sr-only">Loading ...</span>
                          </div>
                        </div>
                      </PageLoader>
                    );
                  if (error) return <p>error</p>;

                  let filteredList = (data.getProductList && data.getProductList.length) ? [...data.getProductList] : [];

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
                    <span className="row">
                      {/* <div className="row" id="discover" > */}

                      {filteredList.map((item, index) => {
                        return (
                          <ProductCard
                            product={item}
                            key={index}
                            userId={user ? user.userId : null}
                          />
                        );
                      })}
                    </span>
                  );
                }}
              </Query>
            </section>
          </ProductCardStyle>
        </SearchPageStyle>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    authReducer: { user }
  } = state;
  return {
    user: user
  };
};

export default connect(mapStateToProps, null)(Discover);
