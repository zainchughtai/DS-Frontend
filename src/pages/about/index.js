import Layout from "@/components/layout/Layout";
import Hero from "@/components/AboutUs/Hero/Hero";
import Clients from "@/components/AboutUs/Clients/Clients";
import OurCompany from "@/components/AboutUs/OurCompany/OurCompany";
import Services from "@/components/AboutUs/Services/Services";
// import Team from "@/components/AboutUs/Team/Team";
import AboutService from "@/components/AboutUs/AboutService/AboutService";
import CTA from "@/components/AboutUs/CTA/CTA";
import Head from "next/head";

export default function About() {
  return (
    <Layout className="about-page">
    <Head>
    <title>About - DevsSpace</title>
    <meta name="description" content="About us Global service DevsSpace is proud to deliver services to its customers all around the globe. Easy to integrate Applications and software that are user friendly and easy to integrate Service support One month free support for services (T&amp;C applied) About Devsspace Expert IT solutions for Your business Our mission is to bring clarity"/>
    <link rel="canonical" href="https://devsspace.com/about/"/>
    <meta property="og:locale" content="en_US"/>
<meta property="og:site_name" content="DevsSpace - Consider IT Done"/>
<meta property="og:type" content="article"/>
<meta property="og:title" content="About - DevsSpace"/>
<meta property="og:description" content="About us Global service DevsSpace is proud to deliver services to its customers all around the globe. Easy to integrate Applications and software that are user friendly and easy to integrate Service support One month free support for services (T&amp;C applied) About Devsspace Expert IT solutions for Your business Our mission is to bring clarity"/>
<meta property="og:url" content="https://devsspace.com/about/"/>
<meta property="og:image" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"/>
<meta property="og:image:secure_url" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"/>
<meta property="article:published_time" content="2020-02-09T15:31:04+00:00"/>
<meta property="article:modified_time" content="2024-11-21T11:26:57+00:00"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="About - DevsSpace"/>
<meta name="twitter:description" content="About us Global service DevsSpace is proud to deliver services to its customers all around the globe. Easy to integrate Applications and software that are user friendly and easy to integrate Service support One month free support for services (T&amp;C applied) About Devsspace Expert IT solutions for Your business Our mission is to bring clarity"/>
<meta name="twitter:image" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"/>
    </Head>
      <Hero />
      <Clients />
      <OurCompany />
      <Services bgColor="#1351d80d" textColor="#212529" />
      {/* <Team /> */}
      <AboutService />
      <CTA />
    </Layout>
  );
}
