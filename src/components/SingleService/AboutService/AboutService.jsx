import React from "react";

const AboutService = ({ subtitle, title, description, image1, image2 }) => {
  return (
    <>
      <section className="about-service7-area">
        <div className="custom-container">
          <div className="about-service7-body d-flex align-items-center">
            <div className="about-service7-content">
              <div className="section-header">
                <h6 className="section-subtitle">{subtitle}</h6>
                <h2 className="section-title">{title}</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>{" "}
            </div>
            <div className="about-service7-img-box d-flex">
              <img alt="" decoding="async" src={image1} />
              <img alt="" decoding="async" src={image2} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutService;
