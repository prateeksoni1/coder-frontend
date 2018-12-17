import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route path="/" component={Home} />
            </div>
        );
    }
}

export default App;
