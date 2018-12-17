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
                    <Card key={card._id}>
                        <CardActionArea
                            onClick={() =>
                                console.log(
                                    "click" + card.url
                                )
                            }
                            className={classes.card}
                            style={{
                                backgroundColor: `${
                                    card.bg
                                }`
                            }}
                        >
                            {/* <ButtonBase
                                onClick={() =>
                                    console.log("clicked")
                                }
                                style={{
                                    width: "100%",
                                    height: "100%"
                                }}
                            > */}
                            <div>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    color="textPrimary"
                                >
                                    {card.title}
                                </Typography>
                            </div>
                            {/* </ButtonBase> */}
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        );
    }
}
