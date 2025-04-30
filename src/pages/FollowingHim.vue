<template>
  <q-page padding>
    <h2>{{ $t("follow.title") }}</h2>
    <p>{{ $t("follow.para.1") }}</p>
    <p>{{ $t("follow.para.2") }}</p>
    <div>
      <FollowingHimSegmentSelect
        :languageCodeHL="computedLanguageCodeHL"
        @showVideo="handleNewVideoSegment"
      />
    </div>
    <div>
      <FollowingHimPlayer
        :videoSegment="videoSegment"
        :languageCodeHL="computedLanguageCodeHL"
      />
    </div>
    <div>
      <VideoQuestions />
    </div>
    <!-- content -->
  </q-page>
</template>

<script>
import FollowingHimPlayer from "src/components/FollowingHim/FollowingHimPlayer.vue";
import FollowingHimSegmentSelect from "src/components/FollowingHim/FollowingHimSegmentSelect.vue";
import VideoQuestions from "src/components/Video/VideoQuestions.vue";
import { useLanguageStore } from "src/stores/LanguageStore";
import { computed } from "vue";

export default {
  name: "FollowingHim",
  components: {
    VideoQuestions,
  },
  props: {
    lessonLink: Number,
  },
  components: {
    FollowingHimPlayer,
    FollowingHimSegmentSelect,
    VideoQuestions,
  },
  data() {
    return {
      videoSegment: "1-0-0",
      languageCodeJFSelected: this.languageStore.languageCodeJFSelected,
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
      this.languageStore.updateFollowingHimSegment(
        this.$route.params.lessonLink
      );
    }
    if (this.$route.params.languageCode !== "") {
      console.log("updated languagecode to: " + route.params.languageCode);
      this.languageStore.updateLanguageCodeHLSelected(
        route.params.languageCode
      );
    }
  },
  computed: {
    computedLanguageCodeHL() {
      return this.languageStore.languageCodeHLSelected;
    },
    computedLanguageCodeJF() {
      return this.languageStore.languageCodeJFSelected;
    },
  },
  watch: {
    computedLanguageCodeHL: function (newLanguage, oldLanguage) {
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
