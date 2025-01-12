import styles from './listview.module.css';
import {
  createHexCache,
  incrementComponent,
  decrementComponent,
} from '../../utils/helper';
import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ListView = () => {
  const navigate = useNavigate();
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
            <button
              onClick={() => navigate('/display', { state: { hex: el } })}
            >
              {el}
            </button>
          </div>
        );
      })}

      <div className={styles.arrowKeys}>
        {
          <BsArrowLeftCircleFill
            className={styles.arrows}
            onClick={() =>
              decrementComponent(setHexCache, setPage, page, pageCache)
            }
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
