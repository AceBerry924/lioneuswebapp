import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from '../Routing/AppRoutes'

class App extends React.Component {

  render() {
    return (
        <Router>
          <div className="App">
          <AppRoutes/>
          </div>
        </Router>
    );
  }
}
export default App;
