import React from "react";
import Popover from "react-popover";
import { withRouter } from "react-router-dom";
import EditButton from "../../../common/Elements/Buttons/EditButton";
import { updateUserAttribute } from "../../../../graphql/new-mutations";
import { LioneusAppClient } from "../../../../config/graphql-clients";
import { NotificationManager } from "react-notifications";
import { Query } from "react-apollo";
import { getUserById } from "../../../../graphql/new-queries";
import { Label } from "../../../common/Footer/StyledComponent/StyledComponent";
import TickButton from "../../../common/Elements/Buttons/TickButton";

class Announcements extends React.Component {
  constructor() {
    super();
    this.state = {
      announcement: "",
      mode: " ",
      show: false,
      popoverOpen: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { showPopover } = this.props;
    if (prevProps.showPopover !== showPopover) {
      console.log(prevProps);
      console.log(prevState);
      this.setState({ popoverOpen: showPopover });
    }
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  handlePopoverClose = () => {
    this.setState({ popoverOpen: false });
  };
  handleShow = () => {
    this.setState({
      show: true,
      mode: "edit",
    });
  };
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  CreateAttributes = (e) => {
    e.preventDefault();
    const { Annoucement, Policy, announcement } = this.state;
    let updateUserAttributeInput = {
      text: announcement,
      attributeName: "announcement",
      userId: this.props.user.userId,
    };

    LioneusAppClient.mutate({
      mutation: updateUserAttribute,
      variables: { input: updateUserAttributeInput },
      refetchQueries: [
        {
          query: getUserById,
          variables: { userId: this.props.user.userId },
        },
      ],
    })
      .then((data) => {
        // this.setState({ updateUserAttributeLoader: false });
        NotificationManager.success("Policy successfully updated");
        this.setState({
          mode: "",
        });
        // this.props.gotoReview();
      })
      .catch((error) => {
        NotificationManager.error("Kindly fill the field");
        // this.setState({ updateUserAttributeLoader: false });
      });
  };
  render() {
    const { user, match } = this.props;
    const { popoverOpen } = this.state;

    const popoverProps = {
      isOpen: popoverOpen,
      place: "below",
      body: [
        <div class="mdc-content">
          <h3 class="mdc-title">Advertise here</h3>
          <div>Grow your business with Lioneus!</div>
        </div>,
        <div class="mdc-button__div">
          <span class="mdc-button__label" onClick={this.handlePopoverClose}>
            Got it
          </span>
        </div>,
      ],
      style: {
        color: "white",
        marginTop: "5px",
      },
    };

    return (
      <React.Fragment>
        <div className="lp_aci">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="lp_detail">
                <h4>
                  <span class="ad_btn">Promotion</span>
                </h4>{" "}
                <span className="lp_detail_edit">
                  {this.state.mode === "edit" ? (
                    <TickButton onClick={this.CreateAttributes} />
                  ) : (
                    user && (
                      <Popover {...popoverProps}>
                        <EditButton key="promotion" onClick={this.handleShow} />
                      </Popover>
                    )
                  )}
                </span>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="lp_ci">
                <h5 />
                <Query
                  query={getUserById}
                  variables={{
                    userId:
                      (user ? user.userId : "") ||
                      (match.params ? match.params.id : ""),
                  }}
                  fetchPolicy="network-only"
                >
                  {({ subcribeToMore, loading, error, data }) => {
                    return (
                      <React.Fragment>
                        {this.state.mode === "edit" ? (
                          <Label style={{ display: "flex" }}>
                            <div
                              className="form-group"
                              style={{ width: "85%" }}
                            >
                              <textarea
                                type="text"
                                name="announcement"
                                value={this.state.announcement}
                                onChange={this.handleInput}
                                required='required"/'
                                cols="80"
                                rows="4"
                              />
                              <label htmlFor="input" className="control-label">
                                Promotion
                              </label>
                            </div>
                            {/* <button
                              type="submit"
                              onClick={this.CreateAttributes}
                            >
                              submit
                            </button> */}
                          </Label>
                        ) : (
                          <React.Fragment>
                            {data &&
                            data.getUserById &&
                            data.getUserById.announcement ? (
                              <p className="mb-0">
                                {data.getUserById.announcement}
                              </p>
                            ) : null}
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    );
                  }}
                </Query>
              </div>
            </div>
          </div>
        </div>{" "}
      </React.Fragment>
    );
  }
}

export default withRouter(Announcements);
