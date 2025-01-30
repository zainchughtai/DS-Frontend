import React from "react";
import companyData from "@/data/About/OurCompany/OurCompanyData";
const OurCompany = () => {
  return (
    <>
      <section className="company-service-area ">
        <div className="custom-container">
          <div className="partner-service-inner">
            <div className="hero-service-about">
              <div className="section-header d-flex align-items-center justify-content-between w-full">
                <div className="left">
                  <h6 className="section-subtitle">{companyData.subHeading}</h6>
                  <h2 className="section-title">{companyData.mainHeading}</h2>
                  <p>{companyData.description}</p>
                </div>
                <a href="../contact/index.html" className="theme-btn">
                  {companyData.btn}
                </a>
              </div>

              <img alt="" decoding="async" src={companyData.img} />
              <div className="hero-service-about-body">
                <p dangerouslySetInnerHTML={{ __html: companyData.description2 }}></p>
                <ul>
                  {companyData.points.map((point, index) => (
                    <li key={index}>
                      <i className="las la-check"></i> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCompany;
