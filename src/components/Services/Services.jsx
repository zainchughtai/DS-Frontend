import React from "react";
import Hero from "./Hero/Hero";
import CompanyServices from "./CompanyServices/CompanyServices";
import CaseStudies from "./CaseStudies/CaseStudies";
import About from "./About/About";
import AboutService from "./AboutService/AboutService";

const Services = () => {
  return (
    <>
      <main className="service-page">
        <Hero />
        <CompanyServices />
        <CaseStudies />
        <About />
        <AboutService />
      </main>
    </>
  );
};

export default Services;
