import React from 'react';
import Crawl from "react-star-wars-crawl";

const CardContainer = (crawlText) => {

  const { title, body, date } = crawlText;
  return (
    <div>
      <Crawl
          subTitle={title}
          text={body}
          date={date}
      />;
    </div>
  );
};

export default CardContainer;