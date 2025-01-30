import React from "react";
import ourServicesData from "@/data/Services/OurServices/OurServicesData";
const CompanyServices = () => {
  return (
    <>
      <section className="service-area">
        <div className="custom-container">
          <div className="service-section-header section-header d-flex align-items-end justify-content-between">
            <div className="left">
              <h6 className="section-subtitle">{ourServicesData.subHeading}</h6>
              <h2 className="section-title">{ourServicesData.mainHeading}</h2>{" "}
            </div>
            <p>{ourServicesData.description}</p>
          </div>

          <div className="services-list ">
            {ourServicesData.cards.map((card) => (
              <div key={card.id} className="service-card simple-shadow">
                <img alt="" decoding="async" src={card.icon} className="service-icon" />
                <h4>
                  <a target="_blank" href="../service-details/index.html">
                    {card.title}
                  </a>
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

export default CompanyServices;
