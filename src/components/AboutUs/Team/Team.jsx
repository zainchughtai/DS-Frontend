import React from "react";
import teamData from "@/data/About/Team/TeamData";

const Team = () => {
  return (
    <>
      <section className="our-team-2-area">
        <div className="custom-container">
          <div className="section-header our-team-2-header d-flex align-items-center justify-content-between w-full">
            <img decoding="async" className="animation-slide-right bg-shape" src="/images/bg-shape-10.svg" alt="Shape" />
            <div className="left">
              <h6 className="section-subtitle">{teamData.subHeading}</h6>
              <h2 className="section-title">{teamData.mainHeading}</h2>
              <p>{teamData.description}</p>
            </div>

            <a href="../contact/index.html" className="theme-btn">
              {teamData.btn}
            </a>
          </div>

          <div className="our-team-2-lists">
            {teamData.cards.map((card) => (
              <div key={card.id} className="our-team-2-card">
                <div className="img-box">
                  <img alt="" decoding="async" src={card.img} />
                </div>
                <h3>{card.name}</h3>
                <span className="designation">{card.position}</span>
                <ul className="social-links d-flex align-items-center">
                  {card.socials.map((social) => (
                    <li key={social.id}>
                      <a href={social.link}>
                        <i className={social.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
