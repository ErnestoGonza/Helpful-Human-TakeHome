function hexToRgb(hexCode) {
  const hex = hexCode.replace(/^#/, '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return [r, g, b];
}

function rgbToHex(rgb) {
  const r = rgb[0].toString(16).padStart(2, '0');
  const g = rgb[1].toString(16).padStart(2, '0');
  const b = rgb[2].toString(16).padStart(2, '0');
  return '#' + r + g + b;
}

function euclideanDistance(color1, color2) {
  const r1 = color1[0];
  const g1 = color1[1];
  const b1 = color1[2];
  const r2 = color2[0];
  const g2 = color2[1];
  const b2 = color2[2];
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

export function findSimilarColors(referenceColor, numColors = 5) {
  const referenceRgb = hexToRgb(referenceColor);
  const possibleColors = [];
  for (let r = 0; r <= 255; r += 51) {
    for (let g = 0; g <= 255; g += 51) {
      for (let b = 0; b <= 255; b += 51) {
        const rgb = [r, g, b];
        possibleColors.push(rgbToHex(rgb));
      }
    }
  }
  const distances = possibleColors.map((color) => {
    const rgb = hexToRgb(color);
    const distance = euclideanDistance(referenceRgb, rgb);
    return [color, distance];
  });
  distances.sort((a, b) => a[1] - b[1]);
  const similarColors = distances.slice(0, numColors).map((item) => item[0]);
  return similarColors;
}
