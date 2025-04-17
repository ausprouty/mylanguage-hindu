export async function loadLocaleMessages(localeCode) {
  try {
    const messages = await import(
      /* @vite-ignore */ `./${localeCode}.json`
    );
    return messages.default;
  } catch (error) {
    console.warn(`Could not load locale file for ${localeCode}`, error);
    return {};
  }
}
