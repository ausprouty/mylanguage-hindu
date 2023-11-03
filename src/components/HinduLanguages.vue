<template>
  <h4>Select Language(s)</h4>
  <p>Some of our content is only available in English or Hindi, but we will try to honor your choices on this page</p>
  <q-option-group
      v-model="selectedLanguage"
      type="checkbox"
      color="primary"
      :options="languageOptions"

    />
</template>

<script>
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: 'HinduLanguages',
  setup () {
    const languageStore = useLanguageStore();
    return {
      languageStore
    }
  },
  data() {
    return {
      languageOptions: [],
      languageArray:[],
      selectedLanguage: this.languageStore.getLanguagesSelected
    };
  },
  watch: {
    selectedLanguage: {
      handler() {
        console.log (this.selectedLanguage)
        this.languageStore.updateLanguagesSelected(this.selectedLanguage) ;
      },
      deep: true,
    },
  },
  created() {
    const firstLanguage = this.languageStore.getFirstLanguageCodeSelected
    console.log (firstLanguage)
    api.get("api/hindi/languages").then((response) => {
      console.log (response.data)
      this.languageArray = response.data;
      this.languageStore.updateLanguages(this.languageArray) ;
      this.languageOptions = this.languageArray.map((item) => ({
        label: item.name ,
        value: item.languageCodeHL,
      }));

    });
  }
}
</script>
