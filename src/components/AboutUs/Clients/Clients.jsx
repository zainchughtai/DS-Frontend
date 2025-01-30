import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import clientLogos from "@/data/Home/ClientsLogos/ClientLogos";
const Clients = () => {
  return (
    <>
      <section className="client-area">
        <div className="case-studio-header text-center">
          <h2 className="section-title mb-4">Our Clients</h2>
        </div>
        <div className="client-slider clients clients-marquee d-flex align-items-center">
          <Swiper
            modules={[Autoplay]}
            centeredSlides={true}
            spaceBetween={30}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView="auto"
            allowTouchMove={false}
          >
            {clientLogos.map((clientLogo) => (
              <SwiperSlide className="client-logo simple-shadow" key={clientLogo.id}>
                <img decoding="async" src={clientLogo.src} alt={clientLogo.alt} style={{ width: clientLogo.width + "px" }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Clients;
