import React, { useEffect, useState } from "react";
import { Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import "../styles.css";
import Axios from "axios";

const Projects = () => {
  const [myrepos, setMyRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(
      "https://api.github.com/users/Athupajape/repos"
    );
    setMyRepos(data);
    console.log({ data });
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <Col id="projects" className="project-maincontainer">
      <Row>
        <h1 className="font-face-projects font-face-projects-sm">Projects</h1>
      </Row>
      <Row className="justify-content-center">
        <Col xl={10} xs={10} className="projects-container shadow-lg">
          <Row className="justify-content-center">
            <Col xl={4} xs={10}>
              <p className="projects">Projects</p>
              <ListGroup>
                {myrepos.slice(0, 5).map((repo) => (
                  <ListGroupItem key={repo.id}>
                    <div className="text-primary">
                      <a href="https://github.com/Athupajape">{repo.name}</a>
                    </div>
                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                  </ListGroupItem>
                ))}
              </ListGroup>
              <p className="viewmore">
                <a href="https://github.com/Athupajape" className="view-more">
                  View More&gt;&gt;
                </a>
              </p>
            </Col>
            <Col xl={1}>
              <div className="line"></div>
            </Col>
            <Col xl={5}>
              <p className="internships">Internships</p>
              <Row className="cillyfox justify-content-start">
                <span className="cillyfox-text">Cilly Fox : 3 Months</span>
                <p className="cillyfox-para">
                  Worked on app named decision crafter.The aim of the app was to help user to take correct decision based upon the data.The App was built using
                  Flutter and dart.Handled authentication and firestore data
                  of the project.Also created admin side for the app to handle
                  user feeds.Worked on complete UI of the app.
                </p>
              </Row>
              <Row className="cillyfox justify-content-start">
                <span className="cillyfox-text">Eduvance: 1 Month</span>
                <p className="cillyfox-para">
                  Internship comprised of python and data analytics project.Created a bank management system in python through which user can credit or debit the amount,
                  OTP for verfication was sent and also messages were sent for the transactions.  
                  Worked on project related with data analytics which include analyzing the sports data and visualizing it,which helped user to take decisions. 
                </p>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default Projects;
