import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <div>
                        <Component {...props} />
                    </div>
                ) : (
                        <Redirect to="/signin" />
                    )
            }
        />
    )
}

PrivateRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

// const mapStateToProps = state => ({
//     isLoggedIn: state.authReducer.isLoggedIn
// });
const mapStateToProps = state => {
    const {
      authReducer: { isLoggedIn }
    } = state;
    return {
      isLoggedIn
    };
  };
  
//   const mapDispatchToProps = dispatch => {
//     return {
//       logoutAction: () => dispatch(authAction.logout()),
//       isLoggedInAction: () => dispatch(authAction.isLoggedIn()),
//     };
//   };
export default connect(mapStateToProps)(PrivateRoute);