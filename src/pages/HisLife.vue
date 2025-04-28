<template>
  <q-page padding>
    <h2>{{ $t("jVideo.title") }}</h2>
    <p>{{ $t("jVideo.para.1") }}</p>
    <p>{{ $t("jVideo.para.2") }}</p>
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

    <div><VideoQuestions /></div>
    <!-- content -->
  </q-page>
</template>

<script>
import JVideoPlayer from "src/components/JesusVideo/JVideoPlayer.vue";
import JVideoSegmentSelect from "src/components/JesusVideo/JVideoSegmentSelect.vue";
import JVideoSegmentController from "src/components/JesusVideo/JVideoSegmentController.vue";
import VideoQuestions from "src/components/Video/VideoQuestions.vue";
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
    VideoQuestions,
  },
  data() {
    return {
      languageSelected: this.languageStore.languageSelected,
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
      this.languageStore.updatefollowingHimSegment(
        this.$route.params.lessonLink
      );
    }
    if (this.$route.params.languageCode !== "") {
      this.languageStore.updateLanguageCodeHLSelected(
        this.$route.params.languageCode
      );
    }
  },
  computed: {
    computedLanguageCodeHLSelected() {
      return this.languageStore.languageCodeHLSelected;
    },
    computedVideoSegmentId() {
      return this.languageStore.getfollowingHimSegment;
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
      console.log("handleNewVideoSegment");
      console.log(response);
      this.videoSegment = response;
      this.languageStore.updatefollowingHimSegment(response);
    },
  },
};
</script>
<style>
.q-page {
  background-color: white;
}
</style>
