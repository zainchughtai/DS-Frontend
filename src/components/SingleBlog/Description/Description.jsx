import React from "react";

const Description = (props) => {
  return (
    <>
      <section className="blog-details-area portfolio-details-area">
        <div className="custom-container">
          <div className="blog-details-body">
            <div className="blog-details-inner">
              <div className="blog-details-introduction">
              <div dangerouslySetInnerHTML={{ __html: props.description }} />

                {/* <div className="blog-details-pagination d-flex align-items-center justify-content-between">
                  <a target="_blank" href="#" className="theme-btn">
                    Previous
                  </a>

                  <a target="_blank" href="#" className="theme-btn">
                    Next
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Description;
