import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./style.css";

import CarDetail from "../../../assets/image/Home/Processing-rafiki.svg";
import CarCard from "../../../components/cardCar/index";

const index = () => {
  return (
    <Container>
      <Row>
        <Col xl={5}>
          <div className="carDetailContent ">
            <div className="imgCar">
              <img src={CarDetail} width={"100%"} alt="" />
            </div>
          </div>
        </Col>
        <Col
          xl={7}
          md={12}
          className="  d-flex justify-content-center align-items-center"
        >
          <div className="descCarDetail">
            <h1>
              Cara Memesan Mobil Impian Anda Menggunakan <span>Motion</span>
            </h1>
            <div className="cardCar">
              <div className="card1">
                <CarCard
                  title="1.Mendaftar"
                  desc="Pertama Kali yang Harus Kalian Lakukan Adalah Mendaftar ke Website ini"
                />
                <CarCard
                  title="2.Mendaftar"
                  desc="Pertama Kali yang Harus Kalian Lakukan Adalah Mendaftar ke Website ini"
                />
              </div>
              <div className="card2">
                <CarCard
                  title="3.Mendaftar"
                  desc="Pertama Kali yang Harus Kalian Lakukan Adalah Mendaftar ke Website ini"
                />
                <CarCard
                  title="4.Mendaftar"
                  desc="Pertama Kali yang Harus Kalian Lakukan Adalah Mendaftar ke Website ini"
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
