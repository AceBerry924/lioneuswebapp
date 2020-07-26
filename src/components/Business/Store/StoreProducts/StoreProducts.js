import React, { Component } from "react";
import styled from "styled-components";
import { withApollo, Query } from "react-apollo";
import { connect } from "react-redux";
import { getCompanyProducts } from "../../../../graphql/new-queries";
import ProductCard from "../../../Product/Discover/ProductCard";

const Main = styled.div`
  // .btn-outline-warning {
  //   padding: 0px 10px;
  // }
  .ls_price_tag p {
    font-size: 13px;
  }
  .product-card ul.card-action-buttons {
    display: none;
  }
`;

class StoreProducts extends Component {
  render() {
    return (
      <Main>
        {this.props.user && (
          <Query
            query={getCompanyProducts}
            variables={{
              companyId: this.props.user.userId,
              userId: this.props.user.userId,
            }}
            fetchPolicy="network-only"
          >
            {({ loading, error, data }) => {
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
              if (error) return <p>error</p>;
              return (
                <div className="">
                  <div className="row" style={{ marginTop: "10%" }}>
                    {data.getCompanyProducts &&
                      data.getCompanyProducts.map((product, index) => {
                        console.log("test", product);
                        if (this.props.offering_type !== product.type);
                        return (
                          <ProductCard
                            product={product}
                            key={index}
                            userId={this.props.user.userId}
                            noNeedAddToCartButton={true}
                          />
                        );
                      })}
                  </div>
                </div>
              );
            }}
          </Query>
        )}
      </Main>
    );
  }
}
const mapStateToProps = state => {
  const {
    authReducer: { user }
  } = state;
  return {
    user
  };
};
export default connect(mapStateToProps, null)(withApollo(StoreProducts));
