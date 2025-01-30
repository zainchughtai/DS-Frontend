import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projectsContent from "@/data/Home/Projects/ProjectsContent";

const Projects = () => {
  return (
    <>
      <section className="project-area">
        <div className="custom-container">
          <div className="custom-row justify-content-between">
            <div className="project-left-details">
              <h6 className="section-subtitle">{projectsContent.subHeading}</h6>
              <h2 className="section-title">{projectsContent.mainHeading}</h2>
              <p>{projectsContent.description}</p>
              <ul>
                {projectsContent.points.map((point, index) => (
                  <li key={index}>
                    <i className="las la-check"></i> {point}
                  </li>
                ))}
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
                      <div className="project-item-inner" style={{ backgroundColor: "#121212" }}>
                        <h3>
                          <a href="portfolio-detail/index.html">
                            Web<br />
                            Development.
                          </a>
                        </h3>
                        <img decoding="async" src="/images/1.png" alt="Project 1" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="project-item">
                      <div className="project-item-inner" style={{ backgroundColor: "#D4D3D0" }}>
                        <h3>
                          <a href="portfolio-detail/index.html">
                            CMS<br/>
                            Development
                          </a>
                        </h3>
                        <img decoding="async" src="/images/2.png" alt="Project 2" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="project-item">
                      <div className="project-item-inner" style={{ backgroundColor: "#fff" }}>
                        <h3>
                          <a href="portfolio-detail/index.html">
                            CRM<br />
                            Integrations
                          </a>
                        </h3>
                        <img decoding="async" src="/images/3.png" alt="Project 3" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="project-item">
                      <div className="project-item-inner" style={{ backgroundColor: "#121212" }}>
                        <h3>
                          <a href="portfolio-detail/index.html">
                            E-commerce
                          </a>
                        </h3>
                        <img decoding="async" src="/images/4.png" alt="Project 4" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="project-item">
                      <div className="project-item-inner" style={{ backgroundColor: "#D4D3D0" }}>
                        <h3>
                          <a href="portfolio-detail/index.html">
                            Digital<br />
                            Marketing
                          </a>
                        </h3>
                        <img decoding="async" src="/images/5.png" alt="Project 5" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="project-item">
                      <div className="project-item-inner" style={{ backgroundColor: "#fff" }}>
                        <h3>
                          <a href="portfolio-detail/index.html">
                            Mobile<br />
                            Application<br />
                            Development
                          </a>
                        </h3>
                        <img decoding="async" src="/images/6.png" alt="Project 6" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="project-item">
                      <div className="project-item-inner" style={{ backgroundColor: "#121212" }}>
                        <h3>
                          <a href="portfolio-detail/index.html">
                            Wrist App <br />
                            For Your <br />
                            Productivity.
                          </a>
                        </h3>
                        <img decoding="async" src="/images/7.png" alt="Project 6" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
