<template>
   <div>
    <q-select
      filled
      v-model="selectedValue"
      :options="lessons"
      option-label="label"
      option-value="value"
      @update:model-value="updateLesson"
      label="Teachings"
    />
  </div>
</template>

<script>
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: "HisTeachingsPassageSelect",
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
      selectedValue : {
        value: 1,
        label: 'SELECT'
      },
      lessons: [],

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
    this.updateLesson();
    this.getLessonList(this.languageCodeHL);

  },
  methods: {
    getLessonList(languageCodeHL) {
      var url = "api/life_principles/studies/" + languageCodeHL;
      console.log (url)
      api.get(url).then((response) => {
        var data = response.data
        this.lessons = data.map((item) => ({
          label: item.title,
          value: item.lesson,
        }));
        this.show = true
      });
    },

    updateLesson() {
      this.languageStore.updateHisTeachingLesson(this.selectedValue.value);
      this.$emit('showTeaching', this.selectedValue.value)
    },
    updateSelectBar(){
      console.log (this.lessonSelected);
      var arrayIndex = Number(this.selectedValue.value) -1;
      if (arrayIndex >= 0){
        this.selectedValue.label = this.lessons[arrayIndex].label;
        this.selectedValue.value = this.lessons[arrayIndex].value;
      }
      else{
        this.selectedValue.label = 'SELECT';
        this.selectedValue.value = 1;
      }
    },
  }

};
</script>
<style scoped>

.q-item__label{
  color:black;
}
</style>

