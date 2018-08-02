import React, { Component } from "react";
import "./css/style.css";
import Intro from "./components/Intro";
import Albums from "./components/Albums";
import Data from "./data/Data";
import { addBackToTop } from "vanilla-back-to-top";

class App extends Component {
  render() {
    addBackToTop();
    return (
      <div className="App">
        <Intro names="Yaphet and Stephanie" />
        <Albums albums={Data.photoLinks} />
      </div>
    );
  }
}

export default App;
