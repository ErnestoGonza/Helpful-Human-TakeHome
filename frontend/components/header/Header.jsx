import React from 'react';
import styles from './header.module.css';
import mySVG from './logo-symbol.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import stc from 'string-to-color';

const Header = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState();

  function handleClick(event) {
    if (event.key === 'Enter') {
      const hex = stc(inputValue);
      setInputValue('');
      navigate('display', { state: { hex: hex } });
    }
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className={styles.header}>
      <img src={mySVG} onClick={() => navigate('/')}></img>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        onKeyDown={handleClick}
      />
    </div>
  );
};

export default Header;
