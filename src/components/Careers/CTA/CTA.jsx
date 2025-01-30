import React from "react";
import ctaData from "@/data/Career/CTA/CTAdata";
const CTA = () => {
  return (
    <>
      <section className="cta-area">
        <div className="custom-container">
          <div className="cta-body text-center">
            <img decoding="async" src={ctaData.sectionImg} alt="Shape" className="animation-slide-left bg-shape" />
            <div className="our-expert-team-box">
              <div className="our-expert-team-box-inner d-flex align-items-center">
                <div className="imgs d-flex align-items-center">
                  {ctaData.smallImages.map((img) => {
                    return <img key={img.id} src={img.img} alt="Shape" />;
                  })}
                </div>
              </div>
            </div>
            <h3>Need any further assitance?</h3>
            <p>Feel free to reach out for any inquiries or assistance.</p>
            <a href="/contact-us" className="theme-btn">
              Book an appointment now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
