<template>
  <q-page padding>
    <div>
      <div><HisBookPassageSelect :languageCodeHL= "computedLanguageSelected" @showPassage="handleShowPassage" /></div>

      <hr />
      <div v-html="this.text"></div>
    </div>
  </q-page>
</template>

<script>
import { useLanguageStore } from "stores/LanguageStore";
import HisBookPassageSelect from "components/HisBook/HisBookPassageSelect.vue";

export default {
  name: "HisBook",
  components: {
    HisBookPassageSelect,
  },
  data() {
    return {
      text: "",
      filename: "HisBook",
      session: 1,
    };
  },
  setup () {
    const languageStore = useLanguageStore();
    const firstLanguage = languageStore.getFirstLanguageCodeSelected
    return {
      languageStore,
      firstLanguage
    }
  },
  computed: {
    computedLanguageSelected() {
      return this.languageStore.getFirstLanguageCodeSelected;
    }
  },
  watch: {
    computedLanguageSelected: function (newLanguage, oldLanguage) {
      if (newLanguage !== oldLanguage) {
        return newLanguage;
      }
    }
  },
  methods: {
    handleShowPassage(response) {
      this.text =  response
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
