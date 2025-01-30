import React from "react";

const CTA = () => {
  return (
    <>
      <section className="cta-area" style={{ paddingBottom: "0px" }}>
        <div className="custom-container">
          <div className="cta-body text-center">
            <img decoding="async" src="/images/bg-shape-11.svg" alt="Shape" className="animation-slide-left bg-shape" />
            <div className="our-expert-team-box">
              <div className="our-expert-team-box-inner d-flex align-items-center">
                <div className="imgs d-flex align-items-center">
                  <img alt="" decoding="async" src="/images/small-img-4.png" />
                  <img alt="" decoding="async" src="/images/small-img-3.png" />
                  <img alt="" decoding="async" src="/images/small-img-2.png" />
                  <img alt="" decoding="async" src="/images/ssmall-img-1.png" />
                </div>
              </div>
            </div>
            <h3>Need any further assitance?</h3>
            <p>Feel free to reach out for any inquiries or assistance.</p>
            <a href="../contact/index.html" className="theme-btn">
              Book an appointment now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
