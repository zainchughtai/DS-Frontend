import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Head from "next/head";
// import "./assets/js/globalScript.js";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "../../public/css/index.css";
import "../../public/css/responsive.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
    <Head>
    <meta
    http-equiv="origin-trial"
    content="A/kargTFyk8MR5ueravczef/wIlTkbVk1qXQesp39nV+xNECPdLBVeYffxrM8TmZT6RArWGQVCJ0LRivD7glcAUAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZzIiLCJleHBpcnkiOjE3NDIzNDIzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
  />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <script async="" src="https://crm.devsspace.com/mtc.js"></script>
  <script
    async=""
    src="https://www.googletagmanager.com/gtm.js?id=GTM-K2MR4Q35"
  ></script>
 
  <title>DevsSpace - Creating Better IT Solutions</title>

 
  <meta
    name="description"
    content="Modern. Professional. Reliable. Creating better IT solutions DevsSpace is an IT company with certified experts to guide you on your way to web development and IT solutions. We offer multiple digital solution techniques and business consultations at affordable prices. Contact Us Now! By submitting the form you agree to receive promotional and marketing emails. See"
  />
  <meta name="robots" content="max-image-preview:large" />
  <link rel="canonical" href="https://devsspace.com/" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="DevsSpace - Consider IT Done" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="DevsSpace - Creating Better IT Solutions"
  />
  <meta
    property="og:description"
    content="Modern. Professional. Reliable. Creating better IT solutions DevsSpace is an IT company with certified experts to guide you on your way to web development and IT solutions. We offer multiple digital solution techniques and business consultations at affordable prices. Contact Us Now! By submitting the form you agree to receive promotional and marketing emails. See"
  />
  <meta property="og:url" content="https://devsspace.com/" />
  <meta
    property="og:image"
    content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"
  />
  <meta
    property="og:image:secure_url"
    content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"
  />
  <meta name="twitter:card" content="summary" />
  <meta
    name="twitter:title"
    content="DevsSpace - Creating Better IT Solutions"
  />
  <meta
    name="twitter:description"
    content="Modern. Professional. Reliable. Creating better IT solutions DevsSpace is an IT company with certified experts to guide you on your way to web development and IT solutions. We offer multiple digital solution techniques and business consultations at affordable prices. Contact Us Now! By submitting the form you agree to receive promotional and marketing emails. See"
  />
  <meta
    name="twitter:image"
    content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"
  />

  <link rel="dns-prefetch" href="//www.googletagmanager.com" />
  <link rel="dns-prefetch" href="//fonts.googleapis.com" />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="DevsSpace » Feed"
    href="https://devsspace.com/feed/"
  />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="DevsSpace » Comments Feed"
    href="https://devsspace.com/comments/feed/"
  />

  <link
    rel="icon"
    href="https://devsspace.com/wp-content/uploads/2022/03/cropped-DS-icon-1.png-1-32x32.png"
    sizes="32x32"
  />
  <link
    rel="icon"
    href="https://devsspace.com/wp-content/uploads/2022/03/cropped-DS-icon-1.png-1-192x192.png"
    sizes="192x192"
  />
  <link
    rel="apple-touch-icon"
    href="https://devsspace.com/wp-content/uploads/2022/03/cropped-DS-icon-1.png-1-180x180.png"
  />
  <meta
    name="msapplication-TileImage"
    content="https://devsspace.com/wp-content/uploads/2022/03/cropped-DS-icon-1.png-1-270x270.png"
  />
      </Head>
  <Component {...pageProps} />
  </>
);
}
