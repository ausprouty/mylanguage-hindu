<template>
  <q-page class="bg-white" padding>
    <p>{{ $t("index.para.1") }}</p>
    <p>{{ $t("index.para.2") }}</p>
    <table>
      <tr class="full-width">
        <td
          class="side-by-side"
          @click="handleImageClick('/deepavali')"
          clickable
          v-ripple
        >
          <img class="menu_picture" src="menu/deepavali.png" />
        </td>
        <td
          class="side-by-side"
          @click="handleImageClick('/karma')"
          clickable
          v-ripple
        >
          <img class="menu_picture" src="menu/karma.png" />
        </td>
      </tr>
      <tr class="full-width">
        <td
          class="side-by-side"
          @click="handleImageClick('/mountain')"
          clickable
          v-ripple
        >
          <img class="menu_picture" src="menu/mountain.png" />
        </td>
        <td
          class="side-by-side"
          @click="handleImageClick('/birth')"
          clickable
          v-ripple
        >
          <img class="menu_picture" src="menu/birth.png" />
        </td>
      </tr>
      <tr class="full-width">
        <td
          class="side-by-side"
          @click="handleImageClick('/jvideo')"
          clickable
          v-ripple
        >
          <img class="menu_picture" src="menu/life.png" />
        </td>
        <td
          class="side-by-side"
          @click="handleImageClick('/series/life')"
          clickable
          v-ripple
        >
          <img class="menu_picture" src="menu/teachings.png" />
        </td>
      </tr>
      <tr class="full-width">
        <td
          class="side-by-side"
          @click="handleImageClick('/series/dbs')"
          clickable
          v-ripple
        >
          <img class="menu_picture" src="menu/book.png" />
        </td>
        <td
          class="side-by-side"
          @click="handleImageClick('/following')"
          clickable
          v-ripple
        >
          <img class="menu_picture" src="menu/following.png" />
        </td>
      </tr>
      <tr class="full-width">
        <td
          class="side-by-side"
          @click="handleImageClick('/series/lead')"
          clickable
          v-ripple
        >
          <img class="menu_picture" src="menu/leading.png" />
        </td>
        <td
          class="side-by-side"
          @click="openExternalWebsite()"
          clickable
          v-ripple
        >
          <img class="menu_picture" src="menu/questions.png" />
        </td>
      </tr>
    </table>
    <br />
    <br />
  </q-page>
</template>

<script>
import { currentApi } from "boot/axios";
import { useLanguageStore } from "src/stores/LanguageStore";
export default {
  name: "IndexPage",
  data() {
    return {
      selected: null,
    };
  },
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  methods: {
    handleImageClick(to) {
      console.log(to);
      // Handle the click event, e.g., navigate to the specified route
      this.$router.push(to);
    },
    openExternalWebsite() {
      var url = "api/ask/" + this.languageStore.languageSelected;
      console.log(url);
      currentApi.get(url).then((response) => {
        var externalURL = "https://www.everyperson.com/contact.php";
        if (typeof response.data.contactPage != "undefined") {
          externalURL = response.data.contactPage;
        }
        window.open(externalURL, "_blank");
      });
    },
  },
};
</script>
<style scoped>
.menu_item {
  margin-left: 10px;
  margin-right: 10px;
  max-width: 200px;
  width: calc(100% - 20px);
  margin: 0 auto;
  background-color: #f0f0f0; /* Just for visibility */
  padding: 10px; /* Optional: Add padding for content within the element */
}
.menu_picture {
  width: calc(100% - 10px);
  margin: 0 auto;
  background-color: #eee; /* Just for visibility */
  padding: 10px; /* Optional: Add padding for content within the element */
}
td.side-by-side {
  width: 45%;
  padding: 0px;
}
tr.full-width {
  width: 100%;
}
</style>
