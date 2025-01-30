import React from "react";
import ctaData from "@/data/About/CTA/CTAdata";
import Link from "next/link";
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
            <h3>{ctaData.heading}</h3>
            <p>{ctaData.description}</p>
            <Link href="/contact-us" className="theme-btn">
              {ctaData.btn}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
