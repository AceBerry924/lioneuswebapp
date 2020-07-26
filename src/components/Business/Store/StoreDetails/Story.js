import React from "react";
import { withRouter } from "react-router-dom";
import EditButton from "../../../common/Elements/Buttons/EditButton";
import { updateUserAttribute } from "../../../../graphql/new-mutations";
import { LioneusAppClient } from "../../../../config/graphql-clients";
import { NotificationManager } from "react-notifications";
import { Query } from "react-apollo";
import { getUserById } from "../../../../graphql/new-queries";
import { Label } from "../../../common/Footer/StyledComponent/StyledComponent";
import TickButton from "../../../common/Elements/Buttons/TickButton";

class Story extends React.Component {
  constructor() {
    super();
    this.state = {
      story: "",
      mode: " ",
      show: false,
    };
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
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
    const { Annoucement, Policy, story } = this.state;
    let updateUserAttributeInput = {
      text: story,
      attributeName: "story",
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
        NotificationManager.error("Kindly fill the field first");
        // this.setState({ updateUserAttributeLoader: false });
      });
  };
  render() {
    const { user, match } = this.props;
    return (
      <React.Fragment>
        <div className="lp_aci">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="lp_detail">
                <h4>About us</h4>
                <span className="lp_detail_edit">
                  {this.state.mode === "edit" ? (
                    <TickButton onClick={this.CreateAttributes} />
                  ) : (
                    user && <EditButton onClick={this.handleShow} />
                  )}{" "}
                </span>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="lp_ci">
                <h5 />
                <Query
                  query={getUserById}
                  variables={{ userId: (user ? user.userId : "") || (match.params ? match.params.id : "") }}
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
                                name="story"
                                value={this.state.story}
                                onChange={this.handleInput}
                                required='required"/'
                                cols="80"
                                rows="4"
                              />
                              <label htmlFor="input" className="control-label">
                                About us
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
                            data.getUserById.story ? (
                              <p className="mb-0">{data.getUserById.story}</p>
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

export default withRouter(Story);
