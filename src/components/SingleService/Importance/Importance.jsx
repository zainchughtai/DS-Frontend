import React from "react";

const Importance = ({ subtitle, title, description, points, image }) => {
  return (
    <>
      <section className="about-service3-area about-service3-style-2">
        <img alt="" decoding="async" src="/images/bg-shape-3-1.svg" className="animation-slide-right bg-shape" />
        <div className="custom-container">
          <div className="custom-row align-items-center">
            <div className="img-box">
              <img alt="" decoding="async" src={image} />
            </div>

            <div className="content-box">
              <h6 className="section-subtitle">{subtitle}</h6>
              <h2 className="section-title">{title}</h2> <p>{description}</p>
              <ul>
                {points.map((point, index) => (
                  <li key={index}>
                    <i className="las la-check"></i> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Importance;
