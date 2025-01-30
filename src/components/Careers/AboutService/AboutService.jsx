import React from "react";
import aboutServicesData from "@/data/Career/AboutService/AboutServiceData";
const AboutService = () => {
  return (
    <>
      <section className="about-service3-area">
        <div className="custom-container">
          <div className="custom-row align-items-center">
            <div className="img-box">
              <img alt="" decoding="async" src={aboutServicesData.img} />
            </div>

            <div className="content-box">
              <h2 dangerouslySetInnerHTML={{ __html: aboutServicesData.heading }}></h2>
              <p dangerouslySetInnerHTML={{ __html: aboutServicesData.description }}></p>{" "}
              <ul>
                {aboutServicesData.features.map((feature, index) => {
                  return (
                    <li key={index}>
                      <i className="las la-check"></i> {feature}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutService;
