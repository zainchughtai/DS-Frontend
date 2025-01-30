import React from "react";
import servicesData from "@/data/About/Services/ServicesData";

const Services = ({ bgColor, textColor }) => {
  return (
    <>
      <section className="service4-area service-area" style={{ backgroundColor: bgColor }}>
        <div className="custom-container">
          <div className="service-section-header section-header d-flex align-items-end justify-content-between">
            <div className="left">
              <h6 className="section-subtitle">{servicesData.subHeading}</h6>
              <h2 className="section-title" style={{ color: textColor }}>
                {servicesData.mainHeading}
              </h2>{" "}
            </div>
            <p style={{ color: textColor }}>{servicesData.description}</p>
          </div>

          <div className="services-list">
            {servicesData.cards.map((card) => (
              <div className="service-card simple-shadow" key={card.id}>
                <img alt="" decoding="async" src={card.icon} className="service-icon" />
                <h4>
                  <a href="#">{card.title}</a>
                </h4>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
