import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import PrimaryButton from "../../common/Elements/Buttons/PrimaryButton";
import Toggle from "../../common/Elements/Toggle/Toggle";
import Input from "../../common/Elements/Input/Input";
import { connect } from "react-redux";
import { LioneusAppClient } from "../../../config/graphql-clients";
import { createProduct } from "../../../graphql/new-mutations";
import { getCompanyProducts } from "../../../graphql/new-queries";
import { NotificationManager } from "react-notifications";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CropMode from "../CropImage/CropMode";
import { SignupStyle, ButtonLoader } from "../../common/assets/StyledComponent";
import Feedback from "../../common/Footer/Feedback";
import Error from "../../common/Elements/Error/Error";
class AddNewListModal extends Component {
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
  createListing = () => {
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
      pictures: files.filter((file) => file),
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
          this.props.handleModalClose();
          this.setState({ loading: false, cursor: "" });
        })
        .catch((error) => {
          if(error['message'].replace("GraphQL error: ", "") === "Transformation too large") {
            NotificationManager.error("Please upload an image less than or equal to 3MB");
          } else {
            NotificationManager.error(error.message);
          }
          this.setState({ loading: false, cursor: "" });
          // this.props.handleModalClose();
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
    const { showModal, handleModalClose } = this.props;
    const {
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
    } = this.state;

    return (
      <React.Fragment>
        <AddNewListModalStyle>
          <Modal show={showModal}>
            <Modal.Header closeButton onClick={handleModalClose}>
              <Modal.Title>New Listings</Modal.Title>
            </Modal.Header>
            <Main>
              <div className="logo">
                <Link to="/">
                  <img
                    src={require("../../common/assets/images/logo1.png")}
                    alt=""
                  />
                </Link>
              </div>
              <Modal.Body>
                <Toggle
                  primary="service"
                  secondary="product"
                  choice={(type) => this.setState({ type })}
                />
              </Modal.Body>
              <Modal.Body>
                <Input
                  type="text"
                  width="100%"
                  margin="3rem"
                  error={fieldErrors.title}
                  name={"title"}
                  value={title}
                  onChange={this.handleInput}
                />
              </Modal.Body>
              {fieldErrors.title && <Error text={fieldErrors.title} />}
              <Modal.Body>
                <Input
                  type="text"
                  area
                  height="10rem"
                  width="100%"
                  style={
                    fieldErrors.description ? { borderColor: "red" } : null
                  }
                  error={fieldErrors.description}
                  margin="3rem"
                  name={"description"}
                  value={description}
                  onChange={this.handleInput}
                />
              </Modal.Body>
              {fieldErrors.description && (
                <Error text={fieldErrors.description} />
              )}
              <Modal.Body>
                <Input
                  type="number"
                  width="30%"
                  margin="3rem"
                  name={"amount"}
                  value={amount}
                  error={fieldErrors.amount}
                  onChange={this.handleInput}
                />
              </Modal.Body>
              {fieldErrors.amount && <Error text={fieldErrors.amount} />}
            </Main>
            <Modal.Body>
              {mode === "upload" && (
                <Images>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-12 rounded">
                        <div className="">
                          <div className="row" id="all-aimages">
                            {this.state.files.map((file, index) => {
                              return (
                                <div className="col-lg-4 mb-2 p-1">
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
                                        <div
                                          className="image-navigations text-center"
                                          style={{ color: "white" }}
                                        >
                                          <a
                                            className="btn-sm btn-danger delete-image"
                                            title="Delet Image"
                                            onClick={() =>
                                              this.handleDelete(index)
                                            }
                                          >
                                            <i
                                              class="fa fa-trash-o"
                                              aria-hidden="true"
                                            ></i>
                                          </a>
                                          <a
                                            className="btn-sm btn-primary crop-image"
                                            title="Crop Image"
                                            onClick={() => {
                                              this.handleCropMode(file, index);
                                            }}
                                          >
                                            <i
                                              class="fa fa-crop"
                                              aria-hidden="true"
                                            ></i>
                                          </a>
                                          <a
                                            className="btn-sm btn-success preview-image"
                                            title="Preview Image"
                                            onClick={() =>
                                              this.handlePreviewMode(file)
                                            }
                                          >
                                            <i
                                              class="fa fa-eye"
                                              aria-hidden="true"
                                            ></i>
                                          </a>
                                        </div>
                                      </ImageButtons>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
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
                          <h5 className="modal-title" id>
                            Business image
                          </h5>
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
                                    src
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
                            Close
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
                        Store Image
                      </h5>
                      <button
                        type="button"
                        onClick={() =>
                          this.setState({ previewImage: null, mode: "upload" })
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
                          this.setState({ previewImage: null, mode: "upload" })
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
            </Modal.Body>
            {/* <Modal.Footer> */}
            <SignupStyle style={{ width: "100%" }}>
              <section className="main">
                <div className="container">
                  <div className="">
                    <div className="ub_form_buttons d-flex justify-content-between pt-3">
                      <div className="ub_signin_btn">
                        <Button>
                          <div className="btn btn-success" id="upload-trigger">
                            <i
                              className="fa fa-upload"
                              style={{ padding: "5px" }}
                            />
                            <input
                              type="file"
                              className="custom-file-input"
                              onChange={this.handleUploadFile}
                              multiple
                            />
                            Upload
                          </div>
                        </Button>
                      </div>
                      <div>
                        <PrimaryButton
                          disabled={!this.createListing}
                          value={
                            loading ? (
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
                              "Create"
                            )
                          }
                          style={{ height: "3rem" }}
                          cursors={cursor}
                          onClick={this.createListing}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SignupStyle>
            {/* </Modal.Footer> */}
          </Modal>
        </AddNewListModalStyle>
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
const ImageButtons = styled.div`
  .image-navigations a {
    margin: 5px;
  }
`;

const AddNewListModalStyle = styled.div`
  // padding: 30px;
  .btn-secondary {
    background-color: red;
    border: 1px solid red;
  }
  .btn-secondary:hover {
    background-color: green;
    border: 1px solid green;
  }
  .not-allowed {
    cursor: not-allowed !important;
  }
  a.btn.disabled,
  fieldset:disabled a.btn {
    pointer-events: all;
  }

  button:disabled,
  button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;
const Main = styled.div`
  .logo {
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    .logo img {
      max-width: 100px;
    }
  }
  .logo img {
    margin: auto;
    width: 100px;
  }
  .custom-ul {
    margin-bottom: auto;
    margin-left: 15px;
  }
`;
const Button = styled.div`
  .btn-secondary {
    background-color: white;
    border: 1px solid white;
  }
  .btn-secondary:hover {
    background-color: green;
    border: 1px solid green;
  }
  .btn-success {
    // padding: 8px 16px; */
    display: -webkit-box;
    padding: 0.3rem 1rem;
    display: -webkit-flex;
    display: -ms-flexbox;
    font-size: 1rem;
    display: flex;
  }
  F .custom-file-input::-webkit-file-upload-button {
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
  @media screen and (max-width: 576px) {
    .btn-success {
      font-size: 14px;
    }
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

export default connect(mapStateToProps, {})(AddNewListModal);
