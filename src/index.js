import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./MediaCard";
import logo from "./logo.svg";
import "./App.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <App
    title="React Props Example"
    description="This project is for react props example"
    img={logo}
  />,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
