import React from 'react';
import styles from './header.module.css';
import mySVG from './logo-symbol.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <img src={mySVG} onClick={() => navigate('/')}></img>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Header;
