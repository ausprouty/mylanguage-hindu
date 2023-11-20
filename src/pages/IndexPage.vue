<template>
  <q-page class="bg-white" padding>
    <p>In order to make any real progress in our spiritual life we know we need a guru -- someone to show us the way, to challenge, correct, guide and help us.</p>
    <p> We would like to invite you to consider having Lord Jesus as your Guru</p>
      <p> Lord Jesus:</p>
      <ul>
        <li> Never told a lie</li>
        <li>Etc, etc.</li>
      </ul>
      <q-list bordered class ="list">
        <q-item to="/mountain" clickable v-ripple >
          <q-item-section class="menu_item">
            <img  class="menu_picture" src="menu/mountain.png">
          </q-item-section>
      </q-item>
      <q-item to="/birth" clickable v-ripple>

          <q-item-section class="menu_item">
            <img  class="menu_picture" src="menu/birth.png">
          </q-item-section>
      </q-item>
      <q-item to="/life" clickable v-ripple >

          <q-item-section class="menu_item">
            <img  class="menu_picture" src="menu/life.png">
          </q-item-section>
      </q-item>
      <q-item to="/teachings" clickable v-ripple >
          <q-item-section class="menu_item">
            <img  class="menu_picture" src="menu/teachings.png">
          </q-item-section>
      </q-item>
      <q-item to="/book" clickable v-ripple  >
          <q-item-section class="menu_item">
            <img  class="menu_picture" src="menu/book.png">
          </q-item-section>
      </q-item>
      <q-item to="/following" clickable v-ripple >
          <q-item-section class="menu_item">
            <img  class="menu_picture" src="menu/following.png">
          </q-item-section>
      </q-item>
      <q-item to="/leadership" clickable v-ripple >

          <q-item-section class="menu_item">
            <img class="menu_picture" src="menu/leading.png">
          </q-item-section>
      </q-item>
      <q-item to="/questions" clickable v-ripple class="bg-color8">
          <q-item-section>Ask His Followers</q-item-section>
          <q-item-section menu_item>
            <img class="menu_picture" src="menu/questions.png">
          </q-item-section>
      </q-item>

      </q-list>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      selected: null,
    };
  },
});
</script>
<style scoped>

.menu_item {
      margin-left: 10px;
      margin-right: 10px;
      max-width: 580px;
      width: calc(100% - 20px);
      margin: 0 auto;
      background-color: #f0f0f0; /* Just for visibility */
      padding: 10px; /* Optional: Add padding for content within the element */
    }
    .menu_picture {
      max-width: 580px;
      width: calc(100% - 0px);
      margin: 0 auto;
      background-color: #f0f0f0; /* Just for visibility */
      padding: 10px; /* Optional: Add padding for content within the element */
    }
.xmenu_item{
  width:90%;
  max-width: 580px;
}
.bg-color1{
  background-color:#FF9933 ;
}
.bg-color2{
  background-color: #4169E1 ;
}
.bg-color3{
  background-color:#228B22 ;
}
.bg-color4{
  background-color:#CD5C5C ;
}
.bg-color5{
  background-color:#DAA520 ;
}
.bg-color6{
  background-color:#40E0D0 ;
}
.bg-color7{
  background-color:#FFBF00 ;
}
.bg-color8{
  background-color:#808000 ;
}

.list{
  width:100%;
  max-width: 600px;
}
.q-item__section{
  font-size: 1.5em;
  font-weight: bold;
  color: white;
}
</style>
