import React from "react";
import logo from "../Assets/truck.png";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import "../Css/Footer.css";

const Footer = () => {
  return (
    <footer className="FooterStyle">
      <div className="FooterStyleLogoDiv">
        <img alt="logo" src={logo} className="FooterStyleLogo" />
      </div>
      <div className="FooterStyleContactUs">
        <h3 className="FooterStyleContactUsTitle">Contact Us</h3>
        <p>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p>example2020@gmail.com</p>
        <p>(904) 443-0343</p>
      </div>
      <div className="FooterStyleMore">
        <h3 className="FooterStyleMoreTitle">More</h3>
        <p>About Us</p>
        <p>Products</p>
        <p>Career</p>
        <p>Contact Us</p>
      </div>
      <div className="FooterStyleSocialIcons">
      <div>
        <h3 className="FooterStyleSocialIconsTitle">Social Links</h3>
        <div className="SocialIconsDiv">
          <FaInstagram fontSize="22px" color="#0E2368" />
          <FaTwitter fontSize="22px" color="#0E2368" />
          <FaFacebookF fontSize="22px" color="#0E2368" />
        </div>
        </div>
        <div className="SocialIconsDivTime">
        <p className="SocialIconsDivTimeTitle">© {new Date().getFullYear()} Food Truck Example </p>
        <div className="SocialIconsDiv2">
          <FaInstagram fontSize="22px" color="#0E2368" />
          <FaTwitter fontSize="22px" color="#0E2368" />
          <FaFacebookF fontSize="22px" color="#0E2368" />
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


