import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import classes from "./Cpp.module.css";
import Topics from "../Topics/Topics";

class Cpp extends Component {
  state = {
    showTopics: false
  };

  showTopics = () => {
    this.setState({
      showTopics: true
    });
  };

  render() {
    return (
      <div>
        <NavBar title="C++" />
        <div className={classes.container}>
          <div className={classes.tabs}>
            <h2 onClick={this.showTopics}>Learn</h2>
            <h2>Practice</h2>
          </div>
          {this.state.showTopics ? <Topics topic="cpp" path="/cpp" /> : null}
        </div>
      </div>
    );
  }
}

export default Cpp;
