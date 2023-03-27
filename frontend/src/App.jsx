import { useState } from 'react';
import styles from './App.module.css';
import Header from '../components/header/Header';
import Sidenav from '../components/sidenav/Sidenav';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListView from '../components/list view/ListView';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <div className={styles.content}>
          <Sidenav />
          <Routes>
            <Route exact path="/" element={<ListView />} />
            <Route exact path="/display" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
