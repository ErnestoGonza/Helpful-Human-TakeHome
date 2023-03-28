import styles from './listview.module.css';
import { randomHex } from '../../utils/helper';
import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

function createHexCache() {
  const hexCache = [];
  for (let j = 0; j < 12; j++) {
    hexCache.push(randomHex());
  }
  return hexCache;
}

const ListView = () => {
  const [hexCache, setHexcache] = useState(() => createHexCache());

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
        {<BsArrowLeftCircleFill />}0{<BsArrowRightCircleFill />}
      </div>
    </div>
  );
};

export default ListView;
