import React from "react";
import "./style.css";
import Navbar from "../../components/navbarLogin/Navbarlogin";
import CardList from "../../components/CardList/CardList";

const ListCard = [
  {
    gambar:"https://images.tokopedia.net/img/JFrBQq/2022/6/28/ec400009-559c-4440-8ddf-0674762d7a6b.jpg",
    judul: "Lambhorgini",
    deskripsi: "Kencang Abis sangat kencang abis tiada tanding",
    harga:"Rp.99.000"
  },
  {
    gambar:"https://statik.tempo.co/data/2021/12/28/id_1076917/1076917_720.jpg",
    judul: "VM Kodok",
    deskripsi: "Kencang Abis sangat kencang abis tiada tanding",
    harga:"Rp.99.000"
  },
  {
    gambar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LF35-z9jo5dz1UnJ1h7Hbkkeyufir7d-7kNR1ricecNBXuU86KcrJpzll0_2q1p6geY&usqp=CAU",
    judul: "VM Kodok",
    deskripsi: "Kencang Abis sangat kencang abis tiada tanding",
    harga:"Rp.99.000"
  },
  {
    gambar:"https://images.tokopedia.net/img/JFrBQq/2022/6/28/ec400009-559c-4440-8ddf-0674762d7a6b.jpg",
    judul: "VM Kodok",
    deskripsi: "Kencang Abis sangat kencang abis tiada tanding",
    harga:"Rp.99.000"
  },
  {
    gambar:"https://images.tokopedia.net/img/JFrBQq/2022/6/28/ec400009-559c-4440-8ddf-0674762d7a6b.jpg",
    judul: "VM Kodok",
    deskripsi: "Kencang Abis sangat kencang abis tiada tanding",
    harga:"Rp.99.000"
  },
  {
    gambar:"https://images.tokopedia.net/img/JFrBQq/2022/6/28/ec400009-559c-4440-8ddf-0674762d7a6b.jpg",
    judul: "VM Kodok",
    deskripsi: "Kencang Abis sangat kencang abis tiada tanding",
    harga:"Rp.99.000"
  },
  {
    gambar:"https://images.tokopedia.net/img/JFrBQq/2022/6/28/ec400009-559c-4440-8ddf-0674762d7a6b.jpg",
    judul: "VM Kodok",
    deskripsi: "Kencang Abis sangat kencang abis tiada tanding",
    harga:"Rp.99.000"
  },
  {
    gambar:"https://images.tokopedia.net/img/JFrBQq/2022/6/28/ec400009-559c-4440-8ddf-0674762d7a6b.jpg",
    judul: "VM Kodok",
    deskripsi: "Kencang Abis sangat kencang abis tiada tanding",
    harga:"Rp.99.000"
  },
  {
    gambar:"https://images.tokopedia.net/img/JFrBQq/2022/6/28/ec400009-559c-4440-8ddf-0674762d7a6b.jpg",
    judul: "VM Kodok",
    deskripsi: "Kencang Abis sangat kencang abis tiada tanding",
    harga:"Rp.99.000"
  },
  {
    gambar:"https://images.tokopedia.net/img/JFrBQq/2022/6/28/ec400009-559c-4440-8ddf-0674762d7a6b.jpg",
    judul: "VM Kodok",
    deskripsi: "Kencang Abis sangat kencang abis tiada tanding",
    harga:"Rp.99.000"
  },
  {
    gambar:"https://images.tokopedia.net/img/JFrBQq/2022/6/28/ec400009-559c-4440-8ddf-0674762d7a6b.jpg",
    judul: "VM Kodok",
    deskripsi: "Kencang Abis sangat kencang abis tiada tanding",
    harga:"Rp.99.000"
  },
  {
    gambar:"https://images.tokopedia.net/img/JFrBQq/2022/6/28/ec400009-559c-4440-8ddf-0674762d7a6b.jpg",
    judul: "VM Kodok",
    deskripsi: "Kencang Abis sangat kencang abis tiada tanding",
    harga:"Rp.99.000"
  }
];

const Dashboard = () => {
  return (
    <section id="dashboard">
      <Navbar />
      <div className="container" id="containerList">
        <div className="row">
          <div className="col-12">
            <i class="uil uil-clipboard"></i>
            <span>List Kendaraan</span>
            <p>List-List kendaraan yang tersedia di rent car motion</p>
          </div>
          {ListCard.map((Data) => (
            <div className="col-lg-3 col-md-6 d-flex justify-content-center">
              <CardList img={Data.gambar} title={Data.judul} price={Data.harga} desc={Data.deskripsi}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
