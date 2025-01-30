import React from "react";
import Link from "next/link";
import portfolioItemsData from "@/data/Portfolio/PortfolioItems/PortfolioItems";
const PortfolioItems = () => {
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const itemsPerRow = 4;
  const rows = chunkArray(portfolioItemsData, itemsPerRow);
  return (
    <>
      <section className="portfolio-area">
        <div className="custom-container">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="portfolio-items">
              {row.map((item, colIndex) => (
                <div key={colIndex} className={`portfolio-item-col ${item.bgClass || ""}`}>
                  <div className="project-item">
                    <div className="project-item-inner">
                      <h3 className="white">
                        <Link href={`/portfolio/${item.slug}`} dangerouslySetInnerHTML={{ __html: item.about }}></Link>
                      </h3>
                      <img alt="" decoding="async" src={item.img} />
                    </div>
                  </div>

                  <div className="portfolio-sample-details">
                    <img alt="" decoding="async" src={item.bgImg} className="bg-shape" />
                    <h4>
                      <Link href={`/portfolio/${item.slug}`}>
                        {item.title} <i className="las la-arrow-right"></i>
                      </Link>
                    </h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PortfolioItems;
