import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div
      style={{
        height: "275px",
        marginTop: "5%",
        backgroundColor: "#0456B9",
        width: "100%",
        color: "black",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "70% 30%",
          paddingTop: "5%",
        }}
      >
        <div style={{ paddingLeft: "10%" }}>
          <p className="footerOption">FAQ's</p>
          <p className="footerOption">Contact Us</p>
          <p className="footerOption">Terms and Condition</p>
          <p className="footerOption">Privacy Policy</p>
        </div>
        <div>
          <p className="footerOption">Follow Us On</p>
          <div style={{ display: "flex", gap: "25px" }}>
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ height: "30px", borderRadius: "5px", cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ height: "30px", borderRadius: "5px", cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ height: "30px", borderRadius: "5px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <div style={{ paddingLeft: "7%" }}>
        <p style={{ marginTop: "0%" }}>Copyright©2020. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
