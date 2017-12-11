import React from 'react';
import PropTypes from 'prop-types';
import './Crawl.css';

const Crawl = ({ crawl, title, year }) => {
  let paragraphs;

  if (crawl) {
    paragraphs = crawl.map((paragraph, index) => {
      return <p key={`p-${index}`}>{paragraph}</p>;
    })
  }

  return (
    <div className="crawl">
      <div className="crawl-content">
        <h3>{title}</h3>
        <h4>{year}</h4>
        {paragraphs}
      </div>
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
