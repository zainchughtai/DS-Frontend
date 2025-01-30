import React from "react";
import heroData from "@/data/Services/Hero/HeroData";
const Hero = () => {
  return (
    <>
      <section className="hero-service-wrap hero-section-wrap hero-partner-wrap">
        <div className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h6 className="section-subtitle">{heroData.subHeading}</h6>
                <h2 className="section-title fade-in">{heroData.mainHeading}</h2>
                <p>{heroData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="company-service-area ">
        <div className="custom-container">
          <div className="partner-service-inner">
            <div className="hero-service-about">
              <img alt="" decoding="async" src={heroData.img} />
              <div className="hero-service-about-body">
                <p>{heroData.description2}</p>
                <ul>
                  {heroData.points.map((point, index) => (
                    <li key={index}>
                      <i className="las la-check"></i> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
