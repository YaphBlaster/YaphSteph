import React from "react";
import yaphet from "../../assets/avatars/yaphet.svg";
import steph from "../../assets/avatars/steph.svg";
import pixelHeart from "../../assets/avatars/pixelHeart.svg";
import Anime from "react-anime";

const Avatars = props => {
  return (
    <div className="avatars ">
      <img className="avatar transitional" src={yaphet} alt="" />
      {props.loaded ? (
        <Anime
          easing="easeOutElastic"
          loop={true}
          duration={500}
          direction="alternate"
          scale={[0.1, 0.9]}
        >
          <img className="heart transitional" src={pixelHeart} alt="" />
        </Anime>
      ) : null}

      <img className="avatar transitional" src={steph} alt="" />
    </div>
  );
};

export default Avatars;
