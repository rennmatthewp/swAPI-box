import React from 'react';
import Crawl from 'react-star-wars-crawl';
import logo from '../../assets/swapi-logo.png'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="swapi-box logo" />
    </div>
  );
};

export default Header;