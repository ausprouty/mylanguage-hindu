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
        :languageCodeHL="computedLanguageSelected"
        @showVideo="handleNewVideoSegment"
      />
    </div>
    <div>
      <FollowingHimPlayer
        :videoSegment="videoSegment"
        :languageCodeHL="computedLanguageSelected"
      />
    </div>
    <div>
      <FollowingHimQuestions :languageCodeHL="computedLanguageSelected" />
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
      languageSelected: this.languageStore.getLanguageSelected,
    };
  },
  setup() {
    const languageStore = useLanguageStore();
    const firstLanguage = languageStore.getLanguageSelected;
    return {
      languageStore,
      firstLanguage,
    };
  },
  created(){
     if (typeof this.$route.params.lessonLink !== 'undefined'){
      this.languageStore.updateFollowingHimSegment(this.$route.params.lessonLink);
     }
  },
  computed: {
    computedLanguageSelected() {
      return this.languageStore.getLanguageSelected;
    },
  },
  watch: {
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
