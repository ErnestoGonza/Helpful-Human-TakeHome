/**
 * 
 * @returns random hex code => (#FFFFFF)
 */
export const randomHex = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

/**
 * 
 * @returns An array of 12 hex codes since we want 12 to display per page
 */
export function createHexCache() {
  const hexCache = [];
  for (let j = 0; j < 12; j++) {
    hexCache.push(randomHex());
  }
  return hexCache;
}

/**
 * This is where the functionality gets fun!
 * @param {setHexCache Hook gets passed in as an argument to update our state} setHexCache 
 * @param {setPage Hook gets passed in as an argument to update our state} setPage 
 * @param {Current page is passed in for reference and to check our cache} page 
 * @param {we pass in the cache to check if we've already visited the page, if so we respond we our cached value and not a new random set of 12 hex codes} pageCache 
 * @param {if we have not visited the page we set the page to our pageCache with the setPageCache Hook} setPageCache 
 * @returns Nothing! It just uses the passed in hooks to update our state :D
 */
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

/**
 * I also found this functionality to be fun!
 * @param {Hook to allow us to set the HexCache state if it's not found in pageCache. Although, JavaScript should never really run the else statement that this is within because all of the previous pages should be cached as we go through them} setHexCache 
 * @param {Hook to allow us to update our page number} setPage 
 * @param {the current page we are in to help us find our existing hex code in pageCache to it's corresponding page.} page 
 * @param {we pass in the cache to check if we've already visited the page, if so we respond we our cached value and not a new random set of 12 hex codes} pageCache 
 * @returns Nothing! It just uses the passed in hooks to update our state :D
 */
export const decrementComponent = (setHexCache, setPage, page, pageCache) => {
  if (page <= 1) return;
  setPage((prevState) => prevState - 1);
  if (pageCache[page - 1]) {
    return setHexCache(pageCache[page - 1]);
  } else {
    setHexCache(createHexCache);
  }
};
