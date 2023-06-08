import React from "react";
import "./style.css";

import Card from "react-bootstrap/Card";
import Bounce from "react-reveal/Bounce";

const index = (props) => {
  return (
    <Bounce bottom duration={2000} delay={props.delay}>
      <Card className="shadow-sm cardFitur border" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <a style={{ fontWeight: "500", textDecoration: "none" }} href="">
            Learn More{" >"}
          </a>
        </Card.Body>
      </Card>
    </Bounce>
  );
};

export default index;
