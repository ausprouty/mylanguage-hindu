<template>
  <h2>Select Language(s)</h2>
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
export default {
  name: 'HinduLanguages',
  setup () {
    return {}
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
      handler(newVal, oldVal) {
        console.log ('I see a change')
        // Logic to update a value based on the selected languages
        this.selectedLanguagesString = this.selectedLanguage.join(', ');
      },
      deep: true, // Enable deep watching for changes within the array
    },
  },
  created() {
    api.get("api/hindi/languages").then((response) => {
      console.log (response.data)
      this.selectedLanguage = []
      this.languageArray = response.data;
      this.languageOptions = this.languageArray.map((item) => ({
        label: item.name ,
        value: item.languageCodeHL,
      }));

    });
  }
}
</script>
