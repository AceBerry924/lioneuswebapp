import React, { Component } from 'react';
import 'cropperjs/dist/cropper.css';
import styled from 'styled-components'
import Cropper from 'react-cropper';
import CropModel from './Crop';
import PreviewModal from './Preview';


/* global FileReader */

const src = 'https://www.oberlo.com/wp-content/plugins/oberlo-landing-pages/assets/i/course/play-thumbnail.png';

export default class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src: [],
            cropResult: null,
            show: false,
            crop: false,
            files: []
        };
        this.cropImage = this.cropImage.bind(this);
        this.onChange = this.onChange.bind(this);
        this.useDefaultImage = this.useDefaultImage.bind(this);
    }

    onChange(e) {
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
    }
    handleUploadFile = (event) => {
        const { files } = event.target
        if (files && files.length) {
            Object.keys(files).map((key) => {
                // let file = {
                //     name: f.name,
                //     size: f.size,
                //     type: f.type
                // };
                let reader = new FileReader();
                reader.onload = e => {
                    this.setState({
                        files: [...this.state.files.filter(item => item), , e.target.result]
                    });
                };
                reader.readAsDataURL(files[key]);
            })
        }
    }

    cropImage() {
        if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
            return;
        }
        this.setState({
            cropResult: this.cropper.getCroppedCanvas().toDataURL(),
        });
    }

    useDefaultImage() {
        this.setState({ src });
    }

    showModal = () => {
        this.setState({ show: true });
    };
    ShowCropModel = (file, index) => {
        this.setState({ crop: true, src: file, cropIndex : index });
    }

    hideModal = () => {
        this.setState({ show: false, crop: false });
    };

    render() {
        return (
            <React.Fragment>
                <Crop>
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 rounded">
                                <div className="card outline-info">
                                    <div className="card-header">
                                        <i className="fa fa-image" /> Upload &amp; Crop Images
                                    </div>

                                    <div className="card-body">
                                        <div className="row" id="all-aimages">
                                            {
                                                this.state.files.map((file, index) => {
                                                    return <div className="col-lg-2 mb-2 p-1">
                                                        <div className="images-section">
                                                            <div className="img-thumbnail">
                                                                <div className="mb-1 image-container">
                                                                    {/* <div className="img-preview" style={{ width: '100%', float: 'left', height: 300, overflow: 'hidden' }} /> */}
                                                                    <img src={file} className="img-fluid images-edit" id="image_01" />
                                                                </div>
                                                                <div className="image-navigations text-center">
                                                                    <a href="#" className="btn-sm btn-danger delete-image" title="Delet Image"><i className="fa fa-trash-alt" /></a>
                                                                    <a href="#" onClick={this.showModal} className="btn-sm btn-primary crop-image" title="Crop Image" ><i className="fa fa-crop-alt" /></a>
                                                                    <a href="#" onClick={ () => this.ShowCropModel(file, index) } className="btn-sm btn-success preview-image" title="Preview Image"><i className="fa fa-eye" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 })} 
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="text-center" id="message-to-hide">Upload Images</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-center">
                                        <button className="btn btn-success" id="upload-trigger"><i className="fa fa-upload" /> Upload</button>
                                    </div>
                                    <input type="file" multiple style={{ display: 'block' }} onChange={this.handleUploadFile} id="upload-input" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <main>
                        <CropModel show={this.state.show} handleClose={this.hideModal} src={this.state.src} cropper={cropper => { this.cropper = cropper; }} />
                        <PreviewModal crop={this.state.crop} handleClose={this.hideModal} cropImage={this.cropImage} cropResult={this.state.cropResult} />
                    </main>
                </Crop>
            </React.Fragment>
        );
    }
}


const Crop = styled.div`
.fade:not(.show) {
    /* opacity: 0; */
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  .modal-main {
    position:fixed;
    background: white;
    width: 80%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  
  .display-block {
    display: block;
  }
  
  .display-none {
    display: none;
  }

`