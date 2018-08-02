import React from "react";
import yaphet from "../../assets/avatars/yaphet.svg";
import steph from "../../assets/avatars/steph.svg";
import pixelHeart from "../../assets/avatars/pixelHeart.svg";
import thunderHeart from "../../assets/avatars/thunderHeart.svg";

const Avatars = () => {
  return (
    <div className="avatars">
      <img className="avatar" src={yaphet} alt="" />
      <img className="heart" src={pixelHeart} alt="" />
      <img className="avatar" src={steph} alt="" />
    </div>
  );
};

export default Avatars;
