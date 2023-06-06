import React from "react";
import "./style.css";

import Card from "react-bootstrap/Card";

const index = (props) => {
  return (
    <Card className="cardCorosel border shadow-sm">
      <Card.Body>
        <div className="imgCard mb-3">
          <img
            className="shadow-sm"
            src={props.img}
            alt={props.img}
          />
        </div>
        <Card.Title style={{ color: "var(--blue)" }}>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default index;
