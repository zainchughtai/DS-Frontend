import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import Hero from "@/components/SinglePortfolio/Hero/Hero";
import Description from "@/components/SinglePortfolio/Description/Description";
import CTA from "@/components/SinglePortfolio/CTA/CTA";
import { heroData } from "@/data/SinglePortfolio/Hero/heroData";
import { descriptionData } from "@/data/SinglePortfolio/Description/descriptionData";
export default function SinglePortfolio({ portfolio }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout className="portfolio-details-page">
      <Hero {...heroData[portfolio.slug]} />
      <Description {...descriptionData[portfolio.slug]} />
      <CTA />
    </Layout>
  );
}
export async function getStaticPaths() {
  const portfolios = ["web-development", "crm-integration", "digital-marketing", "e-commerce", "mobile-app-development", "project-management"];

  const paths = portfolios.map((slug) => ({
    params: { singlePortfolio: slug },
  }));

  return { paths, fallback: "blocking" };
}
export async function getStaticProps({ params }) {
  const portfolios = {
    "web-development": { slug: "web-development" },
    "crm-integration": { slug: "crm-integration" },
    "digital-marketing": { slug: "digital-marketing" },
    "e-commerce": { slug: "e-commerce" },
    "mobile-app-development": { slug: "mobile-app-development" },
    "project-management": { slug: "project-management" },
  };

  const portfolio = portfolios[params.singlePortfolio] || null;

  if (!portfolio) {
    return { notFound: true };
  }

  return {
    props: { portfolio },
    revalidate: 10,
  };
}
