import styles from './detailview.module.css';
import { findSimilarColors } from '../../utils/similarColors';
import { useLocation } from 'react-router-dom';

const DetailView = () => {
  const location = useLocation();

  const hex = location.state.hex;
  const similarColors = findSimilarColors(hex);

  return (
    <div className={styles.DetailView}>
      <div className={styles.mainView}>
        <div
          className={styles.hexColor}
          style={{
            backgroundColor: `${hex}`,
          }}
        ></div>
        <button>{hex}</button>
      </div>
      {similarColors.map((el, idx) => {
        return (
          <div key={`hex-key-disp-${idx}`} className={styles.hex}>
            <div
              className={styles.similarHex}
              style={{
                backgroundColor: `${el}`,
              }}
            ></div>
            <button>{el}</button>
          </div>
        );
      })}
    </div>
  );
};

export default DetailView;
