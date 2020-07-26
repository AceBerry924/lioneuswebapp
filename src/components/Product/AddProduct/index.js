import React from "react";
import Popover from "react-popover";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import {
  SignupStyle,
  ImageButtons,
  ButtonLoader,
  UplaodButtons,
} from "../../common/assets/StyledComponent";
import Modal from "react-bootstrap/Modal";
import CropMode from "../CropImage/CropMode";
import PrimaryButton from "../../common/Elements/Buttons/PrimaryButton";
import { Label } from "../../common/Footer/StyledComponent/StyledComponent";
import { LioneusAppClient } from "../../../config/graphql-clients";
import { createProduct } from "../../../graphql/new-mutations";
import { getCompanyProducts } from "../../../graphql/new-queries";
import Footer from "../../common/Footer/Footer";
import Input from "../../common/Elements/Input/Input";
import Error from "../../common/Elements/Error/Error";
import Toggle from "../../common/Elements/Toggle/Toggle";
import UploadProductButton from "./UploadProductButton";
import PreviewProductButton from "./PreviewProductButton";

class AddProduct extends React.Component {
  state = {
    type: "service",
    title: "",
    description: "",
    amount: "",
    files: [],
    loading: false,
    mode: "upload",
    cropingImage: null,
    previewImage: null,
    fieldErrors: {},
    cursor: "disabled",
    nextFeature: false,
  };

  handleDelete = (index) => {
    const list = this.state.files;
    list.splice(index, 1);
    this.setState({ files: list });
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      const { title, description, amount } = this.state;
      if (title && description && amount) {
        this.setState({
          cursor: "",
        });
      }
    });
  };

  handleUploadFile = (event) => {
    const { files } = event.target;
    if (files && files.length) {
      Object.keys(files).map((key) => {
        // let file = { name: f.name, size: f.size, type: f.type };
        let reader = new FileReader();
        reader.onload = (e) => {
          this.setState({
            files: [
              ...this.state.files.filter((item) => item),
              ,
              e.target.result,
            ],
          });
        };
        reader.readAsDataURL(files[key]);
      });
    }
  };
  isFormValid = () => {
    const { title, description, amount } = this.state;

    return title && description && amount;
  };
  createListing = (e) => {
    e.preventDefault();
    let { type, title, description, amount, files, fieldErrors } = this.state;
    const {
      user: { userId },
    } = this.props;
    let input = {
      companyId: userId,
      title,
      description,
      amount,
      type,
      pictures: files.filter((file) => URL.createObjectURL(file)),
    };
    this.setState({ loading: true });
    if (type && title && description && amount && files) {
      LioneusAppClient.mutate({
        mutation: createProduct,
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
            type: "service",
            title: "",
            description: "",
            amount: "",
            files: [],
            loading: false,
          });
          NotificationManager.success("Successfully uploaded product!");
          this.props.history.push("/mystore");
          this.setState({ loading: false, cursor: "" });
        })
        .catch((error) => {
          if (
            error["message"].replace("GraphQL error: ", "") ===
            "Transformation too large"
          ) {
            NotificationManager.error(
              "Please upload an image less than or equal to 3MB"
            );
          } else {
            NotificationManager.error(error.message);
          }
          this.setState({ loading: false, cursor: "" });
        });
    } else {
      if (!title) fieldErrors["title"] = "Enter a title";
      if (!description) fieldErrors["description"] = "Enter a description";
      if (!amount) fieldErrors["amount"] = "Enter an amount";
      if (!files) fieldErrors["file"] = "Select atlease one file file";
      this.setState({ loading: false, cursor: "disabled" });
    }

    this.setState({ fieldErrors });
  };

  handleCropMode = (file, index) => {
    this.setState({
      mode: "croping",
      cropingImage: file,
      cropIndex: index,
    });
  };

  handlePreviewMode = (file) => {
    this.setState({
      mode: "preview",
      previewImage: file,
    });
  };

  croppedImage = (file, index) => {
    const { files } = this.state;
    files[index] = file;
    this.setState({
      mode: "upload",
      cropingImage: null,
      cropIndex: null,
      files,
    });
  };

  render() {
    const {
      showModal,
      handleModalClose,
      location,
      user: { userId },
    } = this.props;

    const {
      type,
      title,
      description,
      amount,
      loading,
      mode,
      cropingImage,
      cropIndex,
      previewImage,
      fieldErrors,
      cursor,
      files,
      nextFeature,
    } = this.state;

    const detail = {
      companyId: userId,
      title,
      description,
      amount,
      type,
      pictures: files.filter((file) => file),
    };

    return (
      <React.Fragment>
        <SignupStyle>
          <section className="main">
            <div className="container">
              <form action=".">
                <div className="ub_form">
                  <Form>
                    <div className="form-si-header position-relative">
                      <img
                        src={require("../../common/assets/images/logo1.png")}
                        alt=""
                      />
                      <h3>Add Product</h3>
                      <Link
                        to={{
                          pathname: "/preview",
                          props: {
                            product: detail,
                          },
                        }}
                      >
                        <PreviewProductButton showPopover={nextFeature} />
                      </Link>
                      {/* <Toggle
                        primary="service"
                        secondary="product"
                        style={{ margin: "10px" }}
                        choice={type => this.setState({ type })}
                      /> */}
                    </div>
                    <Label>
                      <div className="form-group">
                        <input
                          type="text"
                          required='required"/'
                          name={"title"}
                          value={title}
                          style={
                            fieldErrors.title ? { borderColor: "red" } : null
                          }
                          onChange={this.handleInput}
                        />
                        <label htmlFor="input" className="control-label">
                          Product title
                        </label>
                        {fieldErrors.title && (
                          <Error text={fieldErrors.title} />
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          required="required"
                          name={"amount"}
                          value={amount}
                          style={
                            fieldErrors.amount ? { borderColor: "red" } : null
                          }
                          onChange={this.handleInput}
                        />
                        <label htmlFor="input" className="control-label">
                          Product price
                        </label>
                        {fieldErrors.amount && (
                          <Error text={fieldErrors.amount} />
                        )}
                      </div>
                      <div className="form-group">
                        <textarea
                          required="required"
                          name={"description"}
                          value={description}
                          style={
                            fieldErrors.description
                              ? { borderColor: "red" }
                              : null
                          }
                          onChange={this.handleInput}
                        />
                        <label htmlFor="textarea" className="control-label">
                          Product description
                        </label>
                        {fieldErrors.description && (
                          <Error text={fieldErrors.description} />
                        )}
                      </div>
                    </Label>
                  </Form>
                  {mode === "upload" && (
                    <Images>
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-lg-12 rounded">
                            <div className="">
                              <div className="row" id="all-aimages">
                                {this.state.files.map((file, index) => {
                                  return (
                                    <div
                                      className="col-lg-4 col-6 offset-3 offset-lg-0 mb-2 p-1"
                                      key="index"
                                    >
                                      <div className="images-section">
                                        <div className="img-thumbnail">
                                          <div className="mb-1 image-container">
                                            <img
                                              src={file}
                                              alt=""
                                              key={index}
                                              style={{ width: "100%" }}
                                              className="img-fluid images-edit"
                                              id="image_01"
                                            />
                                          </div>
                                          <ImageButtons>
                                            <UplaodButtons>
                                              <div
                                                className="image-navigations text-center"
                                                style={{ color: "white" }}
                                              >
                                                <a
                                                  className="btn-sm red delete-image"
                                                  title="Delet Image"
                                                  onClick={() =>
                                                    this.handleDelete(index)
                                                  }
                                                >
                                                  <i
                                                    className="fa fa-trash-o"
                                                    aria-hidden="true"
                                                  ></i>
                                                </a>
                                                <a
                                                  className="btn-sm blue crop-image"
                                                  title="Crop Image"
                                                  onClick={() => {
                                                    this.handleCropMode(
                                                      file,
                                                      index
                                                    );
                                                  }}
                                                >
                                                  <i
                                                    className="fa fa-crop"
                                                    aria-hidden="true"
                                                  ></i>
                                                </a>
                                                <a
                                                  className="btn-sm green preview-image"
                                                  title="Preview Image"
                                                  onClick={() =>
                                                    this.handlePreviewMode(file)
                                                  }
                                                >
                                                  <i
                                                    className="fa fa-eye"
                                                    aria-hidden="true"
                                                  ></i>
                                                </a>
                                              </div>
                                            </UplaodButtons>
                                          </ImageButtons>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                              <Crop>
                                <UplaodButtons>
                                  <UploadProductButton
                                    handleUploadFile={this.handleUploadFile}
                                    loginState={
                                      location.loginState ||
                                      location.loginState == undefined
                                    }
                                    onNext={() =>
                                      this.setState({ nextFeature: true })
                                    }
                                  />
                                </UplaodButtons>
                              </Crop>
                              <input
                                type="file"
                                multiple
                                style={{ display: "none" }}
                                id="upload-input"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="modal fade"
                        id="Image-Preview"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Business image</h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="img-thumbnail">
                                {this.state.files.map((file, index) => {
                                  return (
                                    <div>
                                      <img
                                        key={index}
                                        id="preview-image-src"
                                        className="img-fluid"
                                        src={file}
                                        alt=""
                                      />
                                      <img
                                        src="true"
                                        id="preview-image-src"
                                        className="img-fluid"
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Back
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Images>
                  )}
                  {mode === "croping" && cropingImage && (
                    <CropMode
                      cropingImage={cropingImage}
                      cropIndex={cropIndex}
                      croppedImage={this.croppedImage}
                    />
                  )}
                  {mode === "preview" && previewImage && (
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id>
                            Product image
                          </h5>
                          <button
                            type="button"
                            onClick={() =>
                              this.setState({
                                previewImage: null,
                                mode: "upload",
                              })
                            }
                            className="close"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="img-thumbnail">
                            <img
                              id="preview-image-src"
                              className="img-fluid"
                              src={previewImage}
                              alt="previewImage"
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            onClick={() =>
                              this.setState({
                                previewImage: null,
                                mode: "upload",
                              })
                            }
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Back
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="ub_form_buttons d-flex justify-content-between pt-3">
                    <div className="ub_signin_btn">
                      <Link
                        to="/mystore"
                        className="lio-btn lio-tertiary d-block w-100"
                        value="New"
                      >
                        Back
                      </Link>
                    </div>
                    <div>
                      <Button>
                        <button
                          type="submit"
                          className={
                            cursor === "disabled"
                              ? "not-allowed lio-btn lio-primary d-block w-100"
                              : "allowed lio-btn lio-primary d-block w-100"
                          }
                          onClick={this.createListing}
                        >
                          {loading ? (
                            <ButtonLoader>
                              <div className="d-flex justify-content-center">
                                <div
                                  className="spinner-border text-warning"
                                  role="status"
                                >
                                  <span className="sr-only">Loading...</span>
                                </div>
                              </div>
                            </ButtonLoader>
                          ) : (
                            "List"
                          )}
                        </button>
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </SignupStyle>
        <Footer />
      </React.Fragment>
    );
  }
}
const Images = styled.div`
  .img-fluid {
    height: 100px;
    width: 100px;
  }
`;
const Button = styled.div`
  .not-allowed {
    cursor: not-allowed !important;
  }
  .allowed {
    cursor: pointer;
  }
`;
const Form = styled.div`
  .custom-ul {
    margin-top: 10px;
    margin-bottom: inherit;
  }
`;
const Crop = styled.div`
  .green {
    height: 50px;
    width: 50px;
    border-radius: 4em;
    display: flex;
    margin: auto;
    color: #0f9d58;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease 0s;
  }
  .green:hover {
    // box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.22);
    // transition: 0.3s;
  }
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    content: "Select some files";
    display: inline-block;
    background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  .custom-file-input:hover::before {
    border-color: black;
  }
  .custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
  .custom-file-input {
    width: 200px;
    position: absolute;
  }
`;

const mapStateToProps = (state) => {
  const {
    authReducer: { user },
  } = state;
  return {
    user,
  };
};
export default connect(mapStateToProps, {})(AddProduct);
