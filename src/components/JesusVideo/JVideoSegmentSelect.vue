<template>
  <div>
    <div >
      <q-select
        filled
        v-model="selectedValue"
        :options="segments"
        option-label="title"
        option-value="videoSegment"
        @update:model-value="updateLesson"
        label="Video Segment"
        color="white"
      bg-color="blue-3"
      />
  </div>
</div>
</template>

<script>
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
      selectedValue : {
        videoSegment: '6101-0-0',
        title: 'SELECT'
      },
      segments: [],
      video: null,
    };
  },
  watch: {
    languageCodeHL: function (newLanguage, oldLanguage) {
      if (newLanguage !== oldLanguage) {
        this.getSegmentList(newLanguage);
      }
    },
    currentSegment: function (newLesson, oldLesson) {
      if (newLesson !== oldLesson) {
        this.updateSelectBar(newLesson);

      }
    }
  },
  computed: {
    currentSegment() {
      return this.languageStore.getJVideoSegment;
    },
  },
  created() {
    this.getSegmentList( this.languageCodeHL);
    this.selectedValue.videoSegment = this.currentSegment
    this.updateLesson();
  },
  methods: {
    getSegmentList(languageCodeHL) {
      var url = "api/jvideo/segments/" + languageCodeHL;
      console.log(url);
      api.get(url).then((response) => {
        this.segments = response.data;
        this.updateSelectBar(this.currentSegment);
      });
    },
    updateLesson() {
      this.languageStore.updateJVideoSegment(this.selectedValue.videoSegment);
      this.$emit('showVideo',this.selectedValue.videoSegment)
    },
    updateSelectBar(currentSegment){
      this.selectedValue = this.segments[0]
      for (var i = 0; i< this.segments.length; i++){
        if (this.segments[i].videoSegment == currentSegment){
          this.selectedValue = this.segments[i];
        }
      }
    },
  },
};
</script>
<style>

.q-item__label{
  color:black;
}
</style>
