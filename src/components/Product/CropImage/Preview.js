import React, { Component } from 'react';
import Cropper from 'react-cropper';
import styled from 'styled-components'
const PreviewModal = ({ handleClose, crop, children, cropResult }) => {
    const HideClassName = crop ? "modal display-block" : "modal display-none";
    return (
        <Preview>
        <div className={HideClassName}>
            <section className="modal-main">
                <div className="" id="Image-Preview" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id>Company image</h5>
                                <button type="button" onClick={handleClose} className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="img-thumbnail">
                                    <div className="img-preview" id="img-preview"/>
                                    {/* <div className="img-preview" style={{ width: '100%', float: 'left', height: 300, overflow: 'hidden' }} /> */}

                                    {/* <img style={{ width: '100%' }} src={cropResult} alt="cropped image" /> */}

                                    {/* <img src={ShowResult} id="preview-image-src" className="img-fluid" /> */}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={handleClose} className="btn btn-secondary" data-dismiss="modal">Back</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <button onClick={handleClose}>close</button> */}
            </section>
        </div>
        </Preview>
    );
};

const Preview = styled.div`
.img-preview img{
    height: 100% !important;
    width: 100% !important;
}
#img-preview{
    height: 100% !important;
    width: 100% !important;
}
`

export default PreviewModal;