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
export const incrementComponent = (
  setHexCache,
  setPage,
  page,
  pageCache,
  setPageCache
) => {
  if (page >= 10) return;
  setPage((prevState) => prevState + 1);
  const newCache = createHexCache();
  console.log(pageCache);
  if (!pageCache[page + 1]) {
    setPageCache((prevState) => {
      const newState = { ...prevState };
      newState[page + 1] = newCache;
      setHexCache(newCache);
      return newState;
    });
  } else {
    setHexCache(pageCache[page + 1]);
  }
};

export const decrementComponent = (setHex, setPage, currPage) => {
  if (currPage <= 1) return;
  setPage((prevState) => prevState - 1);
  setHex(createHexCache);
};
