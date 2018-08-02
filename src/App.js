import React, { Component } from "react";
import Intro from "./components/Intro";
import Albums from "./components/Albums";
import Data from "./data/Data";
import { addBackToTop } from "vanilla-back-to-top";
import ImagesLoaded from "react-images-loaded";
import { Spring, animated } from "react-spring";

class App extends Component {
  state = {
    loaded: false
  };
  render() {
    addBackToTop({
      backgroundColor: "#ffcd3a"
    });
    return (
      <Spring native from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {styles => (
          <animated.div style={styles}>
            <div className={`App ${this.state.loaded ? "" : "hidden"}`}>
              <ImagesLoaded done={() => this.setState({ loaded: true })}>
                <Intro title="Yaphet and Stephanie" />
                <Albums albums={Data.photoLinks} />
              </ImagesLoaded>
            </div>
          </animated.div>
        )}
      </Spring>
    );
  }
}

export default App;
