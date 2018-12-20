import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import classes from "./Topic.module.css";
import Topics from "../Topics/Topics";

class Topic extends Component {
  state = {
    showTopics: false
  };

  showTopics = () => {
    this.setState({
      showTopics: true
    });
  };

  render() {
    const path = "/" + this.props.type;
    return (
      <div>
        <NavBar title={this.props.type} />
        <div className={classes.container}>
          <div className={classes.tabs}>
            <h2 onClick={this.showTopics}>Learn</h2>
            <h2>Practice</h2>
          </div>
          {this.state.showTopics ? (
            <Topics topic={this.props.type} path={path} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Cpp;
