import React from "react";
import heroData from "@/data/Culture/Hero/HeroData";
const Hero = () => {
  return (
    <>
      <section className="hero-service-wrap hero-section-wrap hero-about-wrap">
        <div className="hero-section-content-wrap" style={{ paddingBottom: "0" }}>
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center culture">
                <h6 className="section-subtitle">{heroData.subHeading}</h6>
                <h2 className="section-title fade-in">{heroData.mainHeading}</h2>{" "}
                <div className="culture-text" style={{ borderBottom: "1px solid #d9d9d9" }}>
                  <p>{heroData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
