import React from "react";
import jobsData from "@/data/Career/Jobs/JobsData";
const Jobs = () => {
  return (
    <>
      <section className="career-area" style={{ paddingBottom: "0" }}>
        <div className="custom-container">
          <div className="career-body d-flex">
            <div className="career-left">
              <h6 className="section-subtitle">{jobsData.subHeading}</h6>
              <h2 className="section-title">{jobsData.mainHeading}</h2>
            </div>

            <div className="career-lists">
              {jobsData.cards.map((card) => (
                <div className="career-box" key={card.id}>
                  <span className="location">{card.location}</span>

                  <h3>
                    <a href={card.link} target="_blank" style={{color : "#000"}}>{card.title} - <span>{card.subtitle}</span></a>
                  </h3>
                  <p>{card.description}</p>
                  <div className="career-time">
                    <span>
                      <i className="las la-clock"></i> {card.time}
                    </span>
                    <span>
                      <i style={{"color": "var(--primary_color)", "fontStyle": "normal"}}>RS</i> {card.salary}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
