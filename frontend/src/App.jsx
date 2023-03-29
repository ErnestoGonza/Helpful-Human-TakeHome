import styles from './App.module.css';
import Header from '../components/header/Header';
import Sidenav from '../components/sidenav/Sidenav';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListView from '../components/list view/ListView';
import DetailView from '../components/detail view/DetailView';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className={styles.App}>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <div className={styles.content}>
          <Sidenav />
          <Routes>
            <Route exact path="/" element={<ListView />} />
            <Route
              exact
              path="/display"
              element={<DetailView />}
              key={new Date().getTime()}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
