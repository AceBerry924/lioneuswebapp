import React, { Component } from "react";
import styled from "styled-components";
import SignInForm from "../SignIn/SignInForm";

const Main = styled.div`
  display: grid;
  display: flex;
  justify-content: center;
  padding: 2rem 2rem;
`;

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <Main>
        <SignInForm />
      </Main>
    );
  }
}
