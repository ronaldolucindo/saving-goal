import React from 'react';
import styles from './Header.module.scss';
import Logo from 'assets/images/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.logo} alt="Origin" />
    </header>
  );
}

export default Header;
