<template>
  <q-page class="bg-white" padding>
    <p> {{ $t("index.para1") }}</p>
    <p> {{ $t("index.para2") }}</p>
    <table>
    <tr class = "full-width">
      <td class="side-by-side" @click="handleImageClick('/mountain')" clickable v-ripple >
        <img  class="menu_picture" src="menu/mountain.png">
      </td>
      <td class="side-by-side"  @click="handleImageClick('/birth')" clickable v-ripple>
        <img   class="menu_picture" src="menu/birth.png">
      </td>
    </tr>
    <tr class = "full-width">
      <td class="side-by-side" @click="handleImageClick('/life')" clickable v-ripple >
        <img  class="menu_picture" src="menu/life.png">
      </td>
      <td class="side-by-side" @click="handleImageClick('/teachings')" clickable v-ripple >
        <img  class="menu_picture" src="menu/teachings.png">
      </td>
    </tr>
    <tr class = "full-width">
      <td class="side-by-side" @click="handleImageClick('/book')" clickable v-ripple  >
        <img  class="menu_picture" src="menu/book.png">
      </td>
      <td class="side-by-side" @click="handleImageClick('/following')" clickable v-ripple >
        <img  class="menu_picture" src="menu/following.png">
      </td>
    </tr>
    <tr class = "full-width">
      <td class="side-by-side" @click="handleImageClick('/leadership')" clickable v-ripple >
        <img class="menu_picture" src="menu/leading.png">
      </td>
      <td class="side-by-side" @click="openExternalWebsite()" clickable v-ripple >
          <img class="menu_picture" src="menu/questions.png">
      </td>
    </tr>
  </table>
  <br>
  <br>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
export default{
  name: "IndexPage",
  data() {
    return {
      selected: null,
    };
  },
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore
    };
  },
  methods: {
    handleImageClick(to) {
      // Handle the click event, e.g., navigate to the specified route
      this.$router.push(to);
    },
    openExternalWebsite(){
      var url =
        "api/ask/" +
        this.languageStore.getLanguageSelected
      console.log(url);
      api.get(url).then((response) => {
        var externalURL = 'https://www.everyperson.com/contact.php';
        if (typeof response.data.contactPage != 'undefined' ){
          externalURL = response.data.contactPage
        }
        window.open(externalURL, '_blank');
      });
    },
  }

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
td.side-by-side{
  width:45%;
  padding: 0px;


}
tr.full-width{
  width:100%;
}

</style>
