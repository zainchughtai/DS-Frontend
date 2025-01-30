import React from "react";

const Information = () => {
  return (
    <>
      <section className="contact-area2">
        <div className="custom-container">
          <div className="contact-inner">
            <div className="contact-map-wrap">
              <h5>Connect Us</h5>

              <div id="map">
                <div className="map-location-item" style={{ right: "30%", top: "28%" }}>
                  <div className="map-location-item-inner">
                    <img alt="" decoding="async" style={{"borderRadius" : "50%", "width" : "27px"}} src="/images/pakistan.png" />
                    <div className="content">
                      <h4>Lahore, Pakistan</h4>
                      <p>38-XX, second floor Khayaban-e-Iqbal, DHA Phase 3, Lahore, 54000</p>
                    </div>
                  </div>
                  <span className="circle"></span>
                </div>
                <div className="map-location-item" style={{ right: "38%", top: "39%" }}>
                  <div className="map-location-item-inner">
                    <img alt="" decoding="async" style={{"borderRadius" : "50%", "width" : "27px"}} src="/images/uae.png" />
                    <div className="content">
                      <h4>Dubai, UAE</h4>
                      <p>45th floor, The One Tower - Sheikh Zayed Rd - Barsha Heights - Dubai</p>
                    </div>
                  </div>
                  <span className="circle"></span>
                </div>
                
                <img alt="" decoding="async" src="/images/map.svg" />
              </div>
            </div>
            <div className="contact-inner-info-box d-flex align-items-center">
              <div className="contact-info-box simple-shadow">
                <div className="icon">
                  <i className="las la-headset"></i>
                </div>
                <h5>Support</h5>
                <p>Contact our fast support team</p>
                <h7>
                  <a href="mailto:sales@devsspace.com">sales@devsspace.com</a>
                </h7>
              </div>
              <div className="contact-info-box simple-shadow">
                <div className="icon">
                  <i className="las la-phone"></i>
                </div>
                <h5>Phone</h5>
                <p>Mon-Fri from 9am to 6pm.</p>
                <h7>
                  <a href="tel:+92-(042)-35721419">+92-(042)-35721419</a>
                </h7>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
