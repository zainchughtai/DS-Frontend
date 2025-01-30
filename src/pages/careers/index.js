import Layout from "@/components/layout/Layout";
import Hero from "@/components/Careers/Hero/Hero";
import OurServices from "@/components/Careers/OurServices/OurServices";
import Services from "@/components/Careers/Services/Services";
import Jobs from "@/components/Careers/Jobs/Jobs";
import AboutService from "@/components/Careers/AboutService/AboutService";
import CTA from "@/components/Careers/CTA/CTA";
import Team from "@/components/Careers/Team/Team";
import Head from "next/head";
export default function Careers() {
  return (
    <Layout className="career-page">
    <Head>
    <title>Career - DevsSpace</title>
    <meta property="og:locale" content="en_US"/>
		<meta property="og:site_name" content="DevsSpace - Consider IT Done"/>
		<meta property="og:type" content="article"/>
		<meta property="og:title" content="Career - DevsSpace"/>
		<meta property="og:description" content="Careers Global service DevsSpace is proud to deliver services to its customers all around the globe. Easy to integrate Applications and software that are user friendly and easy to integrate Service support One month free support for services (T&amp;C applied) It's the right time to join DevsSpace family Wordpress Backend Intern Onsite - Full Time"/>
		<meta property="og:url" content="https://devsspace.com/careers/"/>
		<meta property="og:image" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"/>
		<meta property="og:image:secure_url" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"/>
		<meta property="article:published_time" content="2024-11-15T18:21:36+00:00"/>
		<meta property="article:modified_time" content="2024-11-21T11:24:30+00:00"/>
		<meta name="twitter:card" content="summary"/>
		<meta name="twitter:title" content="Career - DevsSpace"/>
		<meta name="twitter:description" content="Careers Global service DevsSpace is proud to deliver services to its customers all around the globe. Easy to integrate Applications and software that are user friendly and easy to integrate Service support One month free support for services (T&amp;C applied) It's the right time to join DevsSpace family Wordpress Backend Intern Onsite - Full Time"/>
		<meta name="twitter:image" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"/>
    <meta name="description" content="Careers Global service DevsSpace is proud to deliver services to its customers all around the globe. Easy to integrate Applications and software that are user friendly and easy to integrate Service support One month free support for services (T&amp;C applied) It's the right time to join DevsSpace family Wordpress Backend Intern Onsite - Full Time"/>
    </Head>
      <Hero />
      {/* <OurServices /> */}
      {/* <Services /> */}
      <Jobs />
      {/* <AboutService /> */}
      <CTA />
      {/* <Team /> */}
    </Layout>
  );
}
