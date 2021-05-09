import React from "react";
import "../styles.css";
import { Col, Row } from "reactstrap";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Twitter from "../images/twitter.svg";
import LinkedIn from "../images/linkedin.svg";
import Github from "../images/github.svg";
import Medium from "../images/medium.svg";

const GetInContact = () => {
  return (
    <Col id="getintouch">
      <Row className="getincontact-maincontainer align-items-center justify-content-center">
        <Col xs={12}>
          <Row className="getintouch-container">
            <h1 className="font-face-getintouch font-face-getintouch-sm">
              Get In Touch
            </h1>
          </Row>
          <a href="https://www.facebook.com/athu.paranjape">
            <img src={Facebook} className="icons icons-sm" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/atharva22paranjape/">
            <img src={Instagram} className="icons icons-sm" alt="instagram" />
          </a>
          <a href="https://twitter.com/Atharva223">
            <img src={Twitter} className="icons icons-sm" alt="twitter" />
          </a>
          <a href="https://www.linkedin.com/in/atharva-paranjape-1b2b7918b/">
            <img src={LinkedIn} className="icons icons-sm" alt="linkedIn" />
          </a>
          {/* <img src={Snapchat} className="icons icons-sm" /> */}
          <a href="https://github.com/Athupajape">
            <img src={Github} className="icons icons-sm" alt="github" />
          </a>
          <a href="https://medium.com/@atharvaparanjape2">
            <img src={Medium} className="icons mediumicon-sm" alt="medium" />
          </a>
        </Col>
      </Row>
    </Col>
  );
};

export default GetInContact;
