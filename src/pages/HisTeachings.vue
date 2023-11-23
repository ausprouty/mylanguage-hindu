<template>
  <q-page padding>
    <div>
      <h2>His Teachings</h2>
      <p>
        These are some of the things that Lord Jesus and his early followers
        taught.
      </p>
      <p>
        Many people have seen their lives transformed as they asked Lord Jesus
        to give them the power to put these teachings into action
      </p>
      <div>
        <HisTeachingsPassageSelect
          :languageCodeHL="computedLanguageSelected"
          @showTeaching="handleShowTeaching"
        />
      </div>
      <div>
        <HisTeachingsSegmentController
          :languageCodeHL="computedLanguageSelected"
          @showTeaching="handleShowTeaching"
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
import HisTeachingsPassageSelect from "components/HisTeachings/HisTeachingsPassageSelect.vue";
import HisTeachingsSegmentController from "src/components/HisTeachings/HisTeachingsSegmentController.vue";

export default {
  name: "HisTeachings",
  components: {
    HisTeachingsPassageSelect,
    HisTeachingsSegmentController,
  },
  data() {
    return {
      text: "",
      filename: "LifePrinciples",
      session: 1,
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
    handleShowTeaching(lesson) {
      var url =
        "api/life_principles/view/" +
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
