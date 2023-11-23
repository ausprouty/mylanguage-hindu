<template>
  <div  v-if ="show">
    <q-select
      filled
      v-model="study"
      :options="supportedPassages"
      option-label="label"
      option-value="value"
      @update:model-value="updatePassage"
      label="Passage from His Holy Book"
    />
  </div>
</template>

<script>
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: "HisBookPassageSelect",
  props: {
    languageCodeHL: String,
  },
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  data() {
    return {
      study: {
        value: 1,
        label: 'SELECT'},
      supportedPassages: [],
      lesson: 1,
      show:false
    };
  },
  watch: {
    languageCodeHL: function (newLanguage, oldLanguage) {
      if (newLanguage !== oldLanguage) {
        this.getLessonList(newLanguage);
      }
    }
  },
  created() {
    this.updatePassage();
    this.getLessonList(this.languageCodeHL);

  },

  methods: {
    getLessonList(languageCodeHL) {
      var url = "api/dbs/studies/" + languageCodeHL;
      console.log (url)
      api.get(url).then((response) => {
        var data = response.data
        console.log (data)
        this.supportedPassages = data.map((item) => ({
          label: item.title,
          value: item.lesson,
        }));
        console.log (this.supportedPassages)
        this.show = true
      });
    },
    updatePassage() {
      if (typeof this.study.value === 'undefined'){
        this.lesson = this.languageStore.getBookLesson;
      }
      else{
        this.lesson = this.study.value
        this.languageStore.updateBookLesson(this.study.value);

      }
      var url =
        "api/dbs/view/" +
        this.lesson +
        "/" +
        this.languageCodeHL
      console.log (url)
      api.get(url).then((response) => {
        console.log(response);
        this.$emit('showPassage', response.data)

      });
    },
  }
};
</script>
