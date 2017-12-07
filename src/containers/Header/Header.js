import React from 'react';
import Crawl from 'react-star-wars-crawl';
import logo from '../../assets/swapi-logo.png'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="swapi-box logo" />
      <button>People</button>
      <button>Planets</button>
      <button>Vehicles</button>
      <button>Favorites</button>
    </header>
  );
};

export default Header;