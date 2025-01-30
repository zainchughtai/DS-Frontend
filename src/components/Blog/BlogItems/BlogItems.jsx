import React from "react";
import Link from "next/link";
import BlogsItem from "@/data/Blogs/index";

const BlogItems = () => {
  return (
    <>
      <section className="news-area">
        <div className="custom-container">
        {BlogsItem.map((item, key) => (
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

  {BlogsItem.some((_, key) => key >= 1) && (
  <div className="news-items align-items-start">
    {BlogsItem.map((item, key) => (
      key >= 1 && ( // Add condition to show only the second and third items
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

export default BlogItems;
