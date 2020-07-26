import React, { Component } from "react"
import CreateStoreForm from "../SignUp/CreateStoreForm";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  render() {
    return (
        <React.Fragment>
                <CreateStoreForm/>
        </React.Fragment>
    );
  }
}
