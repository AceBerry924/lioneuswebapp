import React, { Component } from "react";
import styled from "styled-components";
// import {NotificationManager} from "react-notifications";
import { withApollo } from "react-apollo";
import Footer from "../common/Footer/Footer";
import {
  BusinessPageStyle,
  SignupStyle,
} from "../common/assets/StyledComponent";
const Main = styled.div`
  #business-image {
    margin: 0 auto;
  }
`;

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <BusinessPageStyle>
          <div className="mobile" style={{paddingBottom : '10%'}}>
            <div className="businessLioneus">
              <h1>Engage with customers on Lioneus</h1>
              <div className="textBusiness">
                <p>
                  <a href="https://www.lioneus.com/sell" target="_blank" />
                  With a Lioneus Store, you get more than a business listing.
                  Your Business Store lets you easily connect with customers
                  across Lioneus. Do you have new product photos, hours or menu
                  items? Customers are looking for more than just a local
                  listing. Your Lioneus Store on Lioneus lets you feature the
                  best of your business.
                </p>
              </div>
            </div>
            <div className="container">
              <div className="card">
                <img
                  src={require("../common/assets/images/images/report.png")}
                  alt="sell"
                  width={150}
                  height={150}
                />
                <h3>Sell</h3>
                <p style={{ color: "#373737", fontSize: "16px" }}>
                  Our tools and services make it easy to manage, promote and
                  grow your business.
                </p>
              </div>
              <div className="card">
                <img
                  src={require("../common/assets/images/images/world.png")}
                  alt="online"
                  width={150}
                  height={150}
                />
                <h3>Online</h3>
                <p style={{ color: "#373737", fontSize: "16px" }}>
                  Manage your business anywhere. Use Lioneus to edit listings
                  and respond to buyers instantly, from anywhere.
                </p>
              </div>
              <div className="card">
                <img
                  src={require("../common/assets/images/images/blog.png")}
                  alt="promote"
                  width={150}
                  height={150}
                />
                <h3>Post</h3>
                <p style={{ color: "#373737", fontSize: "16px" }}>
                  You can post photos and offers to your profile to show what
                  makes your business unique.
                </p>
              </div>
              <div className="card">
                <img
                  src={require("../common/assets/images/images/open-png-5-open-png-1600_1600.png")}
                  width={150}
                  height={150}
                />
                <h3>Build</h3>
                <p style={{ color: "#373737", fontSize: "16px" }}>
                  Build better experiences that help you sell to local shoppers
                  in your community or to the world!
                </p>
              </div>
              <div className="card">
                <img
                  src={require("../common/assets/images/images/emoji.png")}
                  width={100}
                  height={100}
                />
                <h3>Customer</h3>
                <p style={{ color: "#373737", fontSize: "16px" }}>
                  It’s really easy to do. Just start a listing, and before you
                  know it, you’re making a sale.
                </p>
              </div>
              <div className="card">
                <img
                  src={require("../common/assets/images/images/medal.png")}
                  alt="reach"
                  width={150}
                  height={150}
                />
                <h3>Best</h3>
                <p style={{ color: "#373737", fontSize: "16px" }}>
                  Do what you do best and let us take care of the rest. Like we
                  always say: "Turn your passion into profit."
                </p>
              </div>
            </div>
          </div>
        </BusinessPageStyle>
        {/* <Main className="businessPage" style={{ paddingBottom: "25%" }}>
          <div className="mobile">
            <div className="businessLioneus">
              <h1>Get your business on Lioneus</h1>
              <div className="textBusiness">
                <p>
                  <a href="https://www.lioneus.com/sell" target="_blank">
                    Lioneus
                  </a>{" "}
                  is a local marketplace where local businesses can open their
                  online stores and sell to local customers.
                </p>
              </div>
            </div>
            <div className="container">
              <div className="card">
                <img
                  src={require("../common/assets/images/images/fall-shop-local.jpg")}
                  id="business-image"
                  alt="sell"
                  width="150"
                  height="150"
                />
                <h3>Sell</h3>
                <p style={{ color: "#A3A3A3", fontSize: "16px" }}>
                  Our tools and services make it easy to manage, promote and
                  grow your local business.
                </p>
              </div>
              <div className="card">
                <img
                  src={require("../common/assets/images/images/Online-Presence.png")}
                  id="business-image"
                  alt="online"
                  width="150"
                  height="150"
                />
                <h3>Online</h3>
                <p style={{ color: "#A3A3A3", fontSize: "16px" }}>
                  Manage your business anywhere. Use Lioneus to edit listings
                  and respond to buyers instantly, from anywhere.
                </p>
              </div>
              <div className="card">
                <img
                  src={require("../common/assets/images/images/megaphone.jpg")}
                  id="business-image"
                  alt="promote"
                  width="150"
                  height="150"
                />
                <h3>Post</h3>
                <p style={{ color: "#A3A3A3", fontSize: "16px" }}>
                  Create a sale or coupon to catch the eye of shoppers or reach
                  them right in their inboxes with a targeted offer.
                </p>
              </div>
              <div className="card">
                <img
                  src={require("../common/assets/images/images/open-png-5-open-png-1600_1600.png")}
                  id="business-image"
                  width="150"
                  height="150"
                />
                <h3>Build</h3>
                <p style={{ color: "#A3A3A3", fontSize: "16px" }}>
                  Build better experiences that help you sell to local shoppers
                  in your community.
                </p>
              </div>
              <div className="card">
                <img
                  src="https://www.helpscout.com/images/home/illustration-swatch@1x.jpg"
                  id="business-image"
                  alt="reach"
                  width="150"
                  height="150"
                />
                <h3>Customer</h3>
                <p style={{ color: "#A3A3A3", fontSize: "16px" }}>
                  It’s really easy to do. Just start a listing, and before you
                  know it, you’re making a sale.
                </p>
              </div>
              <div className="card">
                <img
                  src={require("../common/assets/images/images/best-of-the-best-png-png-youre-the-best-pluspng-com-600-png-youre-the-best-600.png")}
                  id="business-image"
                  alt="reach"
                  width="150"
                  height="150"
                />
                <h3>Best</h3>
                <p style={{ color: "#A3A3A3", fontSize: "16px" }}>
                  Do what you do best and let us take care of the rest.
                </p>
              </div>
            </div>
          </div>
        </Main> */}
        <div style={{ marginTop: "20%" }}>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default withApollo(LandingPage);
