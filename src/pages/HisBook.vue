<template>
  <q-page padding>
    <h2>His Holy Book</h2>
    <p>His Holy Book starts with the time before there were any people.</p>
    <p>
      It then tells the story of how the first two people interacted with God.
    </p>
    <p>Read how God prepared people for the arrival of Lord Jesus.</p>
    <div>
      <div>
        <HisBookPassageSelect
          :languageCodeHL="computedLanguageSelected"
          @showPassage="handleShowPassage"
        />
      </div>
      <div>
        <HisBookSegmentController
          :languageCodeHL="computedLanguageSelected"
          @showTeaching="handleShowPassage"
        />
      </div>
      <hr />
      <div v-html="this.text"></div>
    </div>
  </q-page>
</template>

<script>
import { useLanguageStore } from "stores/LanguageStore";
import { api } from "boot/axios";
import HisBookPassageSelect from "components/HisBook/HisBookPassageSelect.vue";
import HisBookSegmentController from "src/components/HisBook/HisBookSegmentController.vue";

export default {
  name: "HisBook",
  props:{
    lessonLink : Number,
    languageCode: String
  },
  components: {
    HisBookPassageSelect,
    HisBookSegmentController,
  },
  data() {
    return {
      text: "",
    };
  },
  setup() {
    const languageStore = useLanguageStore();
    const languageSelected= languageStore.getLanguageSelected;
    return {
      languageStore,
      languageSelected,
    };
  },
  created(){
     if (this.$route.params.lessonLink !== ''){
      this.languageStore.updateBookLesson(this.$route.params.lessonLink);
     }
     if (this.$route.params.languageCode !== ''){
      this.languageStore.updateLanguageSelected(this.$route.params.languageCode);
     }
  },
  computed: {
    computedLanguageSelected() {
      return this.languageStore.getLanguageSelected;
    },
    computedLessonSelected() {
      console.log (this.languageStore.getBookLesson);
      return this.languageStore.getBookLesson;
    },
  },
  watch: {
    computedLanguageSelected: function (newLanguage, oldLanguage) {
      if (newLanguage !== oldLanguage) {
        return newLanguage;
      }
    },
    computedLessonSelected: function (newSession, oldSession) {
      if (newSession !== oldSession) {
        console.log (newSession);
        return newSession;
      }
    },
  },
  methods: {

    handleShowPassage(lesson) {
      var language = this.languageStore.getLanguageSelected;
      var url =
        "api/dbs/view/" +
        lesson +
        "/" +
        language;
      console.log(url);
      api.get(url).then((response) => {
        this.text = response.data;
      });
    },
  },
};
</script>

<style>

</style>
