import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const NavBar = props => {
  return (
    <AppBar
      position="static"
      style={{
        boxShadow: "none",
        backgroundColor: "#000066"
      }}
    >
      <Toolbar>
        <h4>{props.title}</h4>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
