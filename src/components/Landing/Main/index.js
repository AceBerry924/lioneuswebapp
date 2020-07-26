import React from "react";
import ReactGA from "react-ga";
import { MainStyle } from "../Assets/StyledComponent";
import $ from "jquery";
import { SearchButton } from "../../common/assets/StyledComponent";
import { Link } from "react-router-dom";
import { orderBy, filter, uniqBy } from "lodash";
import { connect } from "react-redux";
import { searchAction } from "../../../store/action";
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { getProductListForSearch } from "./../../../graphql/new-queries";
import { LioneusAppClient } from "./../../../config/graphql-clients";

class MainLanding extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.searchResult = this.searchResult.bind(this);
    this.state = {
      text: "",
      isSearchFieldSelected: false,
      products: [],
      closeDropdownForceFully: false
    };
  }

  getProductsList = () => {
    const { products, text } = this.state;
    let filteredByTitle = [];
    let filteredByDescription = [];
    let results = [];
    filteredByTitle = filter(products, product => product.title.toLowerCase().indexOf(text.toLowerCase()) !== -1);
    if (!filteredByTitle.length) {
      filteredByDescription = filter(products, product => product.description.toLowerCase().indexOf(text.toLowerCase()) !== -1)
    };
    results = [...filteredByTitle, ...filteredByDescription].map(product => ({ ...product, matchPos: product.title.toLowerCase().indexOf(text.toLowerCase()) }))
    results = uniqBy(orderBy(results, product => product['matchPos'], ['asc']), 'productId');
    return results;
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  searchResult = () => {
    let { text } = this.state;
    let payload = {
      text,
    };
    const { query } = this.state.text;
    this.props.search(payload);
    if (this.state.text) {
      return this.props.history.push("/search/" + this.state.text);
    }
  };
  componentDidMount() {
    this.nameInput.focus();
    document.addEventListener("mousedown", (e) => {
      let { target } = e;
      if (
        target &&
        target.id === "do-not-close" ||
        target.id === "search-button" ||
        target.id === "search_item_wrapper"

      ) return
      this.setState({
        closeDropdownForceFully: true,
      });
    });

    $(function () {
      $("form").each(function () {
        $(this)
          .find("input")
          .keypress(function (e) {
            if (e.which == 10 || e.which == 13) {
              this.form.submit();
            }
          });
      });
    });

    LioneusAppClient.query({
      query: getProductListForSearch,
      // fetchPolicy: "network-only"
    })
      .then(({ data: { getProductList } }) => {
        this.setState({
          products: getProductList,
        });
      })
      .catch((err) => {
        console.log(err);
      });

  }

  handleSearchOnClick = () => {
    this.setState({ closeDropdownForceFully: false })
  }

  render() {
    const { isSearchFieldSelected, text, products, closeDropdownForceFully } = this.state;
    let searchCondition = products.filter(
      (item) =>
        item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
        item.description.toLowerCase().indexOf(text.toLowerCase()) !== -1
    ).length;
    let searchClassName = "form-control";
    if (text && !closeDropdownForceFully) {
      searchClassName += " focus";
    }
    if (text && searchCondition && !closeDropdownForceFully) {
      searchClassName += " input_activated";
    }

    return (
      <MainStyle>
        <section className="lioneus_search">
          <div className="container">
            <div className="lioneus_input_section  d-flex align-items-center">
              <div className="lioneus_content">
                <div className="form-group">
                  <div
                    className={
                      isSearchFieldSelected
                        ? "search_main search_div_activated"
                        : "search_main"
                    }
                  >
                    <div className="input_search has-search" id="search_field_wrapper" onClick={this.handleSearchOnClick}>
                      <span
                        onClick={() =>
                          this.setState({
                            isSearchFieldSelected: false,
                            text: "",
                          })
                        }
                        className="fas fa-arrow-left form-control-feedback1"
                        style={{ color: "#c5b358" }}
                      />
                      <form action="." name="myform" noValidate>
                        <input
                          type="search"
                          id="do-not-close"
                          className={searchClassName}
                          onKeyDown={({ key }) =>
                            key === "Enter" ? this.searchResult() : null
                          }
                          autoComplete="off"
                          ref={input => {
                            this.nameInput = input;
                          }}
                          placeholder=""
                          value={text}
                          name="text"
                          onChange={this.handleInput}
                          onClick={() =>
                            this.setState({ isSearchFieldSelected: true })
                          }
                        />
                      </form>
                      <button
                        className="btn btn-warning"
                        onClick={this.searchResult}
                        type="submit"
                        id="search-button"
                      >
                        <img
                          id="do-not-close"
                          src={require("../../common/assets/images/images/search.png")}
                          className="search-svg"
                          alt="search"
                        />
                      </button>
                    </div>

                    {(() => {
                      return (
                        text && !closeDropdownForceFully && (
                          <div
                            className="input_dropdown"
                            id="search_item_wrapper"
                            style={{
                              display:
                                (isSearchFieldSelected || text) &&
                                  searchCondition
                                  ? "block"
                                  : "none",
                            }}
                          >
                            <div className="search-outline" />
                            <div className="input_dropdown_h" id="do-not-close">
                              {this.getProductsList().map((item, index) => {
                                return (
                                  <React.Fragment key={index}>
                                    <Route
                                      render={({ history }) => (
                                        <div
                                          className="Search_Count_History"
                                          key={index}
                                          id="do-not-close"
                                          onClick={() => {
                                            this.props.search({
                                              text: item.title,
                                            });
                                            history.push(
                                              "/search/" + item.title
                                            );
                                            ReactGA.event({
                                              category: 'Search Query',
                                              action: 'search',
                                              value: item.title,
                                              label: "search product"
                                            })
                                          }}
                                        >
                                          <img
                                            id="do-not-close"
                                            src={require("../../common/assets/images/search-icon.svg")}
                                            className="search-icon"
                                            alt="search"
                                          />
                                          <p id="do-not-close">{item.title}</p>
                                        </div>
                                      )}
                                    />
                                  </React.Fragment>
                                );
                              })}
                            </div>
                          </div>
                        )
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", margin: "auto", width: "fit-content" }}
            >
              <SearchButton>
                <Link to="/explore">
                  <span>
                    <img
                      src={require("../../common/assets/images/images/974658.svg")}
                      className="explore-svg"
                      alt="explore"
                    />
                    <p className="text-center" id="explore-text">
                      Explore
                    </p>
                  </span>
                </Link>
              </SearchButton>
            </div>

            <div className="lioneus-tag">
              <Link to="/explore">
                Find on Lioneus your favorite products.
              </Link>
            </div>
          </div>
        </section>
      </MainStyle>
    );
  }
}
const mapStateToProps = (state) => {
  const {
    searchReducer: { handleSearch },
  } = state;
  return {
    handleSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (payload) => dispatch(searchAction.handleSearch(payload)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MainLanding));
