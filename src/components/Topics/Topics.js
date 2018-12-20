import React, { Component } from "react";
import Axios from "axios";
import classes from "./Topics.module.css";

class Topics extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    const topic = this.props.topic;
    if (this.state.topics.length == 0) {
      Axios.get("/topics?type=" + this.props.topic).then(res => {
        this.setState({
          topics: res.data
        });
      });
    }
  }

  render() {
    console.log(this.state.topics);
    return (
      <ul>
        {this.state.topics.map(topic => {
          return (
            <li key={topic._id}>
              <a href={`${this.props.path}/${topic.url}`}>{topic.name}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Topics;
