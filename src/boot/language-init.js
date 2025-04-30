// src/boot/language-init.js
import { boot } from "quasar/wrappers";
import {
  getBrowserLanguageHL,
  getLanguageCodeJF,
} from "src/i18n/detectLanguage";
import { useLanguageStore } from "src/stores/LanguageStore";

export default boot(() => {
  const languageStore = useLanguageStore();
  const browserLanguageHL = getBrowserLanguageHL();

  // Implement your logic to get languageCodeJF based on browserLanguageHL
  const languageCodeJF = getLanguageCodeJF(browserLanguageHL); // Ensure this function is defined
  console.log("browserLanguageHL", browserLanguageHL);
  console.log("languageCodeJF", languageCodeJF);
  // Set the language selected in the store
  languageStore.updateLanguageSelected(browserLanguageHL, languageCodeJF);
});
