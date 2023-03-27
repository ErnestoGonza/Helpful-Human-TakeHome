import React, { useEffect } from 'react';
import styles from './header.module.css';
import mySVG from './logo-symbol.svg';

const Header = () => {
  return (
    <div className={styles.header}>
        <img src={mySVG}></img>
        <input type="text" placeholder="Search" />
    </div>
  );
};

export default Header;
