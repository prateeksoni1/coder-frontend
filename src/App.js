import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cpp from "./components/Cpp/Cpp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/cpp" exact component={Cpp} />
      </div>
    );
  }
}

export default App;
