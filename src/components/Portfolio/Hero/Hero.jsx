import React from "react";
import heroData from "@/data/Portfolio/Hero/Hero";
const Hero = () => {
  return (
    <>
      <section className="hero-service-wrap hero-section-wrap hero-portfolio-wrap">
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
    </>
  );
};

export default Hero;
