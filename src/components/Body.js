import React from "react";
import "../Body.css";
import WorkImageOne from "../images/WorkImage1.jpg";
import WorkImageTwo from "../images/WorkImage2.jpg";
import WorkImageThree from "../images/WorkImage3.jpg";
import ImageOne from "../images/ImageOne.jpeg";
import ImageCard from "./ImageCard";

export default function Body() {
  const imageHolder = [
    {
      id: 1,
      img: WorkImageOne,
      text: "STRATEGIC COMMUNICATIONS",
    },

    {
      id: 2,
      img: WorkImageTwo,
      text: "CAMPAIGN MANAGEMENT",
    },
    {
      id: 3,
      img: WorkImageThree,
      text: "ADVERTISING AND MEDIA STRATEGY",
    },
  ];
  return (
    <div className="body-container">
      <h2 className="header">
        Five Start Agency is driven to give the best results to our customers.
        Growing your business is our number one priority.
      </h2>

      <h1 className="header-title">WHAT WE DO</h1>
      <div className="imageHolder-container">
        {imageHolder.map((item) => {
          return (
            <ImageCard
              img={item.img}
              color={item.color}
              text={item.text}
              key={item.id}
            />
          );
        })}
      </div>

      <div className="bottom-container">
        <h1 className="header-title">WHO WE ARE</h1>
        <div className="who-container">
          <img
            src={ImageOne}
            className="bottom-img"
            alt="employees standing next to eachother"
          />
          <p className="statement-header">
            Founded by a team of some of the best professionals in the industry.
            Our Team members have extensive experience in campaigns, advocacy,
            messaging and media relations. We are passionate about hlping
            clients win, make change and fight for a better world.
          </p>
        </div>
      </div>
    </div>
  );
}
