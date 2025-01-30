import React from "react";

const CaseStudies = () => {
  return (
    <>
      <section className="case-studio-area">
        <div className="custom-container">
          <div className="case-studio-header text-center">
            <h6 className="section-subtitle">CASE STUDIES</h6>
            <h2 className="section-title">Detailing of our products</h2>
          </div>

          <div className="case-studio">
            <ul className="nav nav-pills case-studio-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <button className="nav-link active" id="development-tab" data-bs-toggle="tab" href="#development" role="tab" aria-controls="development" aria-selected="true">
                  Development
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link" id="woo_commerce-tab" data-bs-toggle="tab" href="#woo_commerce" role="tab" aria-controls="woo_commerce" aria-selected="false">
                  Woo Commerce
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link" id="crm_solutions-tab" data-bs-toggle="tab" href="#crm_solutions" role="tab" aria-controls="crm_solutions" aria-selected="false">
                  CRM Solutions
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link" id="web_designing-tab" data-bs-toggle="tab" href="#web_designing" role="tab" aria-controls="web_designing" aria-selected="false">
                  Web Designing
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link" id="it_support-tab" data-bs-toggle="tab" href="#it_support" role="tab" aria-controls="it_support" aria-selected="false">
                  IT Support
                </button>
              </li>
            </ul>

            <div className="tab-content case-studio-tab-content">
              <div className="tab-pane fade show active" id="development" role="tabpanel" aria-labelledby="development-tab">
                <div className="case-studio-body d-flex">
                  <div className="left d-flex flex-1">
                    <div className="case-studio-img-card simple-shadow">
                      <a href="#" className="case-studio-cat">
                        Web Development{" "}
                      </a>
                      <img alt="" decoding="async" src="/images/case-studio-1-1-1.jpg" />
                    </div>
                    <div className="case-studio-img-card simple-shadow">
                      <a href="#" className="case-studio-cat">
                        Mobile Development{" "}
                      </a>
                      <img alt="" decoding="async" src="/images/case-studio-2-2-1.jpg" />
                    </div>
                  </div>
                  <div className="right">
                    <div className="case-studio-contents service-card card-h">
                      <img alt="" decoding="async" src="/images/service-icon-1-2.svg" />
                      <h4>Development</h4>
                      <p>
                        Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes,
                        methodologies, and practices used to design, create, deploy, and maintain software applications and systems.
                      </p>

                      <a href="#" className="theme-btn">
                        <i className="las la-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="woo_commerce" role="tabpanel" aria-labelledby="woo_commerce-tab">
                <div className="case-studio-body d-flex">
                  <div className="left d-flex flex-1">
                    <div className="case-studio-img-card simple-shadow">
                      <a href="#" className="case-studio-cat">
                        electro.{" "}
                      </a>
                      <img alt="" decoding="async" src="/images/case-studio-3.jpg" />
                    </div>
                    <div className="case-studio-img-card simple-shadow">
                      <a href="#" className="case-studio-cat">
                        Visit Site Now{" "}
                      </a>
                      <img alt="" decoding="async" src="/images/case-studio-4.jpg" />
                    </div>
                  </div>
                  <div className="right">
                    <div className="case-studio-contents service-card card-h">
                      <img alt="" decoding="async" src="/images/service-icon-2-2.svg" />
                      <h4>Woo Commerce</h4>
                      <p>
                        Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes,
                        methodologies, and practices used to design, create, deploy, and maintain software applications and systems.
                      </p>

                      <a href="#" className="theme-btn">
                        <i className="las la-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="crm_solutions" role="tabpanel" aria-labelledby="crm_solutions-tab">
                <div className="case-studio-body d-flex">
                  <div className="left d-flex flex-1">
                    <div className="case-studio-img-card simple-shadow">
                      <a href="#" className="case-studio-cat">
                        CRM Solutions{" "}
                      </a>
                      <img alt="" decoding="async" src="/images/case-studio-5.jpg" />
                    </div>
                    <div className="case-studio-img-card simple-shadow">
                      <a href="#" className="case-studio-cat">
                        Mobile Development{" "}
                      </a>
                      <img alt="" decoding="async" src="/images/case-studio-6.jpg" />
                    </div>
                  </div>
                  <div className="right">
                    <div className="case-studio-contents service-card card-h">
                      <img alt="" decoding="async" src="/images/service-icon-3-2.svg" />
                      <h4>CRM Solutions</h4>
                      <p>
                        Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes,
                        methodologies, and practices used to design, create, deploy, and maintain software applications and systems.
                      </p>

                      <a href="#" className="theme-btn">
                        <i className="las la-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="web_designing" role="tabpanel" aria-labelledby="web_designing-tab">
                <div className="case-studio-body d-flex">
                  <div className="left d-flex flex-1">
                    <div className="case-studio-img-card simple-shadow">
                      <a href="#" className="case-studio-cat">
                        Web Designing{" "}
                      </a>
                      <img alt="" decoding="async" src="/images/case-studio-7.jpg" />
                    </div>
                    <div className="case-studio-img-card simple-shadow">
                      <a href="#" className="case-studio-cat">
                        Mobile Development{" "}
                      </a>
                      <img alt="" decoding="async" src="/images/case-studio-8.jpg" />
                    </div>
                  </div>
                  <div className="right">
                    <div className="case-studio-contents service-card card-h">
                      <img alt="" decoding="async" src="/images/service-icon-4-2.svg" />
                      <h4>Web Designing</h4>
                      <p>
                        Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes,
                        methodologies, and practices used to design, create, deploy, and maintain software applications and systems.
                      </p>

                      <a href="#" className="theme-btn">
                        <i className="las la-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="it_support" role="tabpanel" aria-labelledby="it_support-tab">
                <div className="case-studio-body d-flex">
                  <div className="left d-flex flex-1">
                    <div className="case-studio-img-card simple-shadow">
                      <a href="#" className="case-studio-cat">
                        IT Support{" "}
                      </a>
                      <img alt="" decoding="async" src="/images/case-studio-9.jpg" />
                    </div>
                    <div className="case-studio-img-card simple-shadow">
                      <a href="#" className="case-studio-cat">
                        Mobile Development{" "}
                      </a>
                      <img alt="" decoding="async" src="/images/case-studio-10.jpg" />
                    </div>
                  </div>
                  <div className="right">
                    <div className="case-studio-contents service-card card-h">
                      <img alt="" decoding="async" src="/images/service-icon-5-2.svg" />
                      <h4>IT Support</h4>
                      <p>
                        Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes,
                        methodologies, and practices used to design, create, deploy, and maintain software applications and systems.
                      </p>
                      <a href="#" className="theme-btn">
                        <i className="las la-arrow-right"></i>
                      </a>
                    </div>
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

export default CaseStudies;
