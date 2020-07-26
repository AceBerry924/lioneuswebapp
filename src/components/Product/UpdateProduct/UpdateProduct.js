import React, { Component } from "react";
import { connect } from "react-redux";
import { LioneusAppClient } from "../../../config/graphql-clients";
import { updateProduct } from "../../../graphql/new-mutations";
import { NotificationManager } from "react-notifications";
import { getCompanyProducts } from "../../../graphql/new-queries";
import Description from "./Description/Description";
import Amount from "./Amount/Amount";
import ProductTitle from "./Title/Title";

class UpdateProduct extends Component {
  state = {
    title: "",
    description: "",
    amount: "",
    mode: "",
    loading: false,
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  createListing = () => {
    console.log(this.props.productId);
    let { title, description, amount } = this.state;
    let {
      user: { userId },
    } = this.props;
    const { productId } = this.props;
    let input = {
      productId: productId,
      title: title,
      description: description,
      amount: parseFloat(amount),
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
      ],
    })
      .then((data) => {
        this.setState({
          title: "",
          description: "",
          amount: "",
          loading: false,
        });
        NotificationManager.success("Successfully uploaded product!");
      })
      .catch((error) => {
        NotificationManager.error(error.message);
        this.setState({ loading: false });
      });
  };

  render() {
    const { showModal, handleModalClose } = this.props;
    const { title, description, amount, loading } = this.state;

    return (
      <React.Fragment>
        <updateProduct>
          <div style={{ display: "flex" }}>
            <ProductTitle
              user={this.props.user}
              productId={this.props.productId}
              title={this.props.title}
              creatorId={this.props.creatorId}
            />
          </div>
          <Description
            className="description"
            user={this.props.user}
            productId={this.props.productId}
            description={this.props.description}
            creatorId={this.props.creatorId}
          />
          <Amount
            user={this.props.user}
            productId={this.props.productId}
            amount={this.props.amount}
            creatorId={this.props.creatorId}
          />
        </updateProduct>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    authReducer: { user },
  } = state;
  return {
    user,
  };
};

export default connect(mapStateToProps, {})(UpdateProduct);
