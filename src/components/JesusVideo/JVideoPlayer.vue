<template>
  <div class="arc-cont" v-html="this.videoIframe"></div>
</template>

<script>
import { api } from "boot/axios";

export default {
  name: "JVideoPlayer",
  props: {
    videoSegment: String,
    languageCodeHL: String,
  },
  data() {
    return {
      show1: false,
      iframeStart:
        '<iframe src="https://api.arclight.org/videoPlayerUrl?refId=',
      iframeEnd:
        '&playerStyle=default" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>',
      videoIframe: null,
    };
  },

  created() {
    this.updateVideoIframe(this.languageCodeHL, this.videoSegment)
  },
  watch: {
    languageCodeHL: function (newLanguage, oldLanguage) {
      if (newLanguage !== oldLanguage) {
        this.updateVideoIframe(newLanguage, this.videoSegment);
      }
    },
    videoSegment: function (newVideoSegment, oldVideoSegment) {
      if (newVideoSegment !== oldVideoSegment) {
        this.updateVideoIframe(this.languageCodeHL, newVideoSegment);
      }
    },
  },
  methods: {
    updateVideoIframe(languageCodeHL, videoSegment) {
      var url = "api/video/code/JESUS/" + languageCodeHL;
      api.get(url).then((response) => {
        var video1 = response.data.replace("-0-0", videoSegment);
        this.videoIframe = this.iframeStart + video1 + this.iframeEnd;
      });
    },
  },
};
</script>
<style>
.arc-cont {
  position: relative;
  display: block;
  margin: 10px auto;
  width: 100%;
}
.arc-cont:after {
  padding-top: 59%;
  display: block;
  content: "";
}
.arc-cont > iframe {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 98%;
  height: 98%;
  border: 0;
}
</style>
