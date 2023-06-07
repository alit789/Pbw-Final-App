import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/image/Home/logo.svg";

const Footer = () => {
  return (
    <section>
      <div className="fContainer border">
        <Container>
          <Row>
            <Col xl={5} md={12} className=" pt-3">
              <div className="fotoFooter">
                <img width={"150px"} src={logo} alt="" />
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                quos beatae omnis soluta. Temporibus quaerat optio rem deserunt
                similique dolorem repellendus, facere, at eius iusto impedit
                accusamus, et fuga. Aliquid?
              </p>
            </Col>
            <Col xl={2} md={12} className="fiturFooter">
                <div className=" mt-2">
                    <h4>Fitur</h4>
                    <br />
                    <p>Penggunaan Mudah</p>
                    <p>Keamanan Terjamin</p>
                    <p>Pembayaran Mudah</p>
                    <p>Pengiriman Cepat</p>
                </div>
            </Col>
            <Col xl={2} md={12} className="fiturFooter">
                <div className=" mt-2">
                    <h4>Pembayaran</h4>
                    <br />
                    <p>Cash</p>
                    <p>E-Wallet</p>
                    <p>Bank Transfer</p>
                </div>
            </Col>
            <Col  xl={3} md={12} className="contactUsFooter">
              <div className="mt-2">
                <h4>Hubungi Kami</h4>
                <br />
                <p>Email : alitwiradanta08@gmail.com</p>
                <p>Location : Jl Bukit Jimbaran</p>
                <p>Telp : 081338368694</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
