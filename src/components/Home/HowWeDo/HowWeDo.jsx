import React from "react";
import howWeDo from "@/data/Home/HowWeDo/HowWeDo";
import Link from "next/link";
const HowWeDo = () => {
  const rows = [howWeDo.cards.slice(0, 3), howWeDo.cards.slice(3, 6), howWeDo.cards.slice(6, 8)];
  return (
    <>
      <section className="how-we-do-area">
        <div className="custom-container">
          <div className="custom-row">
            <img decoding="async" src="/images/bg-shape-1-1.svg" alt="Shape" className="animation-slide-left how-we-do-bg" />
            <div className="how-we-do-left-content">
              <div className="top">
                <h6 className="section-subtitle">{howWeDo.subHeading}</h6>
                <h2 className="section-title">{howWeDo.mainHeading}</h2>
                <p>{howWeDo.description}</p>
              </div>

              <Link href="/contact-us" className="theme-btn">
                {" "}
                Learn More <i className="iconoir-arrow-up-right"></i>{" "}
              </Link>
            </div>
            <div className="how-we-do-right-content">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="how-we-do-items d-flex align-items-center justify-content-center">
                  {row.map((card) => (
                    <div key={card.id} className="how-we-do-card">
                      <div className="circle-shape"></div>
                      <div className="line-shape"></div>
                      <div className="how-we-do-icon">
                        <img decoding="async" src={card.icon} alt={card.title} />
                      </div>
                      <div className="how-we-do-content">
                        <h5>
                          <span>{card.title}</span>
                        </h5>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeDo;
