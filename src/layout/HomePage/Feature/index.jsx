import React from "react";
import "./style.css";

import { Container, Row, Col } from "react-bootstrap";
import Card from "../../../components/card/index";

const dataCard = [
  {
    delay:"400",
    title: "Penggunaan Mudah",
    desc: "Motion Menawarkan Penggunaan yang mudah digunakan sehingga tidak membingungkan user dalam penyewaan kendaraan ",
  },
  {
    delay:"500",
    title: "Keamanan Terjamin",
    desc: "Keamanan yang ditawarkan Motion sudah dijamin keamanannya , karen motion memiliki tim yang profesional ",
  },
  {
    delay:"600",
    title: "Pembyaran Mudah",
    desc: "Motion Menawarkan Metode Pembayaran yang mudah dan tersedia berbagai metode pembayaran ",
  },
  {
    delay:"700",
    title: "Pengiriman Cepat",
    desc: "Tim dari Motion akan mengirimkan dengan cepat dan aman pesanan kendaraan anda ke tempat tujuan anda",
  },
];

const index = () => {
  return (
    <section id="Hero">
      <Container className="py-5">
        <Row>
          {dataCard.map((infoCard) => {
            return (
              <Col className="paddCard" lg={3} md={6} sm={12}>
                <Card delay={infoCard.delay} title={infoCard.title} desc={infoCard.desc} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default index;
