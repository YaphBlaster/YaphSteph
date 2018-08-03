import React, { Component } from "react";
import Intro from "./components/Intro";
import Albums from "./components/Albums";
import Avatars from "./components/Avatars";
import Data from "./data/Data";
import { addBackToTop } from "vanilla-back-to-top";
import ImagesLoaded from "react-images-loaded";
import Anime from "react-anime";

class App extends Component {
  state = {
    loaded: false
  };
  render() {
    addBackToTop({
      backgroundColor: "#ffcd3a"
    });
    return (
      <div className={`App ${this.state.loaded ? "" : "hidden"}`}>
        <ImagesLoaded done={() => this.setState({ loaded: true })}>
          <Avatars loaded={this.state.loaded} />
          <Intro loaded={this.state.loaded} title="Yaphet and Stephanie" />
          <Albums albums={Data.photoLinks} />
        </ImagesLoaded>
      </div>
    );
  }
}

export default App;
