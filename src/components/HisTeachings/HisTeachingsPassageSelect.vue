<template>
  <div>
    <q-select
      filled
      v-model="lesson"
      :options="lessons"
      option-label="title"
      option-value="lesson"
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
      lesson : null,
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
    this.getLessonList(this.languageCodeHL);
    this.languageStore.updateHisTeachingLesson(this.lesson);
  },
  methods: {
    getLessonList(languageCodeHL) {
      var url = "api/life_principles/studies/" + languageCodeHL;
      api.get(url).then((response) => {
        this.lessons = response.data;
        console.log (this.lessons)
      });
    },
    updateLesson() {
      this.languageStore.updateHisTeachingLesson(this.lesson);
      this.$emit('showTeaching', this.lesson)
    },
  },
};
</script>
