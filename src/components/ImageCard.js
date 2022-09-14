import React from "react";

function ImageCard(props) {
  return (
    <div className="card-container">
      <img
        src={props.img}
        width="500"
        style={{ color: props.color }}
        className="img-card"
      />
      <h4 className="centered">{props.text}</h4>
    </div>
  );
}

export default ImageCard;
