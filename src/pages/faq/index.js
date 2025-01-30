import Layout from "@/components/layout/Layout";
import Hero from "@/components/FAQ/Hero/Hero";
import Faqs from "@/components/FAQ/Faqs/Faqs";
export default function FAQ() {
  return (
    <Layout className="faq-page">
      <Hero />
      <Faqs />
    </Layout>
  );
}
