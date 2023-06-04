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
            <h1>Apa itu <span style={{color:'var(--blue)'}}>Motion?</span></h1>
            <p style={{textAlign:'justify'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              cupiditate illo quas recusandae saepe voluptatum doloribus
              delectus perspiciatis non! Voluptatem sint quas non similique
              iusto vitae suscipit tenetur placeat iure. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Facilis, nulla sed, aperiam
              corrupti eveniet dolorum deleniti earum labore ea laudantium minus
              blanditiis. Porro placeat autem aut quia ab repudiandae minus.lor
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              inventore, reiciendis blanditiis hic nobis adipisci incidunt
              assumenda nesciunt delectus aliquid enim quas ex ratione velit
              voluptas non perferendis eveniet consequatur.
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
