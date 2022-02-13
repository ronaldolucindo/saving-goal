import React from 'react';
import headerStyles from './Header.module.scss';
import Logo from 'assets/images/logo.png';

function Header() {
  return (
    <header className={headerStyles.header}>
      <img src={Logo} alt="Origin" />
    </header>
  );
}

export default Header;
