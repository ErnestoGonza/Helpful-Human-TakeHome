import styles from './listview.module.css';
import {
  createHexCache,
  incrementComponent,
  decrementComponent,
} from '../../utils/helper';
import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const ListView = () => {
  const [page, setPage] = useState(1);
  const [hexCache, setHexCache] = useState(() => createHexCache());

  return (
    <div className={styles.ListView}>
      {hexCache.map((el, idx) => {
        return (
          <div key={`hex-key-${idx}`} className={styles.hex}>
            <div
              className={styles.hexColor}
              style={{
                backgroundColor: `${el}`,
              }}
            ></div>
            <button>{el}</button>
          </div>
        );
      })}
      {/* Comment */}
      <div className={styles.arrowKeys}>
        {
          <BsArrowLeftCircleFill
            onClick={() => decrementComponent(setHexCache, setPage, page)}
          />
        }
        {page}
        {
          <BsArrowRightCircleFill
            onClick={() => incrementComponent(setHexCache, setPage, page)}
          />
        }
      </div>
    </div>
  );
};

export default ListView;
