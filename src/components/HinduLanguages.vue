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
      selectedLanguage: [],
      languageOptions: [],
      languageArray:[],
      selectedLanguagesString:''
    };
  },
  watch: {
    selectedLanguage: {
      handler() {
        console.log ('I see a change')
        // Logic to update a value based on the selected languages
        this.selectedLanguagesString = this.selectedLanguage.join(', ');
        this.languageStore.updateLanguagesSelected(this.selectedLanguagesString) ;
      },
      deep: true, // Enable deep watching for changes within the array
    },
  },
  created() {
    api.get("api/hindi/languages").then((response) => {
      console.log (response.data)
      this.selectedLanguage = []
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
