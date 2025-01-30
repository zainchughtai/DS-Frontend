import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <>
      <section className="project-area">
        <div className="custom-container">
          <div className="custom-row justify-content-between">
            <div className="project-left-details">
              <h6 className="section-subtitle">PROJECTS</h6>
              <h2 className="section-title">Showcase of our recognized work</h2>
              <p>Our collaborative approach ensures that we truly understand our clients unique requirements and challenges.</p>
              <ul>
                <li>
                  <i className="las la-check"></i> Managed Services and Products
                </li>
                <li>
                  <i className="las la-check"></i> Flexibility and Adaptability
                </li>
                <li>
                  <i className="las la-check"></i> Competitive Advantage
                </li>
              </ul>
            </div>

            <div className="project-right-slider">
              <div className="project-right-slider-inner">
                <div className="swiper project-slider">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={24}
                    centeredSlides={false}
                    loop={false}
                    autoHeight={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                      485: {
                        // slidesPerView: 1 (Optional)
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    <SwiperSlide className="project-item">
                      <div className="project-item-inner">
                        <h3>
                          <a href="portfolio-detail/index.html">
                            E-commerce <br />
                            platform <br />
                            development.
                          </a>
                        </h3>
                        <img decoding="async" src="/images/project-1.png" alt="Project 1" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="project-item">
                      <div className="project-item-inner">
                        <h3>
                          <a href="portfolio-detail/index.html">
                            Software as a <br />
                            Service <br />
                            integration
                          </a>
                        </h3>
                        <img decoding="async" src="/images/project-2.png" alt="Project 2" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="project-item">
                      <div className="project-item-inner">
                        <h3>
                          <a href="portfolio-detail/index.html">
                            Mobile <br />
                            Platform <br />
                            Development
                          </a>
                        </h3>
                        <img decoding="async" src="/images/project-3.png" alt="Project 3" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="project-item">
                      <div className="project-item-inner">
                        <h3>
                          <a href="portfolio-detail/index.html">
                            Enter into a <br />
                            Virtual Reality <br />
                            World.
                          </a>
                        </h3>
                        <img decoding="async" src="/images/project-4.png" alt="Project 4" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="project-item">
                      <div className="project-item-inner">
                        <h3>
                          <a href="portfolio-detail/index.html">
                            Custom CRM <br />
                            system for a <br />
                            sales team.
                          </a>
                        </h3>
                        <img decoding="async" src="/images/project-5-new.png" alt="Project 5" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="project-item">
                      <div className="project-item-inner">
                        <h3>
                          <a href="portfolio-detail/index.html">
                            Wrist App <br />
                            For Your <br />
                            Productivity.
                          </a>
                        </h3>
                        <img decoding="async" src="/images/project-6-new.png" alt="Project 6" />
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  {/* Swiper Pagination */}
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
