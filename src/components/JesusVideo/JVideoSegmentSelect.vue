<template>
  <div>
    <div >
      <q-select
        filled
        v-model="selectedValue"
        :options="segments"
        option-label="title"
        option-value="id"
        @update:model-value="updateLesson"
        label="Video Segment"
        class="select"
      />
  </div>
</div>
</template>

<script>
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
      selectedValue : {
        id: 1,
        title: 'SELECT'
      },
      segments: [],
      video: null,
    };
  },
  watch: {
    languageCodeHL: function (newLanguage, oldLanguage) {
      if (newLanguage !== oldLanguage) {
        this.getSegmentList();
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
    languageCodeHL() {
      return this.languageStore.getLangaugeCodeHLSelected;
    },
    languageCodeJF() {
      return this.languageStore.getLangaugeCodeJFSelected;
    },
  },
  created() {
    this.getSegmentList( this.languageCodeHL);
    this.selectedValue.videoSegment = this.currentSegment
    this.updateLesson();
  },
  methods: {
    getSegmentList(languageCodeHL) {
      var url = "api/jvideo/segments/" + languageCodeHL + '/' + this.languageCodeJF;
      console.log(url);
      api.get(url).then((response) => {
        console.log (response.data)
        this.segments = response.data;
        this.languageStore.updateJVideoSegments(this.languageCodeHL, this.languageCodeJF, this.segments);
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
