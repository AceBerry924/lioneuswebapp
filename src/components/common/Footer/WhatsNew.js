import React from "react";
import { WhatsNewStyle } from "./StyledComponent/StyledComponent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const WhatsNew = () => {
  return (
    <React.Fragment>
      <Header />
      <WhatsNewStyle>
        <div className="parent-section whatsNew">
          <div className="container">
            <h1>All in together</h1>
            <h2>What's New?</h2>
            {/* <h3>Currently</h3> */}
            <p>Lioneus 1.0</p>
              <p>- We redesigned our checkout system, so that consumers can enjoy a frictionless journey.</p>
              <p>- Lioneus was born on the idea of bringing the local economy online and with this spirit we redesigned Lioneus to reflect how internet makes it easy for businesses to open an online store and for clients to buy local items or services.</p>
              <p>Today, Lioneus enables businesses to build their online store more quickly.</p>
            <h3>Upcoming</h3>
            <p>Lioneus 1.1</p>
            <p>- Stay tuned! 👻</p>
            <p><a href="https://www.lioneus.com/feedback">If you have any suggestions or comments leave us a feedback.</a>{" "}</p>
          </div>
        </div>
      </WhatsNewStyle>
      <Footer />
    </React.Fragment>
  );
};

export default WhatsNew;
