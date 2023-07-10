import React from "react";
import "./style.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import LogoDesktop from "../../assets/image/Home/logo.svg";
import LogoOnly from "../../assets/image/Home/logoOnly.svg"


const index = () => {
  return (
    <section id="NavigationBar">
      <Navbar bg="white" fixed="top" className="border shadow-sm" expand="lg">
        <Container id="containerNavbar">
          <Navbar.Brand id="desk" href="#home"><img width={"100%"} src={LogoDesktop} alt="" /></Navbar.Brand>
          <Navbar.Brand id="phone" href="#home"><img width={"100%"} src={LogoOnly} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/dashboard"> <i class="uil uil-clipboard"></i>List Kendaraan</Nav.Link>
              <Nav.Link href="/sewa"> <i class="uil uil-bill"></i>Sewa Kendaraan</Nav.Link>
              <Nav.Link href=""><i class="uil uil-history"></i>Riwayat Peminjaman</Nav.Link>
              <Nav.Link className="logout" href=""><i className="uil uil-sign-out-alt"></i>Keluar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default index;
