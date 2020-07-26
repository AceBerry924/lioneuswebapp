import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import QUERIES from "../../../graphql/queries";
import { NotificationManager } from "react-notifications";
import { withApollo, Query } from "react-apollo";
import { authAction } from "../../../store/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SecondaryButton from "../Elements/Buttons/SecondaryButton";
import { getUserById } from "../../../graphql/new-queries";
import PrimaryButton from "../Elements/Buttons/PrimaryButton";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBox = this.toggleBox.bind(this);
    this.changeBg = this.changeBg.bind(this);
    this.jsUcfirst = this.jsUcfirst.bind(this);
    this.state = {
      token: localStorage.getItem("token"),
      fullName: localStorage.getItem("fullName"),
      businessName: localStorage.getItem("businessName"),
      opened: false,
      colors: [
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
      ],
      bgcolor: "",
      firstLetter: "",
    };
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }
  logout = () => {
    this.props.logoutAction();
  };

  async getAccount() {
    const { email, password } = this.props.match.params;
    await this.props.client
      .query({
        query: QUERIES.SIGN_IN,
        variables: { email, password },
      })
      .then((res) => {
        this.setState({ user: res.data.Login });
      })
      .catch((err) => {
        NotificationManager.error(
          "Please try again - if error persists contact support@lioneus.com"
        );
        console.log({ err });
      });
  }

  componentDidMount() {
    this.props.isLoggedInAction();
    const { colors } = this.state;
    setTimeout(
      this.setState({
        bgcolor: colors[Math.floor(Math.random() * colors.length)],
      }),
      3000
    );
  }
  jsUcfirst(string) {
    return string.charAt(0);
  }
  changeBg() {
    const { colors } = this.state;
    this.setState({
      bgcolor: colors[Math.floor(Math.random() * colors.length)],
    });
  }
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <MainHeader>
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
                          width: "auto",
                          position: "absolute",
                          right: "80px",
                        }}
                      >
                        {data &&
                        data.getUserById &&
                        data.getUserById.picture ? (
                          <a
                            id="navbar-brand"
                            value={this.props.user.name}
                            color={this.state.colors}
                            href=""
                            onClick={this.toggleBox}
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
                            value={this.props.user.name}
                            color={this.state.colors}
                            href=""
                            onClick={this.toggleBox}
                            bgcolor={this.state.bgcolor}
                            style={{ backgroundColor: this.state.bgcolor }}
                            className="btn btn-default btn-block dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <span className="first-letter">
                              {this.jsUcfirst(this.props.user.name)}
                            </span>
                          </a>
                        )}

                        <div>
                          <ul
                            className="dropdown-menu btn-block"
                            role="menu"
                            id="show"
                          >
                            <li className="profile-image-circle">
                              {data &&
                              data.getUserById &&
                              data.getUserById.picture ? (
                                <a
                                  className="navbar-brand"
                                  id="profile-image"
                                  value={this.props.user.name}
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
                                  value={this.props.user.name}
                                  color={this.state.colors}
                                  href=""
                                  bgcolor={this.state.bgcolor}
                                  style={{
                                    backgroundColor: this.state.bgcolor,
                                  }}
                                >
                                  <span style={{ textTransform: "capitalize" }}>
                                    {this.jsUcfirst(this.props.user.name)}
                                  </span>
                                </a>
                              )}
                            </li>
                            <li>
                              {" "}
                              <a className="dropdown-item" href="#">
                                {this.props.user.companyName}
                              </a>
                            </li>
                            <li style={{ paddingBottom: "30px" }}>
                              <a className="dropdown-item" href="#">
                                {this.props.user.email}
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
                                  onClick={this.logout}
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
            <React.Fragment>
              <Route
                render={({ history }) => (
                  <PrimaryButton
                    style={{ height: "fit-content" }}
                    onClick={(_) => history.push("/sell")}
                    value="Sell"
                    color={this.state.colors}
                  />
                )}
              />
              <div className="row" id="consumer-section">
                <Route
                  render={({ history }) => (
                    <Link to="/signup" className="consumer-sign">
                      Sign up
                    </Link>
                  )}
                />
                <Route
                  render={({ history }) => (
                    <SecondaryButton
                      style={{ height: "fit-content" }}
                      value="Sign in"
                      onClick={(_) => history.push("/signin")}
                      className="button"
                    />
                  )}
                />
              </div>
            </React.Fragment>
          )}
        </MainHeader>
      </React.Fragment>
    );
  }
}
export const MainHeader = styled.div`
.btn.focus, .btn:focus {
  outline: none;
  box-shadow: none;
}
  grid-area: header;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  #dropdownMenuButton img{
    margin-top: 10px;
    height: 90px;
    with: 90px;
    border-radius: 50%;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  }
  @media screen and (max-width: 576px) {
    padding: 1rem 1rem;
  }
  #profile-image{
    height: 80px;
    width: 80px;
    border-radius: 100%;
    margin: 0 auto;
  }
  #consumer-section{
    padding: 0rem 1rem;
  }
  .consumer-sign{
    width: auto;
    text-align: right;
    // position: absolute;
    // right: 10%;
    color: #4c4c4c;
    font-weight: 400;
    font-size: 1rem;
    /* top: 5; */
    padding: 0.3rem 0.9rem;
  }
  #navbar-brand{
    height: 50px;
    width: 50px;
    border-radius: 100%;
    left: 100%;
  }
  .first-letter{
    position: absolute;
    left: 50%;
    color: white;
    top: 50%;
    text-transform: capitalize;
    font-size: 20px;
    transform: translate(-50%, -50%);
  }
  .profile-image-circle{
    display: table;
    width: auto;
    margin: 0 auto;
    text-align : center;
  }
  .profile-image-circle span { 
    // display: table-cell;
    color: white;
    font-size: 30px;
    vertical-align: middle;
    line-height: 70px;
    text-align: center;
}
  }
  #dropdwn-item .button{
    // padding: 0.2rem 0rem
    font-size: 1rem;
  }
  .dropdown-item{
    color: #212529;
    text-align: center;
    font-weight: 100;

  }
  .dropdown-toggle::after {
    border: none;
  }
  .dropdown-menu{
    width: auto;
  }
  #dropdwn-item{
    display: block;
    width: 70%;
    padding: 0.75rem 1.5rem;
    margin: 0 auto;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    display: flex;
    justify-content: center;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }
  #button {
    width: -webkit-fill-available;
  padding: 2px;
  }
  .navbar-brand img{
    height: 100px;
    width: 100px;
  }
  .divider{
    border-bottom: 1px solid #e4e4e4;
    margin: 0.2rem 1rem;
   
}
 #show{
    position: absolute;
    left: 50%;
    color: white;
    top: 0%;
    transform: translate(-80%, 0%);
  }
  .lnHIOO .button:after {
   margin : 0px;
   padding: 0px;
}
`;
const mapStateToProps = (state) => {
  const {
    authReducer: { user, signin, signinLoader, signinError, isLoggedIn },
  } = state;
  return {
    user,
    signin,
    signinLoader,
    signinError,
    isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutAction: () => dispatch(authAction.logout()),
    isLoggedInAction: () => dispatch(authAction.isLoggedIn()),
    signInAction: (payload) => dispatch(authAction.signin(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withApollo(Header));
