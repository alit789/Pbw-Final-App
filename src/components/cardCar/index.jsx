import React from "react";
import "./style.css";

import Card from "react-bootstrap/Card";


const index = (props) => {
  return (
    <Card className="shadow-sm cardCars" style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title style={{color:'var(--blue)'}}>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default index;
