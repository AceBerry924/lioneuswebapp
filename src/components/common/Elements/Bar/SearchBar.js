import React, { Component } from "react";
import { Route } from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";
import { searchAction } from "../../../../store/action";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import { searchProducts } from "../../../../graphql/new-queries";
import {
  SearchBarStyle,
  dropdownRowStyle,
  SearchButton,
} from "../../assets/StyledComponent";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchResult = this.searchResult.bind(this);
    this.state = {
      offerings: [],
      loading: true,
      text: "",
      smDisplay: "none",
      spinnerDisplay: false,
      width: 0,
      height: 0,
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.setState({ spinnerDisplay: false });
  }
  handleSubmit() {
    const { text } = this.state;
    this.setState({
      text: text,
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
    this.updateWindowDimensions();
    $("#input_droped_search").click();
    $("#input_droped_search").on("click", function () {
      alert($(this).text());
    });
    $("#input_droped_search").trigger("click");
    // Once the dropdown is activated in mobile, you will see arrow on top left side, Once the arrow is clicked. it will remove the dropdown and enable normal search
    $(".form-control-feedback1").click(function () {
      $(".input_dropdown").css("display", "none");
      $(this).removeClass("input_activated");
      $(".search_main").removeClass("search_div_activated");
    });

    // Once Enter key or mobile search or go is pressed, it will go to form action
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
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.smDisplay !== nextState.smDisplay) {
      return true;
    }
    if (this.state.width !== nextState.width) {
      return true;
    }
    if (this.state.spinnerDisplay !== nextState.spinnerDisplay) {
      return true;
    }
    return false;
  }

  render() {
    const action = (history) =>
      this.state.text ? history.push("/search/" + this.state.text) : null;
    return (
      <Route
        render={({ history }) => (
          <SearchBarStyle>
            <div className="lioneus_content">
              <form action="." noValidate>
                <div className="form-group">
                  <div className="search_main">
                    <div className="input_search has-search">
                      <span
                        className="fas fa-arrow-left form-control-feedback1"
                        style={{ color: "#c5b358" }}
                      />
                      <input
                        type="search"
                        className="form-control"
                        name="search"
                        placeholder="Search local"
                        onKeyDown={({ key }) =>
                          key === "Enter" ? this.searchResult() : null
                        }
                        onChange={(e) => {
                          this.setState({ text: e.target.value });
                          this.props.history.push("/");
                        }}
                        onFocus={() => {
                          if (this.state.width <= 768) {
                            this.setState({ smDisplay: "block" });
                          }
                        }}
                        aria-autocomplete="both"
                        aria-haspopup="false"
                        autoCapitalize="off"
                        autoComplete="off"
                        autoCorrect="off"
                        role="combobox"
                        spellCheck="false"
                        id="input_droped_search"
                      />
                    </div>
                    <Query
                      query={searchProducts}
                      fetchPolicy="network-only"
                      variables={{ text: this.state.text }}
                    >
                      {({ subcribeToMore, loading, error, data }) => {
                        if (loading) return null;
                        if (error) return <p></p>;

                        return (
                          <div
                            className="input_dropdown"
                            style={{ display: "block" }}
                          >
                            {data.searchProducts &&
                              data.searchProducts.map((item, index) => {
                                return (
                                  <div>Hello world</div>
                                  // <p key={index}>{item.title}</p>
                                  // <div
                                  // onClick={() => {
                                  //   this.props.search({ text: item.title });
                                  //   history.push("/search/" + item.title);
                                    
                                  // }}
                                  //   className="Search_Count_History"
                                  //   key={index}
                                  // >
                                  //   <span className="count_hist" />
                                  //   <div style={dropdownRowStyle}>
                                  //     {item.title}
                                  //   </div>
                                  //   <span className="delete_hist">
                                  //     <i className="fas fa-times" />
                                  //   </span>
                                  // </div>
                                );
                              })}
                          </div>
                        );
                      }}
                    </Query>
                  </div>
                </div>
              </form>
            </div>
            <div style={{ display: "flex" }}>
              <SearchButton>
                <span onClick={this.searchResult}>
                  <img
                    src={require("../assets/images/images/667383.svg")}
                    style={{ height: "2.5rem", margin: "0.2rem 1.5rem" }}
                    alt="search"
                  />
                </span>
                {/* <PrimaryButton style={{ height: '1rem', margin: '0.2rem 1.5rem' }} onClick={this.searchResult} value="Search" /> */}
              </SearchButton>
              <SearchButton>
                <span onClick={(_) => history.push("/explore")}>
                  <img
                    src={require("../assets/images/images/974658.svg")}
                    style={{ height: "2.5rem", margin: "0.2rem 1.5rem" }}
                    alt="explore"
                  />
                </span>
              </SearchButton>
              {/* <ExploreButton style={{ height: '1rem', margin: '0.2rem 1.5rem' }} onClick={_ => history.push('/discover')} value="Explore" /> */}
            </div>
            {/* {this.state.width <= 768 ? <SearchModal style={{ display: this.state.smDisplay }}>
					<div className="input-group mb-3 mt-8" >
						<div className="input-group-prepend">
							<button
								className="btn btn-link"
								style={{ color: '#c5b358' }}
								type="button"
								onClick={() => this.setState({ smDisplay: 'none' })}
							><i className="fas fa-arrow-left"></i></button>
						</div>
						<input
							type="search"
							className="form-control"
							placeholder="Search"
							onKeyDown={({ key }) => key === 'Enter' ? action(history) : null}
							onChange={e => this.setState({ text: e.target.value })}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-link"
								type="button"
								style={{ color: '#c5b358' }}
								onClick={this.searchResult}
							><i className="fas fa-search"></i></button>
						</div>
					</div>
					{this.state.spinnerDisplay ?
						<div className="d-flex justify-content-center mb-4">
							<div className="spinner-border text-warning" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
						: null}
					{this.state.offerings.length > 0 ?

						<ul className="list-group list-group-flush">
							{
								this.state.offerings.map(offering =>
									<li
										className="list-group-item"
										onClick={() => history.push('/search/' + offering.title)}
										key={offering.id}
									><i className="fas fa-search"></i> {offering.title}</li>
								)
							}
						</ul>


						:
						<ul className="list-group list-group-flush">
							<li
								className="list-group-item">No results</li>
						</ul>
					}
				</SearchModal> : null
				} */}
          </SearchBarStyle>
        )}
      />
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
)(withRouter(SearchBar));
