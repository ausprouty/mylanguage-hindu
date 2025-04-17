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
import { ref, onMounted, watch } from "vue";
import { useLanguageStore } from "stores/LanguageStore";

export default {
  name: "HinduLanguages",
  setup() {
    const languageStore = useLanguageStore();

    const languageOptions = ref([
      // Fallback options shown instantly
      { label: "English", value: "eng00", languageCodeJF: "529" },
      { label: "हिन्दी", value: "hnd00", languageCodeJF: "6464" },
    ]);

    const selectedLanguage = ref("eng00");
    const languageCodeJF = ref("529");

    watch(selectedLanguage, (newVal) => {
      const found = languageOptions.value.find(
        (item) => item.value === newVal
      );
      languageCodeJF.value = found?.languageCodeJF || "529";
      languageStore.updateLanguageSelected(newVal, languageCodeJF.value);
    });

    onMounted(async () => {
      try {
        const response = await fetch("/data/languages.json");
        const data = await response.json();

        // Update radio options and store
        languageOptions.value = data.map((item) => ({
          label: item.name,
          value: item.languageCodeHL,
          languageCodeJF: item.languageCodeJF,
        }));

        languageStore.updateLanguages(data);
      } catch (err) {
        console.warn("Could not load /languages.json. Using fallback options.");
      }
    });

    return {
      selectedLanguage,
      languageOptions,
    };
  },
};
</script>
