import React from "react";
import ourServicesData from "@/data/Career/OurServices/OurServices";
const OurServices = () => {
  return (
    <>
      <section className="company-service-area career-service-area">
        <div className="custom-container">
          <div className="partner-service-inner">
            <div className="hero-service-about">
              <div className="section-header d-flex align-items-center justify-content-between w-full">
                <div className="left">
                  <h6 className="section-subtitle"></h6>
                  <h2 className="section-title"></h2> <p></p>
                </div>
              </div>

              <img alt="" decoding="async" src={ourServicesData.img} />
              <div className="hero-service-about-body">
                <p>{ourServicesData.description}</p>
                <ul>
                  {ourServicesData.points.map((point, index) => {
                    return (
                      <li key={index}>
                        <i className="las la-check"></i> {point}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
