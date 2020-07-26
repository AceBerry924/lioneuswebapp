import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import $ from "jquery";

class Footer extends React.Component {
  componentDidMount() {
    var request = require("request");
    var url =
      "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572";

    request(
      {
        url: url,
        json: true,
      },
      function (error, response, body) {
        if (!error && response.statusCode === 200) {
          console.log(body);
          if (body.country_name) {
            return $("#state").html(body.country_name);
          }
          // else if (body.state === null) {
          //     return $('#state').html(body.country_name)
          // } else if (body.state === null && body.country_name === null) {
          //     return $('#state').html(body.city)
          // } else {
          //     return "Planet Earth"
          // }
          console.log(body);
        }
      }
    );
  }
  render() {
    return (
      <Main>
        <div className="footer-top" id="website-brand">
          <div className="main-container">
            <div className="first-footer-section">
              <div className="slogan">
                <span className="slogan-text">
                  <span id="state" />
                </span>
                <span className="middle-section">Beta</span>
                <div id="right-footer-section">
                  <div className="slogan-country">Lioneus © 2020</div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col-sm" id="left-footer-section">
                  <Link to="/business">Business</Link>
                  <Link to="/help">Help</Link>
                  <Link to="/feedback">Feedback</Link>
                </div>
                <div className="col-sm" id="right-footer-section">
                  <Link to="/terms">Terms</Link>
                  <Link to="/whatsnew">What's New</Link>
                  <Link to="/about">About</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    );
  }
}

const Main = styled.div`
  a {
    font-size: 10rem;
    font-family: Calibri, "Trebuchet MS", Arial, sans-serif;
  }
  @media screen and (max-width: 576px) {
    #website-brand {
      // bottom: -50px;
    }
  }
  .middle-section {
    text-align: center;
    width: 50px;
    font-size: 1rem;
    // padding-left: 25px;
    margin: auto;
    font-weight: 540;
    color: rgba(0, 0, 0, 0.54);
  }

  #website-brand {
    background: #f7f8f8;
    line-height: 40px;
    z-index: 3000;
    position: fixed;
    bottom: 0px;
    // bottom: -40px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
    border-top: 1px solid #e5e6e9;
  }
  @media screen and (max-width: 576px) {
    .gMxwQy #website-brand {
      bottom: -40px;
    }
  }

  .main-container {
    font-size: 15px;
  }
  .first-footer-section {
    padding-left: 0.3rem;
    border-bottom: 1px solid #e5e6e9;
  }
  .slogan {
    text-align: left;
    color: rgba(0, 0, 0, 0.54);
    display: flex;
  }
  .slogan-country {
    font-size: 1rem;
    text-align: left;
    color: rgba(0, 0, 0, 0.54);
    padding-right: 20px;
    font-family: Calibri, "Trebuchet MS", Arial, sans-serif;
    font-weight: 540;
  }
  .slogan-text {
    font-size: 1rem;
    text-align: left;
    color: rgba(0, 0, 0, 0.54);
    padding-left: 27px;
    width : 125px;
    font-family: Calibri, "Trebuchet MS", Arial, sans-serif;
    font-weight: 540;
  }
  #left-footer-section {
    float: left;
    text-align: left;
    white-space: nowrap;
    @media only screen and (max-width: 600px) {
      text-align: center;
      float: none;
    }
  }
  #left-footer-section a {
    padding-left: 1rem;
    color: #5f6368;
    margin: 0 !important;
  }
  #right-footer-section {
    margin-right: 15px;
    float: right;
    text-align: right;
    white-space: nowrap;
    // padding-left: 27px;
    // margin: 0 !important;
    @media only screen and (max-width: 600px) {
      text-align: center;
    }
  }
  #right-footer-section a {
    color: #5f6368;
    padding-left: 1rem;
    margin: 0 !important;
  }
  a {
    font-size: 1rem;
  }
  @media screen and (max-width: 600px) {
    a {
      border: 0px solid #c5b358;
      margin: 2rem auto;
    }
  }
`;
export default Footer;
