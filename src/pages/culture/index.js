import Layout from "@/components/layout/Layout";
import Hero from "@/components/Culture/Hero/Hero";
import Events from "@/components/Culture/Events/Events";
import EventItems from "@/components/Culture/EventItems/EventItems";
import Head from "next/head";
export default function Culture() {
  return (
    <Layout className="culture-page">
    <Head>
    <meta name="description" content="COMPANY CULTURE Global service DevsSpace is proud to deliver services to its customers all around the globe. Easy to integrate Applications and software that are user friendly and easy to integrate. Service support One month free support for services (T&amp;C applied) Company Culture We at DevsSpace, promote a healthy environment for our customers and our"/>
<title>Culture - DevsSpace</title>
<meta property="og:locale" content="en_US"/>
<meta property="og:site_name" content="DevsSpace - Consider IT Done"/>
<meta property="og:type" content="article"/>
<meta property="og:title" content="Culture - DevsSpace"/>
<meta property="og:description" content="COMPANY CULTURE Global service DevsSpace is proud to deliver services to its customers all around the globe. Easy to integrate Applications and software that are user friendly and easy to integrate. Service support One month free support for services (T&amp;C applied) Company Culture We at DevsSpace, promote a healthy environment for our customers and our"/>
<meta property="og:url" content="https://devsspace.com/culture/"/>
<meta property="og:image" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"/>
<meta property="og:image:secure_url" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"/>
<meta property="article:published_time" content="2022-03-14T13:02:42+00:00"/>
<meta property="article:modified_time" content="2024-11-21T11:32:40+00:00"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="Culture - DevsSpace"/>
<meta name="twitter:description" content="COMPANY CULTURE Global service DevsSpace is proud to deliver services to its customers all around the globe. Easy to integrate Applications and software that are user friendly and easy to integrate. Service support One month free support for services (T&amp;C applied) Company Culture We at DevsSpace, promote a healthy environment for our customers and our"/>
<meta name="twitter:image" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"/>
    </Head>
      <Hero />
      <Events />
      <EventItems />
    </Layout>
  );
}
