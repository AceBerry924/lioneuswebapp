import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { Mutation } from "react-apollo";
import { NotificationManager } from "react-notifications";
import styled from "styled-components";
import {
  addProductPictures,
  deleteProductPicture,
} from "../../../../graphql/new-mutations";
import {
  SignupStyle,
  ImageButtons,
  ButtonLoader,
  UplaodButtons,
} from "../../../common/assets/StyledComponent";
import CropMode from "./Crop";
import { getProduct } from "../../../../graphql/new-queries";
import { LioneusAppClient } from "../../../../config/graphql-clients";
import UploadImage from "../../../common/Elements/Buttons/UploadButton";

class ProductImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousFiles: [],
      files: [],
      show: false,
      cropingImage: null,
      previewImage: null,
      mode: "upload",
      loading: false,
      cursor: "disabled",
    };
  }
  handleUploadFile = (event) => {
    const { files } = event.target;
    if (files && files.length) {
      Object.keys(files).map((key) => {
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
      this.setState({
        cursor: "",
      });
    }
  };
  createListing = () => {
    let { files } = this.state;
    const {
      Id,
    } = this.props;
    let input = {
      productId: Id,
      pictures: files.filter((file) => file),
    };
    this.setState({ loading: true });
    if (files) {
      LioneusAppClient.mutate({
        mutation: addProductPictures,
        variables: { input },
        refetchQueries: [
          {
            query: getProduct,
            variables: { productId: this.props.Id },
          },
        ],
      })
        .then((data) => {
          this.setState({
            files: [],
            loading: false,
          });
          NotificationManager.success("Successfully uploaded picture!");
          this.handleModalClose();
          this.setState({ loading: false, cursor: "", show: true });
          this.props.reRenderSlider();
        })
        .catch((error) => {
          this.setState({ loading: false, cursor: "disabled" });
        });
    } else {
      this.setState({ loading: false, cursor: "disabled" });
    }
  };

  handleDelete = (index) => {
    const list = this.state.files;
    list.splice(index, 1);
    this.setState({ files: list });
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
    const { loading, mode, cropingImage, cropIndex, previewImage } = this.state;
    const { handleModalClose, showModal } = this.props;
    return (
      <React.Fragment>
        <div className="">
          <div className="">
            <Modal show={showModal} onHide={handleModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>Product image</Modal.Title>
              </Modal.Header>

              <Images>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12 rounded">
                      <div className="">
                        <div className="row" id="all-aimages">
                          {this.props.photo &&
                            this.props.photo.map((file, index) => {
                              return (
                                <div className="col-lg-4 mb-2 p-1">
                                  <div className="images-section">
                                    <div className="img-thumbnail">
                                      <div className="mb-1 image-container">
                                        <img
                                          src={file["image"]}
                                          alt=""
                                          key={index}
                                          style={{ width: "100%" }}
                                          className="img-fluid images-edit"
                                          id="image_01"
                                        />
                                      </div>
                                      <Mutation
                                        mutation={deleteProductPicture}
                                        onCompleted={() => {
                                          NotificationManager.success(
                                            "Successfully deleted a picture"
                                          );
                                          this.setState({
                                            show: true,
                                          });
                                          this.props.reRenderSlider();
                                        }}
                                        refetchQueries={[
                                          {
                                            query: getProduct,
                                            variables: {
                                              productId: this.props.Id,
                                            },
                                          },
                                        ]}
                                      >
                                        {(
                                          deleteProductPicture,
                                          { loading, error }
                                        ) => {
                                          if (error) {
                                            NotificationManager.error(
                                              error.message.replace(
                                                "GraphQL error: ",
                                                ""
                                              )
                                            );

                                            return <span></span>;
                                          }
                                          return (
                                            <ImageButtons>
                                              <UplaodButtons>
                                                {loading ? (
                                                  <ButtonLoader>
                                                    <div className="d-flex justify-content-center">
                                                      <div
                                                        className="spinner-border text-warning"
                                                        role="status"
                                                      >
                                                        <span className="sr-only">
                                                          Loading...
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </ButtonLoader>
                                                ) : (
                                                  <div
                                                    className="image-navigations text-center"
                                                    style={{ color: "white" }}
                                                  >
                                                    <a
                                                      className="btn-sm red delete-image"
                                                      title="Delet Image"
                                                      onClick={() => {
                                                        deleteProductPicture({
                                                          variables: {
                                                            productId: this
                                                              .props.Id,
                                                            pictureKey:
                                                              file["key"],
                                                          },
                                                        });

                                                        this.setState({
                                                          show: true,
                                                        });
                                                      }}
                                                    >
                                                      <i
                                                        class="fa fa-trash-o"
                                                        aria-hidden="true"
                                                      ></i>
                                                    </a>
                                                  </div>
                                                )}
                                              </UplaodButtons>
                                            </ImageButtons>
                                          );
                                        }}
                                      </Mutation>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}

                          {mode === "upload" && (
                            <React.Fragment>
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
                                                  class="fa fa-trash-o"
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
                                                  class="fa fa-crop"
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
                                                  class="fa fa-eye"
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
                            </React.Fragment>
                          )}
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
                          Product image
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
                          Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Images>

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
              <SignupStyle>
                <section className="main">
                  <div className="container">
                    <div className="">
                      <div className="ub_form_buttons d-flex justify-content-between pt-3">
                        <div className="ub_signin_btn">
                          <UploadImage
                            handleUploadFile={this.handleUploadFile}
                          />
                        </div>
                        <div>
                          <Button>
                            <button
                              type="submit"
                              onClick={this.createListing}
                              disabled={this.loading}
                              className={
                                this.state.cursor === "disabled"
                                  ? "not-allowed lio-btn lio-primary d-block w-100"
                                  : "allowed lio-btn lio-primary d-block w-100"
                              }
                            >
                              {loading ? (
                                <ButtonLoader>
                                  <div className="d-flex justify-content-center">
                                    <div
                                      className="spinner-border text-warning"
                                      role="status"
                                    >
                                      <span className="sr-only">
                                        Loading...
                                      </span>
                                    </div>
                                  </div>
                                </ButtonLoader>
                              ) : (
                                "Post"
                              )}
                            </button>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </SignupStyle>
            </Modal>
          </div>
        </div>
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
    box-shadow: 0 3px 4px 0px rgba(0, 0, 0, 0.25);
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

export default connect(mapStateToProps, {})(ProductImage);
