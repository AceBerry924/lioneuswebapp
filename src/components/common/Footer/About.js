import React from "react";
import { AboutStyle } from "./StyledComponent/StyledComponent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <AboutStyle>
        <div className="about">
          <h1>Our Journey</h1>
          <p>
            <span>December 2018:</span> Our founder had a converstion with a
            business owner on how small businesses can best thrive online.
          </p>
          <p>
            <span>January 2019:</span> Lioneus was born on the idea of bringing
            the local economy online.
          </p>
          <p>
            <span>October 2019:</span> We gathered feedback from various
            businesses and consumers on how Lioneus can serve their needs.
          </p>
          <p>
            <span>November 2019:</span> Lioneus's mission is to make easy for
            businesses to sell online.
          </p>
          <p>
            <span>December 2019:</span> Lioneus's motto is "All in together".
          </p>
          <p>
            <span>January 2020:</span> Alpha Lioneus tested.
          </p>
          <p>
            <span>April 2020:</span> Beta Lioneus launched.
          </p>
        </div>
      </AboutStyle>
      <Footer />
    </React.Fragment>
  );
};

export default About;
