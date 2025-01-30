import Layout from "@/components/layout/Layout";
import Hero from "@/components/Services/Hero/Hero";
import CompanyServices from "@/components/Services/CompanyServices/CompanyServices";
import CaseStudies from "@/components/Services/CaseStudies/CaseStudies";
import About from "@/components/Services/About/About";
import AboutService from "@/components/Services/AboutService/AboutService";

export default function Services() {
  return (
    <Layout className="service-page">
      <Hero />
      <CompanyServices />
      <CaseStudies />
      <About />
      <AboutService />
    </Layout>
  );
}
