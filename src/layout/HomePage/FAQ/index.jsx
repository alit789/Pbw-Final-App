import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import FaqCard from "../../../components/accordion/index";
import Bounce from 'react-reveal/Bounce';

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
                <Bounce bottom duration={2000} delay={0}>
                  <FaqCard
                    header="Apakah Meminjam Mobil di Motion Aman?"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum a autem hic nam non, consequatur doloremque! Inventore beatae minus quas. Rerum iure minima sint repellat cumque voluptates atque eos?"
                    key="1"
                  />
                </Bounce>
                <Bounce bottom duration={2000} delay={100}>
                  <FaqCard
                    header="Berapa Denda Yang Harus Dibayarkan perharinya?"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum a autem hic nam non, consequatur doloremque! Inventore beatae minus quas. Rerum iure minima sint repellat cumque voluptates atque eos?"
                    key="2"
                  />
                </Bounce>
                <Bounce bottom duration={2000} delay={200}>
                  <FaqCard
                    header="Apa Saja Keunggulan yang dimiliki oleh Motion"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum a autem hic nam non, consequatur doloremque! Inventore beatae minus quas. Rerum iure minima sint repellat cumque voluptates atque eos?"
                    key="3"
                  />
                </Bounce>
              </div>
              <div className="row2">
                <Bounce bottom duration={2000} delay={300}>
                  <FaqCard
                    header="Mobil Jenis Apa Saja yang Tersedia Di Motion?"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum a autem hic nam non, consequatur doloremque! Inventore beatae minus quas. Rerum iure minima sint repellat cumque voluptates atque eos?"
                    key="4"
                  />
                </Bounce>
                <Bounce bottom duration={2000} delay={400}>
                  <FaqCard
                    header="Metode Pembayaran Apa saja yang tersedia di Motion?"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum a autem hic nam non, consequatur doloremque! Inventore beatae minus quas. Rerum iure minima sint repellat cumque voluptates atque eos?"
                    key="5"
                  />
                </Bounce>
                <Bounce bottom duration={2000} delay={500}>
                  <FaqCard
                    header="Apakah Motion tersedia di PlayStore dan AppStore"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum a autem hic nam non, consequatur doloremque! Inventore beatae minus quas. Rerum iure minima sint repellat cumque voluptates atque eos?"
                    key="6"
                  />
                </Bounce>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
