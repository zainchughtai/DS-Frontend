import React from "react";

const Description = ({ heading, description }) => {
  return (
    <>
      <section className="blog-details-area portfolio-details-area">
        <div className="custom-container">
          <div className="blog-details-body">
            <div className="blog-details-inner">
              <div className="blog-details-introduction">
                <h2>{heading}</h2>
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Description;
