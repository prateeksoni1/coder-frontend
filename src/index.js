import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Axios from "axios";

Axios.defaults.baseURL =
    "https://coder-backend.herokuapp.com";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();
