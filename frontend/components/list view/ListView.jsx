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
  const [pageCache, setPageCache] = useState({ 1: hexCache });

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
            className={styles.arrows}
            onClick={() => decrementComponent(setHexCache, setPage, page)}
          />
        }
        {page}
        {
          <BsArrowRightCircleFill
            className={styles.arrows}
            onClick={() =>
              incrementComponent(
                setHexCache,
                setPage,
                page,
                pageCache,
                setPageCache
              )
            }
          />
        }
      </div>
    </div>
  );
};

export default ListView;
