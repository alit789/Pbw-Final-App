import React from "react";
import "./style.css";
import NavbarLogin from "../../components/navbarLogin/Navbarlogin";

const sewa = () => {
  return (
    <section id="sewa">
      <NavbarLogin />
      <div className="container" id="containerSewa">
        <div className="row">
          <div className="col-12">
            <div className="titleSewa">
              <i class="uil uil-bill"></i>
              <span>Sewa Kendaraan</span>
              <p>List-List kendaraan yang tersedia di rent car motion</p>
            </div>
          </div>
          <div className="col-12">
            <div className="containerSewa shadow-sm border p-5 rounded">
              <form action="" method="post">
                <div className="nameAndEmail">
                  <input type="text" placeholder="Masukan Nama" />
                  <input type="email" placeholder="Masukan Email" />
                </div>
                <div className="timeNdate">
                  <div className="kanan">
                    <div className="w-100">
                      <i class="uil uil-calendar-alt"></i>
                      <span>Tanggal Ambil</span>
                      <br />
                      <input className="w-100" type="date" />
                    </div>
                    <div className="w-100">
                      <i class="uil uil-calendar-alt"></i>
                      <span>Tanggal Antar</span>
                      <br />
                      <input className="w-100" type="date" />
                    </div>
                  </div>
                  <div className="kiri">
                    <div className="w-100">
                      <i class="uil uil-clock"></i>
                      <span>Tanggal Ambil</span>
                      <br />
                      <input className="w-100" type="time" />
                    </div>
                    <div className="w-100">
                      <i class="uil uil-clock"></i>
                      <span>Tanggal Antar</span>
                      <br />
                      <input className="w-100" type="time" />
                    </div>
                  </div>
                </div>
                <select className="w-100 my-3 rounded p-2" name="" id="">
                    <option value="">Pilih Jenis Kendaraan</option>
                    <option value="">Avanza</option>
                    <option value="">Xenia</option>
                    <option value="">Inova</option>
                    <option value="">Yaris</option>
                    <option value="">Pajero Sport</option>
                    <option value="">CRV</option>
                    <option value="">Agya</option>
                    <option value="">Ayla</option>
                    <option value="">BMW</option>
                    <option value="">Mercedes Benz</option>
                </select>
                <button type="submit" className="btn btn-primary">Pesan Sekarang</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default sewa;
