import React from "react";
import servicesData from "@/data/Career/Services/ServicesData";
const Services = () => {
  return (
    <>
      <section className="service4-area service-area">
        <div className="custom-container">
          <div className="service-section-header section-header d-flex align-items-end justify-content-between">
            <div className="left">
              <h6 className="section-subtitle">{servicesData.subHeading}</h6>
              <h2 className="section-title">{servicesData.mainHeading}</h2>{" "}
            </div>
            <p>{servicesData.description}</p>
          </div>

          <div className="services-list ">
            {servicesData.cards.map((card, index) => {
              return (
                <div key={index} className="service-card simple-shadow">
                  <div className="service-icon">
                    <img src={card.icon} alt="icon" />
                  </div>
                  <div className="service-content">
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
