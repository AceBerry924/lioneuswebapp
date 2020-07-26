import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../common/Elements/Logo/Logo";
import Footer from "../common/Footer/Footer";
import MainLanding from "./Main";
import Header from "../common/Header/Header";
const Main = styled.div`
  display: grid;
  height: 100vh;
  width: auto;
  width: 100vw;
  grid-template-rows: 10vh 70vh 0vh;
  grid-template-areas: 
  "header header header"
  "MainArea MainArea MainArea"
  "FooterArea FooterArea FooterArea";

.hYiukE .cYEKah .button {
  width: auto;
  // font-size: 1rem;
}
.lnHIOO .button {
  width: -webkit-fill-available;
  // font-size: 1rem;
}
.cYEKah .button{
  background: {this.state.bgcolor}
}


`;


const FooterArea = styled.div`
  flex-direction: column;
  display: block;
  width: -webkit-fill-available;
  // grid-area: FooterArea / FooterArea / FooterArea / FooterArea;
  margin: initial;
  #website-brand {
    z-index: initial;
  }
  @media screen and (max-width: 576px) {
    #website-brand {
      // bottom: -80px;
      z-index: 1000;
      position: absolute;
    }
  }
`;
const MainArea = styled.div`
  grid-area: MainArea;
  display: flex;
  flex-direction: column;
  // padding: 8rem 0rem;
  // width: 630px;
  display: block;
  @media only screen and (max-width: 600px) {
    margin: 36px auto 18px;
  }
  margin: auto;
  width: -webkit-fill-available;
  // transform: translateY(-65px);
  // position: relative;
  // z-index: 99
  @media only screen and (max-width: 600px) {
    // padding: 5rem 0rem;
    // input {
    //   width: 90%;
    // }
  }
`;

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Main>
          <Header />
          <MainArea>
            <Logo />
            <MainLanding />
          </MainArea>
          <FooterArea>
            <Footer />
          </FooterArea>
        </Main>
      </div>
    );
  }
}

export default LandingPage;
