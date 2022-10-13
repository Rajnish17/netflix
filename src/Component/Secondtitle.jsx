import React from "react";
import "./Secondtitle.css";

const Secondtitle = () => {
  return (
    <div className="title">
      <div
        className="title_image"
        style={{
          backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png")`,
        }}
      ></div>
      <div className="title_head">
        <h1>Enjoy on your TV.</h1>
        <h2>Watch on smart TVs, PlayStation, Xbox,</h2>
        <h2>Chromecast, Apple TV, Blu-ray players and</h2>
        <h2>more.</h2>
      </div>
    </div>
  );
};

export default Secondtitle;
