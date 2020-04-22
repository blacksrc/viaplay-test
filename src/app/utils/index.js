// Get default language locale
export function getDefaultLanguage(localeObject) {
  return getAllLanguages(localeObject)[0];
}

// Get all language lists from locale. returns object
export function getAllLanguages(localeObject) {
  return Object.keys(localeObject);
}

// Format language name se-SE => SE
export function formatLanguageName(language) {
  return language.split('-')[0].toUpperCase();
}

/**
 * Calculate how man items can be in a row.
 *
 * @param {number} [containerWidth] - Container width
 * @param {number} [itemWidth] - Each item's width
 *
 * @return {number} items per a row
 */
export function getItemsPerRow(containerWidth, itemWidth) {
  return Math.round(containerWidth / itemWidth);
}

/**
 * Handling next and pervious and up and down functionality.
 *
 * @param {string} [direction] - 'right' | 'left' | 'down' | 'up'
 * @param {number} [itemsLength] - All items count
 * @param {number} [itemsPerRow] - How many items per row
 * @param {number} [currentItemIndex] - Current item index
 *
 * @return {number} next selected index
 */
export function getNextSelectedIndex(direction, itemsLength, itemsPerRow, currentItemIndex) {
  let nextIndex = currentItemIndex;

  switch (direction) {
    case 'right':
      if (currentItemIndex < itemsLength - 1) {
        nextIndex = currentItemIndex + 1;
      }
      break;
    case 'left':
      if (currentItemIndex > 0) {
        nextIndex = currentItemIndex - 1;
      }
      break;
    case 'down':
      if (currentItemIndex <= itemsLength - itemsPerRow - 1) {
        nextIndex = currentItemIndex + itemsPerRow;
      }
      break;
    case 'up':
      if (currentItemIndex - itemsPerRow >= 0) {
        nextIndex = currentItemIndex - itemsPerRow;
      }
      break;

    default:
      nextIndex = currentItemIndex;
      break;
  }
  return nextIndex;
}
