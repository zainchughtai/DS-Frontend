import React from "react";
import heroContent from "@/data/Home/Hero/HeroContent";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <section className="hero-empowerment-area">
        <div className="custom-container">
          <div className="custom-row align-items-center">
            <div className="hero-empowerment-left-content">
              <h6 className="section-subtitle">{heroContent.subHeading}</h6>
              <h1 className="section-title fade-in" dangerouslySetInnerHTML={{ __html: heroContent.mainHeading }}></h1>
              <p>{heroContent.description}</p>
              <div className="btns-group d-flex">
                <Link href="/contact-us" className="theme-btn">
                  {heroContent.heroBtn1}
                </Link>

                {/* <a href="contact/index.html" className="theme-btn2">
                  {heroContent.heroBtn2}
                  <i className="iconoir-arrow-up-right"></i>{" "}
                </a> */}
              </div>
            </div>

            <div className="hero-empowerment-right-content">
              <div className="top-content">
                <img decoding="async" className="desktop fade-in" src="/images/bg1-1-1.png" />

                <div className="experience-box simple-shadow bounce-in">
                  <div className="experience-body d-flex align-items-center">
                    <img decoding="async" src="/images/icon1-1.svg" />

                    <div className="experience-content d-flex align-items-center">
                      <h1>+13</h1>
                      <p>
                        Years <span>Experience</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bottom-content d-flex">
                <div className="our-expert-team-box simple-shadow bounce-in delay-2">
                  <a href="team/index.html">
                    <div className="our-expert-team-box-inner d-flex align-items-center">
                      <div className="imgs imgs1 d-flex align-items-center">
                        <img decoding="async" src="/images/small-img-4-1.png" />
                        <img decoding="async" src="/images/small-img-3-1.png" />
                        <img decoding="async" src="/images/small-img-2-1.png" />
                        <img decoding="async" src="/images/small-img-1-1.png" />
                      </div>
                      <p>
                        Meet <span>Our Experts</span>
                      </p>
                    </div>
                  </a>
                </div>

                <div className="google-reviews-box simple-shadow bounce-in delay-3">
                  <div className="left">
                    <span>Verified by</span>
                    <div className="d-flex gap-2 review-icon-wrap">
                      <img decoding="async" src="/images/google-logo.svg" />
                      <img decoding="async" src="/images/upwork-logo.svg" />
                      <img decoding="async" src="/images/clutch-logo.webp" />
                      <img decoding="async" src="/images/linkedin-logo.svg" />
                    </div>
                  </div>
                  <div className="right">
                    <div className="stars d-flex align-items-center">
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                    </div>
                    <p>
                      350+ <span>Reviews</span>
                    </p>
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

export default Hero;
