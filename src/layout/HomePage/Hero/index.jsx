import React from "react";
import "./style.css";

import { Container, Row, Col } from "react-bootstrap";

import carHero from "../../../assets/image/Home/carHero.svg";
import appStore from "../../../assets/image/Home/appStore.svg";
import playStore from "../../../assets/image/Home/playStore.svg";
import Bounce from "react-reveal/Bounce";
const index = () => {
  return (
    <section id="Hero">
      <Container id="containerHero">
        <Row>
          <Col md={12} xl={6}>
            <div className="titleHero d-flex h-100 align-items-center">
              <Bounce duration={2000} bottom cascade>
                <div>
                  <h1>
                    Search and Find Your <br /> Best Rental with{" "}
                    <span>Easy</span> Way
                  </h1>
                  <p>
                    Dapatkan mobil dimanapun dan kapanpun dengan <br /> Mudah
                    dari perangkat iOS atau Android Anda.
                  </p>
                  <div className="playAndApp">
                    <img src={appStore} alt="" />
                    <img src={playStore} alt="" />
                  </div>
                </div>
              </Bounce>
            </div>
          </Col>
          <Col md={12} xl={6}>
            <div className="imgHero">
              <Bounce bottom duration={2000} delay={100}>
                <img src={carHero} alt="HeroPicture" width={"100%"} />
              </Bounce>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default index;
