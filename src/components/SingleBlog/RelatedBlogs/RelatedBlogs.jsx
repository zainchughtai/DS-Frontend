import React from "react";
import Link from "next/link";
import BlogItems from "@/data/Blogs/index";

const RelatedBlogs = () => {
  // Function to shuffle an array using the Fisher-Yates algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle the BlogItems array and select the first 3 posts
  const randomPosts = shuffleArray([...BlogItems]).slice(0, 3);

  return (
    <>
      <section className="news-area">
        <div className="custom-container">
          <div className="section-header d-flex align-items-end justify-content-between">
            <div className="left">
              &nbsp;
              <h6 className="section-subtitle">OUR LATEST BLOGS</h6>
              <h2 className="section-title">Read more blogs of our company</h2>
              <p>Are you busy reading out IT fires instead of focusing on your core business</p>
            </div>
          </div>

          {/* Render the first random post */}
          {randomPosts.map((item, key) => (
            key === 0 ? (
              <div className="d-flex card-h sticky-news" key={item.id}>
                <div className="news-img-box">
                  <img alt="" decoding="async" src={item.featuredImage} />
                </div>
                <div className="news-content">
                  <h6 className="section-subtitle section-subtitle1">{item.category}</h6>
                  <h2 className="section-title">
                    <Link href={`${process.env.NEXT_PUBLIC_API_URL}/blogs/` + item.slug}>{item.title}</Link>
                  </h2>
                  <p>{item.excerptText}</p>
                  <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: "30px" }}>
                    {item.tags.map((tagsItem, index) => (
                      <li className="mt-0" key={index}>
                        <i className="las la-check"></i> {tagsItem}
                      </li>
                    ))}
                  </ul>
                  <Link href={`${process.env.NEXT_PUBLIC_API_URL}/blogs/` + item.slug} className="theme-btn">
                    <i className="las la-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ) : null
          ))}

          {/* Render the second and third random posts */}
          {randomPosts.some((_, key) => key >= 1) && (
            <div className="news-items align-items-start">
              {randomPosts.map((item, key) => (
                key >= 1 && key < 3 && ( // Render only the second and third items
                  <div className="news-item card-h h-100" key={item.id}>
                    <div className="news-img-box">
                      <img alt="" decoding="async" src={item.featuredImage} />
                    </div>
                    <div className="news-item-body">
                      <h6 className="section-subtitle">{item.category}</h6>
                      <h2 className="section-title">
                        <Link href={`${process.env.NEXT_PUBLIC_API_URL}/blogs/` + item.slug}>{item.title}</Link>
                      </h2>
                      <p>{item.excerptText}</p>
                      <ul>
                        {item.tags.map((tagsItem, index) => (
                          <li className="mt-0" key={index}>
                            <i className="las la-check"></i> {tagsItem}
                          </li>
                        ))}
                      </ul>
                      <Link href={`${process.env.NEXT_PUBLIC_API_URL}/blogs/` + item.slug} className="theme-btn">
                        <i className="las la-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default RelatedBlogs;