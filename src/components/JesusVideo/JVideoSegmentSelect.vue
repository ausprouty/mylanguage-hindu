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
  <div v-if="this.ready">
    <q-btn push @click="showVideo" color="primary" label="Show Video" />
  </div>
</template>

<script>
import { watch, ref } from "vue";
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: "JVideoSegmentSelect",
  setup() {
    const languageStore = useLanguageStore();

    return {
      languageStore,
    };
  },
  data() {
    return {
      ready:false,
      segment: null,
      segments: [],
      video: null,
      languageCodeHL: 'frn00'
    };
  },
  created() {
    this.getSegmentList()
    this.languageStore.updateJVideoSegment(this.segment);
  },
  methods: {
    getSegmentList() {
      var url = 'api/jvideo/segments/'+ this.languageCodeHL
     // var url = 'api/jvideo/segments/eng00/aln00';
      console.log (url)
      api.get(url).then((response) => {
        this.segments = response.data;
      });
    },
    updateSegment() {
      this.ready = true;
      this.languageStore.updateJVideoSegment(this.segment.videoSegment);
    },
    showVideo(){
      this.$emit("showVideo", this.segment.videoSegment);
    }

  },
};
</script>
