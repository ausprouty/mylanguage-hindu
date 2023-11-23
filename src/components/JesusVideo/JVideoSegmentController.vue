<template>
  <div class="q-pa-md q-gutter-md q-flex">
    <div class="q-gutter-md q-flex items-center inline">
      <q-btn
        flat
        dense
        round
        icon="arrow_back"
        aria-label="Previous"
        @click="showPreviousSegment"
      />
      <span class="q-ml-md">Previous</span>
    </div>
    <q-space class="inline"/>
    <div class="q-gutter-md q-flex items-center inline">
      <span class="q-mr-md">Next</span>
      <q-btn
        flat
        dense
        round
        icon="arrow_forward"
        aria-label="Next"
        @click="showNextSegment"
      />
    </div>
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
      this.nextSegment = Number(this.stripVideoSegment(this.videoSegment)) + 1;
      this.nextVideoSegment = this.restoreVideoSegment(this.nextSegment);
      this.languageStore.updateJVideoSegment(this.nextVideoSegment);
      console.log(this.nextVideoSegment);
      this.$emit("showVideo", this.nextVideoSegment);
    },
    showPreviousSegment() {
      this.nextSegment = Number(this.stripVideoSegment(this.videoSegment)) - 1;
      this.nextVideoSegment = this.restoreVideoSegment(this.nextSegment);
      this.languageStore.updateJVideoSegment(this.nextVideoSegment);
      this.$emit("showVideo", this.nextVideoSegment);
    },
    stripVideoSegment(segment) {
      var strip = parseInt(segment, 10);
      console.log(strip);
      return strip;
    },
    restoreVideoSegment(segment) {
      return segment + "-0-0";
    },
  },
};
</script>
<style scoped>

.inline{
  display:inline-block;
}
.q-gutter-md,
.q-mr-md,
.q-ml-md{
  margin-top:0px;
}
.q-gutter-y-md,.q-gutter-md {
    margin-top: 0px
}
.q-gutter-y-md>*,.q-gutter-md>* {
    margin-top: 0px;
}
</style>
