import React from 'react';
import Crawl from '../../components/Crawl/Crawl';

const CardContainer = ({ crawlText }) => {
  return (
    <div>
      <Crawl crawlText={crawlText} />
    </div>
  );
};

export default CardContainer;
