<template>
  <div  v-if ="show">
    <q-select
      filled
      v-model="selectedValue"
      :options="supportedPassages"
      option-label="label"
      option-value="value"
      @update:model-value="updatePassage"
      label="Passage from His Holy Book"
      color="lightblue"
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
    lessonSelected:String,
  },
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  data() {
    return {
      selectedValue: {
        label: 'SELECT',
        value: 1,
      },
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
    },
    lessonSelected: function (newLesson, oldLesson) {
      if (newLesson !== oldLesson ){
        this.setSelectedValue(newLesson);
      }
    },
  },
  created() {
    console.log (this.lessonSelected);
    this.updatePassage();
    this.getLessonList(this.languageCodeHL);
  },

  methods: {

    getLessonList(languageCodeHL) {
      var url = "api/dbs/studies/" + languageCodeHL;
      console.log (url)
      api.get(url).then((response) => {
        var data = response.data
        this.supportedPassages = data.map((item) => ({
          label: item.title,
          value: item.lesson,
        }));
        this.updateSelectBar()
        this.show = true
      });
    },
    updateSelectBar(){
      console.log (this.lessonSelected);
      var arrayIndex = Number(this.lessonSelected) -1;
      if (arrayIndex >= 0){
        this.selectedValue.label = this.supportedPassages[arrayIndex].label;
        this.selectedValue.value = this.supportedPassages[arrayIndex].value;
      }
      else{
        this.selectedValue.label = 'SELECT';
        this.selectedValue.value = 1;
      }
    },
    updatePassage() {
      console.log ()
      if (this.selectedValue === null){
        this.lesson = this.languageStore.getBookLesson;
      }
      else{
        this.lesson = this.selectedValue.value
        this.languageStore.updateBookLesson(this.selectedValue.value);

      }
      this.$emit('showPassage', this.lesson)
    },
  }
};
</script>
