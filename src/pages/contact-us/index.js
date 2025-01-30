import Layout from "@/components/layout/Layout";
import Hero from "@/components/Contact/Hero/Hero";
import Information from "@/components/Contact/Information/Information";
import Locations from "@/components/Contact/Locations/Locations";
import Head from "next/head";

export default function Contact() {
  return (
    <Layout className="contact-page">
    <Head>
    <title>Contact Us - DevsSpace</title>
    <meta name="description" content="Contact Us Global Service DevsSpace is proud to deliver services to its customers all around the globe. Easy to Integrate Applications and software that are user friendly and easy to integrate Services Support One month free support for services (T&amp;C applied) Contact information You can contact DevsSpace for information DevsSpace is a multi-service company working"/>
    <meta name="robots" content="max-image-preview:large"/>
    <link rel="canonical" href="https://devsspace.com/contact-us/"/>
    <meta property="og:locale" content="en_US"/>
<meta property="og:site_name" content="DevsSpace - Consider IT Done"/>
<meta property="og:type" content="article"/>
<meta property="og:title" content="Contact Us - DevsSpace"/>
<meta property="og:description" content="Contact Us Global Service DevsSpace is proud to deliver services to its customers all around the globe. Easy to Integrate Applications and software that are user friendly and easy to integrate Services Support One month free support for services (T&amp;C applied) Contact information You can contact DevsSpace for information DevsSpace is a multi-service company working"/>
<meta property="og:url" content="https://devsspace.com/contact-us/"/>
<meta property="og:image" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"/>
<meta property="og:image:secure_url" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"/>
<meta property="article:published_time" content="2020-02-09T19:38:32+00:00"/>
<meta property="article:modified_time" content="2024-11-21T18:03:43+00:00"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="Contact Us - DevsSpace"/>
<meta name="twitter:description" content="Contact Us Global Service DevsSpace is proud to deliver services to its customers all around the globe. Easy to Integrate Applications and software that are user friendly and easy to integrate Services Support One month free support for services (T&amp;C applied) Contact information You can contact DevsSpace for information DevsSpace is a multi-service company working"/>
<meta name="twitter:image" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"/>
    </Head>
      <Hero />
      <Information />
      <Locations />
    </Layout>
  );
}
