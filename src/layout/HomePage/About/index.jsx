import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import React from "react";
import aboutImg from "../../../assets/image/Home/About.svg";
import Bounce from "react-reveal/Bounce";

const index = () => {
  return (
    <Container>
      <Row>
        <Col xl={6} md={12} className="d-flex align-items-center">
          <Bounce duration={2000} cascade bottom>
            <div className="aboutText">
              <h1>
                Apa itu <span style={{ color: "var(--blue)" }}>Motion?</span>
              </h1>
              <p style={{ textAlign: "justify" }}>
                Motion adalah sebuah website untuk menyewa kendaraan dengan cara
                yang mudah dan efektif , motion menyewakan berbagai jenis
                kendaraan yang sedang populer, motion telah berdiri dari sejak
                2022 dan kini sudah 1,5 tahun berjalan.
              </p>
            </div>
          </Bounce>
        </Col>
        <Col className="order-first order-md-last">
        <Bounce duration={2000} delay={500} bottom>
          <div className="aboutContent">
            <img src={aboutImg} alt="" />
          </div>
          </Bounce>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
