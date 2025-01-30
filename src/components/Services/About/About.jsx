import React from "react";
import consultingData from "@/data/Services/Consulting/ConsultingData";
const About = () => {
  return (
    <>
      <section className="about-area">
        <div className="custom-container">
          <div className="custom-row justify-content-between align-items-center">
            <div className="left-content">
              <h6 className="section-subtitle">{consultingData.subHeading}</h6>
              <h2 className="section-title">{consultingData.mainHeading}</h2>
              <p>{consultingData.description}</p>
              <ul>
                {consultingData.points.map((point, index) => (
                  <li key={index}>
                    <i className="icon-check las la-check"></i> {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="right-content">
              <div className="about-timeline">
                {consultingData.cards.map((card) => (
                  <div key={card.id} className="about-timeline-item">
                    <div className="about-timeline-item-inner">
                      <img alt="" decoding="async" src={card.bgImg} className="line-shape" />
                      <span className="number">0{card.id} </span>
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
