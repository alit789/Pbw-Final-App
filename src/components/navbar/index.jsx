import React from "react";
import "./style.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import LogoDesktop from "../../assets/image/Home/logo.svg";

const index = () => {
  return (
    <section id="NavigationBar">
      <Navbar bg="white" fixed="top" className="border shadow-sm" expand="lg">
        <Container id="containerNavbar">
          <Navbar.Brand href="#home"><img width={"100%"} src={LogoDesktop} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto rightNavLink">
              <Nav.Link className="Masuk" href="#link">Masuk</Nav.Link>
              <Nav.Link className="Daftar" href="#link">Daftar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default index;
