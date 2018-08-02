import React from "react";
import Album from "../Album";

const Albums = props => {
  const isMobileDevice = () => {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  };

  props.albums.sort((a, b) => {
    return a.position - b.position;
  });
  return (
    <div className="albums">
      {props.albums.map((album, index) => {
        return (
          <Album
            key={index}
            link={album.link}
            thumbnail={album.thumbnail}
            title={album.title}
            onMobile={isMobileDevice()}
          />
        );
      })}
    </div>
  );
};

export default Albums;
