import { useState } from 'react';
import styles from './App.module.css';
import Header from '../components/header/Header';
import Sidenav from '../components/sidenav/Sidenav';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className={styles.App}>
      <Header />
      <Sidenav />
    </div>
  );
}

export default App;
