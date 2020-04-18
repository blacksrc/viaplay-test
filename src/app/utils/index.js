export function getDefaultLanguage(localeObject) {
  return getAllLanguages(localeObject)[0];
}

export function getAllLanguages(localeObject) {
  return Object.keys(localeObject);
}

export function formatLanguageName(language) {
  return language.split('-')[0].toUpperCase();
}
