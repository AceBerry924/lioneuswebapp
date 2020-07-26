import React, { Component } from "react";
import EditButton from "../../../common/Elements/Buttons/EditButton";
import { Label } from "../../../common/Footer/StyledComponent/StyledComponent";
import TickButton from "../../../common/Elements/Buttons/TickButton";
import { LioneusAppClient } from "../../../../config/graphql-clients";
import { updateProduct } from "../../../../graphql/new-mutations";
import {
  getProduct,
  getCompanyProducts,
} from "../../../../graphql/new-queries";
import { NotificationManager } from "react-notifications";
import Styled from "styled-components";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      mode: "",
      description: this.props.description,
      loading: false,
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
  createListing = () => {
    console.log(this.props.productId);
    let { description } = this.state;
    let {
      user: { userId },
    } = this.props;
    const { productId } = this.props;
    let input = {
      productId: productId,
      description: description,
    };
    this.setState({ loading: true });

    LioneusAppClient.mutate({
      mutation: updateProduct,
      variables: { input },
      refetchQueries: [
        {
          query: getCompanyProducts,
          variables: { companyId: userId },
        },
        {
          query: getProduct,
          variables: { productId: this.props.productId },
        },
      ],
    })
      .then((data) => {
        this.setState({
          description: "",
          loading: false,
        });
        NotificationManager.success("Successfully uploaded product!");
        this.setState({
          mode: "",
        });
        // this.props.handleModalClose();
      })
      .catch((error) => {
        NotificationManager.error(error.message);
        this.setState({ loading: false });
        // this.props.handleModalClose();
      });
  };
  render() {
    const { mode } = this.state;
    const { user } = this.props;
    return (
      <React.Fragment>
        {mode === "edit" ? (
          <Label style={{ display: "flex", width: "100%", marginTop : '15px' }}>
            <div className="form-group" style={{ width: "100%" }}>
              <textarea
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleInput}
                required='required"/'
                cols="80"
                rows="20"
                height="auto"
              />
              <label htmlFor="input" className="control-label">
                description
              </label>
            </div>
            <TickButton
              onClick={this.createListing}
              style={{ position: 'absolute', right: '15px' }}
            />
          </Label>
        ) : (
          <Edit>
            <p>
              {this.props.description}{" "}
              {user && user.userId  === this.props.creatorId ? (
                <div>
                  {mode === "edit" ? null : (
                    <EditButton  onClick={this.handleShow} />
                  )}
                </div>
              ) : null}
            </p>
          </Edit>
        )}
      </React.Fragment>
    );
  }
}
const Edit = Styled.div`
  // position : absolute;
  right : 0;
 p {
    display: flex;
  }

`;
export default Description;
