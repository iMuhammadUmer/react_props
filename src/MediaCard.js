import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function MediaCard(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h2>{props.title}</h2>
        <img src={props.img} className="App-logo" alt="logo" />
        <p>{props.description}</p>
      </header>
    </div>
  );
}

export default MediaCard;
