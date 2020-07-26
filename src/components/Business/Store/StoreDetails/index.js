import React from "react";
import Announcements from "./Annoucements";
import Story from "./Story";
import Policies from "./Policies";
import { connect } from "react-redux";

class StoreDetail extends React.Component {

  render() {
    const { showPopover } = this.props;
    return (
      <React.Fragment>
        <Announcements user={this.props.user} showPopover={showPopover} />
        {/* lp_aci */}
        <Story user={this.props.user} />
        {/* lp_aci */}
        <Policies user={this.props.user} />
        {/* lp_aci */}
      </React.Fragment>
    );
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

export default connect(mapStateToProps, null)(StoreDetail);
