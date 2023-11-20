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
        <q-item to="/mountain" clickable v-ripple class="bg-color1">
          <q-item-section>Mountain of God</q-item-section>
          <q-item-section thumbnail>
            <img src="menu/mountain.jpg">
          </q-item-section>
      </q-item>
      <q-item to="/birth" clickable v-ripple class="bg-color2">
          <q-item-section>Birth of the Guru</q-item-section>
          <q-item-section thumbnail>
            <img src="menu/birth.jpg">
          </q-item-section>
      </q-item>
      <q-item to="/life" clickable v-ripple class="bg-color3">
          <q-item-section>His Life</q-item-section>
          <q-item-section thumbnail>
            <img src="menu/life.jpg">
          </q-item-section>
      </q-item>
      <q-item to="/teachings" clickable v-ripple class="bg-color4">
          <q-item-section>His Teachings</q-item-section>
          <q-item-section thumbnail>
            <img src="menu/teachings.jpg">
          </q-item-section>
      </q-item>
      <q-item to="/book" clickable v-ripple  class="bg-color5">
          <q-item-section>His Holy Book</q-item-section>
          <q-item-section thumbnail>
            <img src="menu/book.jpg">
          </q-item-section>
      </q-item>
      <q-item to="/following" clickable v-ripple class="bg-color6">
          <q-item-section>Following Him</q-item-section>
          <q-item-section thumbnail>
            <img src="menu/following.jpg">
          </q-item-section>
      </q-item>
      <q-item to="/leading" clickable v-ripple class="bg-color7">
          <q-item-section>Leading Others</q-item-section>
          <q-item-section thumbnail>
            <img src="menu/leading.jpg">
          </q-item-section>
      </q-item>
      <q-item to="/questions" clickable v-ripple class="bg-color8">
          <q-item-section>Ask His Followers</q-item-section>
          <q-item-section thumbnail>
            <img src="menu/questions.jpg">
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
