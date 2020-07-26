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
class ProductTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      mode: "",
      title: this.props.title,
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
    let { title } = this.state;
    let {
      user: { userId },
    } = this.props;
    const { productId } = this.props;
    let input = {
      productId: productId,
      title: title,
      description: "",
      amount: parseFloat(),
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
          title: "",
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
          <Label style={{ display: "flex", width: "100%" }}>
            <div className="form-group" style={{ width: "80%" }}>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleInput}
                required='required"/'
              />
              <label htmlFor="input" className="control-label">
                Title
              </label>
            </div>
            <TickButton
              onClick={this.createListing}
              style={{ position: "absolute", right: "15px" }}
            />
          </Label>
        ) : (
          <h2>
            <span>{this.props.title}</span>
          </h2>
        )}
        {user && user.userId  === this.props.creatorId ? (
          <div>
            {mode === "edit" ? null : (
              <Edit>
                <EditButton onClick={this.handleShow} />
              </Edit>
            )}{" "}
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
const Edit = Styled.div`
  position : absolute;
  left: 90%;
`;
export default ProductTitle;
