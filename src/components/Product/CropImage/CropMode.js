import React, { Component } from "react";
import "cropperjs/dist/cropper.css";
import Cropper from "react-cropper";
import styled from "styled-components";
export default class CropMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: null,
      cropResult: null,
    };
  }

  onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ src: reader.result });
    };
    reader.readAsDataURL(files[0]);
  };

  cropImage = () => {
    if (typeof this.cropper.getCroppedCanvas() === "undefined") {
      return;
    }
    this.setState({
      cropResult: this.cropper.getCroppedCanvas().toDataURL(),
    });

    const { cropIndex } = this.props;
    this.props.croppedImage(
      this.cropper.getCroppedCanvas().toDataURL(),
      cropIndex
    );
  };

  componentDidMount() {
    const { cropingImage, cropIndex } = this.props;
    this.setState({
      src: cropingImage,
      cropIndex,
    });
  }

  render() {
    return (
      <CropStyle>
        <div style={{ width: "100%" }}>
          <div className="">
            <div className="modal-body">
              <Cropper
                style={{ height: 400, width: "100%" }}
                preview=".img-preview"
                guides={false}
                src={this.state.src}
                ref={(cropper) => {
                  this.cropper = cropper;
                }}
              />
            </div>

            <div>
              <div className="box" style={{}}>
                <h1>
                  <div className="modal-footer">
                    <button
                      type="button"
                      onClick={this.cropImage}
                      className="btn btn-primary"
                      id="crop-button"
                      data-id
                    >
                      Crop
                    </button>
                    <button
                      type="button"
                      onClick={this.cropImage}
                      className="btn btn-primary"
                      id="crop-button"
                      data-id
                    >
                      Crop
                    </button>
                  </div>
                </h1>
              </div>
            </div>
            <br />
          </div>
        </div>
      </CropStyle>
    );
  }
}
const CropStyle = styled.div`
    background-color: #007aff;
    border: 1px solid #007aff;
    box-shadow: 0 0 7px rgba(0, 122, 255, 0.8);
    transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }
  .btn-primary:hover {
    background-color: #1987ff;
    border: 1px solid #1987ff;
    box-shadow: 0 0 2px rgba(25, 135, 255, 0.8);
    transition: all 0.3s ease 0s;
  }
`;
