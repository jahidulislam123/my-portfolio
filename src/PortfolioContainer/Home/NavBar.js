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
                <span className="text-edit">Home</span>
              </Nav.Link>
              <Nav.Link href="#about">
                <span className="text-edit">About Me</span>
              </Nav.Link>
              <Nav.Link href="#skills">
                <span className="text-edit">Skills</span>
              </Nav.Link>
              <Nav.Link href="#projects">
                <span className="text-edit">Projects</span>
              </Nav.Link>
              <Nav.Link href="#contact">
                <span className="text-edit">Contack</span>
              </Nav.Link>
              <Nav.Link href="#link">
                <span className="text-edit">Blogs</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
