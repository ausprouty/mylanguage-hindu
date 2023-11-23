<template>
  <q-page>
    <h2>Birth of the Guru</h2>
    <div>
      <p>A group of astrologers saw a strange new star about 2,000 years ago that led them to believe that a new king had been born in Israel.  So they started on a long trip to visit this king, show their respect and give him gifts.</p>

      <p>Watch this video to see what they discovered. </p>
    </div>
    <div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/886357510?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="The Birth of Lord Jesus"></iframe></div>

    <script src="https://player.vimeo.com/api/player.js"></script>
    <q-btn
        flat
        dense
        round
        icon="arrow_forward"
        aria-label="Next Video"
        @click="showNextSegment"
      />
  </q-page>
</template>

<script>
export default {
  name: 'BirthOfGuru',
  methods: {
    showNextSegment(){
      this.$router.push('/life');
    },
  }
}
</script>

<style>
/* Add your custom styles here */
</style>
