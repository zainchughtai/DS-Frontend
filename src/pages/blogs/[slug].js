import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from "@/components/layout/Layout";
import Hero from "@/components/SingleBlog/Hero/Hero";
import Description from "@/components/SingleBlog/Description/Description";
const RelatedBlogs = dynamic(() => import('@/components/SingleBlog/RelatedBlogs/RelatedBlogs'), { ssr: false });


const BlogPost = ({ singleBlog, error }) => {
  if (error) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <Head>
        <title>{singleBlog?.metaTitle || 'DevsSpace - Blogs'}</title>
        <meta name="description" content={singleBlog?.metaDescription || 'DevsSpace Blog'} />
        <meta name="keywords" content={singleBlog?.metaTags || 'blog, nextjs, seo'} />
        <meta name="author" content={singleBlog?.author || 'DevsSpace'} />

        {/* Open Graph (OG) tags for social media sharing */}
        <meta property="og:title" content={singleBlog?.metaTitle || 'DevsSpace - Blogs'} />
        <meta property="og:description" content={singleBlog?.metaDescription || 'Default description for the blog post.'} />
        <meta property="og:image" content={singleBlog?.featuredImage || '/default-image.jpg'} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_API_URL}/blog/${singleBlog?.slug}`} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={singleBlog?.metaTitle || 'Default Blog Title'} />
        <meta name="twitter:description" content={singleBlog?.metaDescription || 'Default description for the blog post.'} />
        <meta name="twitter:image" content={singleBlog?.featuredImage || '/default-image.jpg'} />

        {/* Canonical URL */}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_API_URL}/blog/${singleBlog?.slug}`} />
      </Head>

      <Layout className="blog-details-page">
         <Hero title={singleBlog.title} category={singleBlog.category} featuredImage={singleBlog.featuredImage} />
        <Description description={singleBlog.description} />
       <RelatedBlogs />
      </Layout>
    </div>
  );
};

// ✅ **Server-Side Data Fetching**
export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`);  // ✅ Absolute URL
    console.log(res)
    
    if (!res.ok) {
      return { notFound: true };
    }

    const data = await res.json();
    console.log("SSR Data:", data); 
    return { props: { singleBlog: data } };

  } catch (error) {
    console.error(error);
    return { props: { error: true } };
  }
}

export default BlogPost;
