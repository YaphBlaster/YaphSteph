import React from "react";
import yaphet from "../../assets/avatars/yaphet.svg";
import steph from "../../assets/avatars/steph.svg";
import pixelHeart from "../../assets/avatars/pixelHeart.svg";
import thunderHeart from "../../assets/avatars/thunderHeart.svg";
import Anime from "react-anime";

const Avatars = props => {
  return (
    <div className="avatars">
      <img className="avatar" src={yaphet} alt="" />
      {props.loaded ? (
        <Anime
          easing="easeOutElastic"
          loop={true}
          duration={1000}
          direction="alternate"
          scale={[0.75, 0.9]}
        >
          <img className="heart" src={pixelHeart} alt="" />
        </Anime>
      ) : null}

      <img className="avatar" src={steph} alt="" />
    </div>
  );
};

export default Avatars;
