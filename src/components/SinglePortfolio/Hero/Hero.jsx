import React from "react";

const Hero = ({ title, description, image }) => {
  return (
    <>
      <section className="hero-service-wrap hero-section-wrap hero-overview-wrap">
        <div className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h6 className="section-subtitle">Portfolio</h6>
                <h2 className="section-title fade-in">{title}</h2> <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="new-release-hero-img-area">
        <div className="custom-container">
          <div className="new-release-img-box">
            <img alt="" decoding="async" src={image} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
