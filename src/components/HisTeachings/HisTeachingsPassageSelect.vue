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
      lesson : {
        value: 1,
        label: 'SELECT'
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
      if (typeof this.lesson.value === 'undefined'){
        this.session = this.languageStore.getHisTeachingLesson;
      }
      else{
        this.session = this.lesson.value
        this.languageStore.updateHisTeachingLesson(this.lesson.value);
      }
      var url =
        "api/life_principles/view/" +
        this.session +
        "/" +
        this.languageCodeHL
      console.log (url)
      api.get(url).then((response) => {
        console.log(response);
        this.$emit('showTeaching', response.data)

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

