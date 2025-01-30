import React from "react";

const Locations = () => {
  return (
    <>
      <section className="contact-location-area">
        <img alt="" decoding="async" className="animation-slide-left bg-shape" src="/images/bg-shape-7.svg" />
        <div className="custom-container">
          <div className="custom-row justify-content-between align-items-center">
            <div className="contact-location-left-content">
              <div className="contact-location-left-body">
                <h6 className="section-subtitle">Locations</h6>
                <h2 className="section-title">Visit our store all around the world</h2>{" "}
                <p>Our location is strategically situated at the heart of City, making it an ideal destination for businesses and visitors alike.</p>
              </div>
            </div>

            <div className="right">
              <div className="contact-locations-list">
                <div className="contact-location-box">
                  <div className="number">#1 </div>
                  <div className="content">
                    <h4>Lahore, Pakistan</h4>
                    <p>38-XX, second floor Khayaban-e-Iqbal, DHA Phase 3, Lahore, 54000</p>
                  </div>
                </div>
                <div className="contact-location-box">
                  <div className="number">#2 </div>
                  <div className="content">
                    <h4>Dubai, UAE</h4>
                    <p>45th floor, The One Tower - Sheikh Zayed Rd - Barsha Heights - Dubai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
