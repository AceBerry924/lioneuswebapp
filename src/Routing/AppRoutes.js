import React, { Component } from "react";
import { connect } from "react-redux";
import Routes from "./Routes";
import { authAction } from "./../store/action";
import { Auth } from "aws-amplify";
import { PageLoader } from "../components/common/assets/StyledComponent";

class AppRoutes extends Component {
  state = {
    loading: true,
    isAuthenticated: null
  };

  componentWillMount() {
    this.props.isLoggedInAction();

    Auth.currentAuthenticatedUser()
      .then(user => {
        this.setState({
          loading: false,
          isAuthenticated: true
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          isAuthenticated: false
        });
      });
  }

  render() {
    const { loading, isAuthenticated } = this.state;
    if (loading)
      return (
        <PageLoader>
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-warning" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </PageLoader>
      );
    return <Routes childProps={{ isAuthenticated }} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isLoggedInAction: () => dispatch(authAction.isLoggedIn())
  };
};

export default connect(null, mapDispatchToProps)(AppRoutes);
