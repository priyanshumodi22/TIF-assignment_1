import React from "react";
import Button from "./Button";
import hersosectionImage from "../Assets/Pizza.png";
import red_banner from "../Assets/red_banner.png";
import logo from "../Assets/truck.png";
import "../Css/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="HeroSectionDiv">
      <div className="HeroSectionImageDiv">
        <div className="HeroSectionImage1">
          <img
            alt="herosection"
            src={hersosectionImage}
            className="HeroSectionImage"
          />
        </div>
        <div className="HeroSectionSvg">
          {/* <svg
            className="custom-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="752"
            height="839"
            viewBox="0 0 752 839"
            fill="none"
          >
            <path
              d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
              fill="#E23744"
            />
          </svg> */}
          <img alt="herosection" src={red_banner} className="custom-svg" />
        </div>
        <div className="HeroSectionSvgButton">
          <Button
            text="Get In Touch"
            color="#fff"
            border=" 1px solid #fff"
            width="100px"
            height="38px"
            borderRadius="16px"
            background="#E23744"
          />
        </div>
      </div>
      <div className="HeroSectionTextDiv">
        <div className="HeroSectionTextDivImage">
          <img alt="logo" src={logo} className="HeroSectionTextImage" />
        </div>
        <div>
          <div className="HeroSectionTitleDiv">
            <h1 className="HeroSectionTitle">
              Discover the <span style={{ color: "#E23744" }}>Best</span> Food
              and Drinks
            </h1>
            <p className="HeroSectionP">
              Naturally made Healthcare Products for the better care & support
              of your body.
            </p>
            <Button
              text="Explore Now!"
              background="#E23744"
              color="#FFF"
              border={0}
              borderRadius="24px"
              width="140px"
              height="48px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
