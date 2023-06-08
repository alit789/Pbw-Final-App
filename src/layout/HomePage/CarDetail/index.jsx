import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./style.css";

import CarDetail from "../../../assets/image/Home/Processing-rafiki.svg";
import CarCard from "../../../components/cardCar/index";

import Bounce from "react-reveal/Bounce";

const index = () => {
  return (
    <Container>
      <Row>
        <Col xl={5}>
          <Bounce bottom duration={2000}>
            <div className="carDetailContent ">
              <div className="imgCar">
                <img src={CarDetail} width={"100%"} alt="" />
              </div>
            </div>
          </Bounce>
        </Col>
        <Col
          xl={7}
          md={12}
          className="  d-flex justify-content-center align-items-center"
        >
          <div className="descCarDetail">
            <Bounce bottom duration={2000}>
              <h1>
                Cara Memesan Mobil Impian Anda Menggunakan <span>Motion</span>
              </h1>
            </Bounce>
            <div className="cardCar">
              <div className="card1">
                <Bounce bottom duration={2000} delay={200}>
                  <CarCard
                    title="1. Daftar"
                    desc="Pertama Kali yang Harus Kalian Lakukan Sebelum Melakukan Pemesanan Adalah Mendaftar ke Website ini"
                  />
                </Bounce>
                <Bounce bottom duration={2000} delay={300}>
                  <CarCard
                    title="2. Masuk"
                    desc="Setelah Melakukan Pendaftaran yang Harus Kalian Lakukan Selanjutnya Adalah Masuk ke Dalam Website ini"
                  />
                </Bounce>
              </div>
              <div className="card2">
                <Bounce bottom duration={2000} delay={400}>
                  <CarCard
                    title="3. Pesan"
                    desc="Kemudian Kalian Bisa Pesan Mobil Impian Anda di Website Ini Dengan Mudah"
                  />
                </Bounce>
                <Bounce bottom duration={2000} delay={500}>
                  <CarCard
                    title="4. Bayar"
                    desc="Setelah Melakukan Proses Pemesanan , Kalian Tinggal Bayar dengan Metode Pembayaran Yang Tersedia"
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
