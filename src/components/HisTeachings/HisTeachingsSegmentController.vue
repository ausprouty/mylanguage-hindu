<template>
  <div class="q-pa-md q-gutter-md q-flex">
    <div  v-if="this.currentSegment > this.minSegment" class="q-gutter-md q-flex items-center inline"  @click="showPreviousSegment">
      <q-btn
        flat
        dense
        round
        icon="arrow_back"
        aria-label="Previous"
      
      />
      <span class="q-ml-md">Previous</span>
    </div>

    <div v-if="this.currentSegment < this.maxSegment"  class="q-gutter-md q-flex items-center inline align-right" @click="showNextSegment">
      <span class="q-mr-md">Next</span>
      <q-btn
        flat
        dense
        round
        icon="arrow_forward"
        aria-label="Next"

      />
    </div>
  </div>
</template>

<script>
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: "HisTeachingsSegmentController",

  data() {
    return {
      minSegment: 1,
      maxSegment: 23,
      nextSegment: 1,

    };
  },
  computed: {
    currentSegment() {
      return this.languageStore.getHisTeachingLesson;
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
      this.currentSegment = this.languageStore.getHisTeachingLesson;
      this.nextSegment = Number(this.currentSegment) + 1
      this.languageStore.updateHisTeachingLesson(this.nextSegment);
      this.$emit('showTeaching', this.nextSegment)
    },
    showPreviousSegment() {
      this.currentSegment = this.languageStore.getHisTeachingLesson;
      this.nextSegment = Number(this.currentSegment) - 1
      this.languageStore.updateHisTeachingLesson(this.nextSegment);
      this.$emit('showTeaching', this.nextSegment)
    },
  },
};
</script>
<style scoped>
.align-right{
  text-align: right;
}

.inline{
  display:inline-block;
}
div.inline{
  width:50%;
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
