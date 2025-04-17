import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'eng00', // temp default
  fallbackLocale: 'eng00',
  legacy: false,
  globalInjection: true,
  messages: {} // load dynamically
});

export default ({ app }) => {
  app.use(i18n);
};

export { i18n };
