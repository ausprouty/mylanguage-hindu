<template>
  <div v-if ="show">
    <q-select
      filled
      v-model="lesson"
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
  name: "LeadershipPassageSelect",
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
        label: 'Select Value',
        value: 1
      },
      lessons: [],
      session: 1,
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
    this.languageStore.updateHisTeachingLesson(this.lesson);
    this.updateLesson();
  },
  methods: {
    getLessonList(languageCodeHL) {
      var url = "api/leadership/studies/" + languageCodeHL;
      console.log (url)
      api.get(url).then((response) => {
        var data = response.data
        this.lessons = data.map((item) => ({
          label: item.title,
          value: item.lesson,
        }));
        console.log (this.lessons)
        this.show = true
      });
    },
    updateLesson() {
      if (typeof this.lesson.value === 'undefined'){
        this.session = this.languageStore.getLeadershipLesson;
      }
      else{
        this.session = this.lesson.value
        this.languageStore.updateLeadershipLesson(this.lesson.value);
      }
      this.$emit('showTeaching', this.session)
    },
  }

};
</script>
<style scoped>

.q-item__label{
  color:black;
}
</style>

