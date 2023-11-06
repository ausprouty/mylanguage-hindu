<template>
  <div>
    <q-select
      filled
      v-model="lesson"
      :options="lessons"
      option-label="title"
      option-value="lesson"
      @update:model-value="updatePassage"
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
      lesson : 1,
      lessonss: [],
    };
  },
  watch: {
    languageCodeHL: function (newLanguage, oldLanguage) {
      if (newLanguage !== oldLanguage) {
        this.getPassageList(newLanguage);
      }
    }
  },
  created() {
    this.getPassageList(this.languageCodeHL);
    onsole.log(this.languageCodeHL);
    this.languageStore.updateHisTeachingLesson(this.segment);
  },
  methods: {
    getPassageList(languageCodeHL) {
      var url = "api/life/studies/" + languageCodeHL;
      console.log(url);
      api.get(url).then((response) => {
        this.segments = response.data;
      });
    },
    updateSegment() {
      this.languageStore.updateHisTeachingLesson(this.segment.videoSegment);
      this.$emit('showTeaching',this.lesson)
    },
  },
};
