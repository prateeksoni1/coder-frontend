import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Topic from "./components/Topic/Topic";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/cpp" exact render={() => <Topic type="cpp" />} />
        <Route path="/java" exact render={() => <Topic type="java" />} />
        <Route path="/ds" exact render={() => <Topic type="ds" />} />
      </div>
    );
  }
}

export default App;
