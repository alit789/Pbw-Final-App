import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import FaqCard from "../../../components/accordion/index";

const index = () => {
  return (
    <Container className="">
      <Row>
        <Col md={12}>
          <div className="FaqContainer">
            <h3 className="text-center mb-4" style={{ color: "var(--blue)" }}>
              Pertanyaan Yang Sering Ditanyakan
            </h3>
            <div className="rowFaq">
              <div className="row1">
                <FaqCard
                  header="Apakah Meminjam Mobil di Motion Aman?"
                  body="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum a autem hic nam non, consequatur doloremque! Inventore beatae minus quas. Rerum iure minima sint repellat cumque voluptates atque eos?"
                  key="1"
                />
                <FaqCard
                  header="Berapa Denda Yang Harus Dibayarkan perharinya?"
                  body="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum a autem hic nam non, consequatur doloremque! Inventore beatae minus quas. Rerum iure minima sint repellat cumque voluptates atque eos?"
                  key="2"
                />
                <FaqCard
                  header="Apa Saja Keunggulan yang dimiliki oleh Motion"
                  body="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum a autem hic nam non, consequatur doloremque! Inventore beatae minus quas. Rerum iure minima sint repellat cumque voluptates atque eos?"
                  key="3"
                />
              </div>
              <div className="row2">
                <FaqCard
                  header="Mobil Jenis Apa Saja yang Tersedia Di Motion?"
                  body="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum a autem hic nam non, consequatur doloremque! Inventore beatae minus quas. Rerum iure minima sint repellat cumque voluptates atque eos?"
                  key="4"
                />
                <FaqCard
                  header="Metode Pembayaran Apa saja yang tersedia di Motion?"
                  body="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum a autem hic nam non, consequatur doloremque! Inventore beatae minus quas. Rerum iure minima sint repellat cumque voluptates atque eos?"
                  key="5"
                />
                <FaqCard
                  header="Apakah Motion tersedia di PlayStore dan AppStore"
                  body="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum a autem hic nam non, consequatur doloremque! Inventore beatae minus quas. Rerum iure minima sint repellat cumque voluptates atque eos?"
                  key="6"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
