import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-brand" href="#home">
            <span className="head-line">Mern Stack Developer</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">
                <span className=" button-one1">Home</span>
              </Nav.Link>
              <Nav.Link href="#about">
                <span className=" button-one1">About Me</span>
              </Nav.Link>
              <Nav.Link href="#skills">
                <span className=" button-one1">Skills</span>
              </Nav.Link>
              <Nav.Link href="#projects">
                <span className=" button-one1">Projects</span>
              </Nav.Link>
              <Nav.Link href="#experiences">
                <span className=" button-one1">Experiences</span>
              </Nav.Link>
              <Nav.Link href="#contact">
                <span className=" button-one1">Contack</span>
              </Nav.Link>
              <Nav.Link href="#link">
                <span className=" button-one1">Blogs</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
