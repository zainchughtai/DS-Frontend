import React from "react";
import teamData from "@/data/Career/Team/TeamData";
const Team = () => {
  return (
    <>
      <section className="our-team-2-area our-team-3-area">
        <div className="custom-container">
          <div className="our-team-inner">
            <img decoding="async" src={teamData.img} className="animation-slide-left bg-shape" />

            <div className="section-header our-team-2-header d-flex align-items-center justify-content-between w-full">
              <div className="left">
                <h6 className="section-subtitle">{teamData.subHeading}</h6>
                <h2 className="section-title">{teamData.mainHeading}</h2>
                <p>{teamData.description}</p>
              </div>

              <a href="#" className="theme-btn">
                {teamData.btn}
              </a>
            </div>

            <div className="our-team-2-lists our-team-3-lists">
              {teamData.cards.map((card) => {
                return (
                  <div className="our-team-2-card" key={card.id}>
                    <div className="img-box">
                      <img decoding="async" src={card.img} alt="Team" />
                    </div>
                    <h3>{card.name}</h3>
                    <span className="designation">{card.position}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
