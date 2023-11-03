<template>
  <div>
    <q-select
      filled
      v-model="segment"
      :options="segments"
      option-label="title"
      option-value="videoSegment"
      @update:model-value="updateSegment"
      label="Video Segment"
    />
  </div>
</template>

<script>
import { watch, ref } from "vue";
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: "JVideoSegmentSelect",
  props: {
    languageCodeHL: String,
  },
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  data() {
    return {
      ready: false,
      segment: null,
      segments: [],
      video: null,
    };
  },

  created() {
    this.getSegmentList();
    this.languageStore.updateJVideoSegment(this.segment);
  },
  methods: {
    getSegmentList() {
      var url = "api/jvideo/segments/" + this.languageCodeHL;
      console.log(url);
      api.get(url).then((response) => {
        this.segments = response.data;
      });
    },
    updateSegment() {
      this.languageStore.updateJVideoSegment(this.segment.videoSegment);
      this.$emit('showVideo',this.segment.videoSegment)
    },
  },
};
</script>
