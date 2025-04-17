// src/i18n/detectLanguage.js
import languages from '/public/data/languages.json';

export function getBrowserLanguageHL() {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0];

  const matchedLanguage = languages.find(
    (lang) => lang.languageCodeBrowser === langCode
  );

  return matchedLanguage ? matchedLanguage.languageCodeHL : 'eng00';
}

export function getLanguageCodeJF(languageCodeHL) {
  const matchedLanguage = languages.find(
    (lang) => lang.languageCodeHL === languageCodeHL
  );

  return matchedLanguage ? matchedLanguage.languageCodeJF : '529';
}
