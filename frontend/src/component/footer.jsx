import "../App";
import React from "react";

const Footer = () => {
  return (
    <div className="footerDedAav">
      <div className="footerAav">
        <div className="footerIpSum">
          <div className="footerLogo">
            <img src="Group.svg" alt="" />
          </div>
          <div className="footerUg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod.
          </div>
        </div>
        <div className="footerGurav">
          <div className="categories">
            <div className="footerSolo">Categories</div>
            <div className="footerBagana">
              <p> International</p>
              <p>Regional</p>
              <p>Politics</p>
              <p> Business </p>
              <p> Sports</p>
              <p> Health</p>
            </div>
          </div>
          <div className="company">
            <div className="footerSolo">Company</div>
            <div className="footerBagana">
              <p> About Us</p>
              <p>Careers </p>
              <p> Privacy Policy</p>
              <p> Terms Of Services</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="social">
            <div className="footerSolo">Social Media</div>
            <div className="footerBagana">
              <p>Youtube</p>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerZuraas"></div>
    </div>
  );
};

export default Footer;
