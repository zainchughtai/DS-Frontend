import React from "react";

const Features = () => {
  return (
    <>
      <section className="feature-area">
        <div className="custom-container">
          <div className="custom-row align-items-center">
            <div className="feature-left d-flex">
              <div className="feature-img-card">
                <h4>
                  Start your <br />
                  project from <br />
                  your pocket.
                </h4>
                <img alt="" decoding="async" src="/images/feature-img-1.png" />
              </div>
              <div className="feature-img-card">
                <h4>
                  Available on <br />
                  all responsive <br />
                  devices.
                </h4>
                <img alt="" decoding="async" src="/images/feature-img-2.png" />
              </div>
            </div>

            <div className="feature-right">
              <div className="feature-content">
                <h6 className="section-subtitle">FEATURED PRODUCT</h6>
                <h2 className="section-title">Seamless productivity with our new app</h2>
                <p>Download Slack and experience a new era of organization and accomplishment.</p>
                <ul>
                  <li>
                    <i className="las la-check"></i> PPD Development
                  </li>
                  <li>
                    <i className="las la-check"></i> Easy to Use
                  </li>
                </ul>
                <div className="btns-group">
                  <a href="#" className="theme-simple-btn">
                    <i className="lab la-apple"></i>
                    Get it on App Store
                  </a>

                  <a href="#" className="theme-simple-btn">
                    <i className="lab la-google-play"></i>
                    Get it on Play Store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
