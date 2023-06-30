import React from 'react'
import "./style.css";
import { Col, Container, Row } from 'react-bootstrap';

const index = () => {
  return (
    <Container className='border containerDaftar'>
      <Row>
        <Col>
          <div className="containerDaftars border">
          
          <div className="titleDaftar text-center my-3">
            <h2>Daftar</h2>
            <p>Daftar Yuk</p>
          </div>

          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default index