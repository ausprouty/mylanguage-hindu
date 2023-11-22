<template>
  <q-page class="bg-white" padding>
    <p>In order to make any real progress in our spiritual life we know we need a guru -- someone to show us the way, to challenge, correct, guide and help us.</p>
    <p> We would like to invite you to consider having Lord Jesus as your Guru</p>
      <p> Lord Jesus:</p>
      <ul>
        <li> Never told a lie</li>
        <li>Etc</li>
      </ul>
    <q-list bordered class="list">
      <q-row>
        <q-col v-for="(item, index) in menuItems" :key="index" cols="6">
          <q-item :to="item.to" clickable v-ripple>
            <q-item-section class="menu_item">
              <img class="menu_picture" :src="item.imageSrc">
            </q-item-section>
          </q-item>
        </q-col>
      </q-row>
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
      menuItems: [
        { to: '/mountain', imageSrc: 'menu/mountain.png' },
        { to: '/birth', imageSrc: 'menu/birth.png' },
        { to: '/life', imageSrc: 'menu/life.png' },
        { to: '/teachings', imageSrc: 'menu/teachings.png' },
        { to: '/book', imageSrc: 'menu/book.png' },
        { to: '/following', imageSrc: 'menu/following.png' },
        { to: '/leadership', imageSrc: 'menu/leading.png' },
        { to: '/questions', imageSrc: 'menu/questions.png' },
      ],
    };
  },
});
</script>
<style scoped>

.menu_item {
  margin-left: 10px;
  margin-right: 10px;
  max-width: 580px;
  width: calc(45% - 20px);
  margin: 0 auto;
  background-color: #f0f0f0; /* Just for visibility */
  padding: 10px; /* Optional: Add padding for content within the element */
}
.menu_picture {
  max-width: 580px;
  width: calc(45% - 0px);
  margin: 0 auto;
  background-color: #f0f0f0; /* Just for visibility */
  padding: 10px; /* Optional: Add padding for content within the element */
}
.xlist{
  width:100%;
  max-width: 600px;
}
.q-item__section{
  font-size: 1.5em;
  font-weight: bold;
  color: white;
}
</style>
