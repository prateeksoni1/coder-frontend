import React, { Component } from "react";
import Card from "@material-ui/core/Card";

import classes from "./HomeCard.module.css";
import Axios from "axios";
import {
  CardActionArea,
  CardMedia,
  Typography,
  ButtonBase
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default class HomeCard extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    if (this.state.cards.length === 0) {
      Axios.get("/home-cards")
        .then(res => {
          // console.log(cards);
          this.setState({
            cards: res.data
          });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    console.log(this.state.cards);
    return (
      <div className={classes.root}>
        {this.state.cards.map(card => (
          <div className={classes.container}>
            <Card key={card._id}>
              <Link to={`/${card.url}`} style={{ textDecoration: "none" }}>
                <CardActionArea
                  className={classes.card}
                  style={{
                    backgroundColor: `${card.bg}`
                  }}
                >
                  <div>
                    <Typography gutterBottom variant="h6" color="textPrimary">
                      {card.title}
                    </Typography>
                  </div>
                </CardActionArea>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
