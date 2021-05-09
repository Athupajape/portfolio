import React from "react";
import { Row, Col } from "reactstrap";
import "../styles.css";
import Typical from "react-typical";

const AboutMe = () => {
  return (
    <Col id="aboutme">
      <Row className="align-items-center" xs={12}>
        <Col xs={12} xl={6}>
          <Row className="justify-content-end">
            <Col xl={10}>
              <h1 className="font-face-gm font-face">
                Hi There!!
                <br />
                Myself Atharva Paranjape
              </h1>
              <h2 className="h2">
                I'm a
                <Typical
                  steps={[
                    " Web Developer",
                    1000,
                    " Mobile Application Developer",
                    1000,
                    " Blogger",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="b"
                />
              </h2>
            </Col>
          </Row>
        </Col>
        <Col xl={6}>
          <Row className="justify-content-end">
            <div className="image img-fluid image-sm" xs={12}></div>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default AboutMe;
