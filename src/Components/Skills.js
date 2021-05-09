import React from "react";
import { Row, Col, Progress } from "reactstrap";
import Programming from "../images/programming.svg";
import Python from "../images/python.svg";
import Dart from "../images/dartlang.svg";
import Flutter from "../images/flutter.svg";
import Reactjs from "../images/reactjs.svg";
import "../styles.css";

const Skills = () => {
  return (
    <Col className="skills-main-container" id="skills">
      <Row>
        <h1 className="font-face-skills font-face-skills-sm">Skills</h1>
      </Row>
      <Row
        className="align-items-center justify-content-around box"
        sm={12}
        xl={12}
      >
        <Col sm={12} xl={5}>
          <div className="skill-img one">
            <img
              className="img-fluid img-size-skills img-size-skills-sm"
              src={Programming}
              alt="skills-img"
            />
          </div>
        </Col>
        <Col sm={12} xl={5} xs={10} className="shadow-lg skills-container">
          <Row className="align-items-center justify-content-around">
            <Col xl={5} xs={6}>
              <img src={Dart} height="75" width="140" alt="dart"/>
            </Col>
            <Col xl={6} xs={6}>
              <Progress color="info" value={80} />
            </Col>
          </Row>
          <Row className="align-items-center justify-content-around">
            <Col xl={5} xs={6}>
              <img className="" src={Flutter} height="80" width="140" alt="flutter"/>
            </Col>
            <Col xl={6} xs={6}>
              <Progress color="info" value={80} />
            </Col>
          </Row>
          <Row className="align-items-center justify-content-around">
            <Col xl={5} xs={6}>
              <img src={Python} className="python-sizebox python-sizebox-sm" alt="python"/>
            </Col>
            <Col xl={6} xs={6}>
              <Progress color="info" value={70} />
            </Col>
          </Row>
          <Row className="align-items-center justify-content-around">
            <Col xl={5} xs={6}>
              <img src={Reactjs} className="react-sizebox react-sizebox-sm" alt="reactjs"/>
            </Col>
            <Col xl={6} xs={6}>
              <Progress color="info" value={70} />
            </Col>
          </Row>
          <Col xs={6}>
            <div></div>
          </Col>
        </Col>
      </Row>
    </Col>
  );
};

export default Skills;
