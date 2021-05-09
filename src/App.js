import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from './Components/Aboutme';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import GetInContact from './Components/GetInContact';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import './index.css'

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <div >
      <div>
        <Navbar scrolling color="light" light expand="md" className="navbar-color" fixed="top">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="justify-content-start">
            <Nav className="ml-auto nav-text" navbar>
              <NavItem className="nav-para-text">
                <NavLink href="#aboutme">AboutMe</NavLink>
              </NavItem>
              <NavItem className="nav-para-text">
                <NavLink href="#skills">Skills</NavLink>
              </NavItem>
              <NavItem className="nav-para-text">
                <NavLink href="#projects">Projects</NavLink>
              </NavItem>
              <NavItem className="nav-para-text">
                <NavLink href="#getintouch">Get In Touch</NavLink>
              </NavItem>
            </Nav>
            <NavbarText></NavbarText>
          </Collapse>
        </Navbar>
      </div>
       <AboutMe/>
       <Skills/>
       <Projects/>
       <GetInContact/>
      </div>
    </div>
  );
};

export default App;
