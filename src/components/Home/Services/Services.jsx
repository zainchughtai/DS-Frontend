import React from "react";
import services from "@/data/Home/Services/Services";
const Services = () => {
  return (
    <>
      <section className="service-area">
        <div className="custom-container">
          <div className="service-section-header section-header d-flex align-items-end justify-content-between">
            <div className="left">
              <h6 className="section-subtitle">{services.subHeading}</h6>
              <h2 className="section-title">{services.mainHeading}</h2>
            </div>
            <p>{services.description}</p>
          </div>

          <div className="services-list">
            {services.cards.map((card) => (
              <div className="service-card simple-shadow">
                <img alt="" decoding="async" src={card.icon} className="service-icon" />
                <h4>
                  <span>{card.title}</span>
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
