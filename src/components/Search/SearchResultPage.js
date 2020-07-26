import React, { Component } from "react";
import Navbar from "../common/Header/Navbar";
import styled from "styled-components";
import { NotificationManager } from "react-notifications";
import { withApollo } from "react-apollo";
import { SearchPageStyle } from "../common/assets/StyledComponent";
import { getProductList } from "../../graphql/new-queries";
import SearchProductCard from "./SearchProductCard";
import ProductFilter from "./../common/ProductFilter";

const Main = styled.div`
  nav {
    height: auto;
    line-height: auto;
  }
  @media only screen and (min-width: 601px) nav,
    nav .nav-wrapper i,
    nav a.sidenav-trigger,
    nav a.sidenav-trigger i {
    height: auto;
    line-height: auto;
  }
`;

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.toggleBox = this.toggleBox.bind(this);
    this.state = {
      current: 4,
      offerings: [],
      loading: true,
      opened: false,
      activeFilter: null
    };
  }

  handleFilter = (filter) => {
    this.setState({ activeFilter: filter })
  }

  getDerivedStateFromProps(props) {
    const { query } = props.match.params;
    this.Search(query);
  }
  componentWillMount() {
    const { query } = this.props.match.params;
    this.Search(query);
  }

  async Search(query) {
    const offerings = await this.props.client
      .query({
        query: getProductList,
        variables: { query }
      })
      .then(res => res.data.getProductList)
      .catch(err => {
        NotificationManager.error("Error searching");
      });

    if (offerings) {
      this.setState({ offerings });
    }
  }
  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened
    });
  }
  render() {
    const noResult = this.state.offerings.length === 0;
    const { opened, activeFilter } = this.state;

    return (
      <SearchPageStyle>
        <Main>
          <Navbar
            search={this.props.match.params.query}
            client={this.props.client}
          />
        </Main>
        <ProductFilter 
          toggleBox={this.toggleBox} 
          handleFilter={this.handleFilter} 
          activeFilter={activeFilter}
          opened={opened}
          clearFilter={() => this.setState({ activeFilter: null })} 
        />
        <div>
          <section className="products">
            <SearchProductCard
              offering={this.state.offerings}
              activeFilter={activeFilter}
              {...this.props}
            />
          </section>
        </div>
      </SearchPageStyle>
    );
  }
}

export default withApollo(SearchResults);
