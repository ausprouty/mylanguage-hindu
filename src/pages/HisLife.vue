<template>
  <q-page padding>
    This is the video page
    <div> <JVideoSegmentSelect  @showVideo="handleShowVideo"/></div>
    <div v-if="this.videoSegment">
      <div> <JVideoPlayer :videoSegment="this.videoSegment" /></div>

      <div><JVideoQuestions />
      </div>
  </div><!-- content -->
  </q-page>
</template>

<script>
import JVideoPlayer from "src/components/JesusVideo/JVideoPlayer.vue";
import JVideoSegmentSelect from "src/components/JesusVideo/JVideoSegmentSelect.vue";
import JVideoQuestions from "src/components/JesusVideo/JVideoQuestions.vue";

export default {
   name: 'JesusVideo',
   components: {
    JVideoPlayer,
    JVideoSegmentSelect,
    JVideoQuestions
  },
  data() {
    return {
      videoSegment: 1,
    };
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
