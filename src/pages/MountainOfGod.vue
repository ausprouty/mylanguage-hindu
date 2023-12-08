<template>
  <q-page>
    <h2>The Mountain of God</h2>
    <p>You may have heard the story of the Mountain of God where people say there are many paths to the top of the mountain.</p>
    <p>What do mountain climbers think of that story?  Watch this vido and find out</p>

    <div>
      <div style="padding:75% 0 0 0;position:relative;">
        <iframe src="https://player.vimeo.com/video/885086455?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="MtOfGod"></iframe></div>

    </div>
    <div   class="q-gutter-md q-flex items-center inline align-right" @click="showNextSegment">
      <span class="q-mr-md">Next Video</span>
      <q-btn
        flat
        dense
        round
        icon="arrow_forward"
        aria-label="Next"

      />
    </div>
  </q-page>

</template>

<script>
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: 'MountainOfGod',
  head() {
    return {
      script: [
        {
          src: 'https://player.vimeo.com/api/player.js',
        },
      ],
    };
  },
  methods: {
    showNextSegment(){
      this.$router.push('/birth');
    },
  }
}
</script>

<style>
/* Add your custom styles here */
</style>
