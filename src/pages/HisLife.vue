<template>
  <q-page padding>
    <h2>His Life</h2>
    <p>
      As you watch the video, ask yourself "What is this guru like and is he
      worth following?"
    </p>
    <p>
      This video is available in many languages. To change the language click
      the world globe above.
    </p>
    <div>
      <JVideoSegmentSelect
        :languageCodeHL="computedLanguageCodeHLSelected"
        @showVideo="handleNewVideoSegment"
      />
    </div>
    <div>
      <JVideoSegmentController
        :videoSegment="computedVideoSegmentId"
        :languageCodeHL="computedLanguageCodeHLSelected"
        @showVideo="handleNewVideoSegment"
      />
    </div>
    <div>
      <JVideoPlayer :languageCodeHL="computedLanguageCodeHLSelected" />
    </div>

    <div><JVideoQuestions :languageCodeHL="computedLanguageCodeHLSelected" /></div>
    <!-- content -->
  </q-page>
</template>

<script>
import JVideoPlayer from "src/components/JesusVideo/JVideoPlayer.vue";
import JVideoSegmentSelect from "src/components/JesusVideo/JVideoSegmentSelect.vue";
import JVideoSegmentController from "src/components/JesusVideo/JVideoSegmentController.vue";
import JVideoQuestions from "src/components/JesusVideo/JVideoQuestions.vue";
import { useLanguageStore } from "stores/LanguageStore";
import { computed } from "vue";

export default {
  name: "HisLife",
  props: {
    lessonLink: Number,
    languageCode: String,
  },
  components: {
    JVideoPlayer,
    JVideoSegmentSelect,
    JVideoSegmentController,
    JVideoQuestions,
  },
  data() {
    return {
      languageSelected: this.languageStore.getLanguageSelected,
    };
  },
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  created() {
    if (this.$route.params.lessonLink !== "") {
      this.languageStore.updateJVideoSegmentId(this.$route.params.lessonLink);
    }
    if (this.$route.params.languageCode !== "") {
      this.languageStore.updateLanguageCodeHLSelected(
        this.$route.params.languageCode
      );
    }
  },
  computed: {
    computedLanguageCodeHLSelected() {
      return this.languageStore.getLanguageCodeHLSelected;
    },
    computedVideoSegmentId() {
      return this.languageStore.getJVideoSegmentId;
    },
  },
  watch: {
    computedVideoSegmantId: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        return newValue;
      }
    },
    computedLanguageSelected: function (newLanguage, oldLanguage) {
      if (newLanguage !== oldLanguage) {
        return newLanguage;
      }
    },
  },

  methods: {
    handleNewVideoSegment(response) {
      console.log ('handleNewVideoSegment')
      console.log (response)
      this.videoSegment = response;
      this.languageStore.updateJVideoSegmentId(response)
    },
  },
};
</script>
<style>
.q-page {
  background-color: white;
}
</style>
