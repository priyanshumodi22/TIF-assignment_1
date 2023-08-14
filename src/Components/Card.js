import React from "react";
import Button from "./Button";
import "../Css/Carousel.css";

const Card = ({imageSrc, title, description}) => {
  return (
    <div className="CardStyle">
      <div className="CardImageStyle">
        <img alt="card" src={imageSrc} className="CardImage" />
      </div>
      <h3 className="CardStyleTitile">{title}</h3>
      <p className="CardStyleDesciption">{description}</p>
      <Button
        text="Read More"
        background="#FFF"
        color="#424961"
        border="1px solid #424961"
        borderRadius="18px"
        width="100px"
        height="34px"
      />
    </div>
  );
};

export default Card;
