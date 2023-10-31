<template>
  <div v-if="this.ready">
    <q-btn push @click="createStudy" color="primary" label="Create Study" />
  </div>
</template>

<script>
import { api } from "boot/axios";

export default {
  name: "CreateStudyButton",

  data() {
    return {
      language: 'eng00',
      dbsLesson: 1,
      ready: true,
    };
  },

  methods: {

    createStudy() {
      var url =
        "api/dbs/view/" +
        this.languageStore.dbsLesson +
        "/" +
        this.languageStore.language1.languageCodeHL +
      api.get(url).then((response) => {
        console.log("I am emitting");
        this.$emit("displayDbsText", response.data);
      });
    },
  },
};
</script>
