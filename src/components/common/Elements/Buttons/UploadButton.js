import React from "react";
import styled from "styled-components";

export default function UploadImage({ value = "(value)", handleUploadFile,  ...rest  } = {}) {
  return (
    <Button {...rest}>
      <div className="btn btn-success" id="upload-trigger">
        {/* <i className="fa fa-upload" style={{ padding: "5px" }} /> */}
        <input
          type="file"
          className="custom-file-input"
          onChange={handleUploadFile}
          multiple
        />
        Picture
      </div>
      {/* <button className="button">
        {value}
      </button> */}
    </Button>
  );
}

const Button = styled.div`
  .btn-secondary {
    background-color: green;
    border: 1px solid green;
  }
  .btn-secondary:hover {
    background-color: red;
    border: 1px solid red;
  }
  .btn-success {
    padding: 8px 16px;
    display: flex;
    color: white;
    background-color: #0F9D58;
    border-color: #0F9D58;
    transition: all 0.3s ease 0s;
    box-shadow: 0 0 4px rgba(15,157,88, 0.8);
  }
  .btn-success:hover {
    transition: all 0.3s ease 0s;
    box-shadow: 0 0 2px rgba(38,166,104, 0.8);
    background-color: #26a668;
    border-color: #26a668;
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
    border- color: black;
  }
  .custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
  .custom-file-input {
    width: 200px;
    position: absolute;
  }
`;
