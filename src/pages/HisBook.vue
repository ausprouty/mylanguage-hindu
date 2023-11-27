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
          @showPassage="handleShowPassage"
        />
      </div>
      <div>
        <HisBookSegmentController
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
import { useRoute } from 'vue-router'

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
    const route = useRoute()
    if (route.params.lessonLink !== ''){
      console.log ('updated leadershipLesson to: '  +  route.params.lessonLink)
      languageStore.updateBookLesson(route.params.lessonLink);
     }
     if (route.params.languageCode !== ''){
      console.log ('updated languagecode to: '  +  route.params.languageCode)
      languageStore.updateLanguageSelected(route.params.languageCode);
     }
    return {
      languageStore,
    };
  },
  created(){
    this.handleShowTeaching()
  },
  computed:{
    computedLanguage(){
      return this.languageStore.getLanguageSelected;
    },
    compuedTeachingLesson(){
      return  this.languageStore.getHisTeachingLesson
    }
  },
  watch:{
    computedLanguage(newValue, oldValue){
      this.handleShowTeaching();
    },
    computedTeachingLesson(newValue, oldValue){
      this.handleShowTeaching();
    }
  },
  methods: {

    handleShowPassage() {
      var lesson = this.languageStore.getHisTeachingLesson
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
