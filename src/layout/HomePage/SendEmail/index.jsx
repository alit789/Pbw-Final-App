import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Form from "../../../components/form/index"


const index = () => {
  return (
    <Container className='py-0'>
        <Row>
            <Col>
                <Form/>
            </Col>
        </Row>
    </Container>
  )
}

export default index