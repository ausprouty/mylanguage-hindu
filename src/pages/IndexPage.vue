<template>
  <q-page class="bg-white" padding>
    <p>In order to make any real progress in our spiritual life we know we need a guru -- someone to show us the way, to challenge, correct, guide and help us.</p>
    <p> We would like to invite you to consider having Lord Jesus as your Guru</p>
    <p> Lord Jesus:</p>
    <ul>
      <li> Never told a Lie</li>
      <li>Etc</li>
    </ul>
  
    <q-row>
      <q-col class="side-by-side" to="/mountain" clickable v-ripple >
        <img  class="menu_picture" src="menu/mountain.png">
      </q-col>
      <q-col class="side-by-side" to="/birth" clickable v-ripple>
        <img  class="menu_picture" src="menu/birth.png">
       </q-col>
    </q-row>
    <q-row>
      <q-col class="side-by-side" to="/life" clickable v-ripple >
        <img  class="menu_picture" src="menu/life.png">
      </q-col>
      <q-col class="side-by-side" to="/teachings" clickable v-ripple >
        <img  class="menu_picture" src="menu/teachings.png">
      </q-col>
    </q-row>
    <q-row>
      <q-col class="side-by-side" to="/book" clickable v-ripple  >
        <img  class="menu_picture" src="menu/book.png">
      </q-col>
      <q-col class="side-by-side" to="/following" clickable v-ripple >
        <img  class="menu_picture" src="menu/following.png">
      </q-col>
    </q-row>
    <q-row>
      <q-col class="side-by-side" to="/leadership" clickable v-ripple >
        <img class="menu_picture" src="menu/leading.png">
      </q-col>
      <q-col class="side-by-side" to="/questions" clickable v-ripple >
          <img class="menu_picture" src="menu/questions.png">
      </q-col>
    </q-row>
  </q-page>
</template>

<script>
export default{
  name: "IndexPage",
  data() {
    return {
      selected: null,
    };
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
  max-width: 250px;
  width: calc(50% - 10px);
  margin: 0 auto;
  background-color: #f0f0f0; /* Just for visibility */
  padding: 10px; /* Optional: Add padding for content within the element */
}
q-col.side-by-side{
  width:45%;
  padding: 10px;

}

</style>
