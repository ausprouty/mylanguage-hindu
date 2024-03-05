<template>
  <q-page>
    <div>
      <h2> {{ $t("birth.title") }}</h2>
      <p>{{ $t("birth.para1") }}</p>
      <p>{{ $t("birth.para2") }}</p>
    </div>
    <div style="padding: 75% 0 0 0; position: relative">
      <iframe
        src="https://player.vimeo.com/video/886357510?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        title="The Birth of Lord Jesus"
      ></iframe>
    </div>
    <div
      class="q-gutter-md q-flex items-center inline align-right"
      @click="showNextSegment"
    >
      <span class="q-mr-md">{{ $t("menu.next") }}</span>
      <q-btn flat dense round icon="arrow_forward" aria-label="Next" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "BirthOfGuru",
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
    showNextSegment() {
      this.$router.push("/life");
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
