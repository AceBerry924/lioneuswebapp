import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { authAction } from './../store/action'

class AuthenticatedRoute extends React.Component {
  render() {
    const { component: C, props: cProps, isLoggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isLoggedIn
            ? <C {...props} {...cProps} />
            : <Redirect
              to={`/signin`}
            />}
      />
    )
  }
}

const mapStateToProps = state => {
  const {
    authReducer: { isLoggedIn, user }
  } = state;
  return {
    isLoggedIn,
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isLoggedInAction: payload => dispatch(authAction.isLoggedIn(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedRoute);

// export default ({ component: C, props: cProps, ...rest }) => {
//   return <Route
//     {...rest}
//     render={props =>
//       cProps.isAuthenticated
//         ? <C {...props} {...cProps} />
//         : <Redirect
//           to={`/signin`}
//         />}
//   />;
// }