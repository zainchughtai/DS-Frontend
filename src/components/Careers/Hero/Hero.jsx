import React from "react";
import heroData from "@/data/Career/Hero/HeroData";
const Hero = () => {
  return (
    <>
      <section className="hero-service-wrap hero-section-wrap hero-career-wrap">
        <div className="hero-section-content-wrap">
          <img alt="" decoding="async" src="/images/bg-shape-1-1.svg" className="animation-slide-left bg-shape" />
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h6 className="section-subtitle">{heroData.subHeading}</h6>
                <h2 className="section-title fade-in">{heroData.mainHeading}</h2> <p>{heroData.description}</p>
                <a href="/contact-us" className="theme-btn">
                  {heroData.btn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
