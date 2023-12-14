<template>
  <q-page padding>
    <h2>Following Him</h2>
    <p>What does it mean to follow the Lord Jesus?</p>
    <p>
      This video is available in many languages. To change the language click
      the world globe above.
    </p>
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
      <FollowingHimQuestions :languageCodeHL="computedLanguageCodeHL" />
    </div>
    <!-- content -->
  </q-page>
</template>

<script>
import FollowingHimPlayer from "src/components/FollowingHim/FollowingHimPlayer.vue";
import FollowingHimSegmentSelect from "src/components/FollowingHim/FollowingHimSegmentSelect.vue";
import FollowingHimQuestions from "src/components/FollowingHim/FollowingHimQuestions.vue";
import { useLanguageStore } from "stores/LanguageStore";
import { computed } from "vue";

export default {
  name: "FollowingHim",
  props:{
    lessonLink : Number
  },
  components: {
    FollowingHimPlayer,
    FollowingHimSegmentSelect,
    FollowingHimQuestions,
  },
  data() {
    return {
      videoSegment: "1-0-0",
      languageCodeJFSelected: this.languageStore.getLanguageCodeJFSelected,
    };
  },
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  created(){
     if (this.$route.params.lessonLink !== ''){
      this.languageStore.updateFollowingHimSegment(this.$route.params.lessonLink);
     }
  },
  computed: {
    computedLanguageCodeHL() {
      return this.languageStore.getLanguageCodeHLSelected;
    },
    computedLanguageCodeJF() {
      return this.languageStore.getLanguageCodeJFSelected;
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
