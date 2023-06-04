import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import "./style.css";


const index = (props) => {
  return (
    <Accordion className="my-3" defaultActiveKey="1">
      <Accordion.Item eventKey={props.key}>
        <Accordion.Header>
            {props.header}
        </Accordion.Header>
        <Accordion.Body>
            {props.body}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default index;
