export const randomHex = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

export function createHexCache() {
  const hexCache = [];
  for (let j = 0; j < 12; j++) {
    hexCache.push(randomHex());
  }
  return hexCache;
}

//Note to self, begin by thinking about incrementing
export const incrementComponent = (setHex, setPage, currPage) => {
  if (currPage >= 10) return;
  setPage((prevState) => prevState + 1);
  setHex(createHexCache);
};

export const decrementComponent = (setHex, setPage, currPage) => {
  if (currPage <= 1) return;
  setPage((prevState) => prevState - 1);
  setHex(createHexCache);
};
