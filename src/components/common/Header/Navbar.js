import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactGA from "react-ga";
import { NavBarSearch } from "../../Landing/Assets/StyledComponent";
import { Route, Link, withRouter } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { getUserCart } from "../../../graphql/new-queries";
import { connect } from "react-redux";
import { searchAction } from "../../../store/action";
import { orderBy, filter, uniqBy } from "lodash";
import { Query } from "react-apollo";
import { getProductListForSearch } from "./../../../graphql/new-queries";
import { LioneusAppClient } from "./../../../config/graphql-clients";
import { MainHeader } from "./Header";
import SecondaryButton from "../Elements/Buttons/SecondaryButton";
import { getUserById } from "../../../graphql/new-queries";
import PrimaryButton from "../Elements/Buttons/PrimaryButton";
import { authAction } from "../../../store/action";

// import './navbar.css'
import { isMobile } from "react-device-detect";
import QUERIES from "../../../graphql/queries";
import {
  AddToCartPageStyle,
  WishlistStyle,
  SearchPageStyle
} from "../assets/StyledComponent";

const colorList = [
  "#588C73",
  "#F2E394",
  "#F2AE72",
  "#D96459",
  "#8C4646",
  "#4298B5",
  "#ADC4CC",
  "#92B06A",
  "#E19D29",
  "#DD5F32",
  "#4AAAA5",
  "#9B539C",
  "#4AAAA5",
  "#8FD4D9",
  "#293E6A",
  "#3B5998",
  "#7d58c5",
]

const Navbar = (props) => {

  // const token = localStorage.getItem("token");
  // const query = props.search;
  // const [offerings, updateOfferings] = useState([]);
  // const [doSearch, setDoSearch] = useState(false);
  const [colors, updateColors] = useState(colorList)
  const [text, updateText] = useState("");
  const [bgcolor, updateBgcolor] = useState("#8C4646");
  const [products, updateProducts] = useState([]);
  const [isSearchFieldSelected, setIsSearchFieldSelected] = useState(false);
  const [closeDropdownForceFully, setCloseDropdownForceFully] = useState(false);
  const [opened, setOpened] = useState(false);
  const { user } = props;

  // const Search = async (query) => {
  //   if (!doSearch) return;
  //   const offerings = await props.client
  //     .query({
  //       query: QUERIES.OFFERINGS,
  //       variables: { query }
  //     })
  //     .then(res => res.data.Offerings)
  //     .catch(err => {
  //       NotificationManager.error("Error searching");
  //     });

  //   if (offerings) {
  //     console.log(offerings);
  //     updateOfferings(offerings);
  //   }
  // }

  const logout = () => props.logoutAction();

  const getProductsList = (props) => {
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

  const searchResult = () => {
    let payload = { text };
    props.search(payload);
    if (text) {
      return props.history.push("/search/" + text);
    }
  };

  const jsUcfirst = (string) => {
    return string.charAt(0);
  }

  const handleInput = (e) => updateText(e.target.value);

  useEffect(() => {
    LioneusAppClient.query({
      query: getProductListForSearch,
      // fetchPolicy: "network-only"
    })
      .then(({ data: { getProductList } }) => {
        updateProducts(getProductList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  console.log(products)

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
    <SearchPageStyle>
      <header>
        <nav className="navbar navbar-expand bg-white navbar-light fixed-top">
          <div className="container">
            {/* Brand */}
            <Link className="navbar-brand" to="/">
              <img src={require("../assets/images/logo.1.png")} alt="" />
            </Link>
            {/* Navbar links */}
            <div
              className="collapse navbar-collapse"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav ml-auto align-items-center">
                <li className="nav-item nav-item-col-hidden nav-item-search">
                  <form action="javascript:void(0)" onSubmit={searchResult}>
                    <div className="form-group">
                      <div className={
                        isSearchFieldSelected
                          ? "search_main search_div_activated"
                          : "search_main"
                      }>
                        <div className="input_search has-search" onMouseEnter={() => setCloseDropdownForceFully(false)}>
                          <span className="fas fa-arrow-left form-control-feedback1" />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            className={searchClassName}
                            id="input_droped_search"
                            autoComplete="off"
                            onChange={handleInput}
                            value={text}
                            name="text"
                            onKeyDown={({ key }) =>
                              key === "Enter" ? searchResult() : null
                            }
                            onClick={() => setIsSearchFieldSelected(true)}
                          />
                          <button className="btn btn-warning" type="submit">
                            <i className="fa fa-search" />
                          </button>
                        </div>
                        <NavBarSearch>
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
                                  <div className="input_dropdown_h" id="do-not-close" onMouseLeave={() => setCloseDropdownForceFully(true)}>
                                    {getProductsList().map((item, index) => {
                                      return (
                                        <React.Fragment key={index}>
                                          <Route
                                            render={({ history }) => (
                                              <div
                                                className="Search_Count_History"
                                                key={index}
                                                id="do-not-close"
                                                onClick={() => {
                                                  props.search({
                                                    text: item.title,
                                                  });
                                                  history.push(
                                                    "/search/" + item.title
                                                  );
                                                  setCloseDropdownForceFully(true)
                                                  updateText(item.title)
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
                        </NavBarSearch>
                        <div className="input_dropdown">
                          <div className="input_dropdown_h">
                            <div className="Search_Count_History">
                              <span className="count_hist">Toy</span>
                              <span className="delete_hist">
                                <i className="fas fa-times" />
                              </span>
                            </div>
                            <div className="Search_Count_History">
                              <span className="count_hist">Games</span>
                              <span className="delete_hist">
                                <i className="fas fa-times" />
                              </span>
                            </div>
                            <div className="Search_Count_History">
                              <span className="count_hist">Shoes</span>
                              <span className="delete_hist">
                                <i className="fas fa-times" />
                              </span>
                            </div>
                            <div className="Search_Count_History">
                              <span className="count_hist">Tools</span>
                              <span className="delete_hist">
                                <i className="fas fa-times" />
                              </span>
                            </div>
                            <div className="Search_Count_History">
                              <span className="count_hist">Puzzle</span>
                              <span className="delete_hist">
                                <i className="fas fa-times" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </li>
                <AddToCartPageStyle>
                  <Route
                    render={({ history }) => (
                      <Link to="/checkout" className="cart_info">
                        <div className="cart_count">
                          <img
                            src={require("../assets/images/shopping-cart.svg")}
                            alt=""
                          />
                          {props.user && (
                            <Query
                              query={getUserCart}
                              fetchPolicy="network-only"
                              variables={{ userId: props.user.userId }}
                            >
                              {({ loading, error, data }) => {
                                if (loading) return <p></p>;
                                if (error) return <p></p>;
                                console.log();
                                return (
                                  <span>{data.getUserCart.length}</span>
                                );
                              }}
                            </Query>
                          )}
                        </div>
                      </Link>
                    )}
                  />
                </AddToCartPageStyle>
                <WishlistStyle>
                  <Route
                    render={({ history }) => (
                      <Link to="/wishlist">
                        <div className="pnl-favorites">
                          <div className="pnl-ic-wrapper">
                            <span className="pnl-ic">
                              <svg
                                version="1.1"
                                id="heart-stroke"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 32 32"
                                xmlSpace="preserve"
                              >
                                <path d="M22.6,6.5c-2.9,0-5.4,1.7-6.6,4.1c-1.2-2.4-3.7-4.1-6.6-4.1C5.3,6.5,2,9.8,2,13.9C2,23.7,15.8,29,15.8,29S30,23.6,30,13.9C30,9.8,26.7,6.5,22.6,6.5L22.6,6.5z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    )}
                  />
                </WishlistStyle>
                <MainHeader style={{ padding: 0, width: 0 }}>
                  {user ? (
                    <React.Fragment>
                      <Query
                        query={getUserById}
                        variables={{ userId: user.userId }}
                        fetchPolicy="network-only"
                      >
                        {({ data }) => {
                          return (
                            <React.Fragment>
                              <div
                                className="btn-group btn-block"
                                style={{
                                  width: 0,
                                  display: 'block'
                                }}
                              >
                                {data &&
                                  data.getUserById &&
                                  data.getUserById.picture ? (
                                    <a
                                      id="navbar-brand"
                                      value={props.user.name}
                                      color={colors}
                                      href=""
                                      onClick={() => setOpened(!opened)}
                                      className="btn btn-default btn-block dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <img
                                        src={data.getUserById.picture}
                                        id="navbar-brand"
                                        alt=""
                                      />
                                    </a>
                                  ) : (
                                    <a
                                      className="navbar-brand"
                                      id="navbar-brand"
                                      value={props.user.name}
                                      color={colors}
                                      href=""
                                      onClick={() => setOpened(!opened)}
                                      bgcolor={bgcolor}
                                      style={{ backgroundColor: bgcolor }}
                                      className="btn btn-default btn-block dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <span className="first-letter">
                                        {jsUcfirst(props.user.name)}
                                      </span>
                                    </a>
                                  )}

                                <div>
                                  <ul
                                    className="dropdown-menu btn-block"
                                    role="menu"
                                    id="show"
                                    style={{ left: 30, top: '116%', width: 220 }}
                                  >
                                    <li className="profile-image-circle">
                                      {data &&
                                        data.getUserById &&
                                        data.getUserById.picture ? (
                                          <a
                                            className="navbar-brand"
                                            id="profile-image"
                                            value={props.user.name}
                                            href=""
                                          >
                                            <img
                                              src={data.getUserById.picture}
                                              alt=""
                                              id="profile-image"
                                            />
                                          </a>
                                        ) : (
                                          <a
                                            className="navbar-brand"
                                            id="profile-image"
                                            value={props.user.name}
                                            color={colors}
                                            href=""
                                            bgcolor={bgcolor}
                                            style={{
                                              backgroundColor: bgcolor,
                                            }}
                                          >
                                            <span style={{ textTransform: "capitalize" }}>
                                              {jsUcfirst(props.user.name)}
                                            </span>
                                          </a>
                                        )}
                                    </li>
                                    <li style={{ paddingTop: 15 }}>
                                      {" "}
                                      <a className="dropdown-item" href="#">
                                        {props.user.companyName}
                                      </a>
                                    </li>
                                    <li style={{ paddingTop: "30px" }}>
                                      <a className="dropdown-item" href="#">
                                        {props.user.email}
                                      </a>
                                    </li>

                                    {user && user["type"] === "business" && (
                                      <>
                                        <li className="divider"></li>
                                        <li>
                                          <div id="dropdwn-item">
                                            <Route
                                              render={({ history }) => (
                                                <PrimaryButton
                                                  onClick={(_) =>
                                                    history.push("/mystore")
                                                  }
                                                  value="Store"
                                                />
                                              )}
                                            />
                                          </div>
                                        </li>
                                      </>
                                    )}

                                    <li className="divider"></li>
                                    <li>
                                      {" "}
                                      <div id="dropdwn-item">
                                        <SecondaryButton
                                          onClick={logout}
                                          value="Log Out"
                                        />
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>{" "}
                            </React.Fragment>
                          );
                        }}
                      </Query>
                    </React.Fragment>
                  ) : (
                      null
                    )}
                </MainHeader>
                {/* <AddToCart/> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </SearchPageStyle>
  )
}

const mapStateToProps = state => {
  const {
    authReducer: { user }
  } = state;
  return {
    user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (payload) => dispatch(searchAction.handleSearch(payload)),
    logoutAction: () => dispatch(authAction.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));

// class Navbar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       token: localStorage.getItem("token"),
//       query: this.props.search,
//       offerings: [],
//       doSearch: false,
//       text: "",
//       isSearchFieldSelected: false,
//     };
//   }

//   async Search(query) {
//     if (!this.state.doSearch) return;
//     const offerings = await this.props.client
//       .query({
//         query: QUERIES.OFFERINGS,
//         variables: { query }
//       })
//       .then(res => res.data.Offerings)
//       .catch(err => {
//         NotificationManager.error("Error searching");
//       });

//     if (offerings) {
//       console.log(offerings);
//       this.setState({ offerings: offerings });
//     }
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextState.query && nextState.query !== this.state.query) {
//       this.Search(nextState.query);
//       return true;
//     }
//     if (this.state.offerings.length !== nextState.offerings.length) {
//       return true;
//     }
//     return false;
//   }
//   handleInput = (e) => {
//     console.log(e.target.name, e.target.value)
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }
//   searchResult = () => {
//     let { text } = this.state;
//     let payload = {
//       text,
//     };
//     const { query } = this.state.text;
//     this.props.search(payload);
//     if (this.state.text) {
//       return this.props.history.push("/search/" + this.state.text);
//     }
//   };

//   render() {
//     console.log(this.props);

//     const { isSearchFieldSelected, text } = this.state;

//     console.log(text)

//     const action = history => {
//       if (isMobile) {
//         history.push("/");
//         this.setState({ offerings: [] });
//       } else if (this.state.query) history.push("/search/" + this.state.query);
//     };
//     return (
//       <SearchPageStyle>
//         <div>
//           <header>
//             <nav className="navbar navbar-expand bg-white navbar-light fixed-top">
//               <div className="container">
//                 {/* Brand */}
//                 <Link className="navbar-brand" to="/">
//                   <img src={require("../assets/images/logo.1.png")} alt="" />
//                 </Link>
//                 {/* Navbar links */}
//                 <div
//                   className="collapse navbar-collapse"
//                   id="collapsibleNavbar"
//                 >
//                   <ul className="navbar-nav ml-auto">
//                     <li className="nav-item nav-item-col-hidden nav-item-search">
//                       <form className action>
//                         <div className="form-group">
//                           <div className={
//                             isSearchFieldSelected
//                               ? "search_main search_div_activated"
//                               : "search_main"
//                           }>
//                             <div className="input_search has-search">
//                               <span className="fas fa-arrow-left form-control-feedback1" />
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Search"
//                                 id="input_droped_search"
//                                 autoComplete="off"
//                                 onChange={this.handleInput}
//                                 value={text}
//                                 name="text"
//                                 onKeyDown={({ key }) =>
//                                   key === "Enter" ? this.searchResult() : null
//                                 }
//                                 onClick={() =>
//                                   this.setState({ isSearchFieldSelected: true })
//                                 }
//                               />
//                               <button className="btn btn-warning" type="submit">
//                                 <i className="fa fa-search" />
//                               </button>
//                             </div>
//                             <div className="input_dropdown">
//                               <div className="input_dropdown_h">
//                                 <div className="Search_Count_History">
//                                   <span className="count_hist">Toy</span>
//                                   <span className="delete_hist">
//                                     <i className="fas fa-times" />
//                                   </span>
//                                 </div>
//                                 <div className="Search_Count_History">
//                                   <span className="count_hist">Games</span>
//                                   <span className="delete_hist">
//                                     <i className="fas fa-times" />
//                                   </span>
//                                 </div>
//                                 <div className="Search_Count_History">
//                                   <span className="count_hist">Shoes</span>
//                                   <span className="delete_hist">
//                                     <i className="fas fa-times" />
//                                   </span>
//                                 </div>
//                                 <div className="Search_Count_History">
//                                   <span className="count_hist">Tools</span>
//                                   <span className="delete_hist">
//                                     <i className="fas fa-times" />
//                                   </span>
//                                 </div>
//                                 <div className="Search_Count_History">
//                                   <span className="count_hist">Puzzle</span>
//                                   <span className="delete_hist">
//                                     <i className="fas fa-times" />
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </form>
//                     </li>
//                     <AddToCartPageStyle>
//                       <Route
//                         render={({ history }) => (
//                           <Link to="/checkout" className="cart_info">
//                             <div className="cart_count">
//                               <img
//                                 src={require("../assets/images/shopping-cart.svg")}
//                                 alt=""
//                               />
//                               {props.user && (
//                                 <Query
//                                   query={getUserCart}
//                                   fetchPolicy="network-only"
//                                   variables={{ userId: props.user.userId }}
//                                 >
//                                   {({ loading, error, data }) => {
//                                     if (loading) return <p></p>;
//                                     if (error) return <p></p>;
//                                     console.log();
//                                     return (
//                                       <span>{data.getUserCart.length}</span>
//                                     );
//                                   }}
//                                 </Query>
//                               )}
//                             </div>
//                           </Link>
//                         )}
//                       />
//                     </AddToCartPageStyle>
//                     <WishlistStyle>
//                       <Route
//                         render={({ history }) => (
//                           <Link to="/wishlist">
//                             <div className="pnl-favorites">
//                               <div className="pnl-ic-wrapper">
//                                 <span className="pnl-ic">
//                                   <svg
//                                     version="1.1"
//                                     id="heart-stroke"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                                     x="0px"
//                                     y="0px"
//                                     viewBox="0 0 32 32"
//                                     xmlSpace="preserve"
//                                   >
//                                     <path d="M22.6,6.5c-2.9,0-5.4,1.7-6.6,4.1c-1.2-2.4-3.7-4.1-6.6-4.1C5.3,6.5,2,9.8,2,13.9C2,23.7,15.8,29,15.8,29S30,23.6,30,13.9C30,9.8,26.7,6.5,22.6,6.5L22.6,6.5z" />
//                                   </svg>
//                                 </span>
//                               </div>
//                             </div>
//                           </Link>
//                         )}
//                       />
//                     </WishlistStyle>
//                     {/* <AddToCart/> */}
//                   </ul>
//                 </div>
//               </div>
//             </nav>
//           </header>
//         </div>
//       </SearchPageStyle>
//     );
//   }
// }
// const mapStateToProps = state => {
//   const {
//     authReducer: { user }
//   } = state;
//   return {
//     user
//   };
// };

// export default connect(mapStateToProps, null)(Navbar);
