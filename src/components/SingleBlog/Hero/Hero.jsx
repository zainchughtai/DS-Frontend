import React from "react";

const Hero = (props) => {
  return (
    <>
      <section className="blog-details-header-area">
        <div className="custom-container">
          <div className="blog-details-header-content-body d-flex align-items-center">
            <div className="section-header">
              <h6 className="section-subtitle">{props.category}</h6>
              <h2 className="section-title fade-in">{props.title}</h2>
            </div>
            <div className="img-box">
              <img decoding="async" src={props.featuredImage} alt="Blog" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
