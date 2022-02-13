import React from 'react';
import './Header.scss';
import Logo from 'assets/images/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Origin" />
    </header>
  );
}

export default Header;
