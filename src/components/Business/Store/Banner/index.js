import React from "react";
import { withRouter } from "react-router-dom";
import EditButton from "../../../common/Elements/Buttons/EditButton";
import { Query } from "react-apollo";
import { getUserById } from "../../../../graphql/new-queries";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import UploadImage from "../../../common/Elements/Buttons/UploadButton";

import {
  SignupStyle,
  ProfilePicture,
  ImageButtons,
  ButtonLoader,
  UplaodButtons,
} from "../../../common/assets/StyledComponent";
import { NotificationManager } from "react-notifications";
import { changeProfilePic } from "../../../../graphql/new-mutations";
import BannerCrop from "./Crop";
import { LioneusAppClient } from "../../../../config/graphql-clients";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      mode: "upload",
      cropingImage: null,
      previewImage: null,
      file: "",
      mode: "upload",
      loading: false,
    };
  }
  handleUploadFile = (event) => {
    const { files } = event.target;
    if (files && files.length) {
      Object.keys(files).map((key) => {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.setState({
            file: e.target.result,
          });
        };
        reader.readAsDataURL(files[key]);
        console.log(this.state.file);
      });
    }
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  createProfileImage = () => {
    this.uploadProfile();
  };
  delete = () => {
    this.setState({
      file: "",
    });
    console.log(this.state.file);
  };
  uploadProfile = () => {
    let { file } = this.state;
    this.setState({ loading: true });
    if (file) {
      LioneusAppClient.mutate({
        mutation: changeProfilePic,
        variables: {
          userId: this.props.user.userId,
          type: "banners",
          picture: file,
        },
        refetchQueries: [
          {
            query: getUserById,
            variables: { userId: this.props.user.userId },
          },
        ],
      })
        .then((data) => {
          this.setState({
            file: "",
            loading: false,
            show: false,
          });
          NotificationManager.success("Successfully uploaded company banner");
          console.log(data);
        })
        .catch((error) => {
          NotificationManager.error(error.message);
          this.setState({ loading: false });
        });
    } else {
      NotificationManager.error("Please choose a picture");
      this.setState({ loading: false });
    }
  };
  handleCropMode = (file) => {
    this.setState({
      mode: "crop",
    });
    console.log("handleCropMode");
    this.setState({
      mode: "crop",
      cropingImage: file,
    });
  };

  handlePreviewMode = (file) => {
    this.setState({
      mode: "preview",
      previewImage: file,
    });
    console.log(" preview");
  };

  croppedImage = (file) => {
    console.log("crop image");
    this.setState({
      mode: "upload",
      cropingImage: null,
      file,
    });
  };

  render() {
    const { user, match } = this.props;
    const { file, loading, mode, previewImage, cropingImage } = this.state;

    return (
      <React.Fragment>
        <Query
          query={getUserById}
          variables={{ userId: (user ? user.userId : "") || (match.params ? match.params.id : "") }}
          fetchPolicy="network-only"
        >
          {({ data }) => {
            return (
              <div className="main">
                <div className="cover">
                  {data && data.getUserById && data.getUserById.banner ? (
                    <img src={data.getUserById.banner} alt="" />
                  ) : (
                      <img
                        src={require("../../../common/assets/images/images/Universaleinladung.png")}
                        alt=""
                      />
                    )}
                </div>
              </div>
            );
          }}
        </Query>{" "}
        <div className="profile">
          {user && (
            <EditButton
              onClick={this.handleShow}
              style={{ marginLeft: "4rem" }}
            />
          )}
          <div className="">
            <div className="">
              <Modal
                show={this.state.show}
                onHide={this.handleClose}
                animation={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Company banner</Modal.Title>
                </Modal.Header>
                {mode === "upload" && file ? (
                  <Modal.Body>
                    <div className="modal-body">
                      <div className="">
                        <ProfilePicture>
                          <img
                            id="preview-image-src"
                            className="img-fluid"
                            src={file}
                            alt="previewImage"
                          />
                        </ProfilePicture>
                        <ImageButtons>
                          <UplaodButtons>
                            <div
                              className="image-navigations text-center"
                              style={{ color: "white", marginTop: "5%" }}
                            >
                              <a
                                className="btn-sm red delete-image"
                                title="Delet Image"
                                onClick={this.delete}
                              >
                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                              </a>
                              <a
                                className="btn-sm blue crop-image"
                                title="Crop Image"
                                onClick={() => {
                                  this.handleCropMode(file);
                                }}
                              >
                                <i class="fa fa-crop" aria-hidden="true"></i>
                              </a>
                              <a
                                className="btn-sm green preview-image"
                                title="Preview Image"
                                onClick={() => this.handlePreviewMode(file)}
                              >
                                <i class="fa fa-eye" aria-hidden="true"></i>
                              </a>
                            </div>
                          </UplaodButtons>
                        </ImageButtons>
                      </div>
                    </div>
                  </Modal.Body>
                ) : null}

                {mode === "crop" ? (
                  <BannerCrop
                    cropingImage={cropingImage}
                    croppedImage={this.croppedImage}
                  />
                ) : null}
                {mode === "preview" ? (
                  <div className="modal-dialog">
                    <div className="modal-content">
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
                ) : null}
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
                            <button
                              type="submit"
                              className="lio-btn lio-primary d-block w-100"
                              onClick={this.createProfileImage}
                              disabled={this.loading}
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </SignupStyle>
              </Modal>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    authReducer: { isLoggedIn, user },
  } = state;
  return {
    isLoggedIn,
    user,
  };
};
export default connect(mapStateToProps, null)(withRouter(Banner));
