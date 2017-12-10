import React from "react";

const Crawl = ({crawl, title, year, }) => {
  console.log(crawl);
  
  return (
    <div>
      <p>{crawl}</p>
      <h3>{title}</h3>
      <h4>{year}</h4>
    </div>
  )
}

export default Crawl;