import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
    Toolbar,
    Typography,
    Button
} from "@material-ui/core";

import classes from "./Header.module.css";

export default function Header() {
    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                style={{
                    boxShadow: "none",
                    backgroundColor: "#000066"
                }}
            >
                <Toolbar>
                    <h4 className={classes.title}>CODER</h4>

                    <Button
                        color="inherit"
                        style={{
                            fontSize: "1.2rem"
                        }}
                    >
                        LOGIN
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.banner}>
                <h1>CODER</h1>
                <h2>The Best Place to Code</h2>
            </div>
        </div>
    );
}
