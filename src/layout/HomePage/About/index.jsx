import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import React from "react";
import aboutImg from "../../../assets/image/Home/About.svg";

const index = () => {
  return (
    <Container>
      <Row>
        <Col xl={6} md={12} className="d-flex align-items-center">
          <div className="aboutText">
            <h1>
              Apa itu <span style={{ color: "var(--blue)" }}>Motion?</span>
            </h1>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, esse quaerat velit quam quae quibusdam modi ut unde
              beatae facere repudiandae suscipit, ea ipsam atque minus quis
              voluptate nam ab.
            </p>
          </div>
        </Col>
        <Col className="order-first order-md-last">
          <div className="aboutContent">
            <img src={aboutImg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
