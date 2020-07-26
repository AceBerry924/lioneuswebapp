import React, { Component } from 'react';
import Cropper from 'react-cropper';

const CropModel = ({ handleClose, show, children, src, cropImage , cropper}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="">
                <div className='' id="cropmodal" tabIndex={-1} role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalLabel">Crop the image</h5>
                                <button type="button" onClick={handleClose} className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="img-container">
                                    <Cropper
                                        style={{ height: 400, width: '100%' }}
                                        aspectRatio={10 / 10}
                                        preview=".img-preview"
                                        guides={false}
                                        src={src}
                                    ref={cropper}
                                    />
                                    {/* <img id="image-modal" src={require('../../common/assets/images/banner.jpg')} /> */}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button onClick={handleClose} type="button" className="btn btn-secondary" data-dismiss="modal">Back</button>
                                <button type="button" onClick={cropImage} className="btn btn-primary" id="crop-button" data-id >Crop</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button onClick={handleClose}>close</button> */}
            </section>
        </div>
    );
};

export default CropModel;