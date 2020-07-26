import styled from "styled-components";

export const AboutStyle = styled.div`
  div {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    // padding-top: 5rem;
  }
  @media screen and (max-width: 900px) {
    body {
      margin: 0px 45px;
    }
  }
  h1 {
    text-align: center;
    color: #c5b358;
  }
  div {
    width: 300px;
    margin: auto;
  }
  a {
    text-decoration: none;
    color: #c5b358;
    font-weight: 500;
  }
  .about {
    margin: 7% auto;
  }
  @media screen and (max-width: 576px) {
    .about {
      margin: 40% auto;
    }
  }
  p {
    border-top: 2px dashed;
    border-color: #c5b358 !important;
    margin: 0;
    padding: 30px;
    font-size: 17px;
  }

  p:nth-child(even) {
    border-left: 2px dashed;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    margin-right: 30px;
    padding-right: 0;
  }

  p:nth-child(odd) {
    border-right: 2px dashed;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-left: 30px;
    padding-left: 0;
  }

  p:first-child {
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

  p:last-child {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  span {
    text-decoration: underline;
    font-weight: 500;
    font-size: 15px;
    color: #c5b358;
  }
`;
export const Label = styled.div`
  body,
  input,
  select,
  html,
  textarea,
  body * {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    box-sizing: border-box;
  }
  body::after,
  body::before,
  input::after,
  input::before,
  select::after,
  select::before,
  textarea::after,
  textarea::before,
  body *::after,
  body *::before {
    box-sizing: border-box;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    margin: 0 0 2em;
    color: #4c4c4c;
    font-weight: 600;
  }
  @media screen and (max-width: 600px) {
    // .container {
    // border: 0px solid #c5b358;
    // margin: 2rem auto;
    // }
  }
  .button-container {
    text-align: center;
  }

  fieldset {
    margin: 0 0 3rem;
    padding: 0;
    border: none;
  }

  .form-radio,
  .form-group {
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
  .form-group select {
    width: 100%;
    font-size: 1rem;
    height: 1.6rem;
    padding: 0.125rem 0.125rem 0.0625rem;
    background: none;
    border: none;
    line-height: 1.6;
    box-shadow: none;
  }
  .form-group .control-label {
    position: absolute;
    pointer-events: none;
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
  .form-group .bar {
    position: relative;
    border-bottom: 0.0625rem solid #999;
    display: block;
  }
  .form-group .bar::before {
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
  .form-group input,
  .form-group textarea:focus {
    border: 1px solid #c5b358;
  }
  .form-group input,
  .form-group textarea {
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
  }
  .form-group input[type="file"] {
    line-height: 1;
  }
  .form-group input[type="file"] ~ .bar,
  .PhoneInputInput[type="file"] ~ .bar {
    display: none;
  }
  .form-group select,
  .form-group input:focus,
  .form-group input:valid,
  .form-group input.form-file,
  .form-group input.has-value {
    border: 1px solid #c5b358;
    top: -10px !important;
    height: calc(36px + 0.75rem + 2px);
    font-size: 15px !important;
    background-color: white;
  }
  .form-group textarea:focus,
  .form-group textarea:valid,
  .form-group textarea.form-file,
  .form-group textarea.has-value {
    height: auto;
    border: 1px solid #c5b358;
  }
  .form-group select ~ .control-label,
  .form-group input:focus ~ .control-label,
  .form-group input:valid ~ .control-label,
  .form-group input.form-file ~ .control-label,
  .form-group input.has-value ~ .control-label,
  .form-group textarea:focus ~ .control-label,
  .form-group textarea:valid ~ .control-label,
  .form-group textarea.form-file ~ .control-label,
  .form-group textarea.has-value ~ .control-label {
    color: #c5b358;
    top: -10px !important;
    font-size: 15px !important;
    background-color: white;
  }
  .form-group select:focus,
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
  }
  .form-group select:focus ~ .control-label,
  .form-group input:focus ~ .control-label,
  .form-group textarea:focus ~ .control-label {
    color: #c5b358;
    top: -10px !important;
    font-size: 15px !important;
    background-color: white;
  }
  .form-group select:focus ~ .bar::before,
  .form-group input:focus ~ .bar::before,
  .form-group textarea:focus ~ .bar::before {
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

  .radio {
    margin-bottom: 1rem;
  }
  .radio .helper {
    position: absolute;
    top: -0.25rem;
    left: -0.25rem;
    cursor: pointer;
    display: block;
    font-size: 1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #999;
  }
  .radio .helper::before,
  .radio .helper::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    margin: 0.25rem;
    width: 1rem;
    height: 1rem;
    -webkit-transition: -webkit-transform 0.28s ease;
    transition: -webkit-transform 0.28s ease;
    transition: transform 0.28s ease;
    transition: transform 0.28s ease, -webkit-transform 0.28s ease;
    border-radius: 50%;
    border: 0.125rem solid currentColor;
  }
  .radio .helper::after {
    -webkit-transform: scale(0);
    transform: scale(0);
    background-color: #c5b358;
    border-color: #c5b358;
  }
  .radio label:hover .helper {
    color: #337ab7;
  }
  .radio input:checked ~ .helper::after {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  .radio input:checked ~ .helper::before {
    color: #c5b358;
  }

  .checkbox {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  .checkbox .helper {
    color: #999;
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    z-index: 0;
    border: 0.125rem solid currentColor;
    border-radius: 6rem;
    -webkit-transition: border-color 0.28s ease;
    transition: border-color 0.28s ease;
  }
  .checkbox .helper::before,
  .checkbox .helper::after {
    position: absolute;
    height: 0;
    width: 0.2rem;
    background-color: #337ab7;
    display: block;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    border-radius: 25rem;
    content: "";
    -webkit-transition: opacity 0.28s ease, height 0s linear 0.28s;
    transition: opacity 0.28s ease, height 0s linear 0.28s;
    opacity: 0;
  }
  .checkbox .helper::before {
    top: 0.65rem;
    left: 0.38rem;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
    box-shadow: 0 0 0 0.0625rem #fff;
  }
  .checkbox .helper::after {
    top: 0.3rem;
    left: 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .checkbox label:hover .helper {
    color: #337ab7;
  }
  .checkbox input:checked ~ .helper {
    color: #337ab7;
  }
  .checkbox input:checked ~ .helper::after,
  .checkbox input:checked ~ .helper::before {
    opacity: 1;
    -webkit-transition: height 0.28s ease;
    transition: height 0.28s ease;
  }
  .checkbox input:checked ~ .helper::after {
    height: 0.5rem;
  }
  .checkbox input:checked ~ .helper::before {
    height: 1.2rem;
    -webkit-transition-delay: 0.28s;
    transition-delay: 0.28s;
  }

  .radio + .radio,
  .checkbox + .checkbox {
    margin-top: 1rem;
  }

  .has-error .legend.legend,
  .has-error.form-group .control-label.control-label {
    color: #c5b358;
  }
  .has-error.form-group .form-help,
  .has-error.form-group .helper,
  .has-error.checkbox .form-help,
  .has-error.checkbox .helper,
  .has-error.radio .form-help,
  .has-error.radio .helper,
  .has-error.form-radio .form-help,
  .has-error.form-radio .helper {
    color: #d9534f;
  }
  .has-error .bar::before {
    background: #d9534f;
    left: 0;
    width: 100%;
  }

  .button {
    position: relative;
    background: currentColor;
    border: 1px solid currentColor;
    font-size: 1.1rem;
    color: #c5b358;
    margin: 3rem 0;
    padding: 0.5rem 2rem;
    cursor: pointer;
    outline: none;
    border-radius: 0.8rem;
    -webkit-transition: background-color 0.28s ease, color 0.28s ease,
      box-shadow 0.28s ease;
    transition: background-color 0.28s ease, color 0.28s ease,
      box-shadow 0.28s ease;
    overflow: hidden;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .button span {
    color: #fff;
    position: relative;
    z-index: 1;
  }
  .button::before {
    content: "";
    position: absolute;
    background: #071017;
    border: 50vh solid #1d4567;
    width: 30vh;
    height: 30vh;
    border-radius: 0.8rem;
    display: block;
    top: 50%;
    left: 50%;
    z-index: 0;
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) scale(0);
    transform: translate(-50%, -50%) scale(0);
  }
  .button:hover {
    color: green;
    border-radius: 0.8rem;
    /* box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2); */
  }
  /* .button:active::before, .button:focus::before {
-webkit-transition: opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;
transition: opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;
transition: transform 1.12s ease, opacity 0.28s ease 0.364s;
transition: transform 1.12s ease, opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;
-webkit-transform: translate(-50%, -50%) scale(1);
    transform: translate(-50%, -50%) scale(1);
opacity: 0;
}
.button:focus {
outline: none;
} */
  @media screen and (max-width: 767px) {
    .ub_form {
      // margin-bottom: 10%;
      // height: 120vh;
    }
  }
`;
export const HelpStyle = styled.div`
height: 250vh;
div {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  // padding-top: 3rem;
}
a {
  text-decoration: none;
}
p {
  line-height: 1.6;
}
h1 {
  color: #c5b358;
  text-align: center;
  padding-top: 10px;
  font-size: 38px;
  font-weight: 400;
}
h2 {
  font-weight: 600;
  font-size: 17px;
  color: #0F9D58;
}
.card {
  box-shadow: 0 0px 1px 0 rgba(0, 0, 0, 0.2);
  width: 600px;
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  // margin: "20% auto"
  margin: 1% auto;
}
.content-wrapper {
  width: 90%;
  max-width: 300;
  margin: 0 auto;
  padding-bottom: 10px;
  text-align: left;
}
ul {
  padding-left: 1.2em;
}
p, li {
  color:  #323232;
}
a {
  color: #4285F4;
}
ul li {
  margin-bottom:10px;
}
@media screen and (max-width: 867px) {
  .card {
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);
  width: 350px;
  border 0 solid white;
  }
}
@media screen and (max-width: 867px) {
  a, p, li  {
 font-size: 1rem;
  }
}
@media screen and (max-width : 576px){
  .card {
    margin: 30% auto;
  }
}
`;
export const TermsStyle = styled.div`
  .terms {
    margin: 1% auto;
  }
  @media screen and (max-width: 576px) {
    .terms {
      margin: 30% auto;
    }
  }
  @media screen and (max-width: 900px) {
    .container {
      padding: 20px 20px;
    }
  }
  h1 {
    color: #3c4043;
    display: inline-block;
    font-family: calibri, arial, sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.8px;
    line-height: 20px;
    margin: 1.236em 0 0.618em 0;
    text-transform: uppercase;
    padding-top: 25px;
  }
  h2 {
    color: #3c4043;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin: 0;
    padding: 64px 0 0 0;
  }
  h3 {
    color: #3c4043;
    font-weight: 50;
    font-size: 17px;
    line-height: 32px;
    margin: 0;
    padding: 64px 0 0 0;
  }
  h6 {
    color: #3c4043;
    font-weight: 50;
    font-size: 17px;
    line-height: 32px;
    margin: 0;
    padding: 64px 0 0 0;
  }
  p,
  ul {
    color: rgba(0, 0, 0, 0.87);
    letter-spacing: 0.2px;
    line-height: 24px;
    padding-top: 20px;
    margin: 10px 0;
  }
  .alignment {
    text-align: center;
  }
  a {
    color: #c5b358;
    font-weight: bold;
  }
  @media screen and (max-width: 867px) {
    p {
      font-size: 0.9rem;
    }
  }
  h5 {
    color: #3c4043;
    display: inline-block;
    font-family: calibri, arial, sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.8px;
    line-height: 20px;
    margin: 1.236em 0 0.618em 0;
    text-transform: uppercase;
    padding-top: 25px;
  }
`;
export const WhatsNewStyle = styled.div`
  .whatsNew {
    margin: 1% auto;
  }
  @media screen and (max-width: 576px) {
    .whatsNew {
      margin: 1% auto;
    }
  }
  .parent-section {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    // margin: 0rem;
  }
  .container {
    padding: 72px 48px;
    // margin: 0px 244.5px;
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 900px) {
    .container {
      padding: 72px 48px;
      padding-bottom: 9rem;
      // margin: 0px 244.5px;
      box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.25);
    }
  }
  h1 {
    color: #3c4043;
    display: inline-block;
    font-family: calibri, arial, sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.8px;
    line-height: 20px;
    margin: 1.236em 0 0.618em 0;
    text-transform: uppercase;
    padding-top: 25px;
  }
  h2 {
    color: #c5b358;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    margin: 0;
    padding: 64px 0 0 0;
    text-align: center;
  }
  h3 {
    color: #3c4043;
    font-weight: 50;
    font-size: 17px;
    line-height: 32px;
    margin: 0;
    padding: 30px 0 0 0;
    text-decoration: underline;
  }
  p,
  ul {
    color: rgba(0, 0, 0, 0.87);
    letter-spacing: 0.2px;
    line-height: 24px;
    padding-top: 20px;
    margin: 10px 0;
  }
  li {
    font-size: 15px;
    padding-left: 1px;
  }
  @media screen and (max-width: 867px) {
    a,
    p {
      font-size: 0.9rem;
    }
  }
`;

export default { AboutStyle, Label, WhatsNewStyle, HelpStyle, AboutStyle };
