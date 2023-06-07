import React, { useState } from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "emailjs-com";

const index = () => {
  function alertKu(){
    alert("Email Terkirim");
  }
    const [formData, setFormData] = useState({
      user_name: '',
      form_email: '',
      message: ''
    });
    const [isEmailSent, setIsEmailSent] = useState(false);
  
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_wg5rlax', 'template_hoxwgsj', e.target, '_7ed4ZJTo7IZ_Gbs3')
        .then((result) => {
          console.log("Email Terkirim")
          // Reset formulir
          setFormData({
            user_name: '',
            form_email: '',
            message: ''
          });
          // Set status pengiriman email
          setIsEmailSent(true);
        }, (error) => {
          console.log(error.text);
        });
    }
  return (
    <Container className="px-0">
      <Row>
        <Col>
          <div className="formContainer">
            <h5 className="text-center">Kamu Masih Ada Pertanyaan?</h5>
            <p className="text-center">
              Bisa Banget kamu Kirimkan Pertanyaan Kamu ke kami yaaa
            </p>
            <form onSubmit={sendEmail}>
              <div className="emailPass d-flex gap-3">
                <input
                  name="user_name"
                  type="text"
                  value={formData.user_name}
                  onChange={(e) => setFormData({...formData,user_name:e.target.value})}
                  placeholder="Masukan Nama Anda"
                />
                <input
                  name="form_email"
                  type="email"
                  onChange={(e) => setFormData({...formData,form_email:e.target.value})}
                  value={formData.form_email}
                  placeholder="Masukan Email Anda"
                />
              </div>
              <textarea
                placeholder="Masukan Saranmu Disini yaa"
                className="mt-3 mb-2 w-100"
                name="message"
                onChange={(e) => setFormData({...formData,message:e.target.value})}
                value={formData.message}
                rows="10"
              ></textarea>
              <button type="submit" value="send" className="btn btn-primary">
                Kirim Pertanyaan
              </button>
            {isEmailSent && alertKu()}
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
