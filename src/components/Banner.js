import React from "react";
import BannerImage from "../images/Banner.jpg";

import "../Banner.css";

export default function Banner() {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "noRepeat",
      }}
    >
      <div className="logo-container">
        <h1 className="logo-name">Grow Your Business</h1>
      </div>
    </div>
  );
}
