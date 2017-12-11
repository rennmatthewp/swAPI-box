import React from 'react';
import './Header.css';
import logo from '../../assets/swapi-logo.png'

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="swapi-box logo" />
      <div className="button-wrapper">
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
        <button>Favorites</button>
      </div>
    </header>
  );
};

export default Header;