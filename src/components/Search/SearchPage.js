import React, { Component } from "react";
import { searchProducts } from "../../graphql/new-queries";
import { withApollo, Query } from "react-apollo";
import { searchAction } from "../../store/action";
import { connect } from "react-redux";
import SearchProductCard from "./SearchProductCard";
class SearchPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      text: ""
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit() {
    const { text } = this.state;
    this.setState({
      text: text
    });
  }
  search = () => {
    let { text } = this.state;
    let payload = {
      text
    };
    this.props.Search(payload);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          name="text"
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.search}>
          search
        </button>

        <Query
          query={searchProducts}
          fetchPolicy="network-only"
          variables={{ text: this.state.text }}
        >
          {({ subcribeToMore, loading, error, data }) => {
            if (loading) return <p> loading...</p>;
            if (error) return <p></p>;

            return (
              <div>
                {data.searchProducts &&
                  data.searchProducts.map((item, index) => {
                    return (
                      <div key={index}>
                        <h2>Product</h2>
                        <p>{item.title}</p>

                        <p>{item.description}</p>
                      </div>
                    );
                  })}
              </div>
            );
          }}
        </Query>
        <SearchProductCard />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const {
    searchReducer: { handleSearch }
  } = state;
  return {
    handleSearch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Search: payload => dispatch(searchAction.handleSearch(payload))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withApollo(SearchPage));
