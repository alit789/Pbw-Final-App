import React from 'react'
import "./style.css";

import NavigationBar from "../../components/navbar/index"
import HeroSection from "../../layout/HomePage/Hero/index"
import FiturSection from "../../layout/HomePage/Feature/index"
import CarSection from "../../layout/HomePage/CarDetail/index"
import FaqSection from "../../layout/HomePage/FAQ/index"
import AboutSection from "../../layout/HomePage/About/index"
import TestimoniSection from "../../layout/HomePage/Testimoni/index"
import SendEmailSection from "../../layout/HomePage/SendEmail/index"
import Footer from "../../components/Footer/Footer"


const index = () => {
  return (
    <section id='homePage'>
      <NavigationBar/>
      <HeroSection/>
      <FiturSection/>
      <AboutSection/>
      <CarSection/>
      <FaqSection/>
      <TestimoniSection/>
      <SendEmailSection/>
      <Footer/>
    </section>
  )
}

export default index