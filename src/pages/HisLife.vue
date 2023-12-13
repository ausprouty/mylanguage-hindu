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
        :languageCodeHL="computedLanguageSelected"
        @showVideo="handleNewVideoSegment"
      />
    </div>
    <div>
      <JVideoSegmentController
        :videoSegment="computedVideoSegmant"
        :languageCodeHL="computedLanguageSelected"
        @showVideo="handleNewVideoSegment"
      />
    </div>
    <div>
      <JVideoPlayer :languageCodeHL="computedLanguageSelected" />
    </div>

    <div><JVideoQuestions :languageCodeHL="computedLanguageSelected" /></div>
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
      this.languageStore.updateLanguageSelected(
        this.$route.params.languageCode
      );
    }
  },
  computed: {
    computedLanguageSelected() {
      return this.languageStore.getLanguageSelected;
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
      this.videoSegment = response;
    },
  },
};
</script>
<style>
.q-page {
  background-color: white;
}
</style>
