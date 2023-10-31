<template>
  <div>
    <q-select
      filled
      v-model="study"
      :options="supportedPassages"
      option-label="title"
      option-value="lesson"
      @update:model-value="updatePassage"
      label="Bible Passage"
    />
  </div>
  {{ this.scope }}
</template>

<script>
import { watch, ref } from "vue";
import { api } from "boot/axios";
export default {
  name: "BiblePassageSelect",

  data() {
    return {
      study: 1,
      passages: [],
      supportedPassages: [],
      scope: null,
    };
  },

  mounted() {
    api.get("api/dbs/studies").then((response) => {
      this.passages = response.data;
      this.supportedPassages = this.passages;
      this.showPassages();
    });
  },

  methods: {
    showPassages() {
        this.showAllPassages();
      }
    },
    showAllPassages() {
      this.supportedPassages = this.passages;
      for (var i = 0; i < this.passages.length; i++) {
        var line = this.passages[i];
        if (line.lesson == this.$route.params.session) {
          this.study = line.title;
        }
      }
    },
    showNTPassages() {
      this.supportedPassages = [];
      this.study = null;
      for (var i = 0; i < this.passages.length; i++) {
        var line = this.passages[i];
        if (line.testament == "NT") {
          this.supportedPassages.push(line);
          if (line.lesson == this.$route.params.session) {
            this.study = line.title;
          }
        }
      }
    },
    updatePassage() {
      this.languageStore.updateDbsLesson(this.study.lesson);
    },
};
</script>
