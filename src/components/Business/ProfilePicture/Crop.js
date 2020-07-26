import React, { Component } from 'react';
import './node_modules/cropperjs/dist/cropper.css';
import Cropper from 'react-cropper';
import styled from 'styled-components'
 class ProfileCrop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src: null,
            cropResult: null,
        };
    }

    onChange = (e) => {
        e.preventDefault();
        let file;
        if (e.dataTransfer) {
            file = e.dataTransfer.file;
        } else if (e.target) {
            file = e.target.file;
        }
        const reader = new FileReader();
        reader.onload = () => {
            this.setState({ src: reader.result });
        };
        reader.readAsDataURL(file);
    }

    cropImage = () => {
        if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
            return;
        }
        this.setState({
            cropResult: this.cropper.getCroppedCanvas().toDataURL(),
        });

        this.props.croppedImage(this.cropper.getCroppedCanvas().toDataURL())
    }

    componentDidMount() {
        const { cropingImage } = this.props
        this.setState({
            src: cropingImage
        })
    }

    render() {
        return (
            <CropStyle>
                <div style={{ width: '100%' }}>
                    <div className="modal-content">
                        {/* <div className="modal-header">
                            <h5 className="modal-title" id="modalLabel">Crop the image</h5>
                        </div> */}
                        <div className="modal-body">
                            <Cropper
                                style={{ height: 400, width: '100%' }}
                                // aspectRatio={10 / 10}
                                preview=".img-preview"
                                guides={false}
                                src={this.state.src}
                                ref={cropper => { this.cropper = cropper; }}
                            />
                        </div>

                        <div>
                            <div className="box" style={{}}>
                                <h1>
                                    <div className="modal-footer">
                                        <button type="button" onClick={this.cropImage} className="btn btn-primary" id="crop-button" data-id >Crop</button>
                                    </div>
                                </h1>
                            </div>
                        </div>
                        {/* <br style={{ clear: 'both' }} /> */}
                    </div>
                </div>
            </CropStyle >
        );
    }
}
const CropStyle = styled.div`
.btn-primary{
    background-color: green;
    border: 1px solid green;
}
.btn-primary:hover{
    background-color: green;
    border: 1px solid green;
}

`
export default ProfileCrop;