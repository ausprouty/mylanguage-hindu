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
      <q-col v-for="(item, index) in this.menuItems" :key="index" cols="6">
        <q-btn @click="handleImageClick(item.to)" flat>
          <q-img :src="item.imageSrc" style="max-width: 100%" />
        </q-btn>
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
      menuItems: [
        { index: 1, to: '/mountain', imageSrc: 'menu/mountain.png' },
        { index: 2, to: '/birth', imageSrc: 'menu/birth.png' },
        { index: 3, to: '/life', imageSrc: 'menu/life.png' },
        { index: 4,to: '/teachings', imageSrc: 'menu/teachings.png' },
        { index: 5,to: '/book', imageSrc: 'menu/book.png' },
        { index: 6, to: '/following', imageSrc: 'menu/following.png' },
        { index: 7, to: '/leadership', imageSrc: 'menu/leading.png' },
        { index: 8, to: '/questions', imageSrc: 'menu/questions.png' },
      ],
    };
  },
  methods: {
    handleImageClick(to) {
      this.$router.push(to);
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
  max-width: 200px;
  width: calc(100% - 0px);
  margin: 0 auto;
  background-color: #f0f0f0; /* Just for visibility */
  padding: 10px; /* Optional: Add padding for content within the element */
}
q-col.side-by-side{
  width:20px;
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
