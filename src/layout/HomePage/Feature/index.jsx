import React from "react";
import "./style.css";

import { Container, Row, Col } from "react-bootstrap";
import Card from "../../../components/card/index";

const dataCard = [
  {
    title: "Penggunaan Mudah",
    desc: "Motion Menawarkan Penggunaan yang mudah digunakan sehingga tidak membingungkan user dalam penyewaan kendaraan ",
  },
  {
    title: "Keamanan Terjamin",
    desc: "Keamanan yang ditawarkan Motion sudah dijamin keamanannya , karen motion memiliki tim yang profesional ",
  },
  {
    title: "Pembyaran Mudah",
    desc: "Motion Menawarkan Metode Pembayaran yang mudah dan tersedia berbagai metode pembayaran ",
  },
  {
    title: "Pengiriman Cepat",
    desc: "Tim dari Motion akan mengirimkan dengan cepat dan aman pesanan kendaraan anda ke tempat tujuan anda",
  },
];

const index = () => {
  return (
    <section id="Feature">
      <Container className="py-5">
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
