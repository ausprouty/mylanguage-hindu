<template>
  <q-page padding>
    <p>This video tells the life of the Lord Jesus.</p>
    <p>As you watch the video, ask yourself  "What is this guru like and is he worth following?"</p>
    <p>This video is available in many languages.  To change the language click the world globe above.</p>
    <div> <JVideoSegmentSelect :languageCodeHL= "computedLanguageSelected" @showVideo="handleNewVideoSegment"/></div>
    <div> <JVideoPlayer :videoSegment="videoSegment"  :languageCodeHL="computedLanguageSelected" /></div>
    <div><JVideoQuestions  :languageCodeHL= "computedLanguageSelected" /></div>
    <p>{{computedLanguageSelected }}</p>
 <!-- content -->
  </q-page>
</template>

<script>
import JVideoPlayer from "src/components/JesusVideo/JVideoPlayer.vue";
import JVideoSegmentSelect from "src/components/JesusVideo/JVideoSegmentSelect.vue";
import JVideoQuestions from "src/components/JesusVideo/JVideoQuestions.vue";
import { useLanguageStore } from "stores/LanguageStore";
import { computed } from 'vue'

export default {
   name: 'HisLife',
   components: {
    JVideoPlayer,
    JVideoSegmentSelect,
    JVideoQuestions
  },
  data() {
    return {
      videoSegment: '6101-0-0',
      languageSelected: this.languageStore.getFirstLanguageCodeSelected
    };
  },
  watch: {
    languageSelected: function (newLanguage, oldLanguage) {
      if (newLanguage !== oldLanguage) {
       alert ('You changed language');
      }
    },
  },
  setup () {
    const languageStore = useLanguageStore();
    const firstLanguage = languageStore.getFirstLanguageCodeSelected
    return {
      languageStore,
      firstLanguage
    }
  },
  computed: {
    computedLanguageSelected() {
      return this.languageStore.getFirstLanguageCodeSelected;
    }
  },
  watch: {
    computedLanguageSelected: function (newLanguage, oldLanguage) {
      if (newLanguage !== oldLanguage) {
        return newLanguage;
      }
    }
  },

  methods:{
    handleNewVideoSegment(response){
      this.videoSegment = response
    }
  }

}
</script>
<style>
.q-page{
  background-color: white;
}</style>
