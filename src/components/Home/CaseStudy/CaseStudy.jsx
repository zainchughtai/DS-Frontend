import React from "react";

const CaseStudy = () => {
  return (
    <>
      <section className="case-studio-area">
        <div className="custom-container">
          <div className="case-studio-header text-center">
            <h6 className="section-subtitle">Our Technologies</h6>
            <h2 className="section-title">Transforming product ideas to digital reality</h2>
          </div>

          <div className="case-studio">
            <ul className="nav nav-pills case-studio-tabs justify-content-center" id="myTab" role="tablist">
              <li className="nav-item">
                <button className="nav-link active tech-tab" id="development-tab" data-bs-toggle="tab" href="#development" role="tab" aria-controls="development" aria-selected="true">
                  FRONTEND
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link tech-tab" id="woo_commerce-tab" data-bs-toggle="tab" href="#woo_commerce" role="tab" aria-controls="woo_commerce" aria-selected="false">
                  BACKEND
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link tech-tab" id="crm_solutions-tab" data-bs-toggle="tab" href="#crm_solutions" role="tab" aria-controls="crm_solutions" aria-selected="false">
                  DATABASE
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link tech-tab" id="cms-tab" data-bs-toggle="tab" href="#cms" role="tab" aria-controls="crm_solutions" aria-selected="false">
                  CMS
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link tech-tab" id="crm-tab" data-bs-toggle="tab" href="#crm" role="tab" aria-controls="crm_solutions" aria-selected="false">
                  CRM
                </button>
              </li>
            </ul>

            <div className="tab-content case-studio-tab-content">
              <div className="tab-pane fade show active" id="development" role="tabpanel" aria-labelledby="development-tab">
                <div className="case-studio-body d-flex justify-content-center flex-wrap">
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/html-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">HTML</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/css-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">CSS</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/js-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">JS</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/react-logo.svg" alt="" className="h-auto tech-logo" style={{ width: "90px" }} />
                    </div>
                    <h3 className="tech-title">ReactJS</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/nextjs.svg" alt="" className="h-auto tech-logo" style={{ width: "90px" }} />
                    </div>
                    <h3 className="tech-title">NextJS</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/vue-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">VueJS</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/angular-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">Angular</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/redux-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">Redux</h3>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="woo_commerce" role="tabpanel" aria-labelledby="woo_commerce-tab">
                <div className="case-studio-body d-flex justify-content-center flex-wrap">
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/php-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">PHP</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/laravel-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">Laravel</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/codeigniter-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">Codeigniter</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/node-logo.svg" alt="" className="h-auto tech-logo" style={{ width: "90px" }} />
                    </div>
                    <h3 className="tech-title">NodeJS</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/express-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">ExpressJS</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/ror-logo.png" alt="" className="h-auto tech-logo" style={{ width: "100px" }} />
                    </div>
                    <h3 className="tech-title">Ruby on Rails</h3>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="crm_solutions" role="tabpanel" aria-labelledby="crm_solutions-tab">
                <div className="case-studio-body d-flex justify-content-center flex-wrap">
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/mysql-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">MySQL</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/sqlite-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">SQLite</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/postgresql-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">PostgreSQL</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/mongodb-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">MongoDB</h3>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="cms" role="tabpanel" aria-labelledby="cms-tab">
                <div className="case-studio-body d-flex justify-content-center flex-wrap">
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/wordpress-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">WordPress</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/shopify-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">Shopify</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/wix-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">Wix</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/webflow-logo.svg" alt="" className="h-auto tech-logo" style={{ width: "100px" }} />
                    </div>
                    <h3 className="tech-title">Webflow</h3>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="crm" role="tabpanel" aria-labelledby="crm-tab">
                <div className="case-studio-body d-flex justify-content-center flex-wrap">
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/hubspot-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">Hubspot</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/zoho-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">Zoho</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/salesforce-logo.svg" alt="" className="h-auto tech-logo" />
                    </div>
                    <h3 className="tech-title">Salesforce</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 tech-item">
                    <div className="p-5 bg-white rounded-4 tech-logo-wrap">
                      <img src="/images/mautic-logo.png" alt="" className="h-auto tech-logo" style={{ width: "100px" }} />
                    </div>
                    <h3 className="tech-title">Mautic</h3>
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

export default CaseStudy;
