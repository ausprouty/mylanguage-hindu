<template>
  <q-page padding>
    <p>This video tells the life of the Lord Jesus.</p>
    <p>As you watch the video, ask yourself  "What is this guru like and is he worth following?"</p>
    <p>This video is available in many languages.  To change the language click the world globe above.</p>
    <div> <JVideoSegmentSelect  @showVideo="handleShowVideo"/></div>
    <div v-if="this.videoSegment">
      <div> <JVideoPlayer :videoSegment="this.videoSegment"  :languageCodeHL="this.languageCodeHL" /></div>

      <div><JVideoQuestions  :languageCodeHL= "this.languageCodeHL" />
      </div>
  </div><!-- content -->
  </q-page>
</template>

<script>
import JVideoPlayer from "src/components/JesusVideo/JVideoPlayer.vue";
import JVideoSegmentSelect from "src/components/JesusVideo/JVideoSegmentSelect.vue";
import JVideoQuestions from "src/components/JesusVideo/JVideoQuestions.vue";
import { useLanguageStore } from "stores/LanguageStore";

export default {
   name: 'JesusVideo',
   components: {
    JVideoPlayer,
    JVideoSegmentSelect,
    JVideoQuestions
  },
  data() {
    return {
      videoSegment: '6101-0-0',
    };
  },
  setup () {
    const languageStore = useLanguageStore();
    const firstLanguage = this.languageStore.getFirstLanguageCodeSelected
    return {
      languageStore,
      firstLanguage
    }
  },
  computed:{
    languageCodeHL:firstLanguage
  },
  methods:{
    handleShowVideo(response){
      console.log ('handle showVideo')
      console.log (response)
      this.videoSegment = response


    }
  }

}
</script>
<style>
.q-page{
  background-color: white;
}</style>
