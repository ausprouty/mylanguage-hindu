<template>
  <div v-if ="show">
    <q-select
      filled
      v-model="lesson"
      :options="lessons"
      option-label="label"
      option-value="value"
      @update:model-value="updateLesson"
      label="Communitys"
    />
  </div>
</template>

<script>
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: "CommunitysPassageSelect",
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
    this.getLessonList(this.languageCodeHL);
    this.languageStore.updateLesson(this.lesson);
    this.updateLesson();
  },
  methods: {
    getLessonList(languageCodeHL) {
      var url = "api/dbs/studies/" + languageCodeHL;
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
      this.languageStore.updateCommunityLesson(this.lesson.value);
      var url =
        "api/dbs/view/" +
        this.lesson.value +
        "/" +
        this.languageCodeHL
      console.log (url)
      api.get(url).then((response) => {
        console.log(response);
        this.$emit('showLesson', response.data)

      });
    },
  }

};
</script>
<style scoped>

.q-item__label{
  color:black;
}
</style>

