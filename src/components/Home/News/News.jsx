import React from "react";
import BlogItems from "@/data/Blogs/index";
import Link from "next/link";
const News = () => {
  return (
    <>
      <section className="news-area" style={{ paddingBottom: "0" }}>
        <div className="custom-container">
          <div className="section-header d-flex align-items-end justify-content-between">
            <div className="left">
              <h6 className="section-subtitle">INTERESTING ARTICLES</h6>
              <h2 className="section-title">Read daily news about startup companies</h2>
            </div>
            <p>
              In today&#039;s rapidly evolving world, technology is constantly shaping the way we live and interact. From artificial intelligence and automation to virtual reality, the pace of
              technological advancements is staggering.
            </p>
          </div>
  {BlogItems.map((item, key) => (
    key === 0 ? (
      <div className="d-flex card-h sticky-news" key={key}>
        <div className="news-img-box">
          <img alt="" decoding="async" src={item.featuredImage} />
        </div>
        <div className="news-content">
          <h6 className="section-subtitle section-subtitle1">{item.category}</h6>
          <h2 className="section-title">
            <Link href={"/blogs/" + item.slug}>{item.title}</Link>
          </h2>
          <p>{item.excerptText}</p>
          <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: "30px" }}>
            {item.tags.map((tagsItem, index) => (
              <li className="mt-0" key={index}>
                <i className="las la-check"></i> {tagsItem}
              </li>
            ))}
          </ul>
          <Link href={"/blogs/"+item.slug} className="theme-btn">
            <i className="las la-arrow-right"></i>
          </Link>
        </div>
      </div>
    ) : null
  ))}

  {BlogItems.some((_, key) => key >= 1) && (
  <div className="news-items align-items-start">
    {BlogItems.map((item, key) => (
      key >= 1 && key < 3 && ( // Add condition to show only the second and third items
        <div className="news-item card-h h-100" key={key}>
          <div className="news-img-box">
            <img alt="" decoding="async" src={item.featuredImage} />
          </div>
          <div className="news-item-body">
            <h6 className="section-subtitle">{item.category}</h6>
            <h2 className="section-title">
              <Link href={"/blogs/" + item.slug}>{item.title}</Link>
            </h2>
            <p>{item.excerptText}</p>
            <ul>
              {item.tags.map((tagsItem, index) => (
                <li className="mt-0" key={index}>
                  <i className="las la-check"></i> {tagsItem}
                </li>
              ))}
            </ul>
            <Link href={"/blogs/" + item.slug} className="theme-btn">
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

export default News;
