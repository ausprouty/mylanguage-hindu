<template>
  <q-page padding>
    <h2> {{ $t("book.title") }}</h2>
      <p>{{ $t("book.para1") }}</p>
      <p>{{ $t("book.para2") }}</p>
      <p>{{ $t("book.para3") }}</p>
    <div>
      <div>
        <HisBookPassageSelect
          @showPassage="handleShowTeaching"
        />
      </div>
      <div>
        <HisBookSegmentController
          @showTeaching="handleShowTeaching"
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
      languageStore.updateBookLesson(route.params.lessonLink);
     }
     if (route.params.languageCode !== ''){
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
    computedBookLesson(){
      return  this.languageStore.getBookLesson
    }
  },
  watch:{
    computedLanguage(newValue, oldValue){
      this.handleShowTeaching();
    },
    computedBookLesson(newValue, oldValue){
      this.handleShowTeaching();
    }
  },
  methods: {

    handleShowTeaching() {
      var lesson = this.languageStore.getBookLesson
      var language = this.languageStore.getLanguageCodeHLSelected;
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
