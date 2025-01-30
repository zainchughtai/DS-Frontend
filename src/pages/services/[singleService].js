import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import Hero from "@/components/SingleService/Hero/Hero";
import AboutService from "@/components/SingleService/AboutService/AboutService";
import Importance from "@/components/SingleService/Importance/Importance";
import Features from "@/components/SingleService/Features/Features";
import Testimonials from "@/components/SingleService/Testimonials/Testimonials";
import { heroData } from "@/data/SingleServices/Hero/heroData";
import { aboutServiceData } from "@/data/SingleServices/aboutService/aboutServiceData";
// import { importanceData } from "@/data/SingleServices/Importance/importanceData";
import { featuresData } from "@/data/SingleServices/Features/featuresData";
import Head from "next/head";

export default function SingleService({ service }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  console.log("Service data:", service);
  console.log("Hero Data:", heroData[service.slug]);

  return (
    <Layout className="service-details-page portfolio-details-page">
    <Head>
      <title>{service.seo.title}</title>
      <meta name="description" content={service.seo.description}/>
      <link rel="canonical" href={service.seo.canonicalUrl} />
      <meta name="robots" content="index, follow" />
<meta property="og:title" content={service.seo.title} />
<meta property="og:description" content={service.seo.description} />
<meta property="og:url" content={service.seo.canonicalUrl} />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="DevsSpace" />
<meta property="og:image" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png" />
<meta property="og:image:secure_url" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={service.seo.title} />
<meta name="twitter:description" content={service.seo.description} />
<meta name="twitter:image" content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png" />

    </Head>
      <Hero {...heroData[service.slug]} />
      <AboutService {...aboutServiceData[service.slug]} />
      {/* <Importance {...importanceData[service.slug]} /> */}
      <Features {...featuresData[service.slug]} />
      <Testimonials />
    </Layout>
  );
}

export async function getStaticPaths() {
  const services = ["web-development", "crm-integration", "digital-marketing", "e-commerce", "mobile-app-development", "project-management"];

  const paths = services.map((slug) => ({
    params: { singleService: slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const services = {
    "web-development": {
       slug: "web-development",
       seo: {
        title: "Web Development - DevsSpace",
        description: "Website &amp; Application Development Global service DevsSpace is proud to deliver services to its customers all around the globe Easy to integrate Applications and software that are user friendly and easy to integrate Services support One month free support for services (T&amp;C applied) What we do Need a web application? We can develop new, trendy,",
        canonicalUrl: "https://devsspace.com/web-development/",
      },
       },
    "crm-integration": {
       slug: "crm-integration",
      seo: {
        title: "CRM - DevsSpace",
        description: "Customer Relationship Management Software(CRM) Global service DevsSpace is proud to deliver services to its customers all around the globe. Easy to integrate Applications and software that are user friendly and easy to integrate Services support One month free support for services (T&C applied) What we do Want to build an everlasting relationship with your customers?",
        canonicalUrl: "https://devsspace.com/services/crm-integration",
      },
      },
    "digital-marketing": {
       slug: "digital-marketing",
       seo: {
        title: "Digital Marketing - DevsSpace",
        description: "Digital Marketing Global service DevsSpace is proud to deliver services to its customers all around the globe. Easy to integrate Applications and software that are user friendly and easy to integrate Services support One month free support for services (T&C applied) What we offer Digital marketing is a very vast field. Many companies and people",
        canonicalUrl: "https://devsspace.com/services/digital-marketing/",
      }, 
      
      },
    "e-commerce": { 
      slug: "e-commerce",
      seo: {
        title: "E-Commerce - DevsSpace",
        description: "E-Commerce Global service DevsSpace is proud to deliver services to its customers all around the globe. Easy to integrate Applications and software that are user friendly and easy to integrate Services support One month free support for services (T&C applied) What we Offer Our savvy coders and project managers can help you overcome all the",
        canonicalUrl: "https://devsspace.com/services/e-commerce/",
      },
    },
    "mobile-app-development": { 
      slug: "mobile-app-development",
    seo: {
        title: "Mobile Application Development - DevsSpace",
        description: "Mobile Application Development Global service DevsSpace is proud to deliver services to its customers all around the globe. Easy to integrate Applications and software that are user friendly and easy to integrate Services support One month free support for services (T&C applied) What we do Our experts can create high-performing, up-to-date, and extraordinary mobile applications",
        canonicalUrl: "https://devsspace.com/services/mobile-app-development",
      },
     },
    "project-management": { 
      slug: "project-management",
    seo: {
        title: "Project Management & Consultation - DevsSpace",
        description: "Project Management & Consultation Global service DevsSpace is proud to deliver services to its customers all around the globe Easy to integrate Applications and software that are user friendly and easy to integrate Services support One month free support for services (T&C applied) What we offer It doesn't matter if you are running a new",
        canonicalUrl: "https://devsspace.com/services/project-management",
      },
    },
  };

  const service = services[params.singleService] || null;

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { 
      service,
      seo: service.seo,
     },
    revalidate: 10,
  };
}
