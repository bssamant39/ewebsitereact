import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = (props) => {
  return (
    <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>{props.name}</h1>
          <h2>The library for web and native user interfaces</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <NavLink to="/contact" className="btn-get-started scrollto">Get Started</NavLink>
            
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src={props.img} className="img-fluid animated" alt="hero-section-img"/>
        </div>
      </div>
    </div>

  </section>
  )
}

export default HeroSection