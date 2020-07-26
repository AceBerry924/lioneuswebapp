import styled from "styled-components";
import { gold_hex } from "../Elements/variables";
import background from "../assets/images/landing_bg.png";
const plusButton =
  "http://www.perkom.co.id/wp-content/uploads/assets/img/icon-plus.png";

export const Main = styled.div`
  h5 {
    color: rgba(0, 0, 0, 0.6);
    font-weight: normal;
    font-size: 15px;
    line-height: 1.5;
    text-align: center;
    padding-top: 10px;
  }
  .form-si-header {
    margin-bottom: 30px;
  }
  .form-si-header p {
    color: rgba(0, 0, 0, 0.54);
    font-size: 16px;
  }
  .form-si-header h3 {
    margin: 0;
    text-align: center;
    font-size: 27px;
  }
  .form-si-header img {
    width: 100%;
    max-width: 120px;
    display: block;
    margin: auto;
  }
  .form-wrapper-signin {
    width: 480px;
    border: 1px solid #dadce0;
    margin: 20px auto;
    padding: 35px 40px;
    border-radius: 5px;
    // border-top: 5px solid #c5b358;
  }

  div.wrap_input_div .wrap_input {
    position: relative;
  }

  .wrap_input label {
    position: absolute;
    top: 10px;
    font-size: 19px;
    margin: 0 10px;
    padding: 0 10px;
    background-color: white;
    -webkit-transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out;
    transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out;
    transition: 0.2s ease all !important;
    color: #80868b;
  }
  .wrap_input .riseInput {
    width: 100%;
    font-size: 17px;
    color: black;
    box-shadow: unset !important;
  }
  .active_label {
    top: -10px !important;
    font-size: 15px !important;
    color: #c5b358 !important;
  }

  .wrap_input .riseInput:focus {
    outline: none;
  }

  .form-control:focus {
    border: 1.5px solid #c5b358 !important;
  }
  .wrap_input_div {
    margin-bottom: 10px;
  }
  .form-control {
    height: calc(36px + 0.75rem + 2px);
  }

  .btn.btn-warning {
    background: rgb(197, 179, 88);
    border-color: rgb(197, 179, 88);
    color: white !important;
  }
  .btn.btn-warning:hover {
    box-shadow: 0px 3px 4px rgba(197, 179, 88, 0.62);
  }

  .signin-submit {
    font-size: 20px;
    padding: 10px 0;
    font-weight: 500;
    border-radius: 0.25em;
  }

  .brd-t-1 {
    border-top: 1px solid #dadce0;
  }
  .pt-20 {
    padding-top: 20px;
  }
  .mt-20 {
    margin-top: 20px;
  }

  @media screen and (max-width: 576px) {
    .form-container-signin .container {
      padding: 0 !important;
    }
    .form-wrapper-signin {
      width: 100%;
      border: 0 !important;
      padding: 40px 30px;
    }
  }
  #signup-button {
    border-radius: 0.25em;
  }

  /************************* STORE SETUP *************************************/

  .form-container-storesetup .form-wrapper-signin {
    width: 750px;
  }

  span.asterik {
    color: red;
  }

  .form-container-storesetup .wrap_input_div {
    margin-bottom: 13px;
  }

  .form_errors {
  }
  .form_errors p {
    margin: 0;
    color: red;
    font-size: 13px;
    margin-bottom: 1px;
  }

  .form-container-storesetup .form-ss-header {
    margin-bottom: 20px;
  }
`;
export const ErrorsSection = styled.div`
  color: #ff2400;
  flex-direction: column;
  small {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .custom-ul li {
    position: relative;
    padding-left: 25px;
  }
  .custom-ul {
    list-style: none;
    padding-left: 0;
    font-size: 15px;
  }
  .custom-ul li:before {
    content: "";
    height: 14px;
    width: 14px;
    position: absolute;
    background-image: url("https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png");
    background-size: cover;
    background-position: center;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .error {
    width: 10px;
    height: 10px;
    margin: 3px;
  }
`;
export const ConsumerStyle = styled.div`
.form-si-header {
	margin-bottom: 30px;
}
.form-si-header h3 {
	margin: 0;
	text-align: center;
	font-size: 27px;
}
.form-si-header img {
	width: 100%;
	max-width: 120px;
	display: block;
	margin: auto;
}
#signup-button{
	border-radius: .25em
}
.signin-submit {
font-size: 20px;
padding: 10px 0;
	font-weight: 500;
	border-radius : .25em;
}
.brd-t-1 {
border-top: 1px solid #dadce0;

}
.pt-20 {
padding-top: 20px;
}
.mt-20 {
margin-top: 20px;
}
#signup-button , .signin-submit{
	width: 50%;
	margin-left: 25%;
	margin-right: 25%;
}
.auth-section{
	margin-top: 10%;
}
button {
	overflow: visible;
  }
  
  button, select {
	text-transform: none;
  }
  
  button, input, select, textarea {
	color: #5A5A5A;
	font: inherit;
	margin: 0;
  }
  
  input {
	line-height: normal;
  }
  
  textarea {
	overflow: auto;
  }
  
  #container {
	border: solid 3px #c5b358;
	max-width: 768px;
	margin: 37px auto;
	position: relative;
  }
  
  form {
	padding: 37.5px;
	margin: 50px 0;
  }
  
  h1 {
	color: #c5b358;
	font-size: 32px;
	font-weight: 600;
	letter-spacing: 2px;
	margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
	text-align: center;
  }
  p {
	width: 80%;
	max-width: 1000px;
	margin: 0 auto;
	padding-bottom: 20px;
	color: #848484;
  }
  
  .underline {
	border-bottom: solid 2px #c5b358;
	margin: -0.512em auto;
	width: 150px;
  }
  .email {
	  float: right;
	  width: 45%;
  }
  
  input[type='text'], [type='email'],[type='number'], select, textarea {
	  background: none;
	border: none;
	  border-bottom: solid 2px #c5b358;
	  color: #474544;
	  font-size: 1.000em;
	font-weight: 400;
	letter-spacing: 1px;
	  margin: 0em 0 1.875em 0;
	  padding: 0 0 0.875em 0;
	  width: 100%;
	  -webkit-box-sizing: border-box;
	  -moz-box-sizing: border-box;
	  -ms-box-sizing: border-box;
	  -o-box-sizing: border-box;
	  box-sizing: border-box;
	  -webkit-transition: all 0.3s;
	  -moz-transition: all 0.3s;
	  -ms-transition: all 0.3s;
	  -o-transition: all 0.3s;
	  transition: all 0.3s;
  }
  
  input[type='text']:focus, [type='email']:focus, textarea:focus {
	  outline: none;
	  padding: 0 0 0.875em 0;
  }
  
  .message {
	  float: none;
  }
  
  .name {
	  float: left;
	  width: 45%;
  }
  
  select {
	background: url('https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-32.png') no-repeat right;
	outline: none;
	-moz-appearance: none;
	-webkit-appearance: none;
  }
  
  select::-ms-expand {
	display: none;
  }
  
  .subject {
	width: 100%;
  }
  
  .telephone {
	width: 100%;
  }
  
  textarea {
	  line-height: 150%;
	  height: 150px;
	  resize: none;
	width: 100%;
  }
  
  ::-webkit-input-placeholder {
	  color: #707070;
  }
  
  :-moz-placeholder {
	  color: #707070;
	  opacity: 1;
  }
  
  ::-moz-placeholder {
	  color: #707070;
	  opacity: 1;
  }
  
  :-ms-input-placeholder {
	  color: #707070;
  }
  
  #form_button {
	background: none;
	border: solid 2px #c5b358;
	color: #c5b358;
	cursor: pointer;
	display: inline-block;
	font-family: 'Helvetica', Arial, sans-serif;
	font-size: 0.875em;
	font-weight: bold;
	outline: none;
	padding: 20px 35px;
	-webkit-transition: all 0.3s;
	  -moz-transition: all 0.3s;
	  -ms-transition: all 0.3s;
	  -o-transition: all 0.3s;
	  transition: all 0.3s;
	width: 35%;
	margin-left: 30%;
	margin-right: 30%
  }
  
  @media screen and (max-width: 900px) {
	#form_button {
	  width: 50%;
	  margin-left: 25%;
	  margin-right: 25%
	}
  }
  
  #form_button:hover {
	background: #c5b358;
	color: #F2F3EB;
  }
  
  @media screen and (max-width: 768px) {
	#container {
	  margin: 20px auto;
	  width: 95%;
	}
  }
  
  @media screen and (max-width: 480px) {
	h1 {
	  font-size: 26px;
	}
  
	.underline {
	  width: 68px;
	}
  
	#form_button {
	  padding: 15px 25px;
	}
  }
  @media screen and (max-width: 480px) {
	#container {
	  border: solid 1.2px #c5b358;
	}
  
  @media screen and (max-width: 420px) {
	h1 {
	  font-size: 18px;
	}
  
	.icon {
	  height: 35px;
	  width: 35px;
	}
  
	.underline {
	  width: 53px;
	}
  
	input[type='text'], [type='email'], select, textarea {
	  font-size: 0.875em;
	}
	}
`;
export const ConsumerContactForm = styled.div`
  @media screen and (max-width: 576px) {
    .react-date-picker__inputGroup__input {
      width: 30px !important;
      text-align: center;
      letter-spacing: 5px;
    }
    .react-date-picker__inputGroup__divider {
      padding: 1px 20px;
    }
    .react-date-picker__button:enabled {
      padding-left: 20px;
    }
    .react-date-picker__inputGroup__year {
      width: 60px !important;
    }
  }
  .react-date-picker__inputGroup__input {
    width: 20px !important;
    text-align: center;
    letter-spacing: 3px;
  }
  .react-date-picker__inputGroup__year {
    width: 40px !important;
  }
  .eKbODy input,
  .eKbODy input[type="radio"] + label,
  .eKbODy input[type="checkbox"] + label:before,
  .eKbODy select option,
  .eKbODy select {
    width: 100%;
    padding: 1em;
    line-height: 1.4;
    background-color: white;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    -webkit-transition: 0.35s ease-in-out;
    -moz-transition: 0.35s ease-in-out;
    -o-transition: 0.35s ease-in-out;
    -webkit-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;
    -webkit-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
    font-size: 13.3px;
  }
  .react-date-picker__inputGroup__input {
    height: auto;
  }
  .react-date-picker__wrapper {
    border: none;
  }
  .form-si-header {
    margin-bottom: 0px;
  }
  .form-si-header img {
    width: 100%;
    max-width: 120px;
    display: block;
    margin: auto;
  }
  a {
    color: #0074d9;
    text-decoration: none;
    font-size: 16px;
  }
  h4 {
    color: #c5b358;
    font-weight: 500;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  input,
  input[type="radio"] + label,
  input[type="checkbox"] + label:before,
  select option,
  select {
    width: 100%;
    padding: 1em;
    line-height: 1.4;
    background-color: white;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    -webkit-transition: 0.35s ease-in-out;
    -moz-transition: 0.35s ease-in-out;
    -o-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
    font-size: 13.3px;
  }
  input:focus {
    outline: 0;
    border-color: #c5b358;
  }
  input:focus + .input-icon i {
    color: #c5b358;
  }
  input:focus + .input-icon:after {
    border-right-color: #c5b358;
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"] + label,
  select {
    display: inline-block;
    width: 50%;
    text-align: center;
    float: left;
    border-radius: 0;
  }
  input[type="radio"] + label:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  input[type="radio"] + label:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  input[type="radio"] + label i {
    padding-right: 0.4em;
  }
  input[type="radio"]:checked + label,
  input:checked + label:before,
  select:focus,
  select:active {
    background-color: #c5b358;
    color: white;
    border-color: #c5b358;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label {
    position: relative;
    display: block;
    padding-left: 1.6em;
  }
  input[type="checkbox"] + label:before {
    position: absolute;
    top: 0.2em;
    left: 0;
    display: block;
    width: 1em;
    height: 1em;
    padding: 0;
    content: "";
  }
  input[type="checkbox"] + label:after {
    position: absolute;
    top: 0.45em;
    left: 0.2em;
    font-size: 0.8em;
    color: #c5b358;
    opacity: 0;
    font-family: calibri;
    content: "\f00c";
  }
  input:checked + label:after {
    opacity: 1;
  }
  select {
    height: 3.4em;
    line-height: 2;
  }
  select:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  select:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  select:focus,
  select:active {
    outline: 0;
  }
  select option {
    background-color: #c5b358;
    color: white;
  }
  .input-group {
    margin-bottom: 1em;
    zoom: 1;
  }
  .input-group:before,
  .input-group:after {
    content: "";
    display: table;
  }
  .input-group:after {
    clear: both;
  }
  .input-group-icon {
    position: relative;
  }
  .input-group-icon input {
    padding-left: 4.4em;
  }
  .input-group-icon .input-icon:after {
    position: absolute;
    top: 0.6em;
    bottom: 0.6em;
    left: 3.4em;
    display: block;
    border-right: 1px solid #e5e5e5;
    content: "";
    -webkit-transition: 0.35s ease-in-out;
    -moz-transition: 0.35s ease-in-out;
    -o-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
  }
  .input-group-icon .input-icon i {
    -webkit-transition: 0.35s ease-in-out;
    -moz-transition: 0.35s ease-in-out;
    -o-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
  }
  .container {
    //   max-width: 38em;
    //   padding: 1em 3em 2em 3em;
    //   margin: 2.5em auto;
    //   background-color: #fff;
    //   border-radius: 3px;
    //   border: solid 2px #c5b358;
  }
  .row {
    zoom: 1;
  }
  .row:before,
  .row:after {
    content: "";
    display: table;
  }
  .row:after {
    clear: both;
  }
  .col-half {
    padding-right: 10px;
    float: left;
    width: 50%;
    color: #c5b358;
  }
  .col-half:last-of-type {
    padding-right: 0;
  }
  .col-third {
    padding-right: 10px;
    float: left;
    width: 33.33333333%;
  }
  .col-third:last-of-type {
    padding-right: 0;
  }
  label {
    color: rgba(0, 0, 0, 0.54);
    font-size: 16px;
    padding: 0px 10px;
  }

  @media only screen and (max-width: 767px) {
    .col-half {
      width: 100%;
      padding-right: 0;
    }
  }
  @media only screen and (max-width: 767px) {
    .container {
      background-color: #fff;
      border-radius: 0px;
      border: solid 0px;
      margin: 0em auto;
      // padding: 0em 0em 0em 0em;
      padding: 10px 20px;
    }
  }
`;

export const SearchPageStyle = styled.div`
  html {
    scroll-behavior: smooth;
  }
  .GCjxY button {
    height: 30px;
    margin-left: 50px;
    width: 30px;
  }
  .navbar-brand {
  }
  .navbar-brand img {
    max-width: 65px;
  }
  .btn-warning {
    background: #c5b358;
    border-color: #c5b358;
    color: #fff;
  }
  nav {
    line-height: 0px;
  }
  .has-search button {
    position: absolute;
    right: 0;
    z-index: 99;
    display: block;
    top: 0;
    border-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  input:not([type]),
  input[type="text"]:not(.browser-default),
  input[type="password"]:not(.browser-default),
  input[type="email"]:not(.browser-default),
  input[type="url"]:not(.browser-default),
  input[type="time"]:not(.browser-default),
  input[type="date"]:not(.browser-default),
  input[type="datetime"]:not(.browser-default),
  input[type="datetime-local"]:not(.browser-default),
  input[type="tel"]:not(.browser-default),
  input[type="number"]:not(.browser-default),
  input[type="search"]:not(.browser-default),
  textarea.materialize-textarea {
    display: block;
    width: 100%;
    height: calc(1.2em + 0.85rem + 2px);
    // padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    box-sizing: border-box;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    // border-radius: .25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .z-depth-1,
  nav,
  .card-panel,
  .card,
  .toast,
  .btn,
  .btn-large,
  .btn-small,
  .btn-floating,
  .dropdown-content,
  .collapsible,
  .sidenav {
    box-shadow: none;
  }
  nav ul a {
    padding: 0px;
  }
  @media only screen and (min-width: 601px) nav,
    nav .nav-wrapper i,
    nav a.sidenav-trigger,
    nav a.sidenav-trigger i {
    line-height: 0px;
  }
  .btn-warning:hover {
    color: #212529;
    background-color: #e0a800;
    border-color: #d39e00;
  }
  .navbar-light .navbar-nav .nav-link {
    color: white;
    background: #c5b358;
    border-color: #c5b358;
  }
  // materialize classes
  .btn:visited,
  .btn-large:visited,
  .btn-small:visited {
    // background: #c5b358 !important;
    border-color: #c5b358;
    color: black;
    box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.25);
  }
  .btn:hover,
  .btn-large:hover,
  .btn-small:hover {
    background: #c5b358 !important;
    border-color: #c5b358;
    color: white;
    box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.25);
  }
  // materialize classes end
  .btn,
  .btn-large,
  .btn-small {
    color: black;
    // border-color: #c5b358 !important;
    padding: 5px 12px;
    // font-size: 0.7rem !important;
    height: 100%;
    margin-left: 15px;
    font-weight: 500;
    // border: 1.5px solid #c5b358;
    border-radius: 0.5rem;
    font-weight: 600;
  }
  .btn-outline-warning {
    color: white !important;
    border-color: #00796b !important;
    background: #00796b !important;
    padding: 5px 12px;
    font-size: 0.85rem;
    margin-left: 15px;
    font-weight: 500;
    // border: 1.5px solid #c5b358;
    border-radius: 0.4rem;
    font-weight: 600;
    // box-shadow: 0px 1px 1px rgba(0,121,107, 0.8);
    transition: all 0.3s ease 0s;
  }
  .btn-outline-warning:hover {
    background: #198679 !important;
    border-color: #198679 !important;
    color: white;
    box-shadow: 0 0 6px rgba(25, 134, 121, 0.8);
  }

  .has-search .form-control {
    padding-left: 13px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-radius: 8rem;
    // border-radius: 5px !important;
  }
  .has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    // pointer-events: none;
    color: #aaa;
  }
  .logo img {
    max-width: 470px;
    display: block;
    margin: auto;
  }
  .lioneus_content {
    width: 630px;
    display: block;
    margin: auto;
    transform: translateY(-65px);
    position: relative;
    z-index: 99;
  }
  // .lioneus_search {
  // 	height: 100vh;
  // }

  .button {
    height: 36px;
    line-height: 27px;
    outline: none;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#f5f5f5),
      to(#f1f1f1)
    );
    background-image: -webkit-linear-gradient(top, #f5f5f5, #f1f1f1);
    -webkit-border-radius: 2px;
    -webkit-user-select: none;
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    color: #5f6368;
    cursor: pointer;
    font-family: arial, sans-serif;
    font-size: 17px;
    margin: 11px 4px;
    min-width: 54px;
    padding: 0 16px;
    text-align: center;
  }
  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #aaa;
    outline: 0;
    box-shadow: unset !important;
  }
  .search_main {
    position: relative;
  }
  #btns_search button {
  }

  .input_dropdown {
    background: white;
    /* box-shadow: 0 0 5px #b5b5b5; */
    position: absolute;
    width: 100%;
    display: none;
    /*box-shadow: 0 0 6px black;*/
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #ced4da;
    border-top: 0;
    z-index: 9999999 !important;
  }

  .input_dropdown_h {
    height: 200px;
    overflow: hidden;
  }
  .Search_Count_History {
    padding: 8px 13px 8px 41px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .input_activated {
    border-radius: 15px !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  .search_div_activated {
    /*box-shadow: 0 0 6px black;*/
    border-radius: 80px;
  }

  .ft1 {
    background: #f2f2f2;
    padding: 10px 0;
    font-size: 14px;
    border-bottom: 1px solid #e4e4e4;
  }
  .ft2 {
    background: #f2f2f2;
    padding: 10px 0;
  }
  .ul_justify {
    display: flex;
    justify-content: space-between;
  }
  .ul_justify ul {
    margin: 0;
    padding: 0;
  }
  .ul_justify ul li {
    display: inline-block;
    font-size: 14px;
  }
  .ul_justify ul li a {
    padding-right: 10px;
    display: inline-block;
    color: rgba(0, 0, 0, 0.54);
  }
  .location {
    color: rgba(0, 0, 0, 0.54);
  }

  .footer {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 0;
  }
  .has-search button {
    display: none;
  }
  .btn-warning {
    background: none;
    border-color: none;
    color: #c5b358;
    border: none;
  }
  .form-control-feedback1 {
    display: none;
  }
  .has-search button {
    position: absolute;
    right: 0;
    z-index: 99;
    display: block;
    top: 0;
    border-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  @media screen and (max-width: 576px) {
    .logo img {
      max-width: 310px;
    }
    div#btns_search {
      display: none;
    }

    .ft1 {
      text-align: center;
    }

    .ul_justify {
      display: block;
      text-align: center;
    }
    .search_div_activated {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: white;
      z-index: 9;
      height: 100%;
    }
    .footer {
      position: unset;
    }
    // .lioneus_search {
    // 	height: 555px;
    // }
    .lioneus_content {
      transform: unset;
    }
    .input_activated {
      border-radius: 0 !important;
    }
    .input_dropdown {
      position: unset;
      border: 0;
    }

    .has-search .form-control {
      padding-left: 0.6rem;
      border-radius: 6px !important;
    }
    .has-search .form-control-feedback {
      display: none;
    }
    .search_div_activated .form-control-feedback1 {
      display: inline-block;
      position: absolute;
      top: 12px;
      left: 11px;
      z-index: 9999;
      color: #c5b358;
    }
    .search_div_activated .has-search .form-control {
      padding-left: 2.7rem;
    }
    .search_div_activated .has-search .form-control {
      border-radius: 0px !important;
    }
    .search_div_activated .has-search button {
      border-radius: 0px !important;
    }
  }

  .nav-item-search {
    width: 300px;
  }
  .ls_filter {
    border-bottom: 1px solid #c8c8c8;
    padding: 0 0px;
    transition: 0.3s ease all !important;
  }
  .ls_filter_action {
    background: transparent;
    border: 0;
    font-size: 18px;
    outline: none;
    border-bottom: 0.1875rem solid #c5b359;
    color: #4c4c4c;
    border-left: 0.1875rem solid transparent;
    border-right: 0.1875rem solid transparent;
    padding: 6px 14px;
  }

  .ls_filter_action:hover {
    background: #fbfbfb;
  }

  .ls_all_filters {
    padding: 20px 15px;
    background: #f4f4f4;
    // display: none;
    transition: 0.3s ease all !important;
  }
  .ls_filter_col {
  }
  .ls_filter_col h3 {
    font-size: 20px;
    margin: 12px 0;
  }
  .ls_filter_col p {
    display: inline-block;
    color: black;
    padding: 10px 10px 5px 10px;
    margin: 0;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .ls_filter_col-active {
    border-bottom: 1px solid #000;
  }

  .ls_filter_col p:hover {
    border-bottom: 1px solid #000;
  }

  .ls_filter_list {
    margin: 0;
    margin-left: 21px;
  }
  .ls_filter_list i {
    font-size: 14px;
    margin-top: 3px;
  }

  .ls_product_img {
    // padding-bottom: 100%;
    position: relative;
    height: auto;
  }
  .ls_product_img img {
    position: absolute;
    margin: auto;
    top: 0;
    height: 250px;
    width: fit-content;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    max-height: 100%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    .ls_product_img {
      height: 250px;
    }
    .ls_product_img img {
      height: 250px;
    }
  }
  @media screen and (min-width: 1400px) {
    .ls_product_img {
      height: 250px;
    }
    .ls_product_img img {
      height: 250px;
    }
  }
  @media screen and (min-width: 1600px) {
    .ls_product_img {
      height: 250px;
    }
    .ls_product_img img {
      height: 250px;
    }
  }
  @media screen and (min-width: 1900px) {
    .ls_product_img {
      height: 250px;
    }
    .ls_product_img img {
      height: 250px;
    }
  }
  #discover {
    margin: 20% 0% 30% 0%;
  }
  .ls_product {
    // margin: 15px 0;
    // border-bottom: 2px solid rgba(197, 179, 88, 0.32);
    // padding-bottom: 10px;
  }
  .ls_product_desription {
    height: 50px;
  }
  .ls_product_title p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #4c4c4c;
    padding-top: 15px;
  }
  .ls_product_desription a {
    font-size: 14px;
    color: #c5b358;
  }
  .ls_product_title a {
    color: black;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 40px;
  }
  .ls_product_title a:hover {
    text-decoration: underline;
    color: #c5b358;
  }
  .ls_product_title {
    margin-top: 10px;
  }
  .ls_product_rating p {
    display: inline-block;
    margin: 0px 0 2px 0;
  }
  .ls_product_rating p span {
    color: #ffc107;
  }

  .ls_product_price {
  }
  .ls_price_tag {
  }
  .ls_price_tag p {
    margin: 0;
    // font-size: 38px;
    font-weight: 600;
  }
  .ls_price_tag p small {
    font-size: 19px;
  }
  .ls_price_tag p span {
    color: #c5b358;
    font-size: 18px;
  }
  .ls_buy_action {
  }
  .ls_buy_action a {
  }
  section.products {
    // margin-top: 5rem;
  }

  section.filter_tab {
    margin-top: 110px;
  }
  .nav-item-search {
    height: 38px;
    margin-right: 10px;
  }

  .affix {
    box-shadow: 0 0 6px #adadad;
    transition: 0.3s ease all !important;
  }

  .ls_m_ac {
  }
  .ls_m_ac .input_dropdown {
    display: block;
  }
  .ls_iwi .input_search {
    display: block;
  }

  .ls_iwi {
    position: relative;
  }
  .ls_close_mobile_search {
    position: absolute;
  }
  .ls_iwi .form-control {
    padding-left: 43px !important;
  }
  .ls_close_mobile_search {
    position: absolute;
    width: 40px;
    text-align: center;
    height: 38px;
  }
  .ls_m_ac {
    height: 100vh;
    top: 0;
    width: 100%;
    position: fixed;
    z-index: 9999999999;
    background: white;
  }
  .ls_m_search {
    display: none;
  }
  .ls_li_mobile {
    display: none;
  }

  @media screen and (max-width: 576px) {
    .ls_product {
      margin: 15px -10px;
    }
    .ls_product_img {
      flex: 0 0 45%;
      -ms-flex: 0 0 45%;
      padding: 0 10px;
      max-width: 45%;
    }
    .ls_product_details {
      flex: 0 0 55%;
      -ms-flex: 0 0 55%;
      max-width: 55%;
      padding: 0 10px 0px 0px;
    }
    .ls_product_img img {
      position: unset;
      width: 100%;
      height: 160px;
    }
    .ls_product_title {
      margin-top: 0;
    }
    .ls_filter_col p {
      font-size: initial;
    }
    .ls_li_mobile {
      display: block;
    }
    .navbar-brand img {
      max-width: 65px;
    }
    .nav-item-search {
      width: 100%;
    }
  }
`;
export const StoreListButton = styled.div`
  a {
    text-decoration: none;
  }
  span {
    font-size: 18px;
    color: white;
    font-weight: 600;
    // text-transform: uppercase;
    letter-spacing: 1px;
  }
  button {
    display: block;
    height: 3rem;
    width: 12rem;
    margin: auto;
    border-radius: 0.3rem;
    border: 1px solid #fa8072;
    background-color: #fa8072;
    box-shadow: 0 0 6px rgba(250, 128, 114, 0.8);
    // margin: 400px auto 0;
    transition: all 0.3s ease 0s;
  }
  button:hover {
    border: 1px solid #fa8c80;
    color: white;
    background-color: #fa8c80;
    transition: all 0.3s ease 0s;
    box-shadow: 0 0 11px rgba(250, 128, 114, 0.8);
  }
`;
export const BookingStyle = styled.div`
  h1 {
    text-align: center;
    color: #c5b358;
    font-weight: 550;
    font-style: normal;
  }

  h4 {
    color: #3f3f3f;
  }

  .group:after {
    content: "";
    display: block;
    clear: both;
  }

  .landing-page {
    width: 882px;
    margin: 100px auto 0;
  }

  @media screen and (max-width: 450px) {
    .landing-page {
      width: 375px;
      margin: 1px;
    }
  }

  .landing-page *,
  .landing-page *:before,
  .landing-page *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .landing-page .module {
    border: 1px solid #c5b358;
    border-radius: 4px;
    float: left;
    padding: 2em;
    width: 48%;
  }

  .landing-page .module > *:last-child,
  .landing-page .module > *:last-child > *:last-child,
  .landing-page .module > *:last-child > *:last-child > *:last-child {
    margin: 0;
    padding: 0;
  }

  .landing-page .note {
    background-color: #c5b358;
    border: 1px dashed;
    border-radius: 4px;
    color: #c5b358;
    font-family: calibri;
    font-size: 0.9em;
    margin: 20px auto;
    padding: 2em;
  }

  .form-appointment {
    padding: 2em;
    background-color: white;
    border-radius: 4px;
    border: solid 2px #c5b358;
    font-family: calibri;
    margin: 20px auto;
  }

  @media screen and (max-width: 600px) {
    .form-appointment {
      padding: 2em;
      background-color: white;
      border-radius: 4px;
      border: solid 0px #c5b358;
      font-family: calibri;
      margin: 2px;
    }
  }

  .form-appointment input[type="text"],
  .form-appointment input[type="email"],
  .form-appointment input[type="tel"],
  .form-appointment textarea {
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    font-family: calibri;
    font-size: 1.1em;
    padding: 0.4em 1em;
    margin: 0 0 0.8em;
    /* width: 80%; */
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.08) inset;
  }

  .form-appointment input[type="text"],
  .form-appointment input[type="email"],
  .form-appointment input[type="tel"],
  .form-appointment input[type="submit"],
  .form-appointment textarea {
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }

  .form-appointment input[type="text"]:active,
  .form-appointment input[type="text"]:focus,
  .form-appointment input[type="email"]:active,
  .form-appointment input[type="email"]:focus,
  .form-appointment input[type="tel"]:active,
  .form-appointment input[type="tel"]:focus,
  .form-appointment textarea:active,
  .form-appointment textarea:focus {
    outline: 0;
    box-shadow: 0 0 6px #c5b358;
  }

  .form-appointment textarea {
    height: 160px;
  }

  .form-appointment input[type="submit"] {
    background-color: #c5b358;
    border: 1px solid #c5b358;
    border-radius: 4px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-family: inherit;
    font-size: 1.4em;
    padding: 10px 18px;
  }

  .form-appointment input[type="submit"]:hover {
    background-color: white;
    color: #c5b358;
  }

  .form-appointment .wpcf7-list-item-label {
    color: #545454;
  }

  span.wpcf7-list-item {
    display: block;
    margin-left: -0.02em;
  }

  .row.group {
    position: relative;
    top: 20px;
  }
`;
export const EditButtonStyle = styled.div`
  .profile-pic {
    position: relative;
    display: inline-block;
  }

  .profile-pic:hover .edit {
    display: block;
  }
  .edit button {
    color: white;
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    color: white;
    font-size: 20px;
    outline : none;
    z-index: 1;
    background: #0f9d58;
    padding: 8px 8px;
    border-radius: 50%;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
    border: crimson;
    line-height: 1;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    transition: all 0.3s ease 0s;
  }
  .edit button:hover {
    box-shadow: 0 0 2px rgba(38, 166, 104, 0.8);
    transition: all 0.3s ease 0s;
  }
  .fa-lg {
    font-size: 1.23333333em;
    line-height: 0;
    vertical-align: 0;
  }
`;

export const EllipsisButtonStyle = styled.div`
  .dropdown {
    position: absolute;
    top: 40px;
    right: 0;
  }
  .dropdown button {
    background: none;
    border: none;
  }
  .dropdown button i {
    color: #aaa;
    font-size: 24px;
  }
  .dropdown button:hover {
    background: none !important;
    border-color: transparent;
    box-shadow: none;
  }
  .dropdown button:focus, 
  .dropdown button:active {
    box-shadow: none;
  }
  .dropdown button:after {
    content: none !important;
  }
  .dropdown-item:active {
    background-color: #C5B358;
  }
  .dropdown-item i {
    padding-right: 0.5rem;
  }
`;

export const HideButtonStyle = styled.div`
  .button {
    text-align: center;
    cursor: pointer;
    letter-spacing: 2px;
    right: 0%;
    position: absolute;
    background-color: white;
    border: none;
    color: #c5b358;
    outline: none;
    padding: 5px 20px;
    text-align: center;
    transition-duration: 0.3s;
    overflow: hidden;
    box-shadow: 0 0 0.1px 1px #c5b358;
    border-radius: 4px;
  }

  .button:hover {
    background: white;
    color: red;
    box-shadow: 0 0 1px 1px red;
  }

  .button:after {
    content: "";
    background: #9a0000;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 1s;
  }

  .button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }

  .button:focus {
    outline: 0;
  }
`;
export const ShowButton = styled.div`
  .button {
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    // font-size: 20px;
    letter-spacing: 2px;
    position: absolute;
    right: 0%;
    background-color: white;
    border: none;
    color: green;
    outline: none;
    padding: 5px 15px;
    // width: 110px;
    text-align: center;
    transition-duration: 0.3s;
    overflow: hidden;
    box-shadow: 0 0 0.1px 1px green;
    border-radius: 4px;
    background-color: white;
  }

  .button:hover {
    background: green;
    color: white;
    box-shadow: 0 0 1px 1px #c5b358;
  }

  .button:after {
    content: "";
    background: #c5b358;
    display: block;
    position: absolute;
    opacity: 0;
    transition: all 1s;
  }

  .button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }

  .button:focus {
    outline: 0;
  }
`;

export const AddToCartStyle = styled.div`
  button {
    display: block;
    height: 40px;
    margin-left: 10px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid #c5b358;
    background-color: #c5b358;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    // margin: 400px auto 0;
    transition: all 0.3s ease 0s;
  }
  button:hover {
    box-shadow: 0 0px 2px #9b8a36;
    transition: all 0.3s ease 0s;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

export const PrimaryButtonStyle = styled.div`
  .button {
    font-family: Calibri, "Trebuchet MS", Arial, sans-serif;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.14);
    position: relative;
    background: #c5b358;
    border: 1px solid rgb(197, 179, 0);
    font-size: 1.3rem;
    color: white;
    outline: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    text-align: center;
    border-radius: 7px;
    border-radius: 0.8rem;
  }
  .button:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
    background: rgb(197, 179, 0);
    color: white;
    border: 1px solid #c5b358;
  }
  img {
    height: 1rem;
    width: auto;
    filter: brightness(0) invert(1);
  }
  @media screen and (max-width: 800px) {
    .button {
      font-size: 1rem;
    }
  }
`;

export const ExploreButtonStyle = styled.div`
  button {
    font-weight: 500;
    text-decoration: none;
    background: #009a9a;
    color: white;
    border-radius: 1rem;
    display: inline-block;
    border: 0.15rem solid #00b4b4;
    padding: 0.3rem 0.8rem;
    transition: 0.2s;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.25);
  }
  button:hover {
    color: #009a9a !important;
    text-decoration: none;
    background: white;
    border-radius: 1rem;
    display: inline-block;
    border: 0.15rem solid #009a9a;
    padding: 0.3rem 0.8rem;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.25);
  }
  @media only screen and (max-width: 920px) {
    button {
      color: white !important;
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;
      background: #009a9a;
      padding: 30px;
      border-radius: 0.5rem;
      display: inline-block;
      border: 0.15rem solid #00b4b4;
      padding: 0.3rem 0.8rem;
      transition: 0.2s;
      box-shadow: 0 0px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const StorePageStyle = styled.div`
  display: grid;
  grid-template-areas:
    "Navbar Navbar"
    "Header Header"
    "Body Body";
  .navbar {
    // padding : 0rem
  }
  .hNslOI .btn-outline-warning {
    display: none;
  }
  .UEcju button {
    display: none;
  }
  .fixed-top {
    height: 80px;
    position: absolute;
  }
  .kThVAi .footer-top {
    z-index: 200;
  }
  .pnl-favorites {
    display: none;
  }
`;
export const TitleContainer = styled.div`
  display: block;
  right: 5rem;
  bottom: 3rem;
  width: 40vw;
  height: 8vh;
  text-align: right;
  position: absolute;

  @media only screen and (max-width: 900px) {
    top: 2rem;
    left: 0;
    right: 0;
    width: 100vw;
    text-align: center;
    font-size: 1.2rem;
  }

  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .wrapper .glass {
    filter: blur(15px);
    height: 100%;
    width: 100%;
    background-position: right bottom;
  }
  .wrapper h1 {
    position: absolute;
    color: white;
    bottom: 5px;
    right: 5px;
    @media only screen and (max-width: 900px) {
      font-size: 2rem;
      bottom: 22%;
      left: 0;
      right: 0;
      margin-left: auto;
    }
  }
  .cover-upload-button {
    display: absolute;
    right: 0;
  }
  .cover-upload-button .button {
    padding: 5px 20px;
    outline: none;
  }
`;

export const Cover = styled.div`
  position: relative;
  grid-area: Header;
  overflow: hidden;
  cursor: pointer;
  .cover-picture  {
    width: 100vw;
    filter: brightness(90%);
  }
  /*h1 {
        position: absolute;
        right: 5rem;
        bottom: 3rem;
        max-width: 40vw;
        color: white;
        text-align: right;
        
        @media only screen and (max-width: 900px) {
            top: 2rem;
            left: 0;
            right: 0;
            max-width: 100vw;
            text-align: center;
            font-size: 1.2rem;
        }
    }*/
  .shader {
    position: absolute;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 70%,
      rgba(0, 0, 0, 0.76) 100%
    );
    transition: 0.3s;
  }
`;
export const Body = styled.div`
  grid-area: Body;
  display: grid;
  grid-template-columns: 30vw 68vw;
  grid-template-areas:
    "profile rest"
    "profile rest";
  @media only screen and (max-width: 900px) {
    grid-template-columns: 100vw;
    grid-template-areas:
      "profile"
      "rest";
  }
`;

export const ProfileSection = styled.div`
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.075);
  position: relative;
  overflow: hidden;
  margin-top: -50%;
  margin-left: 5rem;
  @media only screen and (max-width: 900px) {
    margin: -20% 2rem;
  }
  margin-bottom: 60px;
  border-radius: 5px;
  background-color: white;
  padding: 1rem 1rem;
  section {
    display: flex;
    flex-direction: column;
    border-bottom: 0.7px solid rgba(0, 0, 0, 0.2);
  }
  section:first-of-type {
    min-height: 15rem;
    padding: 1rem;
  }
  section:nth-of-type(2) {
    max-height: 45rem;
  }
  section:last-of-type {
    border-bottom: none;
  }
  .profile-photo {
    max-width: 100%;
  }
  h4 {
    font-weight: bold;
    text-align: center;
    padding: 1rem 0rem;
    text-decoration: underline;
    color: ${gold_hex};
  }
  .contacts {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  h6 {
    padding-left: 10px;
  }
  .story {
    line-height: 1.5rem;
  }
  .update-profile-button {
    position: absolute;
    height: 10rem;
    left: 0;
    right: 0;
    top: 0;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
    transition: 0.3s;
    transform: translateY(0rem);
    cursor: pointer;
  }
  &:hover .update-profile-button {
    transform: translateY(0);
  }
  .story-section {
    display: flex;
  }
  .story-section .button {
    padding: 5px 20px;
    right: 0%;
    outline: none;
    position: absolute;
  }
  .story-section h4 {
    width: 100%;
    padding: 0.5rem 0rem;
  }
  .update-profile-button .button {
    padding: 5px 20px;
  }
`;
export const OfferingsSection = styled.div`
  padding: 2rem 5rem;
  grid-area: rest;
  @media only screen and (max-width: 900px) {
    padding: 7rem 2rem;
  }
  .search-area {
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
  }

  input {
    width: 100%;
  }
`;
export const Announcement = styled.div`
.collapsible{
  box-shadow: 0px 0px 20px 10px rgba(0,0,0,.075);
  border-radius: 5px;
  padding: 2rem 2rem;
  min-height: 10rem;
  // border-top: 2.2rem solid ${gold_hex};
  text-align: center;
  position: relative;
  width: 100%;
}
    // box-shadow: 0px 0px 20px 10px rgba(0,0,0,.075);
    // border-radius: 5px;
    // padding: 2rem 2rem;
    // min-height: 10rem;
    // border-top: 2.2rem solid ${gold_hex};
    // text-align: center;
    // position: relative;
    // pre {
    //     line-height: 2rem;
    //     font-family: font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    //     font-size: 1.4rem;
    // }
    // p {
    //     position: absolute;
    //     top: -8%;
    //     left: 10px;
    //     color: black;
    //     // font-weight: bold;
    // }
    .annoucements-head{
      // top: -25%;
      text-align: left;
      // left: 1%;
      width: 100%;
      // position: absolute;
      color: white;
      background-color: ${gold_hex}
      border-radius: 5px 5px 0px 0px;
      padding: 8px 5px;
    }
    .annoucement-edit-button{
        position: absolute;
        right: 15%;
    }
    .annoucement-edit-button .button{
      padding: 5px 20px;
    }
    .annoucements{
      position : absolute;
      top: 20%;
      color:#717787;
    }
    .announcments-text{
      // min-height: 300px;
      background-color: white;
    }
    .toggleButton{
      display: none
    }
    .collapsible{
      padding: 0px;
    }
    li{
      list-style-type: none;
    }
    .announcement-section{
      padding: 1.5rem 2rem;
    }
    @media only screen and (max-width: 900px) {
      .annoucement-edit-button{
        position: absolute;
        right: 25%;
    }
    }
`;

export const Offerings = styled.div`
  display: grid;
  // grid-template-columns: repeat(auto-fill, 16rem);
  grid-gap: 1rem;
  overflow: auto;
  justify-content: center;
  width: 100%;
`;
export const NewOffering = styled.div`
    height: 7rem;
    width: 7rem;
    align-self: center;
    justify-self: center;
    // background-image: url(${plusButton});
    // background-repeat: no-repeat;
    // background-size: 100% auto;
    transition: .3s;
    cursor: pointer;
    &:hover {
        transform: scale(1.3);
    }
`;
export const AddToCartPageStyle = styled.div`
  html {
    scroll-behavior: smooth;
  }
  #purchase-button {
    background-color: #00796b;
    border-color: #00796b;
    font-size: 18px;
    font-weight: 600;
    width: 80%;
    border-radius: 0.4rem;
    transition: all 0.3s ease 0s;
  }
  #purchase-button:hover {
    background-color: #198679;
    border-color: #198679;
    box-shadow: 0 0 4px rgba(25, 134, 121, 0.8);
  }
  .cart-body {
    background: #f7f7f7;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1350px;
    }
  }

  div.wrap_input_div .wrap_input {
    position: relative;
  }

  .wrap_input label {
    position: absolute;
    top: 9px;
    font-size: 17px;
    margin: 0 10px;
    padding: 0 10px;
    background-color: white;
    -webkit-transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out;
    transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out;
    transition: 0.2s ease all !important;
    color: #80868b;
  }
  .wrap_input .form-control {
    width: 100%;
    font-size: 17px;
    color: black;
    box-shadow: unset !important;
  }
  .active_label {
    top: -10px !important;
    font-size: 15px !important;
    color: #c5b358 !important;
  }

  .wrap_input .riseInput:focus {
    outline: none;
  }

  /*.form-control:focus {
	border: 1.5px solid #c5b358 !important;
}
*/
  input.error-val {
    border: 1.5px solid red !important;
  }

  input.success-val {
    border: 1.5px solid green !important;
  }

  select.error-val {
    border: 1.5px solid red !important;
  }

  select.success-val {
    border: 1.5px solid green !important;
  }

  .wrap_input_div {
    margin-bottom: 15px;
  }
  .form-control {
    height: calc(30px + 0.75rem + 2px);
  }

  // .btn.btn-warning {
  //   background: rgb(197, 179, 88);
  //   border-color: rgb(197, 179, 88);
  //   color: white !important;
  // }
  .btn.btn-warning:hover {
    box-shadow: 0px 3px 4px rgba(197, 179, 88, 0.62);
  }

  .signin-submit {
    font-size: 20px;
    padding: 10px 0;
    font-weight: 500;
  }

  .brd-t-1 {
    border-top: 1px solid #dadce0;
  }

  .pt-20 {
    padding-top: 20px;
  }
  .mt-20 {
    margin-top: 20px;
  }

  /*************** Header ******************/
  header.header {
    padding: 5px 0;
    background: white;
  }

  .cart_info {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: black !important;
    text-decoration: none !important;
  }
  .cart_info span {
    font-weight: 500;
    font-size: 22px;
    padding-left: 10px;
  }
  .logo img {
    max-width: 90px;
    padding-left: 20px;
  }
  .logo {
  }
  @media (min-width: 120px) {
    .logo img {
      max-width: 80px;
      padding-left: 10px;
    }
  }
  .cart_info img {
    max-width: 35px;
  }

  .cart_count {
    position: relative;
  }
  .cart_count span {
    position: absolute;
    padding: 0;
    background: #c5b358;
    height: 20px;
    width: 20px;
    border-radius: 41px;
    line-height: 17px;
    font-size: 13px;
    color: white;
    text-align: center;
    right: -8px;
    top: -2px;
  }
  section.checkout_steps {
    background: #ffffff;
    padding: 15px 0;
    border: 1px solid #dedede;
    border-left: 0;
    border-right: 0;
  }

  .lc_step_count {
    display: flex;
    justify-content: flex-end;
  }

  .lc_step {
    display: flex;
    align-items: center;
    margin-left: 10px;
    position: relative;
  }

  .lc_step:after {
    height: 5px;
    width: 20px;
    background: #cdcdcd;
    content: " ";
    margin-left: 10px;
    border-radius: 5px;
  }
  .activated_step.lc_step:after {
    background: #c5b358;
  }
  .lc_step:last-child:after {
    content: unset;
  }

  .lc_step_number {
    height: 35px;
    font-weight: bold;
    font-size: 17px;
    line-height: 30px;
    width: 35px;
    text-align: center;
    border-radius: 80px;
    color: black;
    border: 1.5px solid #d2d2d2;
  }
  .activated_step .lc_step_number {
    background: #c5b358;
    color: white;
    border: 1.5px solid #c5b358;
  }
  .activated_step .lc_step_title span {
    font-weight: bold;
  }
  .lc_step_title span {
    display: block;
    font-size: 16px;
    padding-left: 5px;
  }
  .checkout_title h3 {
    margin: 0;
    font-size: 25px;
  }

  .lf_form_box {
    background: white;
    padding: 25px 25px;
  }

  .lf_form_bc h3 {
    color: black;
    font-size: 22px;
    margin-bottom: 15px;
  }
  .lf_form_bc {
  }
  #purchase-button {
    // font-size : 14px;
    display: flex;
    justify-content: center;
  }
  .lf_form_box {
    background: white;
    padding: 25px 25px;
    border: 1px solid #dedede;
    margin-bottom: 20px;
  }

  .lf_form_title {
    margin-bottom: 20px;
  }
  .lf_form_title h3 {
    margin: 0;
    font-size: 29px;
    padding-top: 15px;
  }
  .col-10px {
    margin: 0 -10px;
  }
  .col-10px .col-md-1,
  .col-10px .col-md-2,
  .col-10px .col-md-3,
  .col-10px .col-md-4,
  .col-10px .col-md-5,
  .col-10px .col-md-6,
  .col-10px .col-md-7,
  .col-10px .col-md-8,
  .col-10px .col-md-8,
  .col-10px .col-md-9,
  .col-10px .col-md-10,
  .col-10px .col-md-11,
  .col-10px .col-md-12,
  .col-10px .col-lg-1,
  .col-10px .col-lg-2,
  .col-10px .col-lg-3,
  .col-10px .col-lg-4,
  .col-10px .col-lg-5,
  .col-10px .col-lg-6,
  .col-10px .col-lg-7,
  .col-10px .col-lg-8,
  .col-10px .col-lg-8,
  .col-10px .col-lg-9,
  .col-10px .col-lg-10,
  .col-10px .col-lg-11,
  .col-10px .col-lg-12,
  .col-10px .col-sm-1,
  .col-10px .col-sm-2,
  .col-10px .col-sm-3,
  .col-10px .col-sm-4,
  .col-10px .col-sm-5,
  .col-10px .col-sm-6,
  .col-10px .col-sm-7,
  .col-10px .col-sm-8,
  .col-10px .col-sm-8,
  .col-10px .col-sm-9,
  .col-10px .col-sm-10,
  .col-10px .col-sm-11,
  .col-10px .col-sm-12 {
    padding: 0 10px;
  }
  .na input[type="number"] {
    -moz-appearance: textfield;
  }

  .na input::-webkit-outer-spin-button,
  .na input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .os_para p {
    margin: 0;
    font-size: 18px;
  }

  .order_summary_row {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }

  .order_summary_total {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #dedede;
    margin-top: 15px;
    padding-top: 15px;
    margin-bottom: 15px;
  }
  .os_total p {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }

  .order_security {
    display: flex;
    margin: 0 -5px;
    padding-top: 40px;
  }
  .os_1 {
    padding: 0 5px;
    flex: 0 0 60px;
    max-width: 60px;
  }
  .os_2 {
    padding: 0 5px;
    flex: 1 1 auto;
    max-width: auto;
  }
  .os_1 img {
    max-width: 50px;
  }

  .os_2 h4 {
    font-weight: bold;
    /* font-size: 21px; */
  }
  .os_2 p {
    margin: 0;
    font-size: 15px;
  }
  .order_summary {
    position: sticky;
    top: 15px;
  }

  select option,
  select {
    color: #80868b !important;
  }
  .card {
    border: none;
  }
  .lf_main {
    padding-bottom: 60px;
    padding-top: 60px;
  }
  // increament
  .inputne {
    width: inherit;
    border: none;
    outline: none;
    text-align: center;
    margin: 0;
    font-weight: 400;
    vertical-align: middle;
    background-color: transparent;
    color: rgb(197, 179, 88);
  }
  .input-group-btn:first-child > .btn,
  .input-group-btn:first-child > .btn-group,
  .input-group-btn:last-child > .btn,
  .input-group-btn:last-child > .btn-group {
    border-radius: 50% !important;
    margin-right: -1px;
    color: white;
    padding: 3px 12px;
    background-color: rgb(197, 179, 88);
  }
  .quantity {
    display: inline-flex;
    width: 60px;
  }
  .btn {
    padding: 6px 9px;
  }
  .read-more-button {
    color: rgb(197, 179, 88);
    cursor: pointer;
  }
  .opt-group {
    margin-bottom: 16px;
    text-align: right;
  }
  .next-btn-text.next-large {
    border-radius: 0;
    padding: 0;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    border-width: 0;
  }
  .opt-group .opt-btn {
    margin-right: 15px;
  }

  .next-btn.next-large {
    margin-bottom: 6px;
  }
  .svg-icon.m {
    font-size: 24px;
  }

  svg:not(:root) {
    overflow: hidden;
  }
  .next-btn,
  .next-btn *,
  .next-btn :after,
  .next-btn :before {
    box-sizing: border-box;
  }
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 20px;
  }
  .next-btn-text.next-btn-normal,
  .next-btn-text.next-btn-normal.visited,
  .next-btn-text.next-btn-normal:link,
  .next-btn-text.next-btn-normal:visited {
    color: #000;
    float: none;
    background-color: white;
    outline: none;
  }
  //
  .buy-button {
    border-radius: 4px;
    padding: 0 40px;
    height: 36px;
    line-height: 34px;
    color: white;
    float: right;
    font-size: 14px;
    border-width: 1px;
    background-color: rgb(197, 179, 88);
  }

  .toggle_gift_card {
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
  }
  .toggle_gift_card img {
    max-width: 28px;
  }
  .toggle_gift_card span {
    margin-left: 10px;
    font-weight: 500;
    font-size: 18px;
  }
  .lf_form_box_payment {
    background: white;
    padding: 15px 30px;
    margin: 0;
  }
  .lf_form_collapse_opt {
    margin-bottom: 15px;
  }
  .toggle_gift_card i {
    color: #c5b358;
    font-size: 22px;
  }

  .lf_form_collapse_opt .signin-submit {
    font-size: 18px;
    padding: 8px 0;
  }
  .lf_border_tp {
    background: white;
    border: 1px solid #dedede;
    border-top: 0;
    padding: 10px 30px;
  }
  .lf_border_tp button {
    font-size: 18px;
    color: #c5b358;
    font-weight: bold;
  }

  .active_p {
    color: #c5b358 !important;
  }

  .lf_form_payment h3 {
    font-size: 18px;
  }

  .lg_card_information {
    border: 1px solid #cfcfcf;
    padding: 25px 25px;
    border-radius: 5px;
  }

  .lf_payment_break_tp {
    border-top: 1px solid #cfcfcf;
    margin-top: 25px;
    padding-top: 15px;
  }

  .bold {
    font-weight: 500;
  }

  .lf_payment_address p {
    font-size: 17px;
    margin-bottom: 0px;
  }

  .lf_new_address_collapse {
    padding: 15px 0;
    cursor: pointer;
  }

  .lf_step_review_Content_1 {
  }
  .lf_step_review_Content_1 h3 {
    color: #c5b358;
    font-size: 30px;
  }
  .lf_step_review_Content_1 p {
    font-size: 18px;
    max-width: 600px;
  }

  .lf_step_review_Content_2 h3 {
    font-size: 29px;
    text-align: center;
  }
  .lf_step_review_Content_2 p {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    word-break: break-all;
    color: #c5b358;
  }
  .lf_step_review_Content_2 a {
    display: block;
    font-size: 21px;
    border-color: #e7dbb7;
    background-color: #e7dbb7;
    font-weight: 500;
    padding: 10px 10px !important;
  }

  .lf_step_review_Content_2 a:hover {
    background-color: #e9debe;
    box-shadow: 0px 4px 4px rgba(233, 222, 190, 0.8);
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: none;
    color: white;
  }
  .lf_form_w_bg {
    background-image: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.91),
        rgba(255, 255, 255, 0.96)
      ),
      url(../images/heart_lioneus.png);
    background-size: 290px;
    background-position: center;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 576px) {
    .checkout_title h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .lc_step {
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;
      flex-direction: column;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .lc_step:after {
      content: unset;
    }
    .lc_step {
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;
    }
    .lf_form_box {
      padding: 15px 15px;
    }
    .lg_card_information {
      padding: 15px 15px !important;
    }
  }

  .card-img {
    height: 100%;
  }
  @media screen and (max-width: 767px) and (min-width: 576px) {
    .lc_step {
      flex-direction: column;
    }
    .lc_step:after {
      content: unset;
    }
  }

  @media screen and (max-width: 1200px) and (min-width: 992px) {
    .os_1 img {
      max-width: 38px;
    }
    .os_1 {
      flex: 0 0 45px;
      max-width: 45px;
    }
    .order_summary_label.os_para {
      padding-right: 10px;
    }
    .os_para p {
      margin: 0;
      font-size: 16px;
    }
  }
  #lg_step_count_1,
  #lg_step_count_2,
  #lg_step_count_3,
  #lg_step_count_4 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 10px;
    position: relative;
  }
`;
export const WishlistStyle = styled.div`
  pnl-wrapper {
    width: 100%;
    display: table;
  }

  .pnl-wrapper > div {
    display: table-cell;
    vertical-align: middle;
    width: 80%;
  }

  .pnl-description {
    position: relative;
    padding: 0;
  }

  .pnl-label {
    color: #424346;
    line-height: 16px;
    max-height: 2.6em;
    font-size: 0.75em;
    overflow: hidden;
    display: block;
  }

  .pnl-price {
    line-height: 16px;
    color: #111;
    font-weight: 700;
    font-size: 0.75em;
    display: block;
    /*margin-top: 0.125em;*/
  }

  .pnl-ic-wrapper {
    width: 32px;
    height: 32px;
    line-height: 0;
    position: relative;
    margin: 0 auto;
    transform: scale(0.5);
  }

  .pnl-ic-wrapper svg {
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-miterlimit: 4;
    stroke-location: outside;
  }
  .pnl-ic-wrapper svg:active {
    fill: #c5b358;
    // stroke: #C5B358;
  }
  .pnl-ic {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }

  #heart-stroke {
    enablebackground: new 0 0 32 32;
    height: 45px;
    stroke: black;
    margin-top: -5px;
    background-color: white;
    margintop: -5px;
  }
  #heart-stroke:focus {
    stroke: #c5b358;
  }
  .pnl-favorites {
    width: 32px;
    cursor: pointer;
    position: relative;
  }

  // .pnl-tocart svg {
  //     stroke: #C5B358;
  // }

  .pnl-tocart {
    width: 32px;
    cursor: pointer;
    position: relative;
  }

  @media screen and (min-width: 320px) {
    .pnl-label,
    .pnl-price {
      font-size: 1em;
      line-height: 20px;
    }
    .pnl-favorites,
    .pnl-tocart {
      width: 56px;
    }
    .pnl-ic-wrapper {
      transform: scale(0.75);
    }
  }

  @media screen and (min-width: 360px) {
    .inner {
      padding: 0 1em;
      padding-top: 1em;
    }
    .grid {
      margin: 0 0 0 -1em;
    }
    .grid-tile {
      padding: 0 0 1em 1em;
    }
  }

  /* PORTRAIT MOBILE MODE
 */

  @media screen and (min-width: 480px) {
    .inner {
      padding: 0 0.5em;
      padding-top: 0.5em;
    }
    .grid {
      margin: 0 0 0 -0.5em;
    }
    .grid-tile {
      padding: 0 0 0.5em 0.5em;
    }
    .grid-tile {
      width: 50%;
    }
    .pnl-label,
    .pnl-price {
      font-size: 0.75em;
      line-height: 18px;
    }
    .pnl-ic-wrapper {
      transform: scale(0.5);
    }
    .pnl-favorites,
    .pnl-tocart {
      width: 40px;
    }
  }

  /* LANDSCAPE MOBILE MODE (~416px)
 */

  @media (max-height: 26em) {
    .grid-tile {
      width: 33.3333%;
    }
    .pnl-label {
      font-size: 0.7em;
      line-height: 14px;
    }
    .pnl-price {
      font-size: 0.7em;
      line-height: 14px;
    }
    .pnl-favorites {
      width: 40px;
      height: 40px;
      top: 0;
      right: 0;
    }
    .pnl-ic-wrapper {
      transform: scale(0.5);
    }
  }

  @media screen and (min-width: 600px) {
    .inner {
      padding: 0 1em;
      padding-top: 1em;
    }
    .grid {
      margin: 0 0 0 -1em;
    }
    .grid-tile {
      padding: 0 0 1em 1em;
    }
    .pnl-label,
    .pnl-price {
      font-size: 1em;
      line-height: 20px;
    }
    .pnl-favorites,
    .pnl-tocart {
      width: 56px;
    }
    .pnl-ic-wrapper {
      transform: scale(0.75);
    }
  }

  @media screen and (min-width: 768px) {
    .inner {
      padding: 0 1.5em;
      padding-top: 1.5em;
    }
    .grid {
      margin: 0 0 0 -1.5em;
    }
    .grid-tile {
      padding: 0 0 1.5em 1.5em;
    }
  }

  @media screen and (min-width: 1024px) {
    .grid-tile {
      width: 33.3333%;
    }
  }

  @media screen and (min-width: 1440px) {
    .inner {
      width: 1400px;
      margin: 0 auto;
    }
  }

  .grid {
    margin: 0 0 0 -0.5em;
    list-style-type: none;
    transition: all 0.3s;
  }
  .grid:before,
  .grid:after {
    content: " ";
    display: table;
  }
  .grid:after {
    clear: both;
  }
  .grid-tile {
    width: 100%;
    position: relative;
    float: left;
    padding: 0 0 0.5em 0.5em;
    box-sizing: border-box;
    transition: all 0.3s;
  }
`;
export const TertiaryButton = styled.div`
  .button {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    outline: none;
  }
`;

export const SearchBarStyle = styled.div`
grid-area: SearchBar;
// position: relative;
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
justify-content: center;
font-size: 16px;
padding: 6px ;
.textalignleft {
	text-align:left;
	padding:0 20px;
}
.has-search .form-control {
	padding-left: 25px;
	border-radius: 50px !important;
	height: 50px;
	font-size: 1.2rem;
}
.has-search .form-control-feedback {
	position: absolute;
	z-index: 2;
	display: block;
	width: 2.375rem;
	height: 2.375rem;
	line-height: 2.375rem;
	text-align: center;
	pointer-events: none;
	color: #aaa;
}
.logo img {
	max-width: 470px;
	display: block;
	margin: auto;
}
.lioneus_content {
	width: 630px;
	display: block;
	margin: auto;
	// transform: translateY(-65px);
	position: relative;
	z-index: 99;
	border-box: content-box; 
}
.form-control:hover{
	color: #495057;
	background-color: #fff;
	border-color: #d8d8d8;
	outline: 0;
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.14);
}
.form-control:focus {
	color: #495057;
	background-color: #fff;
	border-color: #d8d8d8;
	outline: 0;
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.14);
}
.search_main {
	position: relative;
}
.input-group>.custom-select:not(:first-child), .input-group>.form-control:not(:first-child) {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-radius: 50px !important;
}
.input_dropdown {
	background: white;
	/* box-shadow: 0 0 5px #b5b5b5; */
	position: absolute;
	width: 100%;
	display: none;
	/*box-shadow: 0 0 6px black;*/
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 15px;
	border: 1px solid #ced4da;
	border-top: 0;
	z-index: 9999999 !important;
}

.input_dropdown_h {
	height: 350px;
	overflow: hidden;
}
@media screen and (max-width: 383px) {
	.input_dropdown_h {
		height: 1000px;
	}
}
.Search_Count_History {
	padding: 8px 13px 8px 41px;
	display: flex;
	justify-content: space-between;
	position: relative;
	text-align: left;
}
.input_activated {
	border-radius: 15px !important;
	border-bottom-left-radius: 0 !important;
	border-bottom-right-radius: 0 !important;

}
.search_div_activated {
	/*box-shadow: 0 0 6px black;*/
	border-radius: 80px;
}
.ul_justify {
	display: flex;
	justify-content: space-between;
}
.ul_justify ul {
	margin: 0;
	padding: 0;
}
.ul_justify ul li {
	display: inline-block;
	font-size: 14px;
}
.ul_justify ul li a {
	padding-right: 10px;
	display: inline-block;
	color: rgba(0,0,0,.54);
}
.location {
	color: rgba(0,0,0,.54);
}

.has-search button {
	display: none;
}
.btn-warning {
	background: #C5B358;
	border-color: #C5B358;
	color: #fff;
}
.form-control-feedback1 {
	display: none;
}
.has-search button {
	position: absolute;
	right: 0;
	z-index: 99;
	display: block;
	top: 0;
	border-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
}
@media screen and (max-width: 576px) {
	.logo img {
		max-width: 310px;
	}
	div#btns_search {
		display: none;
	}
	.input-group{
		margin-top: 10%;
	}

	.ul_justify {
		display: block;
		text-align: center;
	}
	.search_div_activated {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: white;
		z-index: 9;
		height: 100%;
	}
	.footer {
		position: unset;
	}
	// .lioneus_search {
	// 	height: 555px;
	// }
	.lioneus_content {
		transform: unset;
		width: 100%;
	}
	.input_activated {
		border-radius: 0 !important;
	}
	.input_dropdown {
    position: unset;
    box-shadow: none;
	}

	.has-search .form-control {
		border-radius: 22px;
	}
	.has-search .form-control-feedback {
		display: none;
	}
	.search_div_activated .form-control-feedback1 {
		display: inline-block;
		position: absolute;
		top: 12px;
		left: 11px;
		z-index: 9999;
	}
	.search_div_activated .has-search .form-control {
		padding-left: 2.7rem;
		border-radius: 22px;
	}
	// .search_div_activated .has-search .form-control {
	// 	border-radius: 0px !important;
	// }
	.search_div_activated .has-search button {
		border-radius: 0px !important;
	}
#input_dropdown{
	.input_dropdown {
		background: white;
		/* box-shadow: 0 0 5px #b5b5b5; */
		position: absolute;
		width: 100%;
		display: none;
		/*box-shadow: 0 0 6px black;*/
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 15px;
		border: 1px solid #ced4da;
		border-top: 0;
		z-index: 9999999 !important;
  }
  @media screen and (max-width: 383px) {
	.has-search .form-control  {
	border-radius: 50px !important;
	height: 50px;
	}
}

`;

export const Autosuggest = styled.div`
  position: absolute;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  z-index: 1000;
  margin-top: 22px;
`;

export const SearchModal = styled.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  padding: 12px 3px 3px;
  font-size: 16px;
`;

export const dropdownRowStyle = {
  textAlign: "left",
  width: "100%",
  cursor: "pointer",
};
export const SearchButton = styled.div`
  margin: auto;
  .button {
    font-size: 1rem;
    padding: 0.3rem 1rem;
    font-weight: 500;
    border: 0.15rem solid rgb(197, 179, 0);
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    outline: none;
  }
  .button:hover {
    color: #c5b358 !important;
    background: white;
    border-radius: 1rem;
    border: 0.15rem solid #c5b358;
    padding: 0.3rem 0.8rem;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.25);
    transition: 0.2s;
  }
  @media only screen and (max-width: 920px) {
    .button {
      font-size: 1rem;
      font-weight: 500;
      border-radius: 0.5rem;
      box-shadow: 0 0px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;
export const ProductCardStyle = styled.div`
.product-card ul.card-action-buttons {
    width: -webkit-fill-available;
    position: absolute;
}
#store-product-buttons{
	display: none;
}
 .ls_product_img img {
    position: relative;
}

.icons{
	font-weight: normal;
    font-style: normal;
    color: white;
    /* padding: 8px 5px; */
    font-size: 20px;
	z-index: 1;
	cursor : pointer;
    background: salmon;
    padding: 10px 12px;
    border-radius: 50%;
    box-shadow: 0 3px 4px 0px rgba(0,0,0,0.25);
    border: crimson;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
}
// .material-icons:hover{
// 	// box-shadow:	0 3px 10px 5px rgba(0,0,0,0.1);
// 	box-shadow: 0 1px 2px rgba(0,0,0,0.25), 0 1px 3px 0px rgba(0,0,0,0.25);
// 	transition: 0.3s;
// }
.like:hover, .buy:hover{
	// box-shadow:	0 3px 10px 5px rgba(0,0,0,0.1);
	box-shadow: 0 1px 2px rgba(0,0,0,0.25), 0 1px 3px 0px rgba(0,0,0,0.25);
  transition: 0.3s;
  cursor: pointer;
}
.like{
  background-color: #fa8072;
  border: crimson;
  color: white;
  padding: 8px 8px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: inline-block;
  font-size: 5px;
  box-shadow: 0 0 7px rgba(0,0,0,0.25);
  margin: 4px 2px;
  line-height: 1;
  border-radius: 50px;
}
.buy{
  background-color:#e7dbb7;
  border: crimson;
  color: white;
  padding: 8px 8px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: inline-block;
  font-size: 3px;
  box-shadow: 0 0 7px rgba(0,0,0,0.25);
  margin: 4px 2px;
  line-height: 1;
  border-radius: 50px;
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  // font-size: 25px;
}
.card-title {
    font-weight: 300;
	font-size: 2rem;
	color: black;
}
.ls_product_company_name a{
	font-size: 16px;
	color: #717787;

}
.ls_product_company_name a:hover{
	color: black;
	cursor : pointer
}

.product-card .card .card-content {
    padding: 5px;
}
.product-card .card {
	border: none;
	border-bottom: 1px solid #c5b358;
    padding-bottom: 20px;
    margin-bottom: 20px;
}
.read-more-button{
	color: rgb(197,179,88);
	cursor: pointer;

}
.product-card .card .price {
    width: 70px;
    height: 70px;
    font-weight: 600;
    font-size: 1.45rem;
    line-height: 70px;
    margin: 10px;
    position: absolute;
    top: 0;
    letter-spacing: 0;
}

#discovery{
	padding-top: 10%;
	padding-bottom: 10%
}
@media screen and (max-width: 576px) {
	#discovery{
		padding-top: 30%;
		padding-bottom: 30%
	}
	.card-head{
		order: 1;
		display: flex!important;
	}
	.product-card ul.card-action-buttons {
		float: right;
		order: 2;
		right: 0;
		margin: -1px 7px 0 0;
		webkit-flex: 0 0 45%;
		-ms-flex: 0 0 45%;
		flex: 0 0 45%;
		-ms-flex: 0 0 45%;
		padding: 0 10px;
		max-width: 25%;
		// display: none;
		display: flex;
	}
	.ls_product_title {
		order: 1;
		float: left;
		-webkit-flex: 0 0 55%;
    -ms-flex: 0 0 55%;
    height: 40px;
		flex: 0 0 55%;
		-ms-flex: 0 0 55%;
		max-width: 55%;
		font-weight: 400!important;
		font-size: 1.1rem!important;
	}
	.ls_product_desription{
		order: 3
		font-size: 11px;
	}
	.ls_product_price{
    order: 4;
    height: 20px;
		
	}
	.ls_product_company_name{
		order: 2;
		font-size: 13px;
	}
	.ls_product_details p{
		margin-bottom : 0rem;
	}
	 .ls_product_details {
    /* -webkit-flex: 0 0 60%; */
    -ms-flex: 0 0 60%;
    flex: 0 0 60%;
    display: grid;
    align-items: stretch;
    -ms-flex: 0 0 60%;
    /* max-width: 60%; */
    // padding: 0 10px;
}
	
}
.product-card ul.card-action-buttons {
    margin: -28px 7px 0 0;
    text-align: right;
    display: flex;
    float : right;
    position : relative ;
    justify-content: flex-end;
}

@media screen and (max-width: 496px)
{
    .btn-floating {
        width: 30px;
        height: 30px;
        line-height: 30px;
    }
    .btn-floating i {
		font-size: 1.3rem;
		padding: 6px 6px;
    }
    .product-card ul.card-action-buttons {
        margin: -1px 7px 0 0;
    }
}
@media screen and (max-width: 576px) {
	.product-card ul.card-action-buttons {
		margin: -20px 7px 0 0;
  }
  .buy, .like{
    padding : 6px 6px;
  }
}
.product-card ul.card-action-buttons li {
    display: inline-block;
    padding-left: 7px;
}
.product {
    width: 20%;
    padding: 10px;
}
.product .card {
    margin: 0;
}
.btn-outline-warning {
	height: auto
}

`;

export const SignupStyle = styled.div`
  p {
    color: rgba(0, 0, 0, 0.54);
  }
  .form-si-header h3 {
    color: #4c4c4c;
  }
  .form-si-header h5 {
    color: rgba(0, 0, 0, 0.54);
    text-align: center;
  }
  .form-si-header .preview-btn {
    top: -20px;
    left: -17px;
    position: absolute;
    cursor: pointer;
    padding: 0;
    display: flex !important;
    align-items: center;
    color: #0F9D58;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .lio-chekout {
    color: white;
    padding: 10px 15px;
    font-size: 19px !important;
    width: 80% !important;
    margin-left: 2rem;
    font-weight: 500;
    border: none;
    background: #c5b358;
    border-radius: 0.4rem;
    box-shadow: 0 0 2px rgba(197, 179, 88, 0.8) !important;
    transition: all 0.3s ease 0s;
  }
  .lio-chekout:hover {
    background: #c5b300;
    box-shadow: 0 0 6px rgba(197, 179, 0, 0.8) !important;
    transition: all 0.3s ease 0s;
  }
  .lio-btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 6px 20px;
    font-size: 20px;
    line-height: 1.5;
    text-decoration: none !important;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .lio-primary {
    background: rgb(197, 179, 88);
    border-color: rgb(197, 179, 88);
    color: white !important;
    outline: none;
  }

  .lio-primary:hover {
    box-shadow: 0px 4px 4px rgba(197, 179, 88, 0.4);
  }

  .lio-outline-primary {
    border: 1.5px solid rgb(197, 179, 88);
  }

  .lio-outline-primary:hover {
    box-shadow: 0px 4px 4px rgba(197, 179, 88, 0.4);
    background: rgb(197, 179, 88);
    color: white;
  }

  .lio-tertiary {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }

  .lio-tertiary:hover {
    color: #212529;
    background-color: #e2e6ea;
    border-color: #dae0e5;
    box-shadow: 0px 4px 4px rgba(227, 227, 227, 0.62);
  }

  .lio-outline-primary-active {
    background: rgb(197, 179, 88);
    color: white;
  }

  .lio-outline-primary-active:hover {
    color: black;
    box-shadow: 0px 4px 4px rgba(197, 179, 88, 0.4);
  }

  /*.ub_signin_btn a, .ub_signin_btn button {
	background: transparent;
	border: 1px solid transparent;
	position: relative;
	left: -15px;
}

.ub_signin_btn a:hover, .ub_signin_btn button:hover {
	background: #f8f9fa;
	border-color: #f8f9fa;
	box-shadow: none;
	} */

  /* Input Materlize Design */

  div.wrap_input_div .wrap_input {
    position: relative;
  }

  .wrap_input label {
    position: absolute;
    top: 10px;
    font-size: 19px;
    margin: 0 10px;
    padding: 0 10px;
    background-color: white;
    -webkit-transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out;
    transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out;
    transition: 0.2s ease all !important;
    color: #80868b;
  }

  .wrap_input .riseInput {
    width: 100%;
    font-size: 17px;
    color: black;
    box-shadow: unset !important;
  }

  .active_label {
    top: -10px !important;
    font-size: 15px !important;
    color: #c5b358 !important;
  }

  .wrap_input .riseInput:focus {
    outline: none;
  }

  .form-control:focus {
    border: 1.5px solid #c5b358 !important;
  }

  .wrap_input_div {
    margin-bottom: 10px;
  }

  .form-control {
    height: calc(36px + 0.75rem + 2px);
  }

  .rt_inputs {
    margin: 0 -5px;
  }

  .rt_inputs .col-6 {
    padding: 0 5px;
  }

  /* Main Section Styles */
  .ub_form {
    max-width: 490px;
    margin: auto;
    border: 1px solid #dadce0;
    padding: 30px;
    border-radius: 5px;
    // border-top: 5px solid #c5b358;
    margin-bottom: 40px;
  }

  .lio-btn {
    padding: 4px 15px;
    font-size: 19px;
    // width: 90px !important;
  }

  section.main {
    padding: 40px 0 80px 0;
  }

  .ub_content_main h2 {
    margin: 0;
    font-size: 40px;
    text-align: center;
  }

  .ub_bg {
    background-size: cover !important;
  }

  .ub_bg_s2 {
    height: 112vh;
    position: relative;
  }
  .form-si-header {
    margin-bottom: 30px;
  }

  .form-si-header img {
    width: 100%;
    max-width: 120px;
    display: block;
    margin: auto;
  }

  .form-si-header h3 {
    margin: 0;
    text-align: center;
    font-size: 27px;
    padding-bottom: 0.4rem;
    padding-top: 1rem;
  }

  .btn.btn-warning {
    background: rgb(197, 179, 88);
    border-color: rgb(197, 179, 88);
    color: white !important;
  }

  .submit-btn {
    font-size: 20px;
    padding: 10px 0;
    font-weight: 500;
  }

  .btn.btn-warning:hover {
    box-shadow: 0px 3px 10px rgba(197, 179, 88, 0.62);
  }

  .ub_bg_bar {
    height: 13vh;
    background: white;
    width: 85%;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .signin-submit {
    font-size: 20px;
    padding: 10px 0;
    font-weight: 500;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .pt-20 {
    padding-top: 20px;
  }

  .brd-t-1 {
    border-top: 1px solid #dadce0;
  }

  /* Section 2 */

  .title {
  }

  .title h2 {
    margin-left: 25vh;
    font-size: 55px;
    margin-bottom: 75px;
  }

  .ub_btws_content_img {
    min-height: 205px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }

  .ub_btws_content_img img {
    width: 100%;
    max-width: 230px;
    display: block;
    margin: 0;
  }

  .ub_btws_content_disc h3 {
    margin-bottom: 15px;
    font-weight: 600;
  }

  .ub_btws_content_disc p {
    font-weight: 500;
  }

  section.ub_section_s2 {
    padding-bottom: 30px;
  }

  .ub_section_s3 {
    padding: 60px 0;
  }

  .ubs_title {
    margin-bottom: 30px;
  }

  .ubs_title h2 {
    text-align: center;
    font-size: 36px;
  }

  .ubs_title p {
    margin: 0;
    text-align: center;
    font-size: 20px;
    color: #757575;
  }

  /* Pricing Table Styles */

  .pricing_header {
    background: #fafafa;
    padding: 30px 30px;
  }

  .pricing_header_ml_1 {
  }

  .pricing_header_ml_1 h3 {
    font-size: 30px;
  }

  .pricing_header_ml_1 p {
    margin: 0;
    color: #545454;
  }

  .pricing_header_ml_2 h3 {
    font-size: 40px;
    color: #c5b358;
  }

  .pricing_header_ml_2 p {
    margin: 0;
    color: #545454;
  }

  .pricing_header_ml {
    margin-bottom: 25px;
  }

  .pricing_body {
    padding: 30px 0;
  }

  .pricing_main {
    border: 1px solid #e0e0e0;
    height: 100%;
  }

  .pricing_content div {
    padding: 0px 30px;
  }

  .pricing_content div img {
    width: 18px;
    position: absolute;
    left: 0;
    top: 3px;
  }

  .pricing_content div p {
    margin-bottom: 10px;
    position: relative;
    padding-left: 31px;
    font-size: 17px;
    background-size: 18px !important;
    background-repeat: no-repeat !important;
    background-position-y: 3px !important;
  }

  .pricing_content div p i {
    position: absolute;
    left: 0;
    font-size: 22px;
    color: black;
    top: -5px;
  }

  .pricing_content div p:hover i {
    color: rgb(197, 179, 88);
  }

  .pricing_table_featured {
    box-shadow: 0 1px 15px #ccc;
    border: 0;
    position: relative;
    z-index: 9;
  }

  .pricing_header_ml_cta a {
    display: block;
    width: 100%;
  }

  .pricing_pplr {
    padding: 8px 0;
    background: #c5b358;
    position: absolute;
    top: -35px;
    width: 100%;
  }

  .pricing_pplr h6 {
    margin: 0;
    color: white;
    text-align: center;
  }

  .pricing_section {
    padding-top: 45px;
  }

  /***** Responsive Styles ******/

  @media screen and (max-width: 992px) and (min-width: 768px) {
    .row_pricing_table .col-lg-4 {
      margin: 20px 0 !important;
    }

    .pricing_main {
      border: 1px solid #e0e0e0 !important;
    }

    .pricing_table_featured {
      margin-top: 15px;
    }
  }

  @media screen and (max-width: 767px) {
    .title h2 {
      margin-left: 15vh;
      font-size: 39px;
      margin-bottom: 35px;
    }

    .form-si-header .preview-btn {
      left: 0;
    }
    .ub_btws_content_img img {
      margin: auto;
    }

    .ub_btws_content_disc h3 {
      text-align: center;
    }

    .ub_btws_content_disc p {
      text-align: center;
      margin-bottom: 30px;
    }

    .row_pricing_table .col-lg-4 {
      margin: 20px 0 !important;
    }

    .pricing_main {
      border: 1px solid #e0e0e0 !important;
    }

    .pricing_table_featured {
      margin-top: 35px;
    }

    .ub_form {
      margin-bottom: 2rem;
      height: auto;
    }
  }

  @media screen and (max-width: 768px) and (min-width: 576px) {
    .ub_bg_s2 {
      background-position: right !important;
    }
  }

  @media screen and (max-width: 576px) {
    .ub_form {
      border: 0 !important;
      padding: 0;
      height: 100%;
      padding-bottom: 10%;
    }

    .form-si-header img {
      max-width: 120px;
    }

    .ub_content_main h2 {
      font-size: 31px;
    }

    .ub_bg_s2 {
      height: 390px;
      background-position: right !important;
    }

    .ub_bg_bar {
      display: none !important;
    }

    .title h2 {
      margin-left: 0;
      text-align: center;
    }

    .ub_section_s2 {
      padding-top: 30px;
    }

    .ubs_title h2 {
      font-size: 31px;
    }

    .ubs_title p {
      font-size: 18px;
    }

    .pricing_main.border-left-0 {
      margin-top: 40px;
    }
  }
`;
export const LadyImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100vw auto;
`;
export const Transfer = styled.div`
  // width: 50%;
  margin: auto;
  button {
    color: white;
    background-color: #e7dbb7;
    border: #e7dbb7;
    border-radius: 2rem;
    padding: 5px 30px;
    box-shadow: 0px 1px 6px 0px #aaaaaa;
  }
  button:hover {
    background-color: #ceb56a;
  }
`;
export const Account = styled.div`
  font-size: 15px;
  .account {
    padding: 1px 5px;
  }
  .custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    outline: none !important;
    border-color: #c5b358;
    box-shadow: none !important;
    background-color: #c5b358;
  }
  .radio-buttons {
    margin: auto;
    width: fit-content;
  }
  .custom-control-label {
    line-height: 20px;
  }
`;

export const Flag = styled.div`
  .ui-icon.ad {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png)
      0 0;
  }
  /*United Arab Emirates*/
  .ui-icon.ae {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -22px
      0;
  }
  /*Afghanistan*/
  .ui-icon.af {
    width: 17px;
    height: 12px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -42px
      0;
  }
  /*Antigua and Barbuda*/
  .ui-icon.ag {
    width: 17px;
    height: 12px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -63px
      0;
  }
  /*Anguilla*/
  .ui-icon.ai {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -84px
      0;
  }
  /*Albania*/
  .ui-icon.al {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -105px
      0;
  }
  /*Armenia*/
  .ui-icon.am {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -126px
      0;
  }
  /*Angola*/
  .ui-icon.ao {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -147px
      0;
  }
  /*Antarctica*/
  .ui-icon.aq {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -168px
      0;
  }
  /*Argentina*/
  .ui-icon.ar {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -189px
      0;
  }
  /*American Samoa*/
  .ui-icon.as {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -210px
      0;
  }
  /*Austria*/
  .ui-icon.at {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -231px
      0;
  }
  /*Australia*/
  .ui-icon.au {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -252px
      0;
  }
  /*Aruba*/
  .ui-icon.aw {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -273px
      0;
  }
  /*Åland Islands*/
  .ui-icon.ax {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -294px
      0;
  }
  /*Azerbaijan*/
  .ui-icon.az {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -315px
      0;
  }
  /*Bosnia and Herzegovina*/
  .ui-icon.ba {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -336px
      0;
  }
  /*Barbados*/
  .ui-icon.bb {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -357px
      0;
  }
  /*Bangladesh*/
  .ui-icon.bd {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -378px
      0;
  }
  /*Belgium*/
  .ui-icon.be {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -399px
      0;
  }
  /*Burkina Faso*/
  .ui-icon.bf {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -420px
      0;
  }
  /*Bulgaria*/
  .ui-icon.bg {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -441px
      0;
  }
  /*Bahrain*/
  .ui-icon.bh {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -462px
      0;
  }
  /*Burundi*/
  .ui-icon.bi {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -483px
      0;
  }
  /*Benin*/
  .ui-icon.bj {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -504px
      0;
  }
  /*Saint Barthélemy*/
  .ui-icon.bl {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -525px
      0;
  }
  /*Bermuda*/
  .ui-icon.bm {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -546px
      0;
  }
  /*Brunei*/
  .ui-icon.bn {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -567px
      0;
  }
  /*Bolivia*/
  .ui-icon.bo {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -588px
      0;
  }
  /*Caribbean Netherlands*/
  .ui-icon.bq {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -609px
      0;
  }
  /*Brazil*/
  .ui-icon.br {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -630px
      0;
  }
  /*Bahamas*/
  .ui-icon.bs {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -651px
      0;
  }
  /*Bhutan*/
  .ui-icon.bt {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -672px
      0;
  }
  /*Bouvet Island*/
  .ui-icon.bv {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -693px
      0;
  }
  /*Botswana*/
  .ui-icon.bw {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -714px
      0;
  }
  /*Belarus*/
  .ui-icon.by {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -735px
      0;
  }
  /*Belize*/
  .ui-icon.bz {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -756px
      0;
  }
  /*Canada*/
  .ui-icon.ca {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -777px
      0;
  }
  /*Cocos*/
  .ui-icon.cc {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -798px
      0;
  }
  /*Democratic Republic of the Congo*/
  .ui-icon.cd {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -819px
      0;
  }
  /*Central African Republic*/
  .ui-icon.cf {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -840px
      0;
  }
  /*Congo*/
  .ui-icon.cg {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -861px
      0;
  }
  /*Switzerland*/
  .ui-icon.ch {
    width: 17px;
    height: 16px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -882px
      0;
  }
  /*Côte d’Ivoire*/
  .ui-icon.ci {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -903px
      0;
  }
  /*Cook Islands*/
  .ui-icon.ck {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -924px
      0;
  }
  /*Chile*/
  .ui-icon.cl {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -945px
      0;
  }
  /*Cameroon*/
  .ui-icon.cm {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -966px
      0;
  }
  /*China*/
  .ui-icon.cn {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -987px
      0;
  }
  /*Colombia*/
  .ui-icon.co {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1008px
      0;
  }
  /*Costa Rica*/
  .ui-icon.cr {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1029px
      0;
  }
  /*Cuba*/
  .ui-icon.cu {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1050px
      0;
  }
  /*Cape Verde*/
  .ui-icon.cv {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1071px
      0;
  }
  /*Curaçao*/
  .ui-icon.cw {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1092px
      0;
  }
  /*Christmas Island*/
  .ui-icon.cx {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1113px
      0;
  }
  /*Cyprus*/
  .ui-icon.cy {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1134px
      0;
  }
  /*Czech Republic*/
  .ui-icon.cz {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1155px
      0;
  }
  /*Germany*/
  .ui-icon.de {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1176px
      0;
  }
  /*Djibouti*/
  .ui-icon.dj {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1197px
      0;
  }
  /*Denmark*/
  .ui-icon.dk {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1218px
      0;
  }
  /*Dominica*/
  .ui-icon.dm {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1239px
      0;
  }
  /*Dominican Republic*/
  .ui-icon.do {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1260px
      0;
  }
  /*Algeria*/
  .ui-icon.dz {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1281px
      0;
  }
  /*Ecuador*/
  .ui-icon.ec {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1302px
      0;
  }
  /*Estonia*/
  .ui-icon.ee {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1323px
      0;
  }
  /*Egypt*/
  .ui-icon.eg {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1344px
      0;
  }
  /*Western Sahara*/
  .ui-icon.eh {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1365px
      0;
  }
  /*Eritrea*/
  .ui-icon.er {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1386px
      0;
  }
  /*Spain*/
  .ui-icon.es {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1407px
      0;
  }
  /*Ethiopia*/
  .ui-icon.et {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1428px
      0;
  }
  /*Finland*/
  .ui-icon.fi {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1449px
      0;
  }
  /*Fiji*/
  .ui-icon.fj {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1470px
      0;
  }
  /*Falkland Islands*/
  .ui-icon.fk {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1491px
      0;
  }
  /*Federated States of Micronesia*/
  .ui-icon.fm {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1512px
      0;
  }
  /*Faroe Islands*/
  .ui-icon.fo {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1533px
      0;
  }
  /*France*/
  .ui-icon.fr {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1554px
      0;
  }
  /*Georgia*/
  .ui-icon.ga {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1575px
      0;
  }
  /*United Kingdom*/
  .ui-icon.gb {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1596px
      0;
  }
  /*Grenada*/
  .ui-icon.gd {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1617px
      0;
  }
  /*Georgia*/
  .ui-icon.ge {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1638px
      0;
  }
  /*French Guiana*/
  .ui-icon.gf {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1659px
      0;
  }
  /*Guernsey*/
  .ui-icon.gg {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1680px
      0;
  }
  /*Ghana*/
  .ui-icon.gh {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1701px
      0;
  }
  /*Gibraltar*/
  .ui-icon.gi {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1722px
      0;
  }
  /*Greenland*/
  .ui-icon.gl {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1743px
      0;
  }
  /*Gambia*/
  .ui-icon.gm {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1764px
      0;
  }
  /*Guinea*/
  .ui-icon.gn {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1785px
      0;
  }
  /*Guadeloupe*/
  .ui-icon.gp {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1806px
      0;
  }
  /*Equatorial Guinea*/
  .ui-icon.gq {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1827px
      0;
  }
  /*Greece*/
  .ui-icon.gr {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1848px
      0;
  }
  /*South Georgia and the South Sandwich Islands NO*/
  .ui-icon.gs {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1869px
      0;
  }
  /*Guatemala*/
  .ui-icon.gt {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1890px
      0;
  }
  /*Guam*/
  .ui-icon.gu {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1911px
      0;
  }
  /*Guinea-Bissau*/
  .ui-icon.gw {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1932px
      0;
  }
  /*Guyana*/
  .ui-icon.gy {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1953px
      0;
  }
  /*Hong Kong*/
  .ui-icon.hk {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1974px
      0;
  }
  /*Heard Island and McDonald Islands NO*/
  .ui-icon.hm {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -1995px
      0;
  }
  /*Honduras*/
  .ui-icon.hn {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2016px
      0;
  }
  /*Croatia*/
  .ui-icon.hr {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2037px
      0;
  }
  /*Haiti*/
  .ui-icon.ht {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2058px
      0;
  }
  /*Hungary*/
  .ui-icon.hu {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2079px
      0;
  }
  /*Indonesia*/
  .ui-icon.id {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2100px
      0;
  }
  /*Ireland*/
  .ui-icon.ie {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2121px
      0;
  }
  /*Israel*/
  .ui-icon.il {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2142px
      0;
  }
  /*Isle Of Man*/
  .ui-icon.im {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2163px
      0;
  }
  /*India*/
  .ui-icon.in {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2184px
      0;
  }
  /*British Indian Ocean Territory NO*/
  .ui-icon.io {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2205px
      0;
  }
  /*Iraq*/
  .ui-icon.iq {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2226px
      0;
  }
  /*Iran, Islamic Republic Of*/
  .ui-icon.ir {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2247px
      0;
  }
  /*Iceland*/
  .ui-icon.is {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2268px
      0;
  }
  /*Italy*/
  .ui-icon.it {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2289px
      0;
  }
  /*Jersey*/
  .ui-icon.je {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2310px
      0;
  }
  /*Jamaica*/
  .ui-icon.jm {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2331px
      0;
  }
  /*Jordan*/
  .ui-icon.jo {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2352px
      0;
  }
  /*Japan*/
  .ui-icon.jp {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2373px
      0;
  }
  /*Kenya*/
  .ui-icon.ke {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2394px
      0;
  }
  /*Kyrgyzstan*/
  .ui-icon.kg {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2415px
      0;
  }
  /*Cambodia*/
  .ui-icon.kh {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2436px
      0;
  }
  /*Kiribati*/
  .ui-icon.ki {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2457px
      0;
  }
  /*Comoros*/
  .ui-icon.km {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2478px
      0;
  }
  /*Saint Kitts and Nevis*/
  .ui-icon.kn {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2499px
      0;
  }
  /*North Korea*/
  .ui-icon.kp {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2520px
      0;
  }
  /*South Korea*/
  .ui-icon.kr {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2541px
      0;
  }
  /*Kuwait*/
  .ui-icon.kw {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2562px
      0;
  }
  /*Cayman Islands*/
  .ui-icon.ky {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2583px
      0;
  }
  /*Kazakhstan*/
  .ui-icon.kz {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2604px
      0;
  }
  /*Laos*/
  .ui-icon.la {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2625px
      0;
  }
  /*Lebanon*/
  .ui-icon.lb {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2646px
      0;
  }
  /*Saint Lucia*/
  .ui-icon.lc {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2667px
      0;
  }
  /*Liechtenstein*/
  .ui-icon.li {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2688px
      0;
  }
  /*Sri Lanka*/
  .ui-icon.lk {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2709px
      0;
  }
  /*Liberia*/
  .ui-icon.lr {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2730px
      0;
  }
  /*Lesotho*/
  .ui-icon.ls {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2751px
      0;
  }
  /*Lithuania*/
  .ui-icon.lt {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2772px
      0;
  }
  /*Luxembourg*/
  .ui-icon.lu {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2793px
      0;
  }
  /*Latvia*/
  .ui-icon.lv {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2814px
      0;
  }
  /*Libyan Arab Jamahiriya*/
  .ui-icon.ly {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2835px
      0;
  }
  /*Morocco*/
  .ui-icon.ma {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2856px
      0;
  }
  /*Monaco*/
  .ui-icon.mc {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2877px
      0;
  }
  /*Moldova, Republic Of*/
  .ui-icon.md {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2898px
      0;
  }
  /*Montenegro*/
  .ui-icon.me {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2919px
      0;
  }
  /*Collectivity of Saint Martin NO*/
  .ui-icon.mf {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2940px
      0;
  }
  /*Madagascar NO*/
  .ui-icon.mg {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2961px
      0;
  }
  /*Marshall Islands*/
  .ui-icon.mh {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -2982px
      0;
  }
  /*Macedonia, The Former Yugoslav Republic Of*/
  .ui-icon.mk {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3003px
      0;
  }
  /*Mali*/
  .ui-icon.ml {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3024px
      0;
  }
  /*Myanmar*/
  .ui-icon.mm {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3045px
      0;
  }
  /*Mongolia*/
  .ui-icon.mn {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3066px
      0;
  }
  /*Macao*/
  .ui-icon.mo {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3087px
      0;
  }
  /*Northern Mariana Islands*/
  .ui-icon.mp {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3108px
      0;
  }
  /*Martinique*/
  .ui-icon.mq {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3129px
      0;
  }
  /*Mauritania*/
  .ui-icon.mr {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3150px
      0;
  }
  /*Montserrat*/
  .ui-icon.ms {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3171px
      0;
  }
  /*Malta*/
  .ui-icon.mt {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3192px
      0;
  }
  /*Mauritius*/
  .ui-icon.mu {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3213px
      0;
  }
  /*Maldives*/
  .ui-icon.mv {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3234px
      0;
  }
  /*Malawi*/
  .ui-icon.mw {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3255px
      0;
  }
  /*Maxico*/
  .ui-icon.mx {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3276px
      0;
  }
  /*Malaysia*/
  .ui-icon.my {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3297px
      0;
  }
  /*Mozambique*/
  .ui-icon.mz {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3318px
      0;
  }
  /*Namibia*/
  .ui-icon.na {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3339px
      0;
  }
  /*New Caledonia*/
  .ui-icon.nc {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3360px
      0;
  }
  /*Niger*/
  .ui-icon.ne {
    width: 17px;
    height: 14px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3381px
      0;
  }
  /*Norfolk Island NO*/
  .ui-icon.nf {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3402px
      0;
  }
  /*Nigeria*/
  .ui-icon.ng {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3423px
      0;
  }
  /*Nicaragua*/
  .ui-icon.ni {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3444px
      0;
  }
  /*Netherlands*/
  .ui-icon.nl {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3465px
      0;
  }
  /*Norway*/
  .ui-icon.no {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3486px
      0;
  }
  /*Nepal*/
  .ui-icon.np {
    width: 17px;
    height: 20px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3507px
      0;
  }
  /*Nauru*/
  .ui-icon.nr {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3528px
      0;
  }
  /*Niue NO*/
  .ui-icon.nu {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3549px
      0;
  }
  /*New Zealand*/
  .ui-icon.nz {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3570px
      0;
  }
  /*Oman*/
  .ui-icon.om {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3591px
      0;
  }
  /*Panama*/
  .ui-icon.pa {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3612px
      0;
  }
  /*Peru*/
  .ui-icon.pe {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3633px
      0;
  }
  /*French Polynesia*/
  .ui-icon.pf {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3654px
      0;
  }
  /*Papua New Guinea*/
  .ui-icon.pg {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3675px
      0;
  }
  /*Philippines*/
  .ui-icon.ph {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3696px
      0;
  }
  /*Pakistan*/
  .ui-icon.pk {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3717px
      0;
  }
  /*Poland*/
  .ui-icon.pl {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3738px
      0;
  }
  /*Saint Pierre and Miquelon NO*/
  .ui-icon.pm {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3759px
      0;
  }
  /*Pitcairn Islands NO*/
  .ui-icon.pn {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3780px
      0;
  }
  /*Puerto Rico*/
  .ui-icon.pr {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3801px
      0;
  }
  /*Palestine, State Of*/
  .ui-icon.ps {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3822px
      0;
  }
  /*Portugal*/
  .ui-icon.pt {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3843px
      0;
  }
  /*Palau*/
  .ui-icon.pw {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3864px
      0;
  }
  /*Paraguay*/
  .ui-icon.py {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3885px
      0;
  }
  /*Qatar*/
  .ui-icon.qa {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3906px
      0;
  }
  /*Reunion*/
  .ui-icon.re {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3927px
      0;
  }
  /*Romania*/
  .ui-icon.ro {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3948px
      0;
  }
  /*Serbia*/
  .ui-icon.rs {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3969px
      0;
  }
  /*Russian Federation*/
  .ui-icon.ru {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4011px
      0;
  }
  /*Rwanda*/
  .ui-icon.rw {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -3990px
      0;
  }
  /*Saudi Aribia*/
  .ui-icon.sa {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4032px
      0;
  }
  /*Soloman Islands*/
  .ui-icon.sb {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4053px
      0;
  }
  /*Seychelles*/
  .ui-icon.sc {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4074px
      0;
  }
  /*Sudan*/
  .ui-icon.sd {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4095px
      0;
  }
  /*Sweden*/
  .ui-icon.se {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4116px
      0;
  }
  /*Singapore*/
  .ui-icon.sg {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4137px
      0;
  }
  /*Saint Helena*/
  .ui-icon.sh {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4158px
      0;
  }
  /*Slovenia*/
  .ui-icon.si {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4179px
      0;
  }
  /*Svalbard And Jan Mayen*/
  .ui-icon.sj {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4200px
      0;
  }
  /*Slovakia*/
  .ui-icon.sk {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4221px
      0;
  }
  /*Sierra Leone*/
  .ui-icon.sl {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4242px
      0;
  }
  /*San Marino*/
  .ui-icon.sm {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4263px
      0;
  }
  /*Senegal*/
  .ui-icon.sn {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4284px
      0;
  }
  /*Somalia*/
  .ui-icon.so {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4305px
      0;
  }
  /*Suriname*/
  .ui-icon.sr {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4326px
      0;
  }
  /*South Sudan NO*/
  .ui-icon.ss {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4347px
      0;
  }
  /*Sao Tome And Principe*/
  .ui-icon.st {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4368px
      0;
  }
  /*El Salvador*/
  .ui-icon.sv {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4389px
      0;
  }
  /*Sint Maarten NO*/
  .ui-icon.sx {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4410px
      0;
  }
  /*Syrian Arab Republic*/
  .ui-icon.sy {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4431px
      0;
  }
  /*Swaziland*/
  .ui-icon.sz {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4452px
      0;
  }
  /*Turks and Caicos Islands NO*/
  .ui-icon.tc {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4473px
      0;
  }
  /*Chad*/
  .ui-icon.td {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4494px
      0;
  }
  /*French Southern Territories*/
  .ui-icon.tf {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4515px
      0;
  }
  /*Togo*/
  .ui-icon.tg {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4536px
      0;
  }
  /*Thailand*/
  .ui-icon.th {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4557px
      0;
  }
  /*Tajikistan*/
  .ui-icon.tj {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4578px
      0;
  }
  /*Tokelau*/
  .ui-icon.tk {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4599px
      0;
  }
  /*Timor-Leste*/
  .ui-icon.tl {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4620px
      0;
  }
  /*Turkmenistan*/
  .ui-icon.tm {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4641px
      0;
  }
  /*Tunisia*/
  .ui-icon.tn {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4662px
      0;
  }
  /*Tonga*/
  .ui-icon.to {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4683px
      0;
  }
  /*Turkey*/
  .ui-icon.tr {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4704px
      0;
  }
  /*Trinidad And Tobago*/
  .ui-icon.tt {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4725px
      0;
  }
  /*Tuvalu*/
  .ui-icon.tv {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4746px
      0;
  }
  /*Taiwan*/
  .ui-icon.tw {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4767px
      0;
  }
  /*Tanzania, United Republic Of*/
  .ui-icon.tz {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4788px
      0;
  }
  /*Ukraine*/
  .ui-icon.ua {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4809px
      0;
  }
  /*Uganda*/
  .ui-icon.ug {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4830px
      0;
  }
  /*United States Minor Outlying Islands NO*/
  .ui-icon.um {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4851px
      0;
  }
  /*United States*/
  .ui-icon.us {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4872px
      0;
  }
  /*Uruguay*/
  .ui-icon.uy {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4893px
      0;
  }
  /*Uzbekistan*/
  .ui-icon.uz {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4914px
      0;
  }
  /*Vatican City*/
  .ui-icon.va {
    width: 17px;
    height: 16px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4935px
      0;
  }
  /*Saint Vincent And The Grenadines*/
  .ui-icon.vc {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4956px
      0;
  }
  /*Venezuela, Bolivarian Republic Of*/
  .ui-icon.ve {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4977px
      0;
  }
  /*British Virgin Islands*/
  .ui-icon.vg {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -4998px
      0;
  }
  /*Virgin Islands, U.S.*/
  .ui-icon.vi {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -5019px
      0;
  }
  /*Viet Nam*/
  .ui-icon.vn {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -5040px
      0;
  }
  /*Vanuatu*/
  .ui-icon.vu {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -5061px
      0;
  }
  /*Wallis And Futuna*/
  .ui-icon.wf {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -5082px
      0;
  }
  /*Samoa*/
  .ui-icon.ws {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -5103px
      0;
  }
  /*Yemen*/
  .ui-icon.ye {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -5124px
      0;
  }
  /*Mayotte NO*/
  .ui-icon.yt {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -5145px
      0;
  }
  /*South Africa*/
  .ui-icon.za {
    width: 17px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/height:11px;country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -5166px
      0;
  }
  /*Zambia*/
  .ui-icon.zm {
    width: 17px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -5187px
      0;
  }
  .ui-icon.zw {
    width: 16px;
    height: 11px;
    background: url(https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.1.1/geodatasource-countryflag.png) -5208px
      0;
  }
`;

export const Product = styled.div`
  .lp_product_detail_page a.lio-tertiary {
    position: relative;
  }
  .slider-container {
    margin-top: 30px;
  }

  @media screen and (min-width: 768px) {
    .lp_product_detail_page {
      position: relative;
    }
    .lp_product_detail_page a.lio-tertiary {
      padding: 10px 24px;
      position: absolute;
      top: 0;
    }
    .slider-container {
      margin-top: 0;
    }
  }
`;
export const AddNewListModalStyle = styled.div`
  .btn-secondary {
    background-color: green;
    border: 1px solid green;
  }
  .btn-secondary:hover {
    background-color: green;
    border: 1px solid green;
  }
`;
export const ProfilePicture = styled.div`
  .img-fluid {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin: 0 auto;
    width: 50%;
  }
`;

export const Tick = styled.div`
  .form-group {
    width: 85%;
  }
  .edit button {
    padding: 8px 10px;
    background: #007aff;
  }
`;
export const UpdateProduct = styled.div`
  .edit {
    position: absolute;
    right: 0;
  }
`;
export const ButtonLoader = styled.div`
  .spinner-border {
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    vertical-align: text-bottom;
    border: 0.1em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: spinner-border 0.75s linear infinite;
    animation: spinner-border 0.75s linear infinite;
  }
`;
export const PageLoader = styled.div`
  .justify-content-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .spinner-border {
    width: 3rem;
    height: 3rem;
    border-width: 0.3em;
  }
`;
export const ImageButtons = styled.div`
  .image-navigations a {
    margin: 5px;
  }
  .btn-sm {
    padding: 0.4rem 0.55rem;
    font-size: 0.875rem;
    line-height: 2.5;
    border-radius: 2rem;
    box-shadow: 0 3px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .btn-sm:hover {
    // box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.22);
  }
`;
export const BusinessPageStyle = styled.div`
  height: 135vh;
  .mobile {
    padding: 4px 4px;
    margin: 0px 20.5px;
  }
  h1 {
    color: #c5b358;
    font-size: 48px;
    padding-top: 10px;
    font-weight: 500;
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  h3 {
    color: #444444;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .businessLioneus {
    margin-left: 10px;
  }
  .textBusiness {
    color: #373737;
    font-size: 18px;
    padding-bottom: 10px;
    font-weight: 400;
  }

  a {
    color: #848484;
    font-weight: 300;
    text-decoration: none;
  }

  img {
    width: 150px;
    height: 150px;
    margin: auto;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 38vh;
    flex-wrap: wrap;
  }
  .card {
    // box-shadow: 0 0.5px 1px 0 rgba(0, 0, 0, 0.25);
    max-width: 300px;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    margin: 0 auto;
    overflow: hidden;
    margin: 30px;
  }
  .card p {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 10px;
    text-align: left;
  }
  @media screen and (max-width: 800px) {
    height: 425vh;
  }
  @media screen and (max-width: 900px) {
    body {
      margin: 0px 45px;
    }
  }
`;
export const UplaodButtons = styled.div`
  .green {
    background-color: #0f9d58;
    border-color: #0f9d58;
    cursor: pointer;
  }
  .red {
    background-color: #ff2400;
    border-color: #ff2400;
    padding: 0.4rem 0.6rem;
    cursor: pointer;
  }
  .blue {
    background-color: #007aff;
    border-color: #007bff;
    cursor: pointer;
  }
  .green,
  .red,
  .blue {
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.25);
  }
  .green:hover,
  .blue:hover,
  .red:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.22);
    transition: all 0.3s ease 0s;
  }
`;
export const IconLoader = styled.div`
  .spinner-border {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    z-index: 2;
    vertical-align: text-bottom;
    border: 0.1em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: spinner-border 0.75s linear infinite;
    animation: spinner-border 0.75s linear infinite;
  }
`;
export default {
  Product,
  ErrorsSection,
  Main,
  ConsumerStyle,
  ConsumerContactForm,
  SearchPageStyle,
  StoreListButton,
  BookingStyle,
  EditButtonStyle,
  ShowButton,
  AddToCartStyle,
  PrimaryButtonStyle,
  NewOffering,
  Offerings,
  Announcement,
  OfferingsSection,
  ProfileSection,
  Body,
  Cover,
  TitleContainer,
  StorePageStyle,
  AddToCartPageStyle,
  WishlistStyle,
  TertiaryButton,
  SearchBarStyle,
  Autosuggest,
  SearchModal,
  dropdownRowStyle,
  SearchButton,
  ProductCardStyle,
  SignupStyle,
  LadyImage,
  Transfer,
  Account,
  Flag,
  AddNewListModalStyle,
  ProfilePicture,
  Tick,
  ButtonLoader,
  PageLoader,
  ImageButtons,
  BusinessPageStyle,
  UplaodButtons,
  IconLoader,
};
