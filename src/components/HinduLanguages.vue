<template>
  <div>
    <h4>Select Language</h4>
    <p>
      Some of our content is only available in English or Hindi, but we will try
      to honor your choices on this page.
    </p>
    <q-option-group
      v-model="selectedLanguage"
      type="radio"
      color="primary"
      :options="languageOptions"
    />
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { i18n } from "boot/i18n";
import { loadLocaleMessages } from "src/i18n/index";
import { useLanguageStore } from "src/stores/LanguageStore";

export default {
  name: "HinduLanguages",
  setup() {
    const languageStore = useLanguageStore();
    const { locale } = useI18n();

    const languageOptions = ref([
      { label: "English", value: "eng00", languageCodeJF: "529" },
      { label: "हिन्दी", value: "hnd00", languageCodeJF: "6464" },
    ]);

    const selectedLanguage = ref("eng00");
    const languageCodeJF = ref("529");

    watch(selectedLanguage, async (newLangCode) => {
      const found = languageOptions.value.find(
        (item) => item.value === newLangCode
      );

      languageCodeJF.value = found?.languageCodeJF || "529";
      languageStore.updateLanguageSelected(newLangCode, languageCodeJF.value);

      // Only load if this locale hasn't already been loaded
      if (!i18n.global.availableLocales.includes(newLangCode)) {
        try {
          const messages = await loadLocaleMessages(newLangCode);
          i18n.global.setLocaleMessage(newLangCode, messages);
        } catch (e) {
          console.warn("Failed to load messages for", newLangCode, e);
        }
      }

      locale.value = newLangCode;
    });

    onMounted(async () => {
      try {
        const response = await fetch("/src/i18n/languages.json");
        const data = await response.json();

        languageOptions.value = data.map((item) => ({
          label: item.name,
          value: item.languageCodeHL,
          languageCodeJF: item.languageCodeJF,
        }));

        languageStore.updateLanguages(data);
      } catch (err) {
        console.warn(
          "Could not load /data/languages.json. Using fallback options."
        );
      }
    });

    return {
      selectedLanguage,
      languageOptions,
    };
  },
};
</script>
