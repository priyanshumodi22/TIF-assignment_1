import React from "react";
import aboutImage from "../Assets/about.png";
import "../Css/About.css";
import Button from "./Button";

const About = () => {
  return (
    <section className="AboutSection">
      <div className="AboutSectionImageDiv">
        <img alt="about" src={aboutImage} className="AboutSectionImage" />
      </div>
      <div className="AboutSectionText">
        <h1 className="AboutSectionTitle">About Us</h1>
        <p className="AboutSectionP">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <Button
          text="Read More"
          background="#E23744"
          color="#FFF"
          border={0}
          borderRadius="18px"
          width="100px"
          height="38px"
        />
      </div>
    </section>
  );
};

export default About;
