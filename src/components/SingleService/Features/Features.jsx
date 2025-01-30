import React from "react";

const Features = ({ subtitle, title, features }) => {
  return (
    <>
      <section className="feature3-area feature3-style-2" style={{ paddingTop: "0" }}>
        <div className="custom-container">
          <div className="feature3-body">
            <div className="section-header">
              <h6 className="section-subtitle">{subtitle}</h6>
              <h2 className="section-title">{title}</h2>{" "}
            </div>

            <div className="feature3-lists">
              {features.map((feature) => {
                return (
                  <div key={feature.id} className="feature-box">
                    <i className="icon-box las la-check"></i>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
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

export default Features;
