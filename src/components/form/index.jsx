import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const index = () => {
  return (
    <Container className="px-0">
      <Row>
        <Col>
          <div className="formContainer">
            <h5 className="text-center">Kamu Masih Ada Pertanyaan?</h5>
            <p className="text-center">Bisa Banget kamu Kirimkan Pertanyaan Kamu ke kami yaaa</p>
            <div className="emailPass d-flex gap-3">
              <input type="text" placeholder="Masukan Nama Anda" />
              <input type="email" placeholder="Masukan Email Anda" />
            </div>
            <textarea placeholder="Masukan Saranmu Disini yaa" className="mt-3 mb-2 w-100" name="" id="" rows="10"></textarea>
            <button className="btn btn-primary">Kirim Pertanyaan</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
