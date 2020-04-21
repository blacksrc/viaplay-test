export function getDefaultLanguage(localeObject) {
  return getAllLanguages(localeObject)[0];
}

export function getAllLanguages(localeObject) {
  return Object.keys(localeObject);
}

export function formatLanguageName(language) {
  return language.split('-')[0].toUpperCase();
}

export function getItemsPerRow(containerWidth, itemWidth) {
  return Math.round(containerWidth / itemWidth);
}

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
