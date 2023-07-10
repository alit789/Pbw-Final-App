import React from "react";
import "./style.css";

import { Container } from "react-bootstrap";

const index = () => {
  return (
    <Container className="containerLogin">
      <div className="wrapContentLogin shadow-sm border d-flex justify-content-center">
        <div className="content w-100 text-center">
          <h4>Login</h4>
          <p>Selamat Datang Di Sistem Rekomendasi Kami</p>
          <form action="" method="post">
            <input
              placeholder="Masukan Username"
              className="w-100 text-center"
              type="username"
            />
            <br />
            <input
              placeholder="Masukan Password"
              className="w-100 text-center mt-3"
              type="password"
            />
          </form>
          <a href="/dashboard">
            <button className="btn w-100 py-2 mt-3 btn-primary">
              Login Yuk
            </button>
          </a>
          <hr className="mt-4" />
          <p>
            Anda Belum Mempunyai Akun? <a href="/daftar">Daftar Disini</a>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default index;
