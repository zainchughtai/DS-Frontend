import React from "react";
import heroData from "@/data/About/Hero/HeroData";
const Hero = () => {
  return (
    <>
      <section className="hero-service-wrap hero-section-wrap hero-about-wrap">
        <div className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h6 className="section-subtitle">{heroData.subHeading}</h6>
                <h2 className="section-title fade-in">{heroData.mainHeading}</h2>
                <p>{heroData.description}</p>
              </div>

              <div className="hero-company-boxes">
                {heroData.cards.map((card) => (
                  <div key={card.id} className="hero-company-box simple-shadow">
                    <h2>{card.heading}</h2>
                    <h4>{card.subHeading}</h4>
                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
