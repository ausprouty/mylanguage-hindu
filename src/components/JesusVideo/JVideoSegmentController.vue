<template>
  <div class="q-pa-md q-gutter-md q-flex">
    <div  v-if="this.videoId > this.minVideoId"  class="q-gutter-md q-flex items-center inline">
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
    <div v-if="this.videoId < this.maxVideoId"  class="q-gutter-md q-flex items-center inline">
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
    videoId: String,
    languageCodeHL: String,
  },

  data() {
    return {
      minVideoId: 1,
      maxVideoId: 61,
      nextVideoId: 0,
      nextVideoSegment: '6101-0-0',
    };
  },
  computed: {
    currentSegment() {
      return this.languageStore.jVideoSegment;
    },
  },
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  methods: {
    showNextSegment() {
      this.nextId = this.videoId + 1;
      this.languageStore.updateJVideoSegment(this.nextVideoId);
      this.$emit("showVideo", this.nextVideoSegment);
    },
    showPreviousSegment() {
      this.nextId = this.videoId - 1;
      this.languageStore.updateJVideoSegment(this.nextVideoId);
      this.$emit("showVideo", this.nextVideoSegment);
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
