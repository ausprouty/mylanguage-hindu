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
      lesson : {
        value: 1,
        label: 'SELECT'
      },
      lessons: [],
      show:false,
      session: 1
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
      if (typeof this.study.value === 'undefined'){
        this.session = this.languageStore.getCommunityLesson;
      }
      else{
        this.session = this.study.value
        this.languageStore.updateCommunityLesson(this.lesson.value);
      }
      var url =
        "api/dbs/view/" +
        this.session +
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

