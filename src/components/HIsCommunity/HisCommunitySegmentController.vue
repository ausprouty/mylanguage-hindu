<template>
  <div>
    <q-btn
      flat
      dense
      round
      icon="arrow_back"
      aria-label="Previous"
      @click="showPreviousSegment"
    />
    Previous Section Next Section

    <q-btn
      flat
      dense
      round
      icon="arrow_forward"
      aria-label="Next"
      @click="showNextSegment"
    />
  </div>
</template>

<script>
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: "JVideoSegmentController",
  props: {
    videoSegment: String,
    languageCodeHL: String,
  },

  data() {
    return {
      minSegment: 6101,
      maxSegment: 6161,
      nextSegment: 0,
      nextVideoSegment: "6101-0-0",
    };
  },
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  methods: {
    showNextSegment() {
      console.log(this.videoSegment);
      this.nextSegment = this.stripVideoSegment(this.videoSegment) + 1;
      this.nextVideoSegment = this.restoreVideoSegment(this.nextSegment);
      this.languageStore.updateJVideoSegment(this.nextVideoSegment);
      onsole.log(this.vnextVidoSegment);
      this.$emit("showVideo", this.nextVideoSegment);
    },
    showPreviousSegment() {
      this.nextSegment = this.stripVideoSegment(this.videoSegment) - 1;
      this.nextVideoSegment = this.restoreVideoSegment(this.nextSegment);
      this.languageStore.updateJVideoSegment(this.nextVideoSegment);
      this.$emit("showVideo", this.nextVideoSegment);
    },
    stripVideoSegment(segment) {
      return segment.replace("-0-0", "");
    },
    restoreVideoSegment(segment) {
      return segment + "-0-0";
    },
  },
};
</script>
