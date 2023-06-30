import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import CardCorosel from "../../../components/CardCorosel/index";
import Bounce from "react-reveal/Bounce";

const index = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="testimoniContainer">
            <h3 className="text-center" style={{ color: "var(--blue)" }}>
              Testimoni Pengguna Motion
            </h3>
            <p className="text-center">
              Beberapa Testimoni dari para pelanggan kami Setia Kmai
            </p>
            <div className="testimoniContent py-3">
              <Carousel variant="dark" fade>
                <Carousel.Item className="d-flex gap-5 justify-content-center">
                  <CardCorosel
                    img={
                      "https://awsimages.detik.net.id/community/media/visual/2023/01/26/toru-ueda-terobsesi-jadi-serigala_43.png?w=1200"
                    }
                    title="Ngakan Made Alit Wiradhanta"
                    desc="Pengalaman Saya Menggunakan Motion Sangat Bagus"
                  />
                </Carousel.Item>
                <Carousel.Item className="d-flex gap-5 justify-content-center">
                  <CardCorosel
                    img={
                      "https://awsimages.detik.net.id/community/media/visual/2022/02/11/monyet.jpeg?w=1200"
                    }
                    title="I Komang Widia Pratama"
                    desc="Motion sangat membantu saya dalam liburan bersama keluarga saya"
                  />
                </Carousel.Item>
                <Carousel.Item className="d-flex gap-5 justify-content-center">
                  <CardCorosel
                    img={
                      "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2022/07/07/harimau-sumatrajpg-20220707025512.jpg"
                    }
                    title="I Gde Krisna Sankya"
                    desc="Motion Menjadi teman sekaligus pilihan saya ketika ingin liburan"
                  />
                </Carousel.Item>
                <Carousel.Item className="d-flex gap-5 justify-content-center">
                  <CardCorosel
                    img={
                      "https://pantaugambut.id/images/original/articles/idn-times-BhfEb.png"
                    }
                    title="Kadek Dwi Adnyana"
                    desc="Motion memberikan kemudahan untuk saya sebagai traveller untuk meminjam kendaraan"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
