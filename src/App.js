import React, { Component } from "react";
import Intro from "./components/Intro";
import Albums from "./components/Albums";
import Data from "./data/Data";
import { addBackToTop } from "vanilla-back-to-top";
import ImagesLoaded from "react-images-loaded";

class App extends Component {
  state = {
    loaded: false
  };
  render() {
    addBackToTop();
    return (
      <div className={`App ${this.state.loaded ? "" : "hidden"}`}>
        <ImagesLoaded done={() => this.setState({ loaded: true })}>
          <Intro title="Yaphet and Stephanie" />
          <Albums albums={Data.photoLinks} />
        </ImagesLoaded>
      </div>
    );
  }
}

export default App;
