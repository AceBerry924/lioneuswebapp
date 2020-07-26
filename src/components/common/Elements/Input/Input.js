import React from "react";
import styled from "styled-components";
import { Label } from "../../Footer/StyledComponent/StyledComponent";

export default function (props) {
  const { area, label, value, name, type, onChange, error } = props;
  console.log(error)
  return area ? (
    <FormGroup>
      <Label>
        <TextArea required='required"/' {...props} style={error ? { border: '1px solid red' } : null}/>
        <label htmlFor="input" className="control-label">
          {label}
        </label>
      </Label>
    </FormGroup>
  ) : (
    <FormGroup>
      <Label>
        <div className="form-group">
          <input
            required='required"/'
            value={value}
            name={name}
            type={type}
            style={error ? { borderColor: "red" } : null}
            onChange={onChange}
            {...props}
          />
          <label htmlFor="input" className="control-label">
            {label}
          </label>
        </div>
      </Label>
    </FormGroup>
  );
}
const FormGroup = styled.div`
  position: relative;
  .form-radio {
    position: relative;
  }

  .form-inline > .form-group,
  .form-inline > .btn {
    display: inline-block;
    margin-bottom: 0;
  }

  .form-help {
    margin-top: 0.125rem;
    margin-left: 0.125rem;
    color: #b3b3b3;
    font-size: 0.8rem;
  }
  .checkbox .form-help,
  .form-radio .form-help,
  .form-group .form-help {
    position: absolute;
    width: 100%;
  }
  .checkbox .form-help {
    position: relative;
    margin-bottom: 1rem;
  }
  .form-radio .form-help {
    padding-top: 0.25rem;
    margin-top: -1rem;
  }

  .form-group textarea {
    resize: none;
  }
  select {
    width: 100%;
    font-size: 1rem;
    height: 1.6rem;
    padding: 0.125rem 0.125rem 0.0625rem;
    background: none;
    border: none;
    line-height: 1.6;
    box-shadow: none;
  }
  .control-label {
    position: absolute;
    // pointer-events: none;
    z-index: 1;
    color: #b3b3b3;
    font-weight: normal;
    -webkit-transition: all 0.28s ease;
    transition: all 0.28s ease;
    position: absolute;
    top: 10px;
    font-size: 19px;
    margin: 0 10px;
    padding: 0 10px;
  }
  .bar {
    position: relative;
    border-bottom: 0.0625rem solid #999;
    display: block;
  }
  .bar::before {
    content: "";
    height: 0.125rem;
    width: 0;
    left: 50%;
    bottom: -0.0625rem;
    position: absolute;
    background: #c5b358;
    -webkit-transition: left 0.28s ease, width 0.28s ease;
    transition: left 0.28s ease, width 0.28s ease;
    z-index: 2;
  }
  input[type="file"] {
    line-height: 1;
  }
  input[type="file"] ~ .bar {
    display: none;
  }
  select,
  input:focus,
  input:valid,
  input.form-file,
  input.has-value {
    border: 1px solid #c5b358;
    top: -10px !important;
    height: calc(36px + 0.75rem + 2px);
    font-size: 15px !important;
    background-color: white;
  }
  textarea:focus,
  textarea:valid,
  textarea.form-file,
  textarea.has-value {
    height: auto;
    border: 1px solid #c5b358;
  }
  select ~ .control-label,
  input:focus ~ .control-label,
  input:valid ~ .control-label,
  input.form-file ~ .control-label,
  input.has-value ~ .control-label,
  textarea:focus ~ .control-label,
  textarea:valid ~ .control-label,
  textarea.form-file ~ .control-label,
  textarea.has-value ~ .control-label {
    color: #c5b358;
    top: -10px !important;
    font-size: 15px !important;
    background-color: white;
  }
  select:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }
  select:focus ~ .control-label,
  input:focus ~ .control-label,
  textarea:focus ~ .control-label {
    color: #c5b358;
    top: -10px !important;
    font-size: 15px !important;
    background-color: white;
  }
  select:focus ~ .bar::before,
  input:focus ~ .bar::before,
  textarea:focus ~ .bar::before {
    width: 100%;
    left: 0;
  }

  .checkbox label,
  .form-radio label {
    position: relative;
    cursor: pointer;
    padding-left: 2rem;
    text-align: left;
    color: #333;
    display: block;
  }
  .checkbox input,
  .form-radio input {
    width: auto;
    opacity: 0.00000001;
    position: absolute;
    left: 0;
  }
`;
const Input = styled.input`
width: 100%;
    font-size: 17px;
    color: black;
    height: calc(36px + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    box-shadow: unset !important;
    font-weight: 400;
    // border: 1px solid #ced4da;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    line-height: 1.5;
    display: block;
    // .error-val {
    //   border: 1.5px solid red !important;
    // }
    // & {
    //     // color: inherit;
    //     // padding: 1.5rem 1rem;
    //     // width: ${({ width = "30rem" }) => width};
    //     // height: ${({ height = "1rem" }) => height};
    //     // border-radius: 5px;
    //     // border: .5px solid rgba(0,0,0,0.1);
    //     // box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
    //     // transition: .2s;
    //     color: inherit;
    //     padding: 1.5rem 1rem;
    //     width: 100%;
    //     border: none;
    //     height: 1rem;
    //     /* border-radius: 5px; */
    //     border-bottom: 1px solid rgba(0,0,0,0.1);
    //     /* box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1); */
    //     -webkit-transition: .2s;
    //     transition: .2s;
    // }
`;
const TextArea = styled.textarea`
  width: 100%;
  font-size: 17px;
  color: black;
  height: calc(36px + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  box-shadow: unset !important;
  font-weight: 400;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  line-height: 1.5;
  display: block;
`;
