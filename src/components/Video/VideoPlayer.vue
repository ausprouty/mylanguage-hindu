<template>
  <div class="arc-cont" v-html="videoIframe"></div>
</template>

<script>
import { ref, computed, watch, toRefs } from "vue";

export default {
  name: "JVideoPlayer",
  props: {
    videoUrls: {
      type: Array,
      required: true,
      default: () => [],
    },
    lesson: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { videoUrls, lesson } = toRefs(props); // Ensure reactivity

    const videoIframe = ref(""); // Initialize as an empty string to avoid null issues
    const iframeStart = '<iframe id="jplayer" ';
    const iframeEnd =
      " allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>";

    // Compute the video URL based on lesson number
    watch(videoUrls, (newVal) => {
      console.log("videoUrls changed to:", newVal);
    });
    const videoUrl = computed(() => {
      // ✅ Make sure videoUrls is an array before calling .find()
      if (!Array.isArray(videoUrls.value)) {
        console.warn("videoUrls is not an array:", videoUrls.value);
        return "https://api.arclight.org/videoPlayerUrl?refId=1_529-jf6102-0-0&playerStyle=default";
      }

      const foundVideo = videoUrls.value.find((v) => v.index === lesson.value);
      console.log('Looking for lesson:', lesson.value);
      return foundVideo && foundVideo.url
        ? foundVideo.url
        : "https://api.arclight.org/videoPlayerUrl?refId=1_529-jf6102-0-0&playerStyle=default";
    });

    // Update the iframe content when lesson or video URL changes
    const updateVideoIframe = () => {
      if (videoUrl.value) {
        videoIframe.value = `${iframeStart}src="${videoUrl.value}"${iframeEnd}`;
      } else {
        videoIframe.value = ""; // Empty string instead of null to avoid issues
      }
      console.log("Updated iframe:", videoIframe.value);
    };

    // Watch for changes in lesson number and videoUrls and update the iframe
    watch([lesson, videoUrls], updateVideoIframe, { immediate: true });

    return {
      videoIframe,
    };
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
