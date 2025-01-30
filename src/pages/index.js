import Hero from "@/components/Home/Hero/Hero";
import Clients from "@/components/Home/Clients/Clients";
import HowWeDo from "@/components/Home/HowWeDo/HowWeDo";
import Services from "@/components/Home/Services/Services";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import About from "@/components/Home/About/About";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import Projects from "@/components/Home/Projects/Projects";
import News from "@/components/Home/News/News";
// import Features from "@/components/Home/Features/Features";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
export default function Home() {
  return (
    <Layout>
      <Head>
      </Head>
      <Hero />
      <Clients />
      <HowWeDo />
      <Services />
      <CaseStudy />
      <About />
      <Testimonials />
      <Projects />
      <News />
      {/* <Features /> */}
    </Layout>
  );
}
