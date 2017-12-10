import React from 'react';
import PropTypes from 'prop-types';

const Crawl = ({ crawl, title, year }) => {
  let paragraphs;

  if (crawl) {
    paragraphs = crawl.map((paragraph, index) => {
      return <p key={`p-${index}`}>{paragraph}</p>;
    });
  }

  return (
    <div>
      {paragraphs}
      <h3>{title}</h3>
      <h4>{year}</h4>
    </div>
  );
};

Crawl.propTypes = {
  crawlText: PropTypes.object,
  crawl: PropTypes.array,
  title: PropTypes.string,
  year: PropTypes.string
};

export default Crawl;
