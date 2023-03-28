import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './sidenav.module.css';

const Sidenav = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.Sidenav}>
      <button onClick={() => navigate('/display')}>Random Color</button>
    </div>
  );
};

export default Sidenav;
