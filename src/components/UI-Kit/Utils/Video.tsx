import React from "react";

import Sample from "../assets/videos/Sample.mp4";

interface Props {}

export const Video = (props: Props) => {
  return (
    <div className="videoContainer">
      <video className="video" autoPlay muted>
        <source src={Sample} type="video/mp4" />
      </video>
    </div>
  );
};
