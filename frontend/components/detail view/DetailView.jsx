import styles from './detailview.module.css';
import { findSimilarColors } from '../../utils/similarColors';
import { handleCopy } from '../../utils/helper';
import { useLocation, useNavigate } from 'react-router-dom';

const DetailView = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
        <button onClick={handleCopy}>{hex}</button>
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
            <button
              onClick={() => navigate('/display', { state: { hex: el } })}
            >
              {el}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DetailView;
