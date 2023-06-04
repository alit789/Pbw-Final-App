import React from "react";
import "./style.css";

import { Container, Row, Col } from "react-bootstrap";
import Card from "../../../components/card/index";

const dataCard = [
  {
    title: "Penggunaan Mudah",
    desc: "Leverage agile frameworks to provide a synopsis for high level overviews. ",
  },
  {
    title: "Keamanan Terjamin",
    desc: "Organically grow the holistic world view of disruptive innovation and amazing Concepts. ",
  },
  {
    title: "Searching",
    desc: "Organically grow the holistic world view of disruptive innovation and amazing Concepts.  ",
  },
  {
    title: "Searching",
    desc: "Organically grow the holistic world view of disruptive innovation and amazing Concepts.  ",
  },
];

const index = () => {
  return (
    <section id="Hero">
      <Container className="pt-5 pb-2">
        <Row>
          {dataCard.map((infoCard) => {
            return (
              <Col className="paddCard" lg={3} md={6} sm={12}>
                <Card title={infoCard.title} desc={infoCard.desc} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default index;
