import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import eventsData from "@/data/Culture/Events/EventsData";
const EventItems = () => {
  return (
    <>
      <div className="custom-container">
        <div className="row row-gap-5 justify-content-center " style={{ paddingBottom: "0" }}>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="hero-service-about culture-wrap" style={{ position: "relative" }}>
              <div className="section-header d-flex align-items-center justify-content-between w-full flex-column">
                <div className="left d-flex justify-content-center mx-auto">
                  <h3 className="text-center">{eventsData.employeeOfTheMonth.heading}</h3>
                </div>
              </div>
              <div className="culture-slider swiper">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={24}
                  centeredSlides={false}
                  slidesPerView={1}
                  loop={true}
                  navigation={{
                    nextEl: "#swiper-button-next-1",
                    prevEl: "#swiper-button-prev-1",
                  }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    1024: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {eventsData.employeeOfTheMonth.imgs.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="culture-slider-item">
                        <img src={img} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div id="swiper-button-next-1" className="swiper-button-next">
                <i className="las la-arrow-right"></i>
              </div>
              <div id="swiper-button-prev-1" className="swiper-button-prev">
                <i className="las la-arrow-left"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="hero-service-about culture-wrap" style={{ position: "relative" }}>
              <div className="section-header d-flex align-items-center justify-content-between w-full flex-column">
                <div className="left d-flex justify-content-center mx-auto">
                  <h3 className="text-center">{eventsData.birthdayCelebrations.heading}</h3>
                </div>
              </div>
              <div className="culture-slider swiper">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={24}
                  centeredSlides={false}
                  slidesPerView={1}
                  loop={true}
                  navigation={{
                    nextEl: "#swiper-button-next-2",
                    prevEl: "#swiper-button-prev-2",
                  }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    1024: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {eventsData.birthdayCelebrations.imgs.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="culture-slider-item">
                        <img src={img} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div id="swiper-button-next-2" className="swiper-button-next">
                <i className="las la-arrow-right"></i>
              </div>
              <div id="swiper-button-prev-2" className="swiper-button-prev">
                <i className="las la-arrow-left"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="hero-service-about culture-wrap" style={{ position: "relative" }}>
              <div className="section-header d-flex align-items-center justify-content-between w-full flex-column">
                <div className="left d-flex justify-content-center mx-auto">
                  <h3 className="text-center">{eventsData.workCulture.heading}</h3>
                </div>
              </div>
              <div className="culture-slider swiper">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={24}
                  centeredSlides={false}
                  slidesPerView={1}
                  loop={true}
                  navigation={{
                    nextEl: "#swiper-button-next-3",
                    prevEl: "#swiper-button-prev-3",
                  }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    1024: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {eventsData.workCulture.imgs.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="culture-slider-item">
                        <img src={img} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div id="swiper-button-next-3" className="swiper-button-next">
                <i className="las la-arrow-right"></i>
              </div>
              <div id="swiper-button-prev-3" className="swiper-button-prev">
                <i className="las la-arrow-left"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="hero-service-about culture-wrap" style={{ position: "relative" }}>
              <div className="section-header d-flex align-items-center justify-content-between w-full flex-column">
                <div className="left d-flex justify-content-center mx-auto">
                  <h3 className="text-center">{eventsData.trip2024.heading}</h3>
                </div>
              </div>
              <div className="culture-slider swiper">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={24}
                  centeredSlides={false}
                  slidesPerView={1}
                  loop={true}
                  navigation={{
                    nextEl: "#swiper-button-next-4",
                    prevEl: "#swiper-button-prev-4",
                  }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    1024: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {eventsData.trip2024.imgs.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="culture-slider-item">
                        <img src={img} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div id="swiper-button-next-4" className="swiper-button-next">
                <i className="las la-arrow-right"></i>
              </div>
              <div id="swiper-button-prev-4" className="swiper-button-prev">
                <i className="las la-arrow-left"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="hero-service-about culture-wrap" style={{ position: "relative" }}>
              <div className="section-header d-flex align-items-center justify-content-between w-full flex-column">
                <div className="left d-flex justify-content-center mx-auto">
                  <h3 className="text-center">{eventsData.mangoDay2024.heading}</h3>
                </div>
              </div>
              <div className="culture-slider swiper">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={24}
                  centeredSlides={false}
                  slidesPerView={1}
                  loop={true}
                  navigation={{
                    nextEl: "#swiper-button-next-5",
                    prevEl: "#swiper-button-prev-5",
                  }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    1024: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {eventsData.mangoDay2024.imgs.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="culture-slider-item">
                        <img src={img} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div id="swiper-button-next-5" className="swiper-button-next">
                <i className="las la-arrow-right"></i>
              </div>
              <div id="swiper-button-prev-5" className="swiper-button-prev">
                <i className="las la-arrow-left"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="hero-service-about culture-wrap" style={{ position: "relative" }}>
              <div className="section-header d-flex align-items-center justify-content-between w-full flex-column">
                <div className="left d-flex justify-content-center mx-auto">
                  <h3 className="text-center">{eventsData.teamBuildingActivities.heading}</h3>
                </div>
              </div>
              <div className="culture-slider swiper">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={24}
                  centeredSlides={false}
                  slidesPerView={1}
                  loop={true}
                  navigation={{
                    nextEl: "#swiper-button-next-6",
                    prevEl: "#swiper-button-prev-6",
                  }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    1024: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {eventsData.teamBuildingActivities.imgs.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="culture-slider-item">
                        <img src={img} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div id="swiper-button-next-6" className="swiper-button-next">
                <i className="las la-arrow-right"></i>
              </div>
              <div id="swiper-button-prev-6" className="swiper-button-prev">
                <i className="las la-arrow-left"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="hero-service-about culture-wrap" style={{ position: "relative" }}>
              <div className="section-header d-flex align-items-center justify-content-between w-full flex-column">
                <div className="left d-flex justify-content-center mx-auto">
                  <h3 className="text-center">{eventsData.dinnerActivities.heading}</h3>
                </div>
              </div>
              <div className="culture-slider swiper">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={24}
                  centeredSlides={false}
                  slidesPerView={1}
                  loop={true}
                  navigation={{
                    nextEl: "#swiper-button-next-7",
                    prevEl: "#swiper-button-prev-7",
                  }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    1024: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {eventsData.dinnerActivities.imgs.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="culture-slider-item">
                        <img src={img} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div id="swiper-button-next-7" className="swiper-button-next">
                <i className="las la-arrow-right"></i>
              </div>
              <div id="swiper-button-prev-7" className="swiper-button-prev">
                <i className="las la-arrow-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventItems;
