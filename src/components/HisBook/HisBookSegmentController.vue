<template>
  <div class="q-pa-md q-gutter-md q-flex">
    <div v-if="this.currentSegment > this.minSegment" class="q-gutter-md q-flex items-center inline">
      <q-btn
        flat
        dense
        round
        icon="arrow_back"
        aria-label="Previous"
        @click="showPreviousSegment"
      />
      <span class="q-ml-md">Previous Passage</span>
    </div>
    <q-space class="inline"/>
    <div v-if="this.currentSegment < this.maxSegment" class="q-gutter-md q-flex items-center inline">
      <span class="q-mr-md">Next Passage</span>
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
  name: "HisBookSegmentController",
  props: {
    languageCodeHL: String,
  },

  data() {
    return {
      minSegment: 1,
      maxSegment: 25,
      nextSegment: 0,
    };
  },
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  computed: {
    currentSegment() {
      return this.languageStore.getBookLesson;
    },
  },
  methods: {
    showNextSegment() {
      console.log(this.currentSegment);
      this.nextSegment = Number(this.currentSegment) + 1
      this.languageStore.updateBookLesson(this.nextSegment);
      console.log(this.nextSegment);
      this.$emit('showTeaching', this.nextSegment)
    },
    showPreviousSegment() {
      console.log(this.currentSegment);
      this.nextSegment = Number(this.currentSegment) - 1
      this.languageStore.updateBookLesson(this.nextSegment);
      console.log(this.nextSegment);
      this.$emit('showTeaching', this.nextSegment)
    },
  },
};
</script>
<style >

.inline{
  display:inline-block;
}
.q-gutter-md,
.q-mr-md,
.q-ml-md{
  margin-top:10px;
  background-color:lightblue;
  margin-left:10px;
  margin-right:10px;
}
.q-gutter-y-md,.q-gutter-md {
    margin-top: 0px
}
.q-gutter-y-md>*,.q-gutter-md>* {
    margin-top: 0px;
}
</style>
