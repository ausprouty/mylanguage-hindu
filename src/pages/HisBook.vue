<template>
  <q-page padding>
    <h2>His Holy Book</h2>
    <p>His Holy Book starts with the time before there were any people.</p>
    <p>
      It then tells the story of how the first two people interacted with God.
    </p>
    <p>Read how God prepared people for the arrival of Lord Jesus.</p>
    <div>
      <div>
        <HisBookPassageSelect
          :languageCodeHL="computedLanguageSelected"
          :lessonSelected="computedLessonSelected"
          @showPassage="handleShowPassage"
        />
      </div>
      <div>
        <HisBookSegmentController
          :languageCodeHL="computedLanguageSelected"
          :lessonSelected="computedLessonSelected"
          @showTeaching="handleShowPassage"
        />
      </div>
      <hr />
      <div v-html="this.text"></div>
    </div>
  </q-page>
</template>

<script>
import { useLanguageStore } from "stores/LanguageStore";
import { api } from "boot/axios";
import HisBookPassageSelect from "components/HisBook/HisBookPassageSelect.vue";
import HisBookSegmentController from "src/components/HisBook/HisBookSegmentController.vue";

export default {
  name: "HisBook",
  components: {
    HisBookPassageSelect,
    HisBookSegmentController,
  },
  data() {
    return {
      text: "",
    };
  },
  setup() {
    const languageStore = useLanguageStore();
    const languageSelected= languageStore.getLanguageSelected;
    return {
      languageStore,
      languageSelected,
    };
  },
  computed: {
    computedLanguageSelected() {
      return this.languageStore.getLanguageSelected;
    },
    computedLessonSelected() {
      console.log (this.languageStore.getBookLesson);
      return this.languageStore.getBookLesson;
    },
  },
  watch: {
    computedLanguageSelected: function (newLanguage, oldLanguage) {
      if (newLanguage !== oldLanguage) {
        return newLanguage;
      }
    },
    computedLessonSelected: function (newSession, oldSession) {
      if (newSession !== oldSession) {
        console.log (this.newSession);
        return newSession;
      }
    },
  },

  methods: {
    handleShowPassage(lesson) {
      var url =
        "api/dbs/view/" +
        lesson +
        "/" +
        this.computedLanguageSelected;
      console.log(url);
      api.get(url).then((response) => {
        this.text = response.data;
      });
    },
  },
};
</script>

<style>
div.dbs {
  background-color: white;
  max-width: 800px;
  margin: auto;
  background-color: white;
  padding: 10px;
}
table {
  width: 100%;
  max-width: 800px;
}
td {
  width: 50%;
  vertical-align: top;
  padding: 10px;
}
li {
  padding-top: 10px;
}

title.dbs {
  font-size: 1.5em;
  text-align: center;
}
h1.dbs {
  font-size: 2em;
}
h2.dbs {
  margin-block-end: 0em;
  font-size: 1.5em;
  color: green;
}
h3.dbs {
  margin-block-end: 0.3em;
  font-size: 1.17em;
}
h4.dbs {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 1em;
}
table.dbs {
  border-collapse: collapse;
  border: none;
}
td.dbs,
th.dbs {
  border: none;
}
td.rtl {
  direction: rtl;
}
.ltr.dbs.link {
  text-align: center;
}
.languages {
  text-align: center;
}
.title {
  text-align: center;
}
.biblereference {
  font-weight: bold;
  color: green;
}
.bible-container {
  display: flex;
  padding: 10px;
}
.bible-text {
  flex: 1;
}
.bible-text:first-child {
  margin-right: 20px;
}
</style>
