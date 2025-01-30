import Layout from "@/components/layout/Layout";
import Hero from "@/components/Blog/Hero/Hero";
import BlogItems from "@/components/Blog/BlogItems/BlogItems";
import Features from "@/components/Blog/Features/Features";
import Head from "next/head";

export default function Blogs() {
  return (
    <Layout className="blog-page">
    <Head>
    <meta
    http-equiv="origin-trial"
    content="A/kargTFyk8MR5ueravczef/wIlTkbVk1qXQesp39nV+xNECPdLBVeYffxrM8TmZT6RArWGQVCJ0LRivD7glcAUAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZzIiLCJleHBpcnkiOjE3NDIzNDIzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="UTF-8" />

  <script async="" src="https://crm.devsspace.com/mtc.js"></script>
  <script
    type="text/javascript"
    async=""
    charset="utf-8"
    src="https://www.gstatic.com/recaptcha/releases/p09oe8YIFfKgcnqQ9m9k4aiB/recaptcha__en.js"
    crossorigin="anonymous"
    integrity="sha384-+o4WMEIVaqJv2OSyUGcZwITebuccICWoZiIEvjf6rbs34UX8HV3S+g6ypB1KhLvK"
  ></script>
  <script
    async=""
    src="https://www.googletagmanager.com/gtm.js?id=GTM-K2MR4Q35"
  ></script>
  <title>Blogs - DevsSpace</title>
  <meta name="description" content="Blog [wpspw_post]" />
  <meta name="robots" content="max-image-preview:large" />
  <meta name="author" content="DevsSpace" />
  <link rel="canonical" href="https://devsspace.com/blogs/" />
  <link rel="next" href="https://devsspace.com/blogs/page/2/" />
  <meta name="generator" content="All in One SEO (AIOSEO) 4.7.8" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="DevsSpace - Consider IT Done" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Blogs - DevsSpace" />
  <meta property="og:description" content="Blog [wpspw_post]" />
  <meta property="og:url" content="https://devsspace.com/blogs/" />
  <meta
    property="og:image"
    content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"
  />
  <meta
    property="og:image:secure_url"
    content="https://devsspace.com/wp-content/uploads/2022/03/DS-Text.png.png"
  />
  <meta property="article:published_time" content="2022-04-25T17:12:14+00:00" />
  <meta property="article:modified_time" content="2024-11-21T08:40:22+00:00" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Blogs - DevsSpace" />
  <meta name="twitter:description" content="Blog [wpspw_post]" />
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

  <script
    src="//www.googletagmanager.com/gtag/js?id=G-MQ5GR1GDS3"
    data-cfasync="false"
    data-wpfc-render="false"
    type="text/javascript"
    async=""
  ></script>

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
      <Hero />
      <BlogItems />
      {/* <Features /> */}
    </Layout>
  );
}
