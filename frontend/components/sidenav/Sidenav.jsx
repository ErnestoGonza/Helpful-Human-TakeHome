import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './sidenav.module.css';
import { randomHex } from '../../utils/helper';

const Sidenav = () => {
  const navigate = useNavigate();
  const [colorArr, setColorArr] = useState([
    {
      color: 'Red',
      hex: '#FF0000',
    },
    {
      color: 'Orange',
      hex: '#FFA500',
    },
    {
      color: 'Yellow',
      hex: '#FFFF00',
    },
    {
      color: 'Green',
      hex: '#00FF00',
    },
    {
      color: 'Blue',
      hex: '#0000FF',
    },
    {
      color: 'Purple',
      hex: '#A020F0',
    },
    {
      color: 'Brown',
      hex: '#964B00',
    },
    {
      color: 'Gray',
      hex: '#808080',
    },
  ]);

  return (
    <div className={styles.Sidenav}>
      <button
        className={styles.randomBtn}
        onClick={() => navigate('/display', { state: { hex: randomHex() } })}
      >
        Random Color
      </button>

      {colorArr.map((el, idx) => {
        return (
          <button
            key={`similar-color-${idx}`}
            className={styles.colorBtn}
            onClick={() => navigate('/display', { state: { hex: el.hex } })}
          >
            {el.color}
          </button>
        );
      })}
    </div>
  );
};

export default Sidenav;
