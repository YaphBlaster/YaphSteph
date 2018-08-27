import React from "react";

const Intro = props => {
  return (
    <div className="introduction">
      <p className="title transitional">{props.title}</p>
      <p className="welcome-text">
        Our wedding day was all that we could ask for. Amazing weather, great
        food and even better company. Our lovely day was captured by the
        talented Megan Steen, and we thought that we would share her work for
        your viewing pleasure. Enjoy!
      </p>
    </div>
  );
};

export default Intro;
